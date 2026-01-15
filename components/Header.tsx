import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-charcoal-950 border-b border-charcoal-800">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.svg" 
              alt="Ground Work Compliance" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="text-lg font-medium text-slate-50">
              Ground Work Compliance
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/services" className="text-slate-400 hover:text-slate-200 text-sm transition-colors">
              Services
            </Link>
            <Link href="/service-plans" className="text-slate-400 hover:text-slate-200 text-sm transition-colors">
              Plans
            </Link>
            <Link href="/contact" className="text-slate-400 hover:text-slate-200 text-sm transition-colors">
              Contact
            </Link>
            <Link href="/login" className="px-4 py-2 bg-navy-700 text-slate-50 text-sm rounded hover:bg-navy-600 transition-colors cursor-pointer">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
