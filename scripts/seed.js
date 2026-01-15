const { Pool } = require('pg')
const bcrypt = require('bcryptjs')

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set')
  process.exit(1)
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false },
})

async function seed() {
  try {
    console.log('Seeding database...')

    // Create admin user
    const adminPasswordHash = await bcrypt.hash('admin123', 10)
    const adminResult = await pool.query(
      `INSERT INTO users (email, password_hash, role) 
       VALUES ($1, $2, $3) 
       ON CONFLICT (email) DO NOTHING
       RETURNING id`,
      ['admin@groundworkcompliance.com', adminPasswordHash, 'admin']
    )

    if (adminResult.rows.length > 0) {
      console.log('Created admin user: admin@groundworkcompliance.com / admin123')
    }

    // Create a test company
    const companyResult = await pool.query(
      `INSERT INTO companies (name, type, jurisdiction, contact_email) 
       VALUES ($1, $2, $3, $4) 
       ON CONFLICT DO NOTHING
       RETURNING id`,
      ['Test Contractor Inc.', 'contractor', 'Ontario', 'test@example.com']
    )

    if (companyResult.rows.length > 0) {
      const companyId = companyResult.rows[0].id
      
      // Create a test client user
      const clientPasswordHash = await bcrypt.hash('client123', 10)
      await pool.query(
        `INSERT INTO users (email, password_hash, role, company_id) 
         VALUES ($1, $2, $3, $4) 
         ON CONFLICT (email) DO NOTHING`,
        ['client@example.com', clientPasswordHash, 'client', companyId]
      )
      console.log('Created test client user: client@example.com / client123')
    }

    console.log('Seeding completed!')
  } catch (error) {
    console.error('Seeding error:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

seed()
