const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export function isTurnstileEnforced(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY?.trim());
}

export function pickTurnstileToken(body: unknown): string {
  if (!body || typeof body !== 'object') return '';
  const raw = body as Record<string, unknown>;
  const token = raw.turnstileToken;
  return typeof token === 'string' ? token.trim() : '';
}

interface SiteverifyResponse {
  success: boolean;
  'error-codes'?: string[];
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string | null
): Promise<{ ok: true } | { ok: false; message: string }> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (!secret) {
    return { ok: true };
  }

  if (!token) {
    return { ok: false, message: 'Please complete the human verification check.' };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp?.trim()) {
    body.set('remoteip', remoteIp.trim());
  }

  let data: SiteverifyResponse;
  try {
    const res = await fetch(SITEVERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    });
    data = (await res.json()) as SiteverifyResponse;
  } catch (err) {
    console.error('[turnstile] siteverify request failed:', err);
    return {
      ok: false,
      message: 'Human verification is temporarily unavailable. Please try again.',
    };
  }

  if (!data.success) {
    console.error('[turnstile] verification failed:', data['error-codes']);
    return {
      ok: false,
      message: 'Human verification failed. Please try again.',
    };
  }

  return { ok: true };
}

export function getClientIp(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  return request.headers.get('cf-connecting-ip')?.trim() || null;
}