
export type Bike = {
  id: string;
  name: string;
  year: string;
  price: number;
  size: string;
  description: string;
  condition: string;
  specifications: string[];
  images: string[];
};

export const bikes: Bike[] = [
  {
    id: "1996-specialized-stumpjumper-m2",
    name: "Specialized Stumpjumper M2",
    year: "1996",
    price: 550,
    size: '19"',
    description:
      "A 1996 Specialized Stumpjumper M2 rebuilt with a modern 1x11 drivetrain. Equipped with a Shimano XT derailleur and shifter.",
    condition: "Great condition",
    specifications: [
      "1x11 drivetrain",
      "Shimano XT rear derailleur",
      "Shimano XT shifter",
      '19" frame',
    ],
    images: [
      "/Images/Builds/24.JPG",
      "/Images/Builds/25.JPG",
      "/Images/Builds/26.JPG",
      "/Images/Builds/27.JPG",
      "/Images/Builds/28.JPG",
      "/Images/Builds/29.JPG",
      "/Images/Builds/30.JPG",
    ],
  },
  {
    id: "1996-gt-avalanche",
    name: "GT Avalanche",
    year: "1996",
    price: 600,
    size: '22"',
    description:
      "A 1996 GT Avalanche rebuilt with a 1x11 drivetrain, Shimano Deore shifting, and Nitto handlebars.",
    condition: "Great condition",
    specifications: [
      "1x11 drivetrain",
      "Shimano Deore rear derailleur",
      "Shimano Deore shifter",
      "Nitto handlebars",
      '22" frame',
    ],
    images: [
      "/Images/Builds/36.JPG",
      "/Images/Builds/37.JPG",
      "/Images/Builds/38.JPG",
      "/Images/Builds/39.JPG",
      "/Images/Builds/40.JPG",
      "/Images/Builds/41.JPG",
      "/Images/Builds/42.JPG",
      "/Images/Builds/43.JPG",
      "/Images/Builds/44.JPG",
    ],
  },
  {
    id: "1998-trek-singletrack-930",
    name: "Trek Singletrack 930",
    year: "1998",
    price: 400,
    size: '13.5"',
    description:
      "A 1998 Trek Singletrack 930 mountain bike with its fully original build.",
    condition: "Fully original build",
    specifications: [
      "Fully original build",
      '13.5" frame',
    ],
    images: [
      "/Images/Builds/31.JPG",
      "/Images/Builds/32.JPG",
      "/Images/Builds/33.JPG",
      "/Images/Builds/34.JPG",
      "/Images/Builds/35.JPG",
    ],
  },
];
