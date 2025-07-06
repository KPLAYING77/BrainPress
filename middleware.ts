import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import basicAuth from 'basic-auth';

export const config = { matcher: '/:path*' };   // protect everything

export function middleware(req: NextRequest) {
  const creds = basicAuth.parse(req.headers.get('authorization') || '');
  const ok =
    creds?.name === process.env.AUTH_USER &&
    creds?.pass === process.env.AUTH_PASS;

  if (ok) return NextResponse.next();

  return new NextResponse('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
  });
}
