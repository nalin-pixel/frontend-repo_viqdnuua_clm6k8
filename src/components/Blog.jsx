import { useEffect, useState } from 'react'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/blogposts?published=true&keyword=custom%20home%20interiors`)
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Insights & Ideas</h2>
        <p className="text-zinc-400 mt-2">Explore trends in custom home interiors, furniture, and decor.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.id} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              {p.cover_image_url && (
                <img src={p.cover_image_url} alt={p.title} loading="lazy" className="w-full aspect-[16/9] object-cover" />
              )}
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-zinc-400 text-sm line-clamp-2">{p.excerpt}</p>
                <div className="mt-3">
                  <a href={`#/blog/${p.slug}`} className="text-emerald-400 hover:text-emerald-300">Read More →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
