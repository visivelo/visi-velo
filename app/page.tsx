
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string | null>(null);

  const images = [
    "/Images/Builds/1.JPG",
    "/Images/Builds/2.JPG",
    "/Images/Builds/3.JPG",
    "/Images/Builds/4.JPG",
    "/Images/Builds/5.JPG",
    "/Images/Builds/6.JPG",
    "/Images/Builds/7.JPG",
    "/Images/Builds/8.JPG",
    "/Images/Builds/9.JPG",
    "/Images/Builds/10.JPG",
    "/Images/Builds/11.JPG",
    "/Images/Builds/12.JPG",
    "/Images/Builds/13.JPG",
    "/Images/Builds/14.JPG",
    "/Images/Builds/15.JPG",
    "/Images/Builds/16.JPG",
  ];

  const looped = [...images, ...images, ...images];

  /* BACKGROUND SCROLL TRANSITION */

  useEffect(() => {
    const bg = document.getElementById("app-bg");

    const onScroll = () => {
      if (!bg) return;

      if (window.scrollY > 250) {
        bg.classList.add("expand");
      } else {
        bg.classList.remove("expand");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* CAROUSEL */

  useEffect(() => {
    const el = trackRef.current;
    const viewport = viewportRef.current;

    if (!el || !viewport) return;

    let x = 0;
    let target = 0;
    let isDown = false;
    let startX = 0;
    let startTarget = 0;
    let rafId = 0;

    const cards = Array.from(el.children) as HTMLElement[];

    const animate = () => {
      x += (target - x) * 0.08;

      el.style.transform = `translate3d(${-x}px, 0, 0)`;

      const center = window.innerWidth / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const dist = Math.abs(
          center - (rect.left + rect.width / 2)
        );

        const proximity = 1 - Math.min(dist / 700, 1);

        const scale = 0.85 + proximity * 0.35;

        card.style.transform = `scale(${scale})`;
        card.style.opacity = String(0.4 + proximity * 0.6);
      });

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    /* MOUSE AND TOUCH DRAG */

    const down = (e: PointerEvent) => {
      if (e.button !== 0 && e.pointerType === "mouse") return;

      isDown = true;
      startX = e.clientX;
      startTarget = target;

      viewport.setPointerCapture(e.pointerId);
    };

    const move = (e: PointerEvent) => {
      if (!isDown) return;

      target = startTarget - (e.clientX - startX);
    };

    const up = () => {
      isDown = false;
    };

    /* SCROLL OVER CAROUSEL */

    const wheel = (e: WheelEvent) => {
      target += Math.abs(e.deltaY) > Math.abs(e.deltaX)
        ? e.deltaY
        : e.deltaX;
    };

    viewport.addEventListener("pointerdown", down);
    viewport.addEventListener("pointermove", move);
    viewport.addEventListener("pointerup", up);
    viewport.addEventListener("pointercancel", up);
    viewport.addEventListener("wheel", wheel, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);

      viewport.removeEventListener("pointerdown", down);
      viewport.removeEventListener("pointermove", move);
      viewport.removeEventListener("pointerup", up);
      viewport.removeEventListener("pointercancel", up);
      viewport.removeEventListener("wheel", wheel);
    };
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">

      {/* HERO */}

      <section className="text-center py-32 relative z-10">
        <h1 className="text-6xl tracking-widest text-[#d9772a]">
          viši velo
        </h1>

        <p className="mt-6 italic text-white/80">
          ELEVATE your cycling experience
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            className="bg-white text-black px-6 py-3 rounded-full"
            href="/service"
          >
            Book Service
          </Link>

          <Link
            className="border border-white/30 px-6 py-3 rounded-full"
            href="/service-menu"
          >
            Service Menu
          </Link>
        </div>
      </section>

      {/* BUILD ARCHIVE */}

      <section className="py-20 px-6 border-t border-white/10 relative z-10">
        <h2 className="text-3xl">Build Archive</h2>

        <div
          ref={viewportRef}
          className="mt-10 overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ touchAction: "pan-y" }}
        >
          <div
            ref={trackRef}
            className="flex gap-4 w-max"
            style={{ willChange: "transform" }}
          >
            {looped.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="w-[260px] h-[180px] flex-shrink-0"
                style={{ willChange: "transform" }}
              >
                <img
                  src={src}
                  alt={`viši velo bicycle build ${((i % images.length) + 1)}`}
                  loading={i < 8 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover rounded-xl cursor-pointer select-none"
                  onClick={() => setActive(src)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}

      {active && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setActive(null)}
        >
          <img
            src={active}
            alt="Selected viši velo bicycle build"
            decoding="async"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}

    </main>
  );
}
