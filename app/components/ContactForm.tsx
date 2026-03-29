'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', address: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="psi-form" onSubmit={handleSubmit}>
      <div className="psi-form-row">
        <div className="psi-field">
          <label htmlFor="name">Full Name</label>
          <input id="name" type="text" placeholder="Jane Smith" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="psi-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="jane@example.com" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div className="psi-form-row">
        <div className="psi-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" placeholder="(555) 000-0000" value={formData.phone} onChange={handleChange} />
        </div>
        <div className="psi-field">
          <label htmlFor="service">Service Needed</label>
          <select id="service" value={formData.service} onChange={handleChange} required>
            <option value="" disabled>Select a service</option>
            <option>Real Estate Photography</option>
            <option>Real Estate Videography</option>
            <option>Roofing Inspection Video</option>
            <option>Photo + Video Package</option>
            <option>Other / Not Sure</option>
          </select>
        </div>
      </div>
      <div className="psi-field">
        <label htmlFor="address">Property Address</label>
        <input id="address" type="text" placeholder="123 Main St, City, State" value={formData.address} onChange={handleChange} />
      </div>
      <div className="psi-field">
        <label htmlFor="message">Additional Details</label>
        <textarea id="message" placeholder="Tell us about the property, any specific shots needed, or your timeline..." value={formData.message} onChange={handleChange} />
      </div>

      {status === 'success' && (
        <div className="psi-form-success">Request sent — we will be in touch shortly.</div>
      )}
      {status === 'error' && (
        <div className="psi-form-error">Something went wrong. Please try again or call us directly.</div>
      )}

      <button type="submit" className="psi-btn-submit" disabled={status === 'sending' || status === 'success'}>
        {status === 'sending' ? 'Sending...' : status === 'success' ? 'Request Sent' : 'Send Request'}
        {status !== 'sending' && status !== 'success' && (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </form>
  )
}
