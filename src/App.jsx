import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold text-lg">Avalast<span className="text-emerald-600">.ee</span></a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#services" className="hover:text-emerald-600">Services</a>
            <a href="#why" className="hover:text-emerald-600">Why us</a>
            <a href="#contact" className="hover:text-emerald-600">Contact</a>
            <a href="/test" className="hover:text-emerald-600">Status</a>
          </nav>
          <a href="#contact" className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-semibold">Get a quote</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="services"><Services /></div>
        <div id="why"><WhyUs /></div>
        <Contact />
      </main>

      <footer className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Avalast OÜ. All rights reserved.</p>
          <p>Operating in Estonia • Estonian / English / Russian</p>
        </div>
      </footer>
    </div>
  )
}

export default App
