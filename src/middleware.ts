import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('refreshToken');
  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/cart', '/reservation', '/reservation-check', '/reservation-list'],
};
