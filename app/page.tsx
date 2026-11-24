
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Home() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const didDragRef = useRef(false);
  const startXRef = useRef(0);
  const startTargetRef = useRef(0);
  const targetRef = useRef(0);
  const positionRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    ...Array.from({ length: 16 }, (_, i) => `/Images/Builds/${i + 1}.JPG`),
    ...[25, 26, 27, 28, 29, 36, 38, 39, 40, 41, 42, 43, 44].map(
      (n) => `/Images/Builds/${n}.JPG`
    ),
  ];

  const looped = [...images, ...images, ...images];

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + images.length) % images.length
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % images.length
    );
  }, [images.length]);

  /* BACKGROUND */
  useEffect(() => {
    const bg = document.getElementById("app-bg");

    const onScroll = () => {
      bg?.classList.toggle("expand", window.scrollY > 250);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* INFINITE CAROUSEL */
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    const imageCount = images.length;

    let animationFrame = 0;
    let cycleWidth = 0;
    let initialized = false;

    const measure = () => {
      const first = cards[0].getBoundingClientRect();
      const last = cards[imageCount - 1].getBoundingClientRect();

      cycleWidth = last.right - first.left;

      if (!initialized && cycleWidth > 0) {
        positionRef.current = cycleWidth;
        targetRef.current = cycleWidth;
        initialized = true;
      }
    };

    measure();

    const animate = () => {
      if (initialized && cycleWidth > 0) {
        let x = positionRef.current;
        let target = targetRef.current;

        x += (target - x) * 0.08;

        // Seamlessly wrap in either direction.
        while (x < cycleWidth) {
          x += cycleWidth;
          target += cycleWidth;
        }

        while (x >= cycleWidth * 2) {
          x -= cycleWidth;
          target -= cycleWidth;
        }

        positionRef.current = x;
        targetRef.current = target;

        track.style.transform = `translate3d(${-x}px, 0, 0)`;

        const bounds = viewport.getBoundingClientRect();
        const center = bounds.left + bounds.width / 2;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const distance = Math.abs(
            center - (rect.left + rect.width / 2)
          );

          const proximity = 1 - Math.min(distance / 700, 1);

          card.style.transform = `scale(${0.85 + proximity * 0.35})`;
          card.style.opacity = String(0.4 + proximity * 0.6);
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    const onWheel = (event: WheelEvent) => {
      targetRef.current +=
        event.deltaX !== 0 ? event.deltaX : event.deltaY;
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      isDraggingRef.current = true;
      didDragRef.current = false;
      startXRef.current = event.clientX;
      startTargetRef.current = targetRef.current;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current) return;

      const movement = event.clientX - startXRef.current;

      if (Math.abs(movement) > 5) {
        didDragRef.current = true;
      }

      targetRef.current = startTargetRef.current - movement;
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const onResize = () => {
      measure();
    };

    viewport.addEventListener("wheel", onWheel, { passive: true });
    viewport.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrame);

      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* LIGHTBOX KEYBOARD AND SCROLL CONTROLS */
  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, showNext, showPrevious]);

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
                onClick={() => {
                  if (didDragRef.current) {
                    didDragRef.current = false;
                    return;
                  }

                  setActiveIndex(i % images.length);
                }}
              >
                <img
                  src={src}
                  alt={`viši velo bicycle build ${src.split("/").pop()}`}
                  loading={i < images.length ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="w-full h-full object-cover rounded-xl cursor-pointer"
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
          {/* CLOSE */}
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={() => setActiveIndex(null)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/80 text-3xl transition hover:bg-white/20 hover:text-white"
          >
            ×
          </button>

          {/* PREVIOUS */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            className="absolute left-3 sm:left-8 z-30 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white text-4xl transition hover:bg-white/20 hover:border-white/50"
          >
            ‹
          </button>

          {/* IMAGE AND COUNTER */}
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-5"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt={`viši velo bicycle build ${activeIndex + 1}`}
              className="max-h-[78vh] max-w-[82vw] object-contain shadow-2xl"
            />

            <p className="text-sm tracking-[0.25em] text-white/50">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
          </div>

          {/* NEXT */}
          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 sm:right-8 z-30 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/25 bg-black/50 text-white text-4xl transition hover:bg-white/20 hover:border-white/50"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
