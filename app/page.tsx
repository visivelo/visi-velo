"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animationFrame: number;

    let current = 0;
    let target = 0;

    const speed = 0.06;

    const animate = () => {
      current += (target - current) * speed;

      track.style.transform = `translate3d(${-current}px, 0, 0)`;

      const firstCard = track.children[0] as HTMLElement;

      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 24;

        const totalWidth =
          (cardWidth * track.children.length) / 3;

        if (current > totalWidth * 2) {
          current -= totalWidth;
          target -= totalWidth;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleWheel = (e: WheelEvent) => {
      target += e.deltaY * 0.7;
    };

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "wheel",
        handleWheel
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
    <main className="relative overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-black" />

        <div
          className="
            absolute
            inset-0
            opacity-90
          "
          style={{
            background:
              "linear-gradient(135deg, #b9a3ff 0%, #8d74df 38%, #000000 65%)",
          }}
        />

      </div>

      {/* HERO */}
      <section className="relative">

        <div
          className="
            mx-auto
            flex
            min-h-screen
            max-w-7xl
            flex-col
            items-center
            justify-center
            px-6
            pt-32
            pb-24
            text-center
          "
        >

          <h1
            className="
              text-5xl
              font-black
              uppercase
              tracking-[0.18em]
              text-[#d9772a]
              sm:text-7xl
              md:text-8xl
              lg:text-[8rem]
              leading-none
            "
          >
            viši velo
          </h1>

          <p
            className="
              mt-8
              max-w-2xl
              text-lg
              leading-relaxed
              text-white/85
              sm:text-xl
            "
          >
            Bicycle atelier focused on professional service,
            restoration, and refined cycling systems.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/service"
              className="
                rounded-full
                bg-white
                px-8
                py-4
                text-sm
                font-bold
                uppercase
                tracking-wider
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
                tracking-wider
                text-white
                transition
                hover:bg-white/10
              "
            >
              View Work
            </Link>

          </div>

        </div>

      </section>

      {/* SERVICE */}
      <section className="relative border-t border-white/10">

        <div
          className="
            mx-auto
            max-w-6xl
            px-6
            py-28
          "
        >

          <h2
            className="
              text-4xl
              font-black
              uppercase
              tracking-[0.12em]
              text-[#d9772a]
              md:text-6xl
            "
          >
            Service & Restorations
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              text-lg
              leading-relaxed
              text-white/75
            "
          >
            Precision maintenance, restoration,
            complete builds, drivetrain optimization,
            wheel systems, and long-term bicycle refinement.
          </p>

        </div>

      </section>

      {/* ARCHIVE */}
      <section className="relative border-t border-white/10 py-24">

        <div className="mx-auto mb-14 max-w-6xl px-6">

          <h2
            className="
              text-4xl
              font-black
              uppercase
              tracking-[0.12em]
              text-[#d9772a]
              md:text-6xl
            "
          >
            Build Archive
          </h2>

        </div>

        <div className="overflow-hidden">

          <div
            ref={trackRef}
            className="
              flex
              w-max
              gap-6
              px-6
              will-change-transform
            "
          >
            {looped.map((src, i) => (
              <div
                key={i}
                className="
                  h-[220px]
                  w-[340px]
                  flex-shrink-0
                  overflow-hidden
                  rounded-2xl
                  bg-black/30
                  shadow-2xl
                  md:h-[260px]
                  md:w-[420px]
                "
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>
            ))}
          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        className="
          border-t
          border-white/10
          px-6
          py-10
          text-center
          text-sm
          uppercase
          tracking-[0.2em]
          text-white/50
        "
      >
        viši velo · bicycle atelier
      </footer>

    </main>
  );
}