import { useEffect, useState, useMemo } from 'react'

export default function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('all')
  const [room, setRoom] = useState('all')

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const params = new URLSearchParams()
        if (category !== 'all') params.set('category', category)
        if (room !== 'all') params.set('room_type', room)
        const res = await fetch(`${baseUrl}/api/products?${params.toString()}`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [category, room])

  const categories = useMemo(() => ['all', 'furniture', 'decor', 'lighting'], [])
  const rooms = useMemo(() => ['all', 'living room', 'bedroom', 'kitchen'], [])

  return (
    <section id="products" className="py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">In-house Products</h2>
            <p className="text-zinc-400 mt-2">Crafted essentials with a professional e-commerce feel.</p>
          </div>
          <div className="flex gap-3">
            <select value={category} onChange={e=>setCategory(e.target.value)} className="bg-zinc-900 border border-white/10 rounded px-3 py-2 text-sm">
              {categories.map(c=> <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={room} onChange={e=>setRoom(e.target.value)} className="bg-zinc-900 border border-white/10 rounded px-3 py-2 text-sm">
              {rooms.map(r=> <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
        </div>

        {loading ? (
          <p className="mt-10 text-zinc-400">Loading products…</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(p => (
              <article key={p.id} className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden">
                <div className="aspect-[4/3] bg-zinc-800">
                  {p.image_url ? (
                    <img src={p.image_url} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-zinc-500 text-sm">No image</div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-zinc-400 text-sm line-clamp-2">{p.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-emerald-400 font-semibold">${'{'}p.price{'}'}</span>
                    <button className="text-sm px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-700">{p.in_stock ? 'Add to Cart' : 'Inquire'}</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
