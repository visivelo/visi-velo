import Link from "next/link";
import { bikes } from "../data/bikes";

export default function BikesForSalePage() {
  return (
    <main className="relative min-h-screen text-white">
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-center text-6xl tracking-widest text-[#d9772a]">
            Bikes For Sale
          </h1>

          <div className="mt-20 grid gap-12 sm:grid-cols-2 xl:grid-cols-3">
            {bikes.map((bike) => (
              <Link
                key={bike.id}
                href={`/bikes-for-sale/${bike.id}`}
                className="group"
              >
                <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={bike.coverImage}
                      alt={bike.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <h2 className="mt-4 text-center text-xl text-[#d9772a]">
                  {bike.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}