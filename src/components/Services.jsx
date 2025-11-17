import { Wrench, Zap, Thermometer, ShieldCheck } from 'lucide-react'

const services = [
  { icon: Wrench, title: 'Industrial Installations', description: 'Assembly, maintenance and optimization of industrial systems and production lines.' },
  { icon: Zap, title: 'Electrical Works', description: 'Certified electrical installations, upgrades and inspections for commercial sites.' },
  { icon: Thermometer, title: 'HVAC & Ventilation', description: 'Design, installation and servicing of heating, ventilation and air conditioning.' },
  { icon: ShieldCheck, title: 'Maintenance & Support', description: 'Preventive maintenance, rapid response and SLA-based support.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Full-service partner for electrical, mechanical and HVAC works across Estonia.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({icon: Icon, title, description}) => (
            <div key={title} className="p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
              <Icon className="w-8 h-8 text-emerald-600" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
