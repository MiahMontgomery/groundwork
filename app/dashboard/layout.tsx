import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import DashboardNav from '@/components/DashboardNav'

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getSession()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-brown-950">
      <DashboardNav user={user} />
      <main className="container-custom py-8">
        {children}
      </main>
    </div>
  )
}
