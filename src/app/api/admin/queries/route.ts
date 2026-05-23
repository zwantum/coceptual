import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
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

    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const search = searchParams.get('search')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = 20
    const offset = (page - 1) * limit

    // Start query builder
    let query = supabase
      .from('queries')
      .select('*', { count: 'exact' })

    // Apply filters
    if (status && status !== 'all' && status !== 'All') {
      query = query.eq('status', status)
    }

    if (search) {
      query = query.or(`full_name.ilike.%${search}%,phone.ilike.%${search}%,city.ilike.%${search}%`)
    }

    // Order and paginate
    query = query
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    const { data, count, error } = await query

    if (error) {
      console.error('Supabase Query Fetch Error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // Fetch summary counts for Total, New, In Progress, Resolved
    const { data: allData, error: summaryError } = await supabase
      .from('queries')
      .select('status')

    if (summaryError) {
      console.error('Supabase Summary Fetch Error:', summaryError)
      return NextResponse.json({ error: summaryError.message }, { status: 500 })
    }

    const summaries = {
      total: allData.length,
      new: allData.filter(q => q.status === 'New').length,
      in_progress: allData.filter(q => q.status === 'In Progress').length,
      resolved: allData.filter(q => q.status === 'Resolved').length,
    }

    return NextResponse.json({
      queries: data || [],
      count: count || 0,
      summaries,
    })
  } catch (error: any) {
    console.error('Queries API Error:', error)
    return NextResponse.json({ error: error?.message || 'Server Error' }, { status: 500 })
  }
}
