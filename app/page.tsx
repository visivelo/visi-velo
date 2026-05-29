"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const max = 900;
      const p = Math.min(y / max, 1);

      document.documentElement.style.setProperty(
        "--scroll",
        p.toString()
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
  ];

  const looped = [...images, ...images];

  return (
    <main className="relative text-white overflow-x-hidden">

      {/* BACKGROUND SYSTEM (DO NOT TOUCH) */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(180,160,255,1) 0%,
                rgba(180,160,255,0.85) calc(40% - var(--scroll) * 30%),
                #0a0a0a calc(60% + var(--scroll) * 40%),
                #111 100%
              )
            `,
          }}
        />
      </div>

      {/* NAV (RAPHA STYLE) */}
      <header className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <div className="tracking-[0.35em] uppercase text-sm font-medium">
            viši velo
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-white/80">
            <Link href="/service">Service</Link>
            <Link href="/restorations">Restorations</Link>
            <Link href="/shop">Shop</Link>
          </nav>

          <Link
            href="/service"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Book Service
          </Link>

        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center pt-32">

        <h1 className="text-6xl md:text-8xl font-semibold tracking-[0.2em] uppercase text-[#d9772a]">
          viši velo
        </h1>

        <p className="mt-6 max-w-2xl text-white/80 text-lg">
          Bicycle atelier focused on service, restoration, and refined mechanical systems.
        </p>

        <div className="mt-10 flex gap-4">
          <Link className="rounded-full bg-white px-6 py-3 text-black" href="/service">
            Book Service
          </Link>
          <Link className="rounded-full border border-white/20 px-6 py-3" href="/restorations">
            View Work
          </Link>
        </div>

      </section>

      {/* SERVICE */}
      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-white/10">

        <h2 className="text-3xl md:text-4xl tracking-[0.2em] uppercase text-[#d9772a]">
          Service & Restorations
        </h2>

        <p className="mt-6 max-w-2xl text-white/70">
          Precision mechanical work, drivetrain optimization, wheel systems, and full rebuilds.
        </p>

      </section>

      {/* CAROUSEL */}
      <section className="border-t border-white/10 py-24 overflow-hidden">

        <div className="mx-auto max-w-6xl px-6 mb-10">
          <h2 className="text-3xl tracking-[0.2em] uppercase text-[#d9772a]">
            Build Archive
          </h2>
        </div>

        <div className="flex gap-6 w-max px-6">
          {looped.map((src, i) => (
            <div
              key={i}
              className="w-[340px] h-[220px] flex-shrink-0 rounded-xl overflow-hidden"
            >
              <img src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/50 text-xs tracking-[0.3em] uppercase">
        viši velo · bicycle atelier
      </footer>

    </main>
  );
}