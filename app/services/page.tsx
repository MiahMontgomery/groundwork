export default function Services() {
  return (
    <div className="min-h-screen bg-brown-950">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="heading-1 mb-4">Services</h1>
              <p className="text-brown-300 text-lg max-w-2xl mx-auto">
                Administrative support for construction compliance operations
              </p>
            </div>
            
            {/* Compliance Operations */}
            <div className="mb-20">
              <div className="card-feature mb-8">
                <h2 className="heading-2 mb-4">Compliance Operations</h2>
                <p className="text-brown-300 text-lg mb-6">
                  We handle administrative tasks related to construction compliance on your behalf. 
                  This includes document submission, renewal management, and coordination with regulatory bodies.
                </p>
                
                <div className="bg-brown-800 rounded-lg p-6 mb-6 border border-brown-700">
                  <h3 className="font-semibold text-brown-50 mb-4">What We Handle</h3>
                  <ul className="space-y-3 text-brown-300">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Document submission to WSIB, ESA, and municipalities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Clearance and permit renewals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Expiry monitoring and alerts</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Subcontractor documentation intake</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Audit and inspection preparation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-warm-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Centralized compliance records</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-brown-900 rounded-xl border-l-4 border-warm-500 p-6 shadow-sm">
                <p className="text-brown-50 font-semibold mb-2">Authorization</p>
                <p className="text-brown-300">
                  We act as an authorized administrative agent. All approvals and certifications are issued by the relevant authorities.
                </p>
              </div>
            </div>


            {/* One-off Services */}
            <div>
              <h2 className="heading-2 mb-6">One-off Services</h2>
              <div className="card-feature">
                <ul className="space-y-4">
                  <li className="flex justify-between items-center py-3 border-b border-brown-700 last:border-0">
                    <span className="text-brown-300 font-medium">Permit submission</span>
                    <span className="font-semibold text-brown-50">$150–$500</span>
                  </li>
                  <li className="flex justify-between items-center py-3 border-b border-brown-700 last:border-0">
                    <span className="text-brown-300 font-medium">WSIB setup</span>
                    <span className="font-semibold text-brown-50">$250</span>
                  </li>
                  <li className="flex justify-between items-center py-3 border-b border-brown-700 last:border-0">
                    <span className="text-brown-300 font-medium">ESA coordination</span>
                    <span className="font-semibold text-brown-50">$150 per permit</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
