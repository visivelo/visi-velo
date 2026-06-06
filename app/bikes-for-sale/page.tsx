export default function BikesForSalePage() {
  const bikes = [
    {
      title: "",
      coverImage: "",
      gallery: [],
    },
    {
      title: "",
      coverImage: "",
      gallery: [],
    },
    {
      title: "",
      coverImage: "",
      gallery: [],
    },
  ];

  return (
    <main className="relative min-h-screen text-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-6xl tracking-widest text-[#d9772a]">
            Bikes For Sale
          </h1>

          <div className="mt-20 grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
            {bikes.map((bike, index) => (
              <article key={index}>
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-black/20">
                  <div className="aspect-[4/3] overflow-hidden">
                    {bike.coverImage ? (
                      <img
                        src={bike.coverImage}
                        alt={bike.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full" />
                    )}
                  </div>
                </div>

                <h2 className="mt-4 text-center text-xl text-[#d9772a]">
                  {bike.title}
                </h2>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}