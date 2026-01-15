import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { destroySession } from '@/lib/session'

export async function POST() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session_token')?.value
  
  if (sessionToken) {
    await destroySession(sessionToken)
  }
  
  cookieStore.delete('session_token')
  
  return NextResponse.json({ success: true })
}
