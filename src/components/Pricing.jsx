function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, scalable pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade as you grow. All plans include unlimited seats.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$0', tagline: 'Get going fast', features: ['Up to 2k contacts', 'Email campaigns', 'Basic reporting']
          },{
            name: 'Growth', price: '$79', tagline: 'Best for scaling brands', features: ['50k contacts', 'Email & SMS', 'Attribution & LTV']
          },{
            name: 'Scale', price: 'Custom', tagline: 'For advanced teams', features: ['Unlimited contacts', 'All channels', 'Premium support']
          }].map(plan => (
            <div key={plan.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
                <div className="text-2xl font-bold text-slate-900">{plan.price}<span className="text-sm font-normal text-slate-500">/mo</span></div>
              </div>
              <p className="mt-1 text-sm text-slate-600">{plan.tagline}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {plan.features.map(f => (<li key={f} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>{f}</li>))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-white hover:bg-slate-800">Choose {plan.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
