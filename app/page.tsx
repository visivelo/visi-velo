"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);

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
  ];

  const looped = [...images, ...images];

  return (
    <main className="relative min-h-screen overflow-x-hidden text-white">

      {/* BACKGROUND SYSTEM (RESTORED IDENTITY) */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />

        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(180,160,255,1) 0%,
                rgba(180,160,255,0.95) calc(40% - var(--scroll) * 30%),
                #0a0a0a calc(60% + var(--scroll) * 40%),
                #1a1a1a 100%
              )
            `,
          }}
        />
      </div>

      {/* NAV OVERLAY FIX (READABILITY RESTORED) */}
      <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <div className="font-semibold tracking-[0.25em] uppercase text-white">
            viši velo
          </div>

          <div className="flex gap-6 text-sm text-white/80">
            <Link href="/service">Service</Link>
            <Link href="/restorations">Restorations</Link>
            <Link href="/shop">Shop</Link>
          </div>

          <Link
            href="/service"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black"
          >
            Book Service
          </Link>

        </div>
      </div>

      {/* HERO */}
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center pt-28">

        <h1 className="text-[5rem] sm:text-[7rem] md:text-[8rem] font-black tracking-[0.2em] uppercase text-[#d9772a] leading-none">
          viši velo
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-white/85">
          Bicycle atelier focused on professional service, restoration, and precision mechanical refinement.
        </p>

        <div className="mt-10 flex gap-4">
          <Link className="rounded-full bg-white px-6 py-3 text-black font-semibold" href="/service">
            Book Service
          </Link>
          <Link className="rounded-full border border-white/30 px-6 py-3" href="/restorations">
            View Work
          </Link>
        </div>

      </section>

      {/* SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-24 border-t border-white/10">

        <h2 className="text-4xl font-bold uppercase tracking-[0.2em] text-[#d9772a]">
          Service & Restorations
        </h2>

        <p className="mt-6 max-w-2xl text-white/80">
          High precision bicycle service, drivetrain optimization, wheel systems, and full restorations built around performance and longevity.
        </p>

      </section>

      {/* CAROUSEL */}
      <section className="border-t border-white/10 py-24 overflow-hidden">

        <div className="mx-auto max-w-6xl px-6 mb-10">
          <h2 className="text-4xl font-bold uppercase tracking-[0.2em] text-[#d9772a]">
            Build Archive
          </h2>
        </div>

        <div className="flex gap-6 w-max px-6">
          {looped.map((src, i) => (
            <div key={i} className="w-[360px] h-[240px] flex-shrink-0 rounded-xl overflow-hidden">
              <img src={src} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-white/50 text-sm tracking-[0.2em] uppercase">
        viši velo · bicycle atelier
      </footer>

    </main>
  );
}