
"use client";

import Link from "next/link";
import { useState } from "react";
import { notFound } from "next/navigation";
import { bikes } from "../bikes";

export default function BikeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [bikeId, setBikeId] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // The selected bike is resolved from the route below.
  const [bike] = useState(() => {
    return bikes.find((item) => item.id === bikeId) ?? null;
  });

  return null;
}
