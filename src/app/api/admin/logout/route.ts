import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const supabase = await createClient()
  await supabase.auth.signOut()

  const url = new URL(request.url)
  const hostname = request.headers.get('host') || ''
  const isAdminSubdomain = hostname.startsWith('admin.')

  const redirectUrl = new URL(isAdminSubdomain ? '/login' : '/admin/login', request.url)
  const response = NextResponse.redirect(redirectUrl, { status: 303 })
  
  // Clear the cookies explicitly
  response.cookies.delete('sb-access-token')
  response.cookies.delete('sb-refresh-token')
  
  return response
}
