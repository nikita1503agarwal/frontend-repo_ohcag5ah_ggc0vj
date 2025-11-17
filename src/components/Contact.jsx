import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone') || undefined,
      company: form.get('company') || undefined,
      subject: form.get('subject'),
      message: form.get('message'),
      consent: !!form.get('consent')
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus({ ok: true, msg: 'Thanks! We will get back to you shortly.' })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({ ok: false, msg: 'Could not send right now. Please try again later.' })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get a quote</h2>
          <p className="mt-3 text-slate-600">Tell us about your project and we’ll respond within one business day.</p>
          <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200">
            <p className="text-slate-700"><span className="font-semibold">Email:</span> info@avalast.ee</p>
            <p className="text-slate-700 mt-2"><span className="font-semibold">Phone:</span> +372 0000 000</p>
            <p className="text-slate-700 mt-2"><span className="font-semibold">Location:</span> Tallinn, Estonia</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Company</label>
              <input name="company" className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Subject</label>
              <input name="subject" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea name="message" rows="4" required className="mt-1 w-full rounded-md border-slate-300 focus:ring-emerald-500 focus:border-emerald-500" />
            </div>
            <div className="sm:col-span-2 flex items-center gap-2">
              <input id="consent" name="consent" type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
              <label htmlFor="consent" className="text-sm text-slate-600">I agree to the processing of my data for the purpose of this enquiry.</label>
            </div>
          </div>
          <button type="submit" className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-md">Send</button>
          {status && (
            <p className={`mt-3 text-sm ${status.ok ? 'text-emerald-700' : 'text-red-600'}`}>{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  )
}
