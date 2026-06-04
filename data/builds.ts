export type BikeBuild = {
  slug: string
  title: string
  subtitle?: string
  description: string
  heroImage: string
  gallery: string[]
}

export const Builds: BikeBuild[] = [
  {
    slug: "urban-stealth-001",
    title: "Duralcan",
    subtitle: "RADICAL",
    description:
      "An iconic vintage M2 Duralcan Stumpy rebuilt with SRAM AXS and packed with style and performance that truly breaks the mould.",

    heroImage: "/Builds/urban-stealth/6.jpg",

    gallery: [
      "/Builds/urban-stealth/6.JPG",
      "/Builds/urban-stealth/7.JPG",
      "/Builds/urban-stealth/8.JPG",
    ],
  },

  {
    slug: "gravel-phantom-002",
    title: "Gravel Grinder",
    subtitle: "Long distance endurance gravel platform",
    description:
      "Built for mixed terrain distance riding with a focus on stability and long-haul comfort.",

    heroImage: "/Builds/gravel-phantom/1.jpg",

    gallery: [
      "/Builds/gravel-phantom/1.JPG",
      "/Builds/gravel-phantom/2.JPG",
      "/Builds/gravel-phantom/3.JPG",
      "/Builds/gravel-phantom/4.JPG",
      "/Builds/gravel-phantom/5.JPG",
    ],
  },
]