"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);

  // scroll-driven background expansion
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const max = 900;

      const progress = Math.min(scrollY / max, 1);

      document.documentElement.style.setProperty(
        "--scroll",
        progress.toString()
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // infinite carousel (kept stable version)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let current = 0;
    let target = 0;
    let isDown = false;
    let startX = 0;
    let startTarget = 0;

    const speed = 0.08;
    const cards = Array.from(track.children) as HTMLElement[];

    const animate = () => {
      current += (target - current) * speed;

      track.style.transform = `translateX(${-current}px)`;

      const center = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;

        const dist = Math.abs(center - cardCenter);
        const norm = Math.min(dist / 750, 1);

        const scale = 0.88 + (1 - norm) * 0.35;
        const opacity = 0.35 + (1 - norm) * 0.65;

        card.style.transform = `scale(${scale})`;
        card.style.opacity = String(opacity);
      });

      const first = cards[0];

      if (first) {
        const width = first.offsetWidth + 24;
        const total = (width * cards.length) / 3;

        if (current > total * 2) {
          current -= total;
          target -= total;
        }

        if (current < 0) {
          current += total;
          target += total;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const onWheel = (e: WheelEvent) => {
      target += e.deltaX + e.deltaY;
    };

    const onDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.clientX;
      startTarget = target;
    };

    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      target = startTarget - (e.clientX - startX);
    };

    const onUp = () => {
      isDown = false;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  const images = [
    "/Images/Builds/1.JPG",
    "/Images/Builds/2.JPG",
    "/Images/Builds/3.JPG",
    "/Images/Builds/4.JPG",
    "/Images/Builds/5.JPG",
    "/Images/Builds/6.JPG",
    "/Images/Builds/7.JPG",
    "/Images/Builds/DSC04864.JPG",
    "/Images/Builds/DSC04865.JPG",
    "/Images/Builds/DSC04866.JPG",
    "/Images/Builds/DSC04872.JPG",
    "/Images/Builds/DSC04878.JPG",
    "/Images/Builds/DSC04881.JPG",
    "/Images/Builds/DSC04889.JPG",
    "/Images/Builds/DSC04890.JPG",
    "/Images/Builds/DSC04892.JPG",
    "/Images/Builds/DSC04895.JPG",
    "/Images/Builds/DSC04904.JPG",
    "/Images/Builds/DSC04906.JPG",
    "/Images/Builds/DSC04912.JPG",
    "/Images/Builds/DSC04915.JPG",
  ];

  const looped = [...images, ...images, ...images];

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* HARD SPLIT BACKGROUND (no fade at rest) */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />

        {/* lavender block (clean split) */}
        <div className="absolute inset-0">
          <div
            className="absolute left-0 top-0 h-full w-1/2"
            style={{ backgroundColor: "#b9a6ff" }}
          />
        </div>

        {/* gray expansion on scroll */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg,
                rgba(185,166,255,1) 0%,
                rgba(185,166,255,1) calc(50% - var(--scroll) * 20%),
                #111111 calc(50% + var(--scroll) * 20%),
                #6b6b6b 100%
              )
            `,
          }}
        />
      </div>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-40">
        <h1 className="text-6xl md:text-7xl tracking-[0.35em] font-light uppercase">
          viši velo
        </h1>

        <p className="mt-6 max-w-xl text-sm tracking-wide opacity-80">
          bicycle atelier focused on precision service and mechanical restoration
        </p>

        <div className="mt-12 flex gap-4">
          <Link
            href="/service"
            className="px-6 py-3 bg-white text-black text-xs tracking-widest uppercase"
          >
            Book Service
          </Link>

          <Link
            href="/restorations"
            className="px-6 py-3 border border-white/40 text-xs tracking-widest uppercase"
          >
            View Work
          </Link>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="px-6 py-24">
        <h2 className="text-sm tracking-[0.4em] uppercase opacity-70">
          Builds Archive
        </h2>

        <div className="relative overflow-hidden mt-12">
          <div
            ref={trackRef}
            className="flex gap-6 w-max will-change-transform"
          >
            {looped.map((src, i) => (
              <div key={i} className="w-[340px] h-[230px] flex-shrink-0">
                <img
                  src={src}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}