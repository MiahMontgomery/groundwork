import bcrypt from 'bcryptjs';
import pool from './db';
import { User, UserRole } from '@/types';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await pool.query(
    'SELECT id, email, password_hash, role, company_id, created_at, updated_at FROM users WHERE email = $1',
    [email]
  );
  
  if (result.rows.length === 0) {
    return null;
  }
  
  const row = result.rows[0];
  return {
    id: row.id,
    email: row.email,
    role: row.role as UserRole,
    company_id: row.company_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function getUserWithPassword(email: string): Promise<(User & { password_hash: string }) | null> {
  const result = await pool.query(
    'SELECT id, email, password_hash, role, company_id, created_at, updated_at FROM users WHERE email = $1',
    [email]
  );
  
  if (result.rows.length === 0) {
    return null;
  }
  
  const row = result.rows[0];
  return {
    id: row.id,
    email: row.email,
    password_hash: row.password_hash,
    role: row.role as UserRole,
    company_id: row.company_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function createUser(
  email: string,
  password: string,
  role: UserRole,
  companyId?: string
): Promise<User> {
  const passwordHash = await hashPassword(password);
  const result = await pool.query(
    'INSERT INTO users (email, password_hash, role, company_id) VALUES ($1, $2, $3, $4) RETURNING id, email, role, company_id, created_at, updated_at',
    [email, passwordHash, role, companyId || null]
  );
  
  const row = result.rows[0];
  return {
    id: row.id,
    email: row.email,
    role: row.role as UserRole,
    company_id: row.company_id,
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}
