import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brown-950 border-t border-brown-800">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.svg" 
                alt="Ground Work Compliance" 
                width={24} 
                height={24}
                className="w-6 h-6"
              />
              <span className="text-sm font-medium text-brown-50">Ground Work Compliance</span>
            </div>
            <p className="text-xs text-brown-500">
              Construction compliance operations for Ontario.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-brown-300 mb-3">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/services" className="text-brown-500 hover:text-brown-300">
                  Compliance Operations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brown-500 hover:text-brown-300">
                  Project Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-brown-300 mb-3">Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-brown-500 hover:text-brown-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brown-500 hover:text-brown-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-brown-300 mb-3">Legal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/legal/privacy" className="text-brown-500 hover:text-brown-300">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-brown-500 hover:text-brown-300">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/disclaimers" className="text-brown-500 hover:text-brown-300">
                  Disclaimers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-brown-800 text-xs text-brown-600">
          <p>&copy; {new Date().getFullYear()} Ground Work Compliance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
