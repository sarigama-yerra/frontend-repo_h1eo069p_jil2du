import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-black">L</div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">Liftu</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#proof" className="hover:text-slate-900">Customers</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#faq" className="hover:text-slate-900">FAQ</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100">Log in</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">Get started</a>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-slate-100">
            <Menu className="h-5 w-5 text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
