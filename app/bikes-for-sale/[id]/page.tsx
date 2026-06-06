import { bikes } from "../../data/bikes";
import { notFound } from "next/navigation";

export default function BikeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const bike = bikes.find((b) => b.id === params.id);

  if (!bike) return notFound();

  return (
    <main className="relative min-h-screen text-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-5xl tracking-widest text-[#d9772a] text-center">
          {bike.title}
        </h1>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-xl border border-white/10">
            <img
              src={bike.coverImage}
              alt={bike.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col gap-4">
            <p className="text-white/80">{bike.description}</p>

            <div className="text-[#d9772a] text-2xl">
              {bike.price}
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {bike.images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg border border-white/10 group"
            >
              <img
                src={img}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}