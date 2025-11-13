import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Products from './components/Products'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    // Google Analytics placeholder - replace with your GA ID
    const GA_ID = import.meta.env.VITE_GA_ID
    if (!GA_ID) return
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    document.head.appendChild(script)
    window.dataLayer = window.dataLayer || []
    function gtag(){window.dataLayer.push(arguments)}
    gtag('js', new Date())
    gtag('config', GA_ID)
  }, [])

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100" id="top">
      {/* SEO basics */}
      <meta name="description" content="Custom home interiors studio offering design consultation, bespoke furniture, and project management." />
      <meta name="keywords" content="custom home interiors, interior design, bespoke furniture, modern living, decor" />

      <Navbar theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <main className="pt-16">
        <Hero />
        <Services />
        <Products />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <footer className="bg-black text-white/80">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-white">DreamSpace</h4>
            <p className="text-sm text-white/60 mt-2">A modern interior design studio crafting elevated, liveable spaces.</p>
          </div>
          <nav className="grid gap-1 text-sm">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div>
            <p className="text-sm">Newsletter</p>
            <form className="mt-2 flex gap-2">
              <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/10" />
              <button className="px-3 py-2 rounded bg-emerald-600 hover:bg-emerald-700">Join</button>
            </form>
          </div>
          <div className="text-sm text-white/60">
            <p>© {new Date().getFullYear()} DreamSpace Design</p>
            <p className="mt-2">Follow: Instagram • Pinterest • LinkedIn</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
