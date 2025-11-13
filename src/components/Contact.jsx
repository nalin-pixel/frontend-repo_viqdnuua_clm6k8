import { useState } from 'react'

export default function Contact() {
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [form, setForm] = useState({ name: '', email: '', phone: '', project_details: '', consent: true })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('Thank you! We will contact you shortly.')
        setForm({ name: '', email: '', phone: '', project_details: '', consent: true })
      } else {
        setStatus(data.detail || 'Something went wrong')
      }
    } catch (e) {
      setStatus(e.message)
    }
  }

  return (
    <section id="contact" className="py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Book a Consultation</h2>
            <p className="text-zinc-400 mt-2">Tell us about your project and we’ll get back within 24 hours.</p>
            <form onSubmit={submit} className="mt-8 grid gap-4">
              <input required placeholder="Name" className="bg-zinc-900 border border-white/10 rounded px-4 py-3" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} />
              <input required type="email" placeholder="Email" className="bg-zinc-900 border border-white/10 rounded px-4 py-3" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
              <input placeholder="Phone" className="bg-zinc-900 border border-white/10 rounded px-4 py-3" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
              <textarea placeholder="Project details" rows={5} className="bg-zinc-900 border border-white/10 rounded px-4 py-3" value={form.project_details} onChange={e=>setForm({...form, project_details:e.target.value})} />
              <label className="text-sm text-zinc-400 flex items-center gap-2"><input type="checkbox" checked={form.consent} onChange={e=>setForm({...form, consent:e.target.checked})} /> I consent to being contacted.</label>
              <button className="mt-2 px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-700 font-semibold">Send</button>
              {status && <p className="text-sm text-zinc-400">{status}</p>}
            </form>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Visit Our Studio</h3>
            <p className="text-zinc-400 mt-2">123 Skyline Ave, Suite 1802, Metropolis</p>
            <div className="mt-6">
              <a href="tel:+1234567890" className="text-emerald-400">+1 (234) 567-890</a>
              <p className="text-zinc-400">hello@dreamspace.design</p>
              <div className="mt-6 text-sm text-zinc-500">SSL secured • We never share your data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
