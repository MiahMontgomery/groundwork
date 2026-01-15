import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import pool from '@/lib/db'
import { format } from 'date-fns'
import Link from 'next/link'

export default async function SubmissionsPage() {
  const user = await getSession()
  if (!user) {
    redirect('/login')
  }

  let submissions: any[] = []

  if (user.role === 'admin') {
    const result = await pool.query(
      `SELECT s.*, p.address as project_address, c.name as company_name
       FROM submissions s 
       JOIN projects p ON s.project_id = p.id 
       JOIN companies c ON p.company_id = c.id
       ORDER BY s.created_at DESC`
    )
    submissions = result.rows
  } else if (user.company_id) {
    const result = await pool.query(
      `SELECT s.*, p.address as project_address
       FROM submissions s 
       JOIN projects p ON s.project_id = p.id 
       WHERE p.company_id = $1
       ORDER BY s.created_at DESC`,
      [user.company_id]
    )
    submissions = result.rows
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="heading-2">Submissions</h1>
        <Link href="/dashboard/submissions/new" className="btn btn-primary">
          New Submission
        </Link>
      </div>

      {submissions.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-brown-300 mb-4">No submissions yet</p>
          <Link href="/dashboard/submissions/new" className="btn btn-primary">
            Create Your First Submission
          </Link>
        </div>
      ) : (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-brown-700">
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Authority</th>
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Project</th>
                  {user.role === 'admin' && (
                    <th className="text-left py-3 px-4 font-semibold text-brown-50">Company</th>
                  )}
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Submission Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Reference</th>
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Status</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((sub) => (
                  <tr key={sub.id} className="border-b border-brown-800 hover:bg-brown-800">
                    <td className="py-3 px-4">
                      <Link
                        href={`/dashboard/submissions/${sub.id}`}
                        className="text-brown-50 hover:text-warm-400"
                      >
                        {sub.authority}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-brown-300">{sub.project_address}</td>
                    {user.role === 'admin' && (
                      <td className="py-3 px-4 text-brown-300">{sub.company_name}</td>
                    )}
                    <td className="py-3 px-4 text-brown-300">
                      {format(new Date(sub.submission_date), 'MMM d, yyyy')}
                    </td>
                    <td className="py-3 px-4 text-brown-300">
                      {sub.reference_number || 'N/A'}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        sub.status === 'rejected' ? 'bg-red-100 text-red-700' :
                        sub.status === 'approved' ? 'bg-green-100 text-green-700' :
                        sub.status === 'requires_revision' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-brown-800 text-brown-300'
                      }`}>
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
