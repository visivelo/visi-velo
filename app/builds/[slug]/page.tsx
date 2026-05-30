import { builds } from "@/data/builds"
import { notFound } from "next/navigation"

export default async function BuildDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const build = builds.find((b) => b.slug === slug)

  if (!build) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative h-[70vh]">
        <img
          src={build.heroImage}
          alt={build.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-end p-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif">
              {build.title}
            </h1>

            {build.subtitle && (
              <p className="text-white/70 mt-2">
                {build.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-lg text-white/80 leading-relaxed">
          {build.description}
        </p>
      </div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {build.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${build.title} ${i + 1}`}
              className="w-full rounded-xl aspect-[4/3] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  )
}