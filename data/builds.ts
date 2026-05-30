export type BikeBuild = {
  slug: string
  title: string
  subtitle?: string
  description: string
  heroImage: string
  gallery: string[]
}

export const builds: BikeBuild[] = [
  {
    slug: "urban-stealth-001",
    title: "Duralcan",
    subtitle: "RADICAL",
    description:
      "An iconic vintage M2 Duralcan Stumpjumper SRAM AXS rebuild packed with style and performance that truly breaks the mould.",

    heroImage: "/builds/urban-stealth/6.jpg",

    gallery: [
      "/builds/urban-stealth/6.JPG",
      "/builds/urban-stealth/7.JPG",
      "/builds/urban-stealth/8.JPG",
    ],
  },

  {
    slug: "gravel-phantom-002",
    title: "Gravel Grinder",
    subtitle: "Long distance endurance gravel platform",
    description:
      "Built for mixed terrain distance riding with a focus on stability and long-haul comfort.",

    heroImage: "/builds/gravel-phantom/1.jpg",

    gallery: [
      "/builds/gravel-phantom/1.JPG",
      "/builds/gravel-phantom/2.JPG",
      "/builds/gravel-phantom/3.JPG",
      "/builds/gravel-phantom/4.JPG",
      "/builds/gravel-phantom/5.JPG",
    ],
  },
]