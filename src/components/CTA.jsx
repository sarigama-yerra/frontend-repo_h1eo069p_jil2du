function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 p-1">
          <div className="rounded-3xl bg-white p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">See how Liftu can grow your revenue</h3>
              <p className="mt-2 text-slate-600">Join thousands of operators using Liftu to increase LTV, improve attribution, and centralize growth.</p>
            </div>
            <form className="grid sm:grid-cols-3 gap-3">
              <input type="email" placeholder="Work email" className="sm:col-span-2 w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <button className="rounded-lg bg-slate-900 px-5 py-3 text-white hover:bg-slate-800">Get a demo</button>
              <p className="sm:col-span-3 text-xs text-slate-500">By signing up, you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
