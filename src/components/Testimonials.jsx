import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/testimonials?min_rating=4`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Client Testimonials</h2>
        <p className="text-zinc-400 mt-2">Authentic feedback from finished projects.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(t => (
            <figure key={t.id} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <blockquote className="italic text-zinc-300">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-zinc-400">
                <span className="text-white font-medium">{t.client_name}</span> • {t.project_type || 'Interior Project'} • {Array.from({length: t.rating}).map((_,i)=>'★').join('')}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
