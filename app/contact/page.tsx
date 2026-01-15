'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    type: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-brown-950">
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="heading-1 mb-6">Thank You</h1>
              <p className="text-body mb-8">
                We've received your request. We'll be in touch within 24 hours to discuss your compliance needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brown-950">
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h1 className="heading-1 mb-4">Request Evaluation</h1>
            <p className="text-body mb-8">
              Tell us about your compliance needs. We'll evaluate your requirements and recommend the appropriate service plan.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brown-50 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-brown-700 rounded focus:outline-none focus:ring-2 focus:ring-warm-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brown-50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-brown-700 rounded focus:outline-none focus:ring-2 focus:ring-warm-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-brown-50 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2 border border-brown-700 rounded focus:outline-none focus:ring-2 focus:ring-warm-500"
                />
              </div>

              <div>
                <label htmlFor="type" className="block text-sm font-medium text-brown-50 mb-2">
                  I am a
                </label>
                <select
                  id="type"
                  required
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-2 border border-brown-700 rounded focus:outline-none focus:ring-2 focus:ring-warm-500"
                >
                  <option value="">Select...</option>
                  <option value="contractor">Contractor</option>
                  <option value="gc">General Contractor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brown-50 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-brown-700 rounded focus:outline-none focus:ring-2 focus:ring-warm-500"
                  placeholder="What compliance challenges are you facing? How many projects do you typically manage?"
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
