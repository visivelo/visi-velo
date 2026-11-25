
import Link from "next/link";
import { bikes } from "./bikes";

export default function BikesForSalePage() {
  return (
    <main className="min-h-screen bg-black px-5 py-16 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-medium tracking-widest text-[#d9772a] sm:text-5xl">
            Bikes for Sale
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Carefully selected bicycles from viši velo.
          </p>
        </div>

        {bikes.length === 0 ? (
          <p className="py-20 text-center text-white/70">
            No bikes currently listed. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bikes.map((bike) => (
              <Link
                key={bike.id}
                href={`/bikes-for-sale/${bike.id}`}
                className="group overflow-hidden rounded-sm border border-white/15 bg-black transition hover:border-[#d9772a]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={bike.images[0]}
                    alt={bike.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-2 text-sm tracking-widest text-[#d9772a]">
                        {bike.year}
                      </p>
                      <h2 className="text-xl font-medium text-white">
                        {bike.name}
                      </h2>
                    </div>

                    <p className="whitespace-nowrap text-xl font-semibold text-[#d9772a]">
                      ${bike.price.toLocaleString("en-US")}
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-white/70">
                    {bike.size} frame · {bike.condition}
                  </p>

                  <p className="mt-5 text-sm tracking-widest text-white transition group-hover:text-[#d9772a]">
                    VIEW DETAILS →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
