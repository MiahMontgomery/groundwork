import Link from 'next/link'

export default function ServicePlans() {
  return (
    <div className="min-h-screen bg-brown-950">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="heading-1 mb-4">Service Plans</h1>
              <p className="text-brown-300 text-lg max-w-2xl mx-auto">
                Choose the plan that fits your compliance management needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Starter Plan */}
              <div className="card-feature">
                <h3 className="heading-3 mb-3">Starter</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-brown-50">$149</span>
                  <span className="text-brown-300 text-lg">/month</span>
                </div>
                <p className="text-brown-300 mb-8 leading-relaxed">
                  For single contractors with low project volume.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Compliance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Document storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Expiry notifications</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Standard reports</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary w-full text-center">
                  Request Evaluation
                </Link>
              </div>

              {/* Professional Plan */}
              <div className="card-feature border-2 border-warm-500 relative shadow-lg">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-warm-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-md">
                    Recommended
                  </span>
                </div>
                <h3 className="heading-3 mb-3">Professional</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-brown-50">$349</span>
                  <span className="text-brown-300 text-lg">/month</span>
                </div>
                <p className="text-brown-300 mb-8 leading-relaxed">
                  For multi-project contractors and GCs.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Delegated submissions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Automated renewals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Subcontractor portal</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Custom reporting</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-gold w-full text-center">
                  Request Evaluation
                </Link>
              </div>

              {/* Enterprise Plan */}
              <div className="card-feature">
                <h3 className="heading-3 mb-3">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-brown-50">Custom</span>
                </div>
                <p className="text-brown-300 mb-8 leading-relaxed">
                  For GCs, property managers, and municipal suppliers.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Unlimited projects</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">SLA-based response</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-brown-300">Custom workflows</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary w-full text-center">
                  Contact Sales
                </Link>
              </div>
            </div>

            <div className="bg-brown-950 rounded-xl border-l-4 border-warm-500 p-8 max-w-3xl mx-auto shadow-sm">
              <p className="text-brown-50 font-semibold mb-2 text-lg">Service Agreement</p>
              <p className="text-brown-300 leading-relaxed">
                All service plans require a signed authorization agreement. We act as an authorized administrative agent. 
                All approvals and certifications are issued by the relevant authorities. See our{' '}
                <Link href="/legal/disclaimers" className="text-warm-400 hover:text-gold-700 font-medium">
                  disclaimers
                </Link>{' '}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
