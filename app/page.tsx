
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const didDragRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    ...Array.from({ length: 16 }, (_, i) => `/Images/Builds/${i + 1}.JPG`),
    ...[25, 26, 27, 28, 29, 36, 38, 39, 40, 41, 42, 43, 44].map(
      (n) => `/Images/Builds/${n}.JPG`
    ),
  ];

  const looped = [...images, ...images, ...images];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );
  };

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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* INFINITE CAROUSEL */
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const cards = Array.from(track.children) as HTMLElement[];

    if (cards.length < images.length * 3) return;

    let x = 0;
    let target = 0;
    let cycleWidth = 0;
    let animationFrame = 0;

    let isDown = false;
    let startX = 0;
    let startTarget = 0;

    const measure = () => {
      const first = cards[0].getBoundingClientRect();
      const last = cards[images.length - 1].getBoundingClientRect();

      cycleWidth = last.right - first.left;

      if (cycleWidth > 0 && x === 0 && target === 0) {
        x = cycleWidth;
        target = cycleWidth;
        track.style.transform = `translate3d(${-x}px, 0, 0)`;
      }
    };

    measure();

    const animate = () => {
      if (cycleWidth > 0) {
        x += (target - x) * 0.08;

        while (x < cycleWidth) {
          x += cycleWidth;
          target += cycleWidth;
        }

        while (x >= cycleWidth * 2) {
          x -= cycleWidth;
          target -= cycleWidth;
        }

        track.style.transform = `translate3d(${-x}px, 0, 0)`;

        const viewportRect = viewport.getBoundingClientRect();
        const center = viewportRect.left + viewportRect.width / 2;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const distance = Math.abs(
            center - (rect.left + rect.width / 2)
          );
          const proximity = 1 - Math.min(distance / 700, 1);
          const scale = 0.85 + proximity * 0.35;

          card.style.transform = `scale(${scale})`;
          card.style.opacity = String(0.4 + proximity * 0.6);
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    const onWheel = (event: WheelEvent) => {
      target += event.deltaX !== 0 ? event.deltaX : event.deltaY;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      isDown = true;
      didDragRef.current = false;
      startX = event.clientX;
      startTarget = target;

      viewport.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDown) return;

      const movement = event.clientX - startX;

      if (Math.abs(movement) > 5) {
        didDragRef.current = true;
      }

      target = startTarget - movement;
    };

    const onPointerUp = () => {
      isDown = false;
    };

    const onResize = () => {
      measure();
    };

    viewport.addEventListener("wheel", onWheel, { passive: true });
    viewport.addEventListener("pointerdown", onPointerDown);
    viewport.addEventListener("pointermove", onPointerMove);
    viewport.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrame);

      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* LIGHTBOX KEYBOARD CONTROLS */
  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

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
                style={{ willChange: "transform, opacity" }}
              >
                <img
                  src={src}
                  alt={`viši velo bicycle build ${src.split("/").pop()}`}
                  loading={i < images.length ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover rounded-xl cursor-pointer"
                  onClick={() => {
                    if (didDragRef.current) {
                      didDragRef.current = false;
                      return;
                    }

                    setActiveIndex(i % images.length);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setActiveIndex(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/80 text-2xl transition hover:bg-white/15 hover:text-white"
          >
            ×
          </button>

          {/* PREVIOUS BUTTON */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 sm:left-8 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/90 text-3xl transition hover:bg-white/15 hover:border-white/50"
          >
            ‹
          </button>

          {/* PHOTO */}
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-5"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt={`viši velo bicycle build ${activeIndex + 1}`}
              className="max-h-[78vh] max-w-[85vw] object-contain rounded-sm shadow-2xl"
            />

            <p className="text-sm tracking-[0.25em] text-white/50">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </div>

          {/* NEXT BUTTON */}
          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-8 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/25 bg-black/40 text-white/90 text-3xl transition hover:bg-white/15 hover:border-white/50"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
