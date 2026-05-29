"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animationFrame: number;

    let current = 0;
    let target = 0;

    let isDragging = false;
    let startX = 0;
    let startTarget = 0;

    const speed = 0.08;

    const cards = Array.from(track.children) as HTMLElement[];

    const animate = () => {
      current += (target - current) * speed;

      track.style.transform = `translate3d(${-current}px, 0, 0)`;

      const viewportCenter = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const center = rect.left + rect.width / 2;

        const distance = Math.abs(viewportCenter - center);

        const normalized = Math.min(distance / 700, 1);

        const scale = 0.82 + (1 - normalized) * 0.22;

        const opacity = 0.45 + (1 - normalized) * 0.55;

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

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleWheel = (e: WheelEvent) => {
      target += e.deltaY * 0.9;
    };

    const handlePointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      startTarget = target;
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging) return;

      const delta = e.clientX - startX;

      target = startTarget - delta;
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    window.addEventListener("pointerdown", handlePointerDown);

    window.addEventListener("pointermove", handlePointerMove);

    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("wheel", handleWheel);

      window.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "pointerup",
        handlePointerUp
      );
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
    <main className="relative min-h-screen overflow-x-hidden text-white">

      <section className="flex flex-col items-center justify-center px-6 pt-40 pb-32 text-center">

        <h1
          className="
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-[9rem]
            font-black
            uppercase
            tracking-[0.25em]
            leading-none
            text-[#d9772a]
          "
        >
          viši velo
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
          bicycle atelier focused on professional service,
          restoration, and refining cycling systems
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/service"
            className="
              rounded-full
              bg-[#f4ede4]
              px-8
              py-4
              text-sm
              font-bold
              uppercase
              tracking-wide
              text-black
              transition
              hover:scale-105
            "
          >
            Book Service
          </Link>

          <Link
            href="/restorations"
            className="
              rounded-full
              border
              border-white/30
              px-8
              py-4
              text-sm
              font-bold
              uppercase
              tracking-wide
              text-white
              transition
              hover:bg-white/10
            "
          >
            View Work
          </Link>

        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-black uppercase tracking-wide md:text-5xl">
            Service & Restorations
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Precision maintenance, restoration, complete builds,
            drivetrain optimization, wheel systems, and long-term
            bicycle refinement.
          </p>

        </div>

      </section>

      <section className="overflow-hidden border-t border-white/10 py-24">

        <div className="mb-12 px-6">

          <h2 className="text-3xl font-black uppercase tracking-wide md:text-5xl">
            Build Archive
          </h2>

        </div>

        <div className="relative overflow-hidden">

          <div
            ref={trackRef}
            className="
              flex
              w-max
              gap-6
              px-6
              select-none
              touch-pan-x
              will-change-transform
            "
          >
            {looped.map((src, i) => (
              <div
                key={i}
                className="
                  h-[180px]
                  w-[260px]
                  flex-shrink-0
                  transition-all
                  duration-300
                  sm:h-[220px]
                  sm:w-[320px]
                  md:h-[280px]
                  md:w-[420px]
                "
              >
                <img
                  src={src}
                  draggable={false}
                  alt=""
                  className="
                    pointer-events-none
                    h-full
                    w-full
                    rounded-2xl
                    object-cover
                    shadow-2xl
                  "
                />
              </div>
            ))}
          </div>

        </div>

      </section>

      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm uppercase tracking-widest text-white/60">
        viši velo · bicycle atelier
      </footer>

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