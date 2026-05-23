import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const supabase = await createClient()

    // Authenticate user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check allowlist
    const allowedEmails = (process.env.ADMIN_ALLOWED_EMAILS || '')
      .split(',')
      .map(e => e.trim().toLowerCase())
    if (!allowedEmails.includes(user.email?.toLowerCase() || '')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { status } = await request.json()
    if (!status) {
      return NextResponse.json({ error: 'Status is required' }, { status: 400 })
    }

    const resolvedParams = await params
    const { data, error } = await supabase
      .from('queries')
      .update({ status })
      .eq('id', resolvedParams.id)
      .select()
      .single()

    if (error) {
      console.error('Supabase Status Update Error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, query: data })
  } catch (error: any) {
    console.error('Query Patch API Error:', error)
    return NextResponse.json({ error: error?.message || 'Server Error' }, { status: 500 })
  }
}
