export default function WhyUs() {
  const points = [
    { title: 'Certified & Compliant', desc: 'Work performed to Estonian and EU standards with full documentation.' },
    { title: 'Safety First', desc: 'Strict adherence to safety protocols and site procedures.' },
    { title: 'Transparent Pricing', desc: 'Clear quotations and no surprise extras.' },
    { title: 'On-Time Delivery', desc: 'Experienced crews and project management that keep schedules on track.' },
  ]
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why choose Avalast?</h2>
          <p className="mt-3 text-slate-600">We combine craftsmanship with modern project discipline.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {points.map(p => (
            <div key={p.title} className="p-6 rounded-xl bg-white border border-slate-200">
              <h3 className="font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
