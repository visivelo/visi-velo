"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);
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

  /* ===== BACKGROUND SCROLL TRANSITION ===== */
  useEffect(() => {
    const bg = document.getElementById("app-bg");

    const onScroll = () => {
      if (!bg) return;
      const y = window.scrollY;

      if (y > 250) bg.classList.add("expand");
      else bg.classList.remove("expand");
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== CAROUSEL ===== */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let x = 0;
    let target = 0;
    let isDown = false;
    let startX = 0;
    let startTarget = 0;

    const cards = Array.from(el.children) as HTMLElement[];

    const animate = () => {
      x += (target - x) * 0.08;
      el.style.transform = `translateX(${-x}px)`;

      const center = window.innerWidth / 2;

      cards.forEach((c) => {
        const r = c.getBoundingClientRect();
        const dist = Math.abs(center - (r.left + r.width / 2));
        const s = 0.85 + (1 - Math.min(dist / 700, 1)) * 0.35;

        c.style.transform = `scale(${s})`;
        c.style.opacity = String(0.4 + (1 - Math.min(dist / 700, 1)) * 0.6);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const wheel = (e: WheelEvent) => (target += e.deltaY);

    const down = (e: MouseEvent) => {
      isDown = true;
      startX = e.clientX;
      startTarget = target;
    };

    const move = (e: MouseEvent) => {
      if (!isDown) return;
      target = startTarget - (e.clientX - startX);
    };

    const up = () => (isDown = false);

    let tx = 0;
    const tstart = (e: TouchEvent) => {
      tx = e.touches[0].clientX;
      startTarget = target;
    };

    const tmove = (e: TouchEvent) => {
      target = startTarget - (e.touches[0].clientX - tx);
    };

    window.addEventListener("wheel", wheel, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchstart", tstart, { passive: true });
    window.addEventListener("touchmove", tmove, { passive: true });

    return () => {
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchstart", tstart);
      window.removeEventListener("touchmove", tmove);
    };
  }, []);

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* HERO MUST BE TRANSPARENT */}
      <section className="text-center py-32 relative z-10">
        <h1 className="text-6xl tracking-widest text-[#d9772a]">
          viši velo
        </h1>

        <p className="mt-6 italic text-white/80">
          ELEVATE your cycling experience
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link className="bg-white text-black px-6 py-3 rounded-full" href="/service">
            Book Service
          </Link>
          <Link className="border border-white/30 px-6 py-3 rounded-full" href="/service-menu">
            Service Menu
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-white/10 relative z-10">
        <h2 className="text-3xl">Build Archive</h2>

        <div className="mt-10 overflow-hidden">
          <div ref={trackRef} className="flex gap-4 w-max">
            {looped.map((src, i) => (
              <div key={i} className="w-[260px] h-[180px] flex-shrink-0">
                <img
                  src={src}
                  className="w-full h-full object-cover rounded-xl cursor-pointer"
                  onClick={() => setActive(src)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {active && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setActive(null)}
        >
          <img src={active} className="max-w-[90vw] max-h-[90vh]" />
        </div>
      )}
    </main>
  );
}