import { cookies } from 'next/headers'
import { randomBytes } from 'crypto'
import pool from './db'
import { User } from '@/types'

export async function getSession(): Promise<User | null> {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('session_token')?.value

  if (!sessionToken) {
    return null
  }

  // Verify session token and get user
  const result = await pool.query(
    `SELECT u.id, u.email, u.role, u.company_id, u.created_at, u.updated_at
     FROM sessions s
     JOIN users u ON s.user_id = u.id
     WHERE s.token = $1 
     AND s.expires_at > CURRENT_TIMESTAMP`,
    [sessionToken]
  )

  if (result.rows.length === 0) {
    return null
  }

  const row = result.rows[0]
  return {
    id: row.id,
    email: row.email,
    role: row.role,
    company_id: row.company_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
  }
}

export async function createSession(userId: string): Promise<string> {
  // Generate secure token
  const token = randomBytes(32).toString('hex')
  const expiresAt = new Date()
  expiresAt.setDate(expiresAt.getDate() + 7) // 7 days

  await pool.query(
    'INSERT INTO sessions (user_id, token, expires_at) VALUES ($1, $2, $3)',
    [userId, token, expiresAt]
  )

  // Clean up old sessions for this user
  await pool.query(
    'DELETE FROM sessions WHERE user_id = $1 AND expires_at < CURRENT_TIMESTAMP',
    [userId]
  )

  return token
}

export async function destroySession(token?: string): Promise<void> {
  if (token) {
    await pool.query('DELETE FROM sessions WHERE token = $1', [token])
  } else {
    const cookieStore = await cookies()
    const sessionToken = cookieStore.get('session_token')?.value
    if (sessionToken) {
      await pool.query('DELETE FROM sessions WHERE token = $1', [sessionToken])
    }
  }
}

// Clean up expired sessions (call this periodically)
export async function cleanupExpiredSessions(): Promise<void> {
  await pool.query('DELETE FROM sessions WHERE expires_at < CURRENT_TIMESTAMP')
}
