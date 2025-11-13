import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/80 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <p className="uppercase tracking-widest text-xs text-white/70 mb-3">Interior Design Studio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">Transforming Spaces into Dreams</h1>
          <p className="mt-4 text-lg text-white/80">Bespoke interiors, custom furniture, and end-to-end project management crafted for modern living.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-6 py-3 rounded-md bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition">Get a Free Consultation</a>
            <a href="#portfolio" className="px-6 py-3 rounded-md bg-white/10 text-white hover:bg-white/20 transition">View Recent Work</a>
          </div>
        </div>
      </div>
    </section>
  )
}
