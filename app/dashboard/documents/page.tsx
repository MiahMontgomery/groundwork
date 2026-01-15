import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import pool from '@/lib/db'
import { format } from 'date-fns'
import Link from 'next/link'

export default async function DocumentsPage() {
  const user = await getSession()
  if (!user) {
    redirect('/login')
  }

  let documents: any[] = []

  if (user.role === 'admin') {
    const result = await pool.query(
      `SELECT d.*, p.address as project_address, c.name as company_name
       FROM documents d 
       JOIN projects p ON d.project_id = p.id 
       JOIN companies c ON p.company_id = c.id
       ORDER BY d.expiry_date ASC NULLS LAST, d.created_at DESC`
    )
    documents = result.rows
  } else if (user.company_id) {
    const result = await pool.query(
      `SELECT d.*, p.address as project_address
       FROM documents d 
       JOIN projects p ON d.project_id = p.id 
       WHERE p.company_id = $1
       ORDER BY d.expiry_date ASC NULLS LAST, d.created_at DESC`,
      [user.company_id]
    )
    documents = result.rows
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="heading-2">Documents</h1>
        <Link href="/dashboard/documents/new" className="btn btn-primary">
          Upload Document
        </Link>
      </div>

      {documents.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-brown-300 mb-4">No documents yet</p>
          <Link href="/dashboard/documents/new" className="btn btn-primary">
            Upload Your First Document
          </Link>
        </div>
      ) : (
        <div className="card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-brown-700">
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Project</th>
                  {user.role === 'admin' && (
                    <th className="text-left py-3 px-4 font-semibold text-brown-50">Company</th>
                  )}
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Expiry Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-brown-50">Status</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-brown-800 hover:bg-brown-800">
                    <td className="py-3 px-4">
                      <Link
                        href={`/dashboard/documents/${doc.id}`}
                        className="text-brown-50 hover:text-warm-400"
                      >
                        {doc.name}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-brown-300">{doc.type}</td>
                    <td className="py-3 px-4 text-brown-300">{doc.project_address}</td>
                    {user.role === 'admin' && (
                      <td className="py-3 px-4 text-brown-300">{doc.company_name}</td>
                    )}
                    <td className="py-3 px-4 text-brown-300">
                      {doc.expiry_date ? format(new Date(doc.expiry_date), 'MMM d, yyyy') : 'N/A'}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded ${
                        doc.status === 'expired' ? 'bg-red-100 text-red-700' :
                        doc.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        doc.status === 'active' ? 'bg-green-100 text-green-700' :
                        'bg-brown-800 text-brown-300'
                      }`}>
                        {doc.status}
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
