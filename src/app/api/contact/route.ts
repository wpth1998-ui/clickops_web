import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import {
  CONTACT_TO_EMAIL,
  formatContactEmailHtml,
  formatContactEmailText,
  validateContactPayload,
} from '@/lib/contact';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = validateContactPayload(json);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.message }, { status: 400 });
  }

  const { data } = parsed;
  const to = process.env.CONTACT_TO_EMAIL?.trim() || CONTACT_TO_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || 'ClickOps Website <onboarding@resend.dev>';

  if (!resend) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json(
      {
        error:
          'Contact form is not configured yet. Please set RESEND_API_KEY on the server.',
      },
      { status: 503 }
    );
  }

  const subject = `ClickOps inquiry — ${data.name}${data.company ? ` (${data.company})` : ''}`;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    text: formatContactEmailText(data),
    html: formatContactEmailHtml(data),
  });

  if (error) {
    console.error('[contact] Resend error:', error);
    return NextResponse.json(
      { error: 'Could not send your message. Please try again or email us directly.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}