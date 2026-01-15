export default function Disclaimers() {
  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-1 mb-8">Disclaimers</h1>
            
            <div className="prose prose-slate max-w-none space-y-6">
              <section>
                <h2 className="heading-2 mt-12 mb-4">Nature of Service</h2>
                <p className="text-slate-700">
                  Ground Work Compliance is an administrative service provider. We act as an authorized administrative agent 
                  for compliance operations. We are not a regulatory body, certifying authority, inspector, or legal advisor.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">No Guarantees</h2>
                <p className="text-slate-700 mb-4">
                  We do not guarantee:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li>• Approval of permits, clearances, or certifications</li>
                  <li>• Specific timelines for regulatory processing</li>
                  <li>• Outcomes of inspections or audits</li>
                </ul>
                <p className="text-slate-700 mt-4">
                  All approvals and certifications are made solely by the relevant regulatory authorities.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Regulatory Authority</h2>
                <p className="text-slate-700">
                  WSIB clearances, ESA permits, and building permits are issued by their respective authorities:
                  Workers' Safety and Insurance Board, Electrical Safety Authority, and municipal building departments.
                  We facilitate submissions and communications but do not issue approvals.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Not Legal or Professional Advice</h2>
                <p className="text-slate-700">
                  Our services do not constitute legal, engineering, or professional advice. For legal or technical matters, 
                  consult with qualified professionals. We provide administrative support only.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Client Responsibility</h2>
                <p className="text-slate-700">
                  Clients remain responsible for compliance with all applicable laws, regulations, and building codes. 
                  Our services assist with administrative tasks but do not relieve clients of their compliance obligations.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Jurisdiction</h2>
                <p className="text-slate-700">
                  Our services are designed for Ontario jurisdiction. Requirements and processes may differ in other jurisdictions. 
                  We do not provide services outside Ontario.
                </p>
              </section>

              <section>
                <h2 className="heading-2 mt-12 mb-4">Accuracy of Information</h2>
                <p className="text-slate-700">
                  While we strive for accuracy, we rely on information provided by clients and regulatory authorities. 
                  We are not responsible for errors in information provided by third parties or for changes in regulatory requirements.
                </p>
              </section>

              <div className="bg-slate-50 border-l-4 border-slate-600 p-6 mt-12">
                <p className="text-slate-900 font-medium mb-2">Acknowledgment</p>
                <p className="text-slate-700">
                  By using our services, you acknowledge that you have read and understand these disclaimers. 
                  You agree that Ground Work Compliance's role is limited to administrative services as described.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
