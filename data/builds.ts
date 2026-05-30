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
    title: "Urban Stealth 001",
    subtitle: "Minimal city performance build",
    description:
      "A stripped-down urban bike designed for speed, silence, and control in dense city environments.",

    heroImage: "/builds/urban-stealth/6.jpg",

    gallery: [
      "/builds/urban-stealth/6.JPG",
      "/builds/urban-stealth/7.JPG",
      "/builds/urban-stealth/8.JPG",
    ],
  },

  {
    slug: "gravel-phantom-002",
    title: "Gravel Phantom 002",
    subtitle: "Long distance endurance gravel platform",
    description:
      "Built for mixed terrain endurance riding with a focus on stability and long-haul comfort.",

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