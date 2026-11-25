
import Link from "next/link";
import { notFound } from "next/navigation";
import { bikes } from "../bikes";

export function generateStaticParams() {
  return bikes.map((bike) => ({
    id: bike.id,
  }));
}

export default async function BikeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const bike = bikes.find((item) => item.id === id);

  if (!bike) {
    notFound();
  }

  return (
    <main className="min-h-screen px-5 py-12 sm:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/bikes-for-sale"
          className="mb-10 inline-block text-base font-semibold tracking-widest text-[#d9772a] transition hover:opacity-70"
        >
          ← BACK TO BIKES FOR SALE
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-sm bg-black">
              <img
                src={bike.images[0]}
                alt={bike.name}
                className="w-full object-contain"
              />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {bike.images.slice(1).map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-sm bg-black"
                >
                  <img
                    src={image}
                    alt={`${bike.name} photo ${index + 2}`}
                    className="aspect-square w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-10 lg:self-start">
            <div className="rounded-sm border border-[#d9772a]/40 bg-[#080604]/95 p-6 shadow-2xl sm:p-8">
              <p className="mb-4 text-base font-semibold tracking-[0.25em] text-[#d9772a]">
                {bike.year}
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-wide text-[#d9772a] sm:text-5xl">
                {bike.name}
              </h1>

              <p className="mt-6 text-4xl font-bold tracking-wide text-[#d9772a] sm:text-5xl">
                ${bike.price.toLocaleString("en-US")}
              </p>

              <div className="my-8 border-y border-[#d9772a]/50 py-5">
                <div className="flex justify-between gap-4 py-3">
                  <span className="text-lg font-semibold text-[#d9772a]">
                    Frame size
                  </span>
                  <span className="text-lg font-bold text-[#d9772a]">
                    {bike.size}
                  </span>
                </div>

                <div className="flex justify-between gap-4 py-3">
                  <span className="text-lg font-semibold text-[#d9772a]">
                    Condition
                  </span>
                  <span className="text-lg font-bold text-[#d9772a]">
                    {bike.condition}
                  </span>
                </div>
              </div>

              <h2 className="mb-4 text-2xl font-bold tracking-[0.15em] text-[#d9772a]">
                DESCRIPTION
              </h2>

              <p className="text-lg leading-relaxed font-medium text-[#d9772a]">
                {bike.description}
              </p>

              <h2 className="mb-5 mt-10 text-2xl font-bold tracking-[0.15em] text-[#d9772a]">
                SPECIFICATIONS
              </h2>

              <ul className="space-y-4">
                {bike.specifications.map((specification) => (
                  <li
                    key={specification}
                    className="border-b border-[#d9772a]/30 pb-4 text-lg font-medium text-[#d9772a]"
                  >
                    {specification}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:info@visivelo.com?subject=${encodeURIComponent(bike.year + " " + bike.name)}`}
                className="mt-10 block rounded-full border border-white bg-white px-8 py-5 text-center text-base font-bold tracking-[0.15em] text-[#d9772a] transition hover:bg-[#d9772a] hover:text-black"
              >
                INQUIRE ABOUT THIS BIKE
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

