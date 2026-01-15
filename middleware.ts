import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('session_token')?.value
  const isAuthPage = request.nextUrl.pathname.startsWith('/login')
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')
  const isApiAuth = request.nextUrl.pathname.startsWith('/api/auth')

  // Allow access to auth pages and API routes
  if (isAuthPage || isApiAuth) {
    return NextResponse.next()
  }

  // Protect dashboard routes
  if (isDashboard && !sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
}
