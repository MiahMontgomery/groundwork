# Ground Work Compliance - Setup Guide

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (Supabase, Neon, or self-hosted)
- SMTP server for email notifications (optional for development)

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Database (PostgreSQL)
DATABASE_URL=postgresql://user:password@host:port/database

# Session Secret (generate a random string)
NEXTAUTH_SECRET=your_random_secret_here

# Email Configuration (for notifications)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
SMTP_FROM=noreply@groundworkcompliance.com

# Cron Secret (for scheduled jobs)
CRON_SECRET=your_cron_secret_here
```

### 3. Database Setup

Run the database migrations:

```bash
npm run db:migrate
```

This will create all necessary tables:
- users
- companies
- projects
- documents
- submissions
- authorizations
- sessions

### 4. Seed Database (Optional)

Create initial admin and test users:

```bash
npm run db:seed
```

This creates:
- Admin user: `admin@groundworkcompliance.com` / `admin123`
- Test client: `client@example.com` / `client123`

**Important:** Change these passwords immediately in production!

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

```
groundwork/
├── app/                    # Next.js app router
│   ├── api/               # API routes
│   ├── dashboard/         # Authenticated app
│   ├── legal/             # Legal pages
│   └── page.tsx           # Homepage
├── components/            # React components
├── database/              # Database schema
├── lib/                   # Utilities
│   ├── auth.ts           # Authentication helpers
│   ├── db.ts             # Database connection
│   ├── session.ts        # Session management
│   └── notifications.ts  # Email notifications
├── scripts/               # Utility scripts
└── types/                 # TypeScript types
```

## Key Features

### Public Site
- Homepage with service overview
- Services page (Compliance Operations)
- Service Plans page
- About page
- Contact/Request Evaluation form
- Legal pages (Privacy, Terms, Disclaimers)

### Authenticated App
- Dashboard with overview metrics
- Projects management
- Documents tracking with expiry alerts
- Submissions tracking
- Role-based access (Client/Admin)

### Automation
- Daily expiry checks (60/30/7 day alerts)
- Automatic expired document marking
- Email notifications

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

The `vercel.json` file configures cron jobs for daily expiry checks.

### Database

Use one of:
- **Supabase**: Free tier available, includes PostgreSQL + storage
- **Neon**: Serverless PostgreSQL
- **Self-hosted**: Any PostgreSQL 12+ instance

### Email

Configure SMTP settings for notifications. For development, you can use:
- Mailtrap (testing)
- SendGrid
- AWS SES
- Your own SMTP server

## Next Steps

1. **Customize branding**: Update colors, logo, company name
2. **Set up file storage**: Configure Supabase Storage or S3 for document uploads
3. **Add file upload functionality**: Implement document upload in dashboard
4. **Configure cron jobs**: Set up Vercel Cron or similar for daily expiry checks
5. **Add authorization forms**: Create PDF generation for authorization agreements
6. **Set up monitoring**: Add error tracking (Sentry, etc.)

## Important Notes

- This is an administrative service, not a certifying authority
- All disclaimers must remain visible
- Authorization agreements are required before service
- Never guarantee approvals or outcomes

## Support

For questions or issues, refer to the main README.md or contact the development team.
