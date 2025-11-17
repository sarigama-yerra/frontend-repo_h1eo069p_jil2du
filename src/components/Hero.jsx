function Hero() {
  return (
    <section className="relative isolate pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
              <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              New: All‑in‑one growth platform for D2C brands
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Grow your D2C brand with one unified marketing tool
            </h1>
            <p className="mt-4 text-lg leading-7 text-slate-600">
              Liftu unifies email, SMS, influencer, and ads reporting so you can launch faster, optimize smarter, and scale profitably — without juggling five tools.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">
                Start free trial
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 text-slate-800 hover:bg-slate-50">
                Watch 2‑min demo
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-500">No credit card required • 14‑day free trial</div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="aspect-[16/10] w-full rounded-xl bg-gradient-to-br from-indigo-50 via-sky-50 to-blue-50 grid place-items-center text-slate-500">
                <div className="text-center px-6">
                  <div className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-blue-600 to-indigo-600">Liftu</div>
                  <p className="mt-2 text-sm">Unified dashboard for campaigns, revenue, and LTV</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
