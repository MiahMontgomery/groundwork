import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      {/* Hero Section with seamless header transition */}
      <section className="relative overflow-hidden">
        {/* Seamless dark brown header that transitions into dots */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950 to-charcoal-900">
          <div className="absolute inset-0 halftone-dots opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-transparent"></div>
        </div>
        
        <div className="container-custom py-24 relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="px-3 py-1 bg-charcoal-800 border border-charcoal-700 rounded-full text-xs font-medium text-slate-300 uppercase tracking-wide">
                Ontario Construction Compliance
              </span>
            </div>
            
            {/* Main Headline - Bold, impactful font */}
            <h1 className="text-6xl md:text-7xl font-bold text-slate-50 mb-6 leading-tight tracking-tight">
              Build more.<br />
              Paperwork less.
            </h1>
            
            {/* Gold wording */}
            <p className="text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              We handle building permit packaging, submission, and tracking—so you can focus on the <span className="text-amber-400 font-medium">ground work</span>.
            </p>
            
            <div className="flex gap-4">
              <Link href="/contact" className="px-6 py-3 bg-navy-700 text-slate-50 rounded hover:bg-navy-600 transition-colors cursor-pointer font-medium">
                Request Evaluation
              </Link>
              <Link href="/login" className="px-6 py-3 border border-steel-700 text-slate-300 rounded hover:border-steel-600 hover:text-slate-200 transition-colors cursor-pointer font-medium">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Operate - with more dot detail as you scroll */}
      <section className="relative border-t border-charcoal-800">
        <div className="absolute inset-0 halftone-dots opacity-30"></div>
        <div className="container-custom py-24 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8">How We Operate</h2>
            
            <div className="space-y-8 text-slate-300">
              <div>
                <h3 className="text-xl font-semibold text-slate-50 mb-3">Building Permit Operations</h3>
                <p className="leading-relaxed mb-4">
                  Ground Work Compliance is <strong className="text-slate-50">one thing</strong>: Building Permit Operations for Ontario contractors and designers.
                </p>
                <p className="leading-relaxed">
                  We provide <strong className="text-slate-50">permit packaging + submission + tracking + resubmissions + close-out</strong> so contractors can keep building instead of drowning in municipal process.
                </p>
              </div>
              
              <div className="border-l-2 border-navy-700 pl-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">What We Handle</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Provincial permit application preparation</li>
                  <li>• Municipal submission coordination</li>
                  <li>• Review loop management (RFIs, comments, resubmissions)</li>
                  <li>• Permit tracking and status updates</li>
                  <li>• Close-out documentation</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-navy-700 pl-6">
                <h4 className="text-lg font-semibold text-slate-50 mb-3">Who We Serve</h4>
                <ul className="space-y-2 text-slate-300">
                  <li>• Small–mid contractors doing repeated permit work</li>
                  <li>• Designers / BCIN firms who produce drawings but hate permit admin</li>
                  <li>• Permit expediters (we're the tool + ops wrapper)</li>
                  <li>• GCs who want a clean pipeline across multiple projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authorization Notice */}
      <section className="relative border-t border-charcoal-800">
        <div className="absolute inset-0 halftone-dots opacity-20"></div>
        <div className="container-custom py-16 relative z-10">
          <div className="max-w-3xl">
            <div className="bg-charcoal-900 border-l-4 border-amber-500 p-6">
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong className="text-slate-50">Notice:</strong> We act as an authorized administrative agent for building permit submissions. All approvals are issued by the relevant municipalities. We do not provide engineering, design, or code certification services. We do not guarantee permit issuance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
