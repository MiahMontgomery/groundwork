const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL environment variable is not set')
  process.exit(1)
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false },
})

async function migrate() {
  try {
    const schemaPath = path.join(__dirname, '../database/schema.sql')
    const schema = fs.readFileSync(schemaPath, 'utf8')
    
    console.log('Running database migrations...')
    await pool.query(schema)
    console.log('Migrations completed successfully!')
  } catch (error) {
    console.error('Migration error:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

migrate()
