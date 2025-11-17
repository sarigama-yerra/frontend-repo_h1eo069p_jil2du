import { BarChart3, Mail, Megaphone, Users, Zap } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: <Mail className="h-5 w-5" />, 
      title: 'Email & SMS automation',
      desc: 'Prebuilt flows for welcome, abandon, winback, and VIP across email and SMS.'
    },
    {
      icon: <Megaphone className="h-5 w-5" />, 
      title: 'Influencer & UGC tracking',
      desc: 'Affiliate links, coupon codes, and performance dashboards — all in one.'
    },
    {
      icon: <BarChart3 className="h-5 w-5" />, 
      title: 'Ads + revenue attribution',
      desc: 'Unified ROAS across Meta, Google, and TikTok with first‑party tracking.'
    },
    {
      icon: <Users className="h-5 w-5" />, 
      title: 'Customer cohorts & LTV',
      desc: 'Understand retention, LTV, and payback by channel, product, or cohort.'
    },
    {
      icon: <Zap className="h-5 w-5" />, 
      title: 'Playbooks that scale',
      desc: 'Turn top‑performing campaigns into reusable templates for your team.'
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Everything you need to grow</h2>
          <p className="mt-3 text-slate-600">Liftu replaces a patchwork of tools with one connected platform purpose‑built for D2C brands.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 grid place-items-center">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
