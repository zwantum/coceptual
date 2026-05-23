import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for 587/other
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface QueryDetails {
  id: string
  full_name: string
  phone: string
  email?: string
  service: string
  city: string
  project_details?: string
  status: string
}

export async function sendAdminNotification(query: QueryDetails) {
  if (!process.env.ADMIN_EMAIL) {
    console.warn('ADMIN_EMAIL env variable is not set. Skipping admin notification.')
    return
  }

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Conceptual Studio" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Design Query from ${query.full_name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #ff6a00; border-bottom: 2px solid #ff6a00; padding-bottom: 10px;">New Design Inquiry Received</h2>
        <p style="font-size: 16px;">A new consultation request has been submitted with the following details:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr style="background: #fdfbfe;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Full Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${query.full_name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Phone:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${query.phone}</td>
          </tr>
          <tr style="background: #fdfbfe;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Email:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${query.email || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">Service:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${query.service}</td>
          </tr>
          <tr style="background: #fdfbfe;">
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee;">City:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${query.city}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #eee; vertical-align: top;">Project Details:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee; white-space: pre-wrap;">${query.project_details || 'Not specified'}</td>
          </tr>
        </table>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="https://admin.mydomain.com/" style="background: linear-gradient(135deg, #ff6a00, #e020b0); color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block; box-shadow: 0 4px 15px rgba(255, 106, 0, 0.2);">
            Open Admin Dashboard
          </a>
        </div>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}

export async function sendUserConfirmation(query: QueryDetails) {
  if (!query.email) return

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Conceptual Studio" <${process.env.SMTP_USER}>`,
    to: query.email,
    subject: 'We have received your design consultation request - Conceptual Studio',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h2 style="color: #ff6a00; margin: 5px 0;">Conceptual Studio</h2>
          <p style="color: #666; font-size: 14px; margin: 0;">INTERIORS DONE RIGHT</p>
        </div>
        
        <h3 style="color: #333;">Hello ${query.full_name},</h3>
        <p style="line-height: 1.6; color: #555;">
          Thank you for reaching out to Conceptual Studio. We have successfully received your request for a free design consultation.
        </p>
        
        <p style="line-height: 1.6; color: #555;">
          Here is a summary of the details you submitted:
        </p>
        <div style="background: #fdfbfe; padding: 15px; border-radius: 8px; border: 1px solid #f0edf5; margin: 20px 0;">
          <ul style="margin: 0; padding-left: 20px; color: #555; font-size: 14px; line-height: 1.8;">
            <li><strong>Service Requested:</strong> ${query.service}</li>
            <li><strong>City:</strong> ${query.city}</li>
          </ul>
        </div>
        
        <p style="line-height: 1.6; color: #555;">
          Our Ranchi design team is reviewing your request and will contact you via phone or email within the next 24 hours.
        </p>
        
        <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
        
        <p style="font-size: 12px; color: #999; text-align: center; line-height: 1.5;">
          <strong>Conceptual Studio</strong><br />
          Ranchi, Jharkhand, India<br />
          hello@coceptualstudio.com | +91 XX XXXX XXXX
        </p>
      </div>
    `,
  }

  return transporter.sendMail(mailOptions)
}
