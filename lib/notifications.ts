import pool from './db'
import nodemailer from 'nodemailer'
import { format, differenceInDays } from 'date-fns'

// Email configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function checkExpiringDocuments() {
  const today = new Date()
  const daysToCheck = [60, 30, 7]

  for (const days of daysToCheck) {
    const targetDate = new Date(today)
    targetDate.setDate(today.getDate() + days)

    // Get documents expiring on or before target date
    const result = await pool.query(
      `SELECT d.*, p.address as project_address, c.name as company_name, c.contact_email
       FROM documents d 
       JOIN projects p ON d.project_id = p.id 
       JOIN companies c ON p.company_id = c.id
       WHERE d.expiry_date IS NOT NULL 
       AND d.expiry_date <= $1
       AND d.expiry_date > CURRENT_DATE
       AND d.status != 'expired'
       AND d.status != 'renewed'`,
      [targetDate]
    )

    for (const doc of result.rows) {
      const daysUntilExpiry = differenceInDays(new Date(doc.expiry_date), today)
      
      if (daysUntilExpiry === days) {
        await sendExpiryNotification(doc, daysUntilExpiry)
      }
    }
  }
}

async function sendExpiryNotification(doc: any, daysUntilExpiry: number) {
  if (!doc.contact_email) {
    return
  }

  const expiryDate = format(new Date(doc.expiry_date), 'MMMM d, yyyy')
  
  const mailOptions = {
    from: process.env.SMTP_FROM,
    to: doc.contact_email,
    subject: `Document Expiring Soon: ${doc.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Document Expiring Soon</h2>
        <p>This is a reminder that the following document will expire in ${daysUntilExpiry} day${daysUntilExpiry !== 1 ? 's' : ''}:</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Document:</strong> ${doc.name}</p>
          <p><strong>Type:</strong> ${doc.type}</p>
          <p><strong>Project:</strong> ${doc.project_address}</p>
          <p><strong>Expiry Date:</strong> ${expiryDate}</p>
        </div>
        <p>Please ensure this document is renewed before the expiry date.</p>
        <p>If you have any questions, please contact us through your dashboard.</p>
      </div>
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log(`Expiry notification sent for document ${doc.id}`)
  } catch (error) {
    console.error(`Failed to send expiry notification for document ${doc.id}:`, error)
  }
}

export async function markExpiredDocuments() {
  const result = await pool.query(
    `UPDATE documents 
     SET status = 'expired' 
     WHERE expiry_date IS NOT NULL 
     AND expiry_date < CURRENT_DATE 
     AND status != 'expired' 
     RETURNING *`
  )

  return result.rows
}
