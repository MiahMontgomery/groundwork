export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-slate max-w-none space-y-6">
              <p className="text-slate-700">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <section>
                <h2 className="heading-2 mt-12 mb-4">Information We Collect</h2>
                <p className="text-slate-700 mb-4">
                  We collect information necessary to provide compliance operations services, including:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Company and contact information</li>
                  <li>• Project details and addresses</li>
                  <li>• Compliance documents and certificates</li>
                  <li>• Authorization agreements</li>
                  <li>• Communication records with regulatory bodies</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">How We Use Your Information</h2>
                <p className="text-slate-700 mb-4">
                  We use collected information to:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Submit documents to regulatory authorities on your behalf</li>
                  <li>• Manage renewals and track expiry dates</li>
                  <li>• Coordinate with subcontractors</li>
                  <li>• Provide compliance status reports</li>
                  <li>• Communicate with you about your account</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Information Sharing</h2>
                <p className="text-slate-700">
                  We share information only as necessary to perform our services, including with:
                  regulatory authorities (WSIB, ESA, municipalities), 
                  and service providers who assist in our operations. We do not sell your information.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Data Security</h2>
                <p className="text-slate-700">
                  We implement appropriate technical and organizational measures to protect your information. 
                  However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Your Rights</h2>
                <p className="text-slate-700 mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Access your personal information</li>
                  <li>• Request corrections to inaccurate information</li>
                  <li>• Request deletion of your information (subject to legal obligations)</li>
                  <li>• Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Contact</h2>
                <p className="text-slate-700">
                  For questions about this privacy policy, contact us through our{' '}
                  <a href="/contact" className="text-gold-600 hover:underline">contact page</a>.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
