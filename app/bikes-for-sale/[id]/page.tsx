
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
          className="mb-10 inline-block text-sm tracking-widest text-white/70 transition hover:text-[#d9772a]"
        >
          ← BACK TO BIKES FOR SALE
        </Link>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden bg-black">
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
                  className="overflow-hidden bg-black"
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
            <p className="mb-3 tracking-widest text-[#d9772a]">
              {bike.year}
            </p>

            <h1 className="text-3xl font-medium tracking-wide text-[#d9772a] sm:text-4xl">
              {bike.name}
            </h1>

            <p className="mt-5 text-3xl font-semibold text-white">
              ${bike.price.toLocaleString("en-US")}
            </p>

            <div className="my-8 border-y border-white/20 py-5">
              <div className="flex justify-between py-2">
                <span className="text-white/60">Frame size</span>
                <span className="text-white">{bike.size}</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-white/60">Condition</span>
                <span className="text-white">{bike.condition}</span>
              </div>
            </div>

            <h2 className="mb-4 text-xl tracking-widest text-[#d9772a]">
              DESCRIPTION
            </h2>

            <p className="leading-relaxed text-white/85">
              {bike.description}
            </p>

            <h2 className="mb-4 mt-8 text-xl tracking-widest text-[#d9772a]">
              SPECIFICATIONS
            </h2>

            <ul className="space-y-3">
              {bike.specifications.map((specification) => (
                <li
                  key={specification}
                  className="border-b border-white/10 pb-3 text-white/85"
                >
                  {specification}
                </li>
              ))}
            </ul>

            <a
              href="mailto:info@visivelo.com?subject=1996%20Specialized%20Stumpjumper%20M2"
              className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-widest text-black transition hover:text-[#d9772a]"
            >
              INQUIRE ABOUT THIS BIKE
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
