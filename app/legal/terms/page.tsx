export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 mb-8">Terms of Service</h1>
            
            <div className="prose prose-slate max-w-none space-y-6">
              <p className="text-slate-700">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              
              <section>
                <h2 className="heading-2 mt-12 mb-4">Service Description</h2>
                <p className="text-slate-700">
                  Ground Work Compliance provides administrative services for construction compliance management. 
                  We act as an authorized administrative agent, handling document submissions, renewals, and compliance tracking on your behalf.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Authorization</h2>
                <p className="text-slate-700 mb-4">
                  By using our services, you authorize us to:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Submit documents to regulatory authorities on your behalf</li>
                  <li>• Communicate with authorities regarding your compliance matters</li>
                  <li>• Receive notices and correspondence from regulatory bodies</li>
                  <li>• Manage renewals and track compliance deadlines</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Client Responsibilities</h2>
                <p className="text-slate-700 mb-4">
                  You are responsible for:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Providing accurate and complete information</li>
                  <li>• Supplying required documents in a timely manner</li>
                  <li>• Maintaining appropriate insurance and licenses</li>
                  <li>• Complying with all applicable laws and regulations</li>
                  <li>• Reviewing and approving submissions before we file them</li>
                </ul>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Limitations of Service</h2>
                <p className="text-slate-700">
                  We are not a certifying authority, regulator, or legal advisor. We do not guarantee approvals, 
                  certifications, or outcomes. All approvals and certifications are issued by the relevant authorities.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Payment Terms</h2>
                <p className="text-slate-700">
                  Service plans are billed monthly. One-off services are billed upon completion. 
                  Payment is due within 30 days of invoice date. Late payments may result in service suspension.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Termination</h2>
                <p className="text-slate-700">
                  Either party may terminate service with 30 days written notice. Upon termination, 
                  we will provide you with copies of your documents and compliance records.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Limitation of Liability</h2>
                <p className="text-slate-700">
                  Our liability is limited to the amount paid for services in the 12 months preceding any claim. 
                  We are not liable for delays, rejections, or outcomes determined by regulatory authorities.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Contact</h2>
                <p className="text-slate-700">
                  For questions about these terms, contact us through our{' '}
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
