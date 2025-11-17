import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#60a5fa,transparent_25%),radial-gradient(circle_at_80%_30%,#22d3ee,transparent_25%)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Avalast OÜ • Estonia
          </span>
          <h1 className="mt-6 text-4xl lg:text-6xl font-extrabold leading-tight">
            Industrial and Technical Services
            <span className="block text-emerald-400">Built on Safety and Quality</span>
          </h1>
          <p className="mt-6 text-lg text-slate-200 max-w-xl">
            We deliver reliable electrical, HVAC and industrial installation services for commercial and public sector clients across Estonia.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors">Request a Quote</a>
            <a href="#services" className="px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors">Our Services</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-white/5 backdrop-blur rounded-2xl p-6 ring-1 ring-white/10">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-emerald-500/20 to-sky-500/20 grid place-items-center">
            <div className="text-center">
              <p className="text-6xl">⚡️</p>
              <p className="mt-2 text-slate-200">Certified professionals • On-time delivery • Transparent pricing</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
