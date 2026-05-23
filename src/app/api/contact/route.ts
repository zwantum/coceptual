import { createAdminClient } from '@/lib/supabase/server'
import { sendAdminNotification, sendUserConfirmation } from '@/lib/emails'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { full_name, phone, email, service, city, project_details, property_type, budget } = body

    // Validation
    if (!full_name || !phone || !service || !city) {
      return NextResponse.json(
        { error: 'Fields full_name, phone, service, and city are required.' },
        { status: 400 }
      )
    }

    const supabase = createAdminClient()

    // Format project_details to include property_type and budget since they aren't explicit columns
    let finalDetails = project_details || ''
    if (property_type || budget) {
      const infoParts = []
      if (property_type) infoParts.push(`Property Type: ${property_type}`)
      if (budget) infoParts.push(`Approx. Budget: ${budget}`)
      finalDetails = `${infoParts.join(' | ')}\n\n${finalDetails}`.trim()
    }

    // Insert row into queries table
    const { data, error } = await supabase
      .from('queries')
      .insert({
        full_name,
        phone,
        email: email || null,
        service,
        city,
        project_details: finalDetails || null,
        status: 'New',
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase DB Insert Error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    const queryData = data

    // Trigger emails asynchronously but handle errors safely
    try {
      await sendAdminNotification(queryData)
      if (email) {
        await sendUserConfirmation(queryData)
      }
    } catch (emailError) {
      // Log email sending failures but do not block the API response
      console.error('Nodemailer SMTP Error:', emailError)
    }

    return NextResponse.json({ success: true, id: queryData.id })
  } catch (error: any) {
    console.error('API Contact Error:', error)
    return NextResponse.json({ error: error?.message || 'Server Error' }, { status: 500 })
  }
}
