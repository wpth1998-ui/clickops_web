export const CONTACT_TO_EMAIL = 'clickops.chat@gmail.com';

export interface ContactPayload {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export function validateContactPayload(
  body: unknown
): { ok: true; data: ContactPayload } | { ok: false; message: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, message: 'Invalid request body' };
  }

  const raw = body as Record<string, unknown>;
  const pick = (key: keyof ContactPayload) =>
    typeof raw[key] === 'string' ? (raw[key] as string).trim() : '';

  const data: ContactPayload = {
    name: pick('name'),
    email: pick('email'),
    company: pick('company'),
    phone: pick('phone'),
    service: pick('service'),
    budget: pick('budget'),
    message: pick('message'),
  };

  if (!data.name) return { ok: false, message: 'Name is required' };
  if (!data.email) return { ok: false, message: 'Email is required' };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return { ok: false, message: 'Please enter a valid email' };
  }
  if (!data.phone) return { ok: false, message: 'Phone number is required' };
  if (!data.service) return { ok: false, message: 'Please select a service' };
  if (!data.budget) return { ok: false, message: 'Please select a budget range' };
  if (!data.message) return { ok: false, message: 'Message is required' };

  if (data.message.length > 8000) {
    return { ok: false, message: 'Message is too long' };
  }

  return { ok: true, data };
}

export function formatContactEmailText(data: ContactPayload): string {
  return [
    'New ClickOps contact form submission',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || '—'}`,
    `Phone: ${data.phone}`,
    `Service: ${data.service}`,
    `Budget: ${data.budget}`,
    '',
    'Message:',
    data.message,
  ].join('\n');
}

export function formatContactEmailHtml(data: ContactPayload): string {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 12px;color:#6b7280;vertical-align:top">${escapeHtml(label)}</td><td style="padding:6px 12px;color:#111827">${escapeHtml(value)}</td></tr>`;

  return `<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.5;color:#111827">
  <p style="margin:0 0 16px"><strong>New ClickOps contact form submission</strong></p>
  <table style="border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
    ${row('Name', data.name)}
    ${row('Email', data.email)}
    ${row('Company', data.company || '—')}
    ${row('Phone', data.phone)}
    ${row('Service', data.service)}
    ${row('Budget', data.budget)}
  </table>
  <p style="margin:20px 0 8px;color:#6b7280">Message</p>
  <p style="margin:0;white-space:pre-wrap">${escapeHtml(data.message)}</p>
</body>
</html>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}