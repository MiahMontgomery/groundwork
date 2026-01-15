# Ground Work Compliance

Construction Compliance Operations Platform (Ontario)

A delegated administrative system for managing construction compliance documentation, submissions, and renewals for contractors and GCs doing ground work in Ontario.

## Quick Start

See [SETUP.md](./SETUP.md) for detailed setup instructions.

```bash
# Install dependencies
npm install

# Set up environment variables (create .env.local)
# See SETUP.md for required variables

# Run database migrations
npm run db:migrate

# Seed database with test users (optional)
npm run db:seed

# Start development server
npm run dev
```

## What This Is

Ground Work Compliance is:
- A **filing agent** for compliance documentation
- A **renewal manager** for permits and clearances
- A **documentation coordinator** for projects
- A **single point of contact** for compliance operations

We are **not**:
- An inspector
- A certifying body
- A regulator
- A legal advisor

## Core Services

### Compliance Operations (Contractors)
- WSIB clearances
- ESA permit coordination
- Building permit submissions
- Insurance documentation
- Subcontractor compliance collection
- Expiry tracking & renewals
- Audit preparation


## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL (Supabase/Neon compatible)
- **Auth**: Session-based with bcrypt
- **Email**: Nodemailer
- **Deployment**: Vercel-ready

## Project Structure

```
app/              # Next.js pages and API routes
components/       # React components
database/         # SQL schema and migrations
lib/              # Utilities (auth, db, notifications)
scripts/          # Migration and seed scripts
types/            # TypeScript definitions
```

## Key Features

- ✅ Public marketing site (restrained, professional)
- ✅ Role-based authentication (Client/Admin)
- ✅ Project and document management
- ✅ Submission tracking
- ✅ Automated expiry notifications (60/30/7 days)
- ✅ Dashboard with compliance overview
- ✅ Legal pages (Privacy, Terms, Disclaimers)

## License

Proprietary - All rights reserved
