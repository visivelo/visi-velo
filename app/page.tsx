export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6">

      {/* HERO */}
      <section className="flex min-h-[80vh] flex-col items-center justify-center text-center">

        <h1 className="text-6xl md:text-8xl font-semibold tracking-[0.2em] text-[#d9772a] uppercase">
          viši velo
        </h1>

        <p className="mt-6 max-w-2xl text-lg">
          Bicycle atelier focused on precision service, restoration, and mechanical refinement.
        </p>

        <div className="mt-10 flex gap-4">
          <a className="rounded-full bg-white px-6 py-3 text-black font-semibold" href="/service">
            Book Service
          </a>
          <a className="rounded-full border border-white/20 px-6 py-3" href="/restorations">
            View Work
          </a>
        </div>

      </section>

      {/* SERVICE */}
      <section className="border-t border-white/10 py-24">

        <h2 className="text-3xl tracking-[0.2em] text-[#d9772a] uppercase">
          Service & Restorations
        </h2>

        <p className="mt-6 max-w-2xl">
          High precision mechanical service, drivetrain optimization, wheel systems, and full rebuilds.
        </p>

      </section>

    </main>
  );
}