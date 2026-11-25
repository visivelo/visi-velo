
"use client";

import { useState } from "react";

type BikeGalleryProps = {
  images: string[];
  bikeName: string;
};

export default function BikeGallery({
  images,
  bikeName,
}: BikeGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((current) => (current + 1) % images.length);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      <div className="relative overflow-hidden rounded-sm bg-black">
        <img
          src={images[selectedImage]}
          alt={`${bikeName} photo ${selectedImage + 1}`}
          className="w-full object-contain"
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-4xl text-white transition hover:bg-[#d9772a] hover:text-black"
          >
            ›
          </button>
        )}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
        {images.slice(1).map((image, index) => (
          <div
            key={image}
            className="overflow-hidden rounded-sm bg-black"
          >
            <img
              src={image}
              alt={`${bikeName} photo ${index + 2}`}
              className="aspect-square w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
