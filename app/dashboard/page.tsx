import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import pool from '@/lib/db'
import { format } from 'date-fns'
import Link from 'next/link'

export default async function Dashboard() {
  const user = await getSession()
  if (!user) {
    redirect('/login')
  }

  // Get user's company and projects
  let projects: any[] = []
  let upcomingExpiries: any[] = []
  let pendingSubmissions: any[] = []

  if (user.company_id) {
    const projectsResult = await pool.query(
      'SELECT * FROM projects WHERE company_id = $1 ORDER BY created_at DESC LIMIT 5',
      [user.company_id]
    )
    projects = projectsResult.rows

    // Get documents expiring in next 60 days
    const expiriesResult = await pool.query(
      `SELECT d.*, p.address as project_address 
       FROM documents d 
       JOIN projects p ON d.project_id = p.id 
       WHERE p.company_id = $1 
       AND d.expiry_date IS NOT NULL 
       AND d.expiry_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '60 days'
       AND d.status != 'expired'
       ORDER BY d.expiry_date ASC 
       LIMIT 10`,
      [user.company_id]
    )
    upcomingExpiries = expiriesResult.rows

    // Get pending submissions
    const submissionsResult = await pool.query(
      `SELECT s.*, p.address as project_address 
       FROM submissions s 
       JOIN projects p ON s.project_id = p.id 
       WHERE p.company_id = $1 
       AND s.status IN ('pending', 'submitted', 'requires_revision')
       ORDER BY s.created_at DESC 
       LIMIT 10`,
      [user.company_id]
    )
    pendingSubmissions = submissionsResult.rows
  }

  // Admin view
  if (user.role === 'admin') {
    const allExpiriesResult = await pool.query(
      `SELECT d.*, p.address as project_address, c.name as company_name
       FROM documents d 
       JOIN projects p ON d.project_id = p.id 
       JOIN companies c ON p.company_id = c.id
       WHERE d.expiry_date IS NOT NULL 
       AND d.expiry_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '60 days'
       AND d.status != 'expired'
       ORDER BY d.expiry_date ASC 
       LIMIT 20`
    )
    upcomingExpiries = allExpiriesResult.rows

    const allSubmissionsResult = await pool.query(
      `SELECT s.*, p.address as project_address, c.name as company_name
       FROM submissions s 
       JOIN projects p ON s.project_id = p.id 
       JOIN companies c ON p.company_id = c.id
       WHERE s.status IN ('pending', 'submitted', 'requires_revision')
       ORDER BY s.created_at DESC 
       LIMIT 20`
    )
    pendingSubmissions = allSubmissionsResult.rows
  }

  return (
    <div>
      <h1 className="heading-2 mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h3 className="text-sm font-medium text-brown-300 mb-2">Active Projects</h3>
          <p className="text-3xl font-bold text-brown-50">
            {projects.filter(p => p.status === 'active').length}
          </p>
        </div>
        <div className="card">
          <h3 className="text-sm font-medium text-brown-300 mb-2">Upcoming Expiries</h3>
          <p className="text-3xl font-bold text-brown-50">{upcomingExpiries.length}</p>
        </div>
        <div className="card">
          <h3 className="text-sm font-medium text-brown-300 mb-2">Pending Submissions</h3>
          <p className="text-3xl font-bold text-brown-50">{pendingSubmissions.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Expiries */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="heading-3">Upcoming Expiries</h2>
            <Link href="/dashboard/documents" className="text-sm text-gold-600 hover:underline">
              View All
            </Link>
          </div>
          {upcomingExpiries.length === 0 ? (
            <p className="text-brown-300">No upcoming expiries</p>
          ) : (
            <div className="space-y-3">
              {upcomingExpiries.map((doc: any) => (
                <div key={doc.id} className="border-b border-brown-700 pb-3 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-brown-50">{doc.name}</p>
                      <p className="text-sm text-brown-300">
                        {doc.type} • {doc.project_address || doc.company_name}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-brown-50">
                        {doc.expiry_date ? format(new Date(doc.expiry_date), 'MMM d, yyyy') : 'N/A'}
                      </p>
                      <span className={`text-xs px-2 py-1 rounded ${
                        doc.status === 'expired' ? 'bg-red-100 text-red-700' :
                        doc.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {doc.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pending Submissions */}
        <div className="card">
          <div className="flex justify-between items-center mb-4">
            <h2 className="heading-3">Pending Submissions</h2>
            <Link href="/dashboard/submissions" className="text-sm text-gold-600 hover:underline">
              View All
            </Link>
          </div>
          {pendingSubmissions.length === 0 ? (
            <p className="text-brown-300">No pending submissions</p>
          ) : (
            <div className="space-y-3">
              {pendingSubmissions.map((sub: any) => (
                <div key={sub.id} className="border-b border-brown-700 pb-3 last:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-brown-50">{sub.authority}</p>
                      <p className="text-sm text-brown-300">
                        {sub.project_address || sub.company_name}
                      </p>
                      {sub.reference_number && (
                        <p className="text-xs text-brown-400 mt-1">
                          Ref: {sub.reference_number}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className={`text-xs px-2 py-1 rounded ${
                        sub.status === 'rejected' ? 'bg-red-100 text-red-700' :
                        sub.status === 'approved' ? 'bg-green-100 text-green-700' :
                        sub.status === 'requires_revision' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-brown-800 text-brown-300'
                      }`}>
                        {sub.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
