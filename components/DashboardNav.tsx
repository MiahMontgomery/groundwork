'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { User } from '@/types'

interface DashboardNavProps {
  user: User
}

export default function DashboardNav({ user }: DashboardNavProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/login')
  }

  return (
    <nav className="bg-brown-900 border-b border-brown-800">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <Image 
              src="/logo.svg" 
              alt="Ground Work Compliance" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-brown-50">
              Ground Work Compliance
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="text-brown-300 hover:text-brown-50 transition-colors">
              Dashboard
            </Link>
            <Link href="/dashboard/projects" className="text-brown-300 hover:text-brown-50 transition-colors">
              Projects
            </Link>
            <Link href="/dashboard/documents" className="text-brown-300 hover:text-brown-50 transition-colors">
              Documents
            </Link>
            <Link href="/dashboard/submissions" className="text-brown-300 hover:text-brown-50 transition-colors">
              Submissions
            </Link>
            {user.role === 'admin' && (
              <Link href="/dashboard/admin" className="text-brown-300 hover:text-brown-50 transition-colors">
                Admin
              </Link>
            )}
            <button
              onClick={handleLogout}
              className="text-brown-300 hover:text-brown-50 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
