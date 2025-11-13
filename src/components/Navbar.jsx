import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, Phone, ShoppingCart } from 'lucide-react'

export default function Navbar({ onToggleTheme, theme }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const navItem = (href, label) => (
    <a href={href} className="px-3 py-2 text-sm font-medium text-zinc-200 hover:text-white hover:opacity-100 opacity-80">
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden text-zinc-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <Menu size={22} />
            </button>
            <a href="#top" className="text-white font-semibold tracking-wide text-lg">DreamSpace</a>
            <span className="hidden md:inline text-xs text-zinc-400 border border-white/10 rounded px-2 py-0.5">Interior Studio</span>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {navItem('#home','Home')}
            {navItem('#services','Services')}
            {navItem('#products','Products')}
            {navItem('#portfolio','Portfolio')}
            {navItem('#testimonials','Testimonials')}
            {navItem('#blog','Blog')}
            {navItem('#contact','Contact')}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/90 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-md border border-white/10 transition">
              <Phone size={16} /> Book Consultation
            </a>
            <button className="relative text-zinc-200 hover:text-white hidden md:inline-flex" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 text-[10px] bg-emerald-500 text-white rounded-full px-1.5">0</span>
            </button>
            <button onClick={onToggleTheme} className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-zinc-200" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden pb-4 animate-in slide-in-from-top-2">
            <nav className="grid gap-1">
              {navItem('#home','Home')}
              {navItem('#services','Services')}
              {navItem('#products','Products')}
              {navItem('#portfolio','Portfolio')}
              {navItem('#testimonials','Testimonials')}
              {navItem('#blog','Blog')}
              {navItem('#contact','Contact')}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
