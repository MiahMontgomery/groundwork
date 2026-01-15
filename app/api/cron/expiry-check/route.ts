import { NextResponse } from 'next/server'
import { checkExpiringDocuments, markExpiredDocuments } from '@/lib/notifications'

// This endpoint should be called by a cron job (e.g., Vercel Cron, GitHub Actions, etc.)
export async function GET(request: Request) {
  // Simple auth check - in production, use a secret token
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Mark expired documents
    const expired = await markExpiredDocuments()
    
    // Check and send notifications for expiring documents
    await checkExpiringDocuments()

    return NextResponse.json({
      success: true,
      expiredCount: expired.length,
    })
  } catch (error) {
    console.error('Cron job error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
