import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import pool from '@/lib/db'
import Link from 'next/link'

export default async function ProjectsPage() {
  const user = await getSession()
  if (!user) {
    redirect('/login')
  }

  let projects: any[] = []

  if (user.role === 'admin') {
    const result = await pool.query(
      `SELECT p.*, c.name as company_name 
       FROM projects p 
       JOIN companies c ON p.company_id = c.id 
       ORDER BY p.created_at DESC`
    )
    projects = result.rows
  } else if (user.company_id) {
    const result = await pool.query(
      'SELECT * FROM projects WHERE company_id = $1 ORDER BY created_at DESC',
      [user.company_id]
    )
    projects = result.rows
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="heading-2">Projects</h1>
        <Link href="/dashboard/projects/new" className="btn btn-primary">
          New Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-brown-300 mb-4">No projects yet</p>
          <Link href="/dashboard/projects/new" className="btn btn-primary">
            Create Your First Project
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/dashboard/projects/${project.id}`}
              className="card hover:border-brown-600 transition-colors"
            >
              <h3 className="heading-3 mb-2">{project.address}</h3>
              {user.role === 'admin' && (
                <p className="text-sm text-brown-300 mb-3">{project.company_name}</p>
              )}
              <div className="flex items-center justify-between">
                <span className={`text-xs px-2 py-1 rounded ${
                  project.status === 'active' ? 'bg-green-100 text-green-700' :
                  project.status === 'completed' ? 'bg-brown-800 text-brown-300' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {project.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
