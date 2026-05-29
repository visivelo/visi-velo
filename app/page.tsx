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

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  // TRUE infinite carousel
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

    const update = () => {

      // smooth interpolation
      current += (target - current) * speed;

      track.style.transform = `translateX(${-current}px)`;

      const viewportCenter = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const center = rect.left + rect.width / 2;

        const distance = Math.abs(viewportCenter - center);

        const normalized = Math.min(distance / 800, 1);

        const scale = 0.8 + (1 - normalized) * 0.35;

        const opacity = 0.35 + (1 - normalized) * 0.65;

        card.style.transform = `scale(${scale})`;
        card.style.opacity = String(opacity);
      });

      // seamless loop
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

      requestAnimationFrame(update);
    };

    update();

    // wheel scrolling
    const handleWheel = (e: WheelEvent) => {
      target += e.deltaY + e.deltaX;
    };

    // mouse drag
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

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  const images = [1, 2, 3, 4, 5, 6, 7];

  // triple for seamless looping
  const looped = [...images, ...images, ...images];

  return (
    <main className="relative min-h-[200vh] text-white overflow-x-hidden">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 pt-40">

        <h1 className="text-6xl md:text-7xl tracking-widest text-[#d9772a]">
          viši velo
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-xl text-white opacity-90">
          bicycle atelier focused on precision service,
          restoration, and refined cycling systems
        </p>

        <div className="mt-10 flex gap-4">

          <Link
            href="/service"
            className="px-6 py-3 bg-white text-black rounded-full text-sm"
          >
            Book Service
          </Link>

          <Link
            href="/restorations"
            className="px-6 py-3 border border-white/30 rounded-full text-sm text-white"
          >
            View Work
          </Link>

        </div>

      </section>

      {/* SERVICE */}
      <section className="px-6 py-24 border-t border-white/10">

        <h2 className="text-3xl">
          Service
        </h2>

        <p className="mt-4 max-w-2xl text-white opacity-90">
          Precision bicycle maintenance and repair.
        </p>

      </section>

      {/* WORK */}
      <section className="px-6 py-24 border-t border-white/10 overflow-hidden">

        <h2 className="text-3xl">
          Restorations & Builds
        </h2>

        <p className="mt-4 max-w-2xl text-white/80">
          A curated archive of mechanical work.
        </p>

        {/* VIEWPORT */}
        <div className="relative overflow-hidden mt-14">

          {/* TRACK */}
          <div
            ref={trackRef}
            className="flex gap-6 will-change-transform cursor-grab active:cursor-grabbing select-none"
          >

            {looped.map((n, i) => (
              <div
                key={i}
                className="shrink-0 w-[78vw] md:w-[42vw] transition-transform duration-200 ease-out"
              >

                <div className="h-[460px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-2xl">

                  <img
                    src={`/images/builds/${n}.jpg`}
                    className="w-full h-full object-cover pointer-events-none"
                    alt={`Build ${n}`}
                    draggable={false}
                  />

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-white/10 text-sm text-white/70">
        viši velo · bicycle atelier
      </footer>

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute inset-0 bg-black" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(180,160,255,1) 0%,
                rgba(180,160,255,1) calc(50% - var(--scroll) * 50%),
                #000000 calc(50% + var(--scroll) * 50%),
                #6b6b6b 100%
              )
            `,
          }}
        />

      </div>

    </main>
  );
}