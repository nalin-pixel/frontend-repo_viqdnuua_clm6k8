import { useEffect, useState } from 'react'

export default function Portfolio() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/projects`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Recent Work</h2>
            <p className="text-zinc-400 mt-2">Before/after transformations and case studies.</p>
          </div>
          <a href="#contact" className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20">Start a Project</a>
        </div>
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"><div className="grid gap-4">
          {items.map(p => (
            <article key={p.id} className="break-inside-avoid group rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[4/3] bg-zinc-800">
                {p.after_image_url ? (
                  <img src={p.after_image_url} alt={`After ${p.title}`} loading="lazy" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-zinc-500 text-sm">Project</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-zinc-400 text-sm line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                  <span>{p.style || 'Style'}</span>
                  <span>{p.duration_weeks ? `${p.duration_weeks} weeks` : 'Timeline'}</span>
                </div>
                <div className="mt-3">
                  <a href="#" className="text-emerald-400 hover:text-emerald-300">View Full Project →</a>
                </div>
              </div>
            </article>
          ))}
        </div></div>
      </div>
    </section>
  )
}
