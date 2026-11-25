
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
];
