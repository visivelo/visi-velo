"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);

  // background scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const max = 800;

      const progress = Math.min(scrollY / max, 1);

      document.documentElement.style.setProperty(
        "--scroll",
        progress.toString()
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // infinite carousel
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

    let rafId = 0;

    const update = () => {
      current += (target - current) * speed;
      track.style.transform = `translateX(${-current}px)`;

      const viewportCenter = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const center = rect.left + rect.width / 2;

        const distance = Math.abs(viewportCenter - center);
        const normalized = Math.min(distance / 700, 1);

        const scale = 0.85 + (1 - normalized) * 0.35;
        const opacity = 0.4 + (1 - normalized) * 0.6;

        card.style.transform = `scale(${scale})`;
        card.style.opacity = String(opacity);
      });

      const firstCard = cards[0];

      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 24;
        const totalWidth = (cardWidth * cards.length) / 3;

        if (current > totalWidth * 2) {
          current -= totalWidth;
          target -= totalWidth;
        }

        if (current < 0) {
          current += totalWidth;
          target += totalWidth;
        }
      }

      rafId = requestAnimationFrame(update);
    };

    update();

    const handleWheel = (e: WheelEvent) => {
      target += e.deltaY + e.deltaX;
    };

    const handleDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.clientX;
      startTarget = target;
    };

    const handleMove = (e: MouseEvent) => {
      if (!isDown) return;
      const delta = e.clientX - startX;
      target = startTarget - delta;
    };

    const handleUp = () => {
      isDown = false;
    };

    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      startTarget = target;
    };

    const handleTouchMove = (e: TouchEvent) => {
      const delta = e.touches[0].clientX - touchStartX;
      target = startTarget - delta;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(rafId);
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
    "/Images/Builds/DSC04866.JPG",
    "/Images/Builds/DSC04872.JPG",
    "/Images/Builds/DSC04892.JPG",
    "/Images/Builds/DSC04904.JPG",
    "/Images/Builds/DSC04906.JPG",
    "/Images/Builds/DSC04912.JPG",
    "/Images/Builds/DSC04915.JPG",
  ];

  const looped = [...images, ...images, ...images];

  return (
    <main className="relative min-h-[200vh] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 pt-40">
        <h1 className="text-6xl md:text-7xl tracking-widest text-[#d9772a]">
          viši velo
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-xl text-white/90">
          Bicycle workshop focused on professional service, restoration, and refining cycling systems
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/service" className="book-service px-6 py-3 rounded-full bg-white text-black text-sm">
            Book Service
          </Link>

          <Link href="/restorations" className="px-6 py-3 border border-white/30 rounded-full text-sm">
            View Work
          </Link>
        </div>
      </section>

      {/* SERVICE */}
      <section className="px-6 py-24 border-t border-white/10">
        <h2 className="text-3xl">Service & Restorations</h2>
        <p className="mt-4 max-w-2xl text-white/80">
          Bicycle maintenance, restoration, and rebuilding.
        </p>
      </section>

      {/* CAROUSEL */}
      <section className="px-6 py-24 border-t border-white/10 overflow-hidden">
        <h2 className="text-3xl">Build Archive</h2>

        <div className="relative overflow-hidden mt-14">
          <div
            ref={trackRef}
            className="flex gap-6 w-max will-change-transform"
          >
            {looped.map((src, i) => (
              <div key={i} className="w-[320px] h-[220px] flex-shrink-0">
                <img
                  src={src}
                  className="w-full h-full object-cover rounded-xl"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-white/10 text-sm text-white/60">
        viši velo · bicycle atelier
      </footer>

      {/* BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{ "--scroll": "0" } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-black" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(180,160,255,1) 0%,
                rgba(180,160,255,1) calc(50% - (var(--scroll) * 50%)),
                #000000 calc(50% + (var(--scroll) * 50%)),
                #6b6b6b 100%
              )
            `,
          }}
        />
      </div>
    </main>
  );
}