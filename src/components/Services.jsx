import { Ruler, Sofa, Hammer } from 'lucide-react'

const services = [
  { icon: Ruler, title: 'Design Consultation', desc: 'Personalized design guidance tailored to your lifestyle.' },
  { icon: Sofa, title: 'Custom Furniture', desc: 'Bespoke pieces crafted to fit your space and taste.' },
  { icon: Hammer, title: 'Project Management', desc: 'End-to-end execution with timelines and budgets in control.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-zinc-950 text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Services</h2>
        <p className="text-zinc-400 mt-2">Expertise across concept, craft, and completion.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition">
              <Icon className="text-emerald-400" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="text-sm text-zinc-400 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
