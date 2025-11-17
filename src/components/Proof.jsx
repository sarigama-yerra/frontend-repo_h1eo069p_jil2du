function Proof() {
  const logos = ['Nova', 'Helio', 'Orion', 'Vertex', 'Flux'];
  return (
    <section id="proof" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium tracking-wider text-slate-500 uppercase">Trusted by modern D2C teams</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center opacity-80">
          {logos.map((name) => (
            <div key={name} className="h-10 rounded-md bg-slate-100 grid place-items-center text-slate-500 text-sm">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proof
