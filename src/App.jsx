import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Proof from './components/Proof'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <Proof />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-black">L</div>
            <span className="text-sm font-semibold tracking-tight text-slate-900">Liftu</span>
          </a>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Liftu, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
