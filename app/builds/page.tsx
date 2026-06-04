import Link from "next/link"
import { Builds } from "@/data/Builds"

export default function BuildsPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* background split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />

        <div
          className="absolute inset-0 bg-[#c8b6ff]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 70%)"
          }}
        />
      </div>

      {/* content */}
      <div className="relative z-10 px-8 py-20">

        <h1 className="text-white text-5xl md:text-7xl font-serif text-center mb-16">
          Builds
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {Builds.map((b) => (
            <Link
              key={b.slug}
              href={`/builds/${b.slug}`}
              className="group"
            >
              <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 backdrop-blur">

                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={b.heroImage}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5 text-white">
                  <h2 className="text-xl font-medium">{b.title}</h2>
                  <p className="text-sm text-white/70 mt-1">
                    {b.subtitle}
                  </p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}