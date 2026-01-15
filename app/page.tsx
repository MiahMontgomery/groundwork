import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-brown-950">
      {/* Hero Section - Minimal, Software-like */}
      <section className="border-b border-brown-800">
        <div className="container-custom py-20">
          <div className="max-w-4xl">
            <div className="mb-8">
              <Image 
                src="/logo.svg" 
                alt="Ground Work Compliance" 
                width={80} 
                height={80}
                className="mb-6"
              />
            </div>
            <h1 className="text-5xl font-medium text-brown-50 mb-6 leading-tight tracking-tight">
              Construction compliance management for active job sites.
            </h1>
            <p className="text-xl text-brown-300 mb-8 leading-relaxed max-w-2xl">
              We manage submissions, renewals, and documentation for WSIB, ESA, building permits, and insurance — on your behalf.
            </p>
            <p className="text-brown-400 mb-10">
              Designed for Ontario contractors and general contractors doing ground work.
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="px-6 py-3 bg-warm-600 text-white rounded hover:bg-warm-700 transition-colors cursor-pointer">
                Request Evaluation
              </Link>
              <Link href="/login" className="px-6 py-3 border border-brown-700 text-brown-300 rounded hover:border-brown-600 hover:text-brown-200 transition-colors cursor-pointer">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Simple List, Not Cards */}
      <section className="border-b border-brown-800">
        <div className="container-custom py-20">
          <h2 className="text-2xl font-medium text-brown-50 mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl">
            <div>
              <h3 className="text-lg font-medium text-brown-50 mb-4">Compliance Operations</h3>
              <p className="text-brown-300 mb-4 leading-relaxed">
                Administrative support for contractors and GCs.
              </p>
              <ul className="space-y-2 text-brown-400 text-sm">
                <li>WSIB clearances</li>
                <li>ESA permit coordination</li>
                <li>Building permit submissions</li>
                <li>Insurance documentation</li>
                <li>Subcontractor compliance collection</li>
                <li>Expiry tracking & renewals</li>
                <li>Audit preparation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-brown-50 mb-4">Project Management</h3>
              <p className="text-brown-300 mb-4 leading-relaxed">
                Centralized tracking and coordination for active job sites.
              </p>
              <ul className="space-y-2 text-brown-400 text-sm">
                <li>Project compliance tracking</li>
                <li>Multi-site management</li>
                <li>Documentation coordination</li>
                <li>Status reporting</li>
                <li>Audit trail maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notice - Minimal */}
      <section className="border-b border-brown-800">
        <div className="container-custom py-12">
          <div className="max-w-3xl">
            <p className="text-sm text-brown-400 leading-relaxed">
              <strong className="text-brown-300">Notice:</strong> We act as an authorized administrative agent. All approvals and certifications are issued by the relevant authorities. We do not guarantee approvals or outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
