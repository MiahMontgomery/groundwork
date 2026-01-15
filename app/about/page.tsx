export default function About() {
  return (
    <div className="min-h-screen bg-brown-950">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 mb-8">About</h1>
            
            <div className="prose prose-slate max-w-none">
              <p className="text-body mb-6">
                Ground Work Compliance is a compliance operations service for contractors and general contractors doing ground work in Ontario.
              </p>
              
              <p className="text-body mb-6">
                We act as an authorized administrative agent, handling document submissions, renewals, and compliance tracking on behalf of contractors and general contractors doing ground work.
              </p>
              
              <h2 className="heading-2 mt-12 mb-6">What We Are</h2>
              <ul className="space-y-3 text-brown-300 mb-8">
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">•</span>
                  <span>A filing agent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">•</span>
                  <span>A renewal manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">•</span>
                  <span>A documentation coordinator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-warm-400 mr-2">•</span>
                  <span>A single point of contact</span>
                </li>
              </ul>
              
              <h2 className="heading-2 mt-12 mb-6">What We Are Not</h2>
              <ul className="space-y-3 text-brown-300 mb-8">
                <li className="flex items-start">
                  <span className="text-brown-500 mr-2">•</span>
                  <span>An inspector</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brown-500 mr-2">•</span>
                  <span>A certifying body</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brown-500 mr-2">•</span>
                  <span>A regulator</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brown-500 mr-2">•</span>
                  <span>A legal advisor</span>
                </li>
              </ul>
              
              <div className="bg-brown-900 border-l-4 border-warm-500 p-6 mt-12">
                <p className="text-brown-50 font-medium mb-2">Jurisdiction</p>
                <p className="text-brown-300">
                  We operate within Ontario jurisdiction, handling compliance requirements for WSIB, ESA, and municipal building permits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
