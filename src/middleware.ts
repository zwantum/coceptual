import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const hostname = request.headers.get('host') || ''
  const isAdminSubdomain = hostname.startsWith('admin.')
  let pathname = request.nextUrl.pathname

  // Handle subdomain rewriting
  if (isAdminSubdomain) {
    if (pathname === '/') {
      pathname = '/admin'
    } else if (!pathname.startsWith('/admin') && !pathname.startsWith('/api') && !pathname.startsWith('/auth')) {
      pathname = `/admin${pathname}`
    }
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Get user session
  const { data: { user } } = await supabase.auth.getUser()

  // Helper to apply rewrite on success responses
  function handleResponse(response: NextResponse) {
    if (isAdminSubdomain) {
      const rewriteUrl = request.nextUrl.clone()
      rewriteUrl.pathname = pathname
      const rewrittenResponse = NextResponse.rewrite(rewriteUrl)
      response.cookies.getAll().forEach(cookie => {
        rewrittenResponse.cookies.set(cookie.name, cookie.value)
      })
      return rewrittenResponse
    }
    return response
  }

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    if (pathname === '/admin/login') {
      // If already logged in and allowed, redirect to dashboard
      if (user) {
        const allowedEmails = (process.env.ADMIN_ALLOWED_EMAILS || '')
          .split(',')
          .map(e => e.trim().toLowerCase())
        if (allowedEmails.includes(user.email?.toLowerCase() || '')) {
          const redirectUrl = request.nextUrl.clone()
          redirectUrl.pathname = isAdminSubdomain ? '/' : '/admin'
          return NextResponse.redirect(redirectUrl)
        }
      }
      // Allow access to login page
      return handleResponse(supabaseResponse)
    }

    // Require auth for any other admin pages
    if (!user) {
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = isAdminSubdomain ? '/login' : '/admin/login'
      return NextResponse.redirect(redirectUrl)
    }

    // Check allowlist
    const allowedEmails = (process.env.ADMIN_ALLOWED_EMAILS || '')
      .split(',')
      .map(e => e.trim().toLowerCase())
    if (!allowedEmails.includes(user.email?.toLowerCase() || '')) {
      // Sign them out dynamically if they are not allowed
      await supabase.auth.signOut()
      const redirectUrl = request.nextUrl.clone()
      redirectUrl.pathname = isAdminSubdomain ? '/login' : '/admin/login'
      redirectUrl.searchParams.set('error', 'access_denied')
      
      const response = NextResponse.redirect(redirectUrl)
      // Copy cookies to clear session on client
      supabaseResponse.cookies.getAll().forEach((cookie) => {
        response.cookies.set(cookie.name, cookie.value)
      })
      return response
    }
  }

  return handleResponse(supabaseResponse)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
