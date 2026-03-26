import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, address, message } = await req.json()

    await resend.emails.send({
      from: 'Phantom Sky Imaging <noreply@phantomskyimaging.com>',
      to: 'joshuasaylor@phantomskyimaging.com',
      replyTo: email,
      subject: `New Booking Request — ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a;">
          <div style="background: #0a0a0a; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 0.05em;">NEW BOOKING REQUEST</h2>
            <p style="color: #888; margin: 4px 0 0; font-size: 13px;">Phantom Sky Imaging</p>
          </div>
          <div style="border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px; padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; width: 140px; font-size: 13px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 500;">${name}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #0a0a0a;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${phone || '—'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Service</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; font-weight: 600;">${service || '—'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; color: #666; font-size: 13px;">Property</td><td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${address || '—'}</td></tr>
              <tr><td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Details</td><td style="padding: 10px 0;">${message || '—'}</td></tr>
            </table>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 })
  }
}
