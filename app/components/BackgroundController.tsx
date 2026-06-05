"use client";

import { useEffect } from "react";

export default function BackgroundController() {
  useEffect(() => {
    const bg = document.getElementById("app-bg");

    const update = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      // SHIFT GRADIENT BALANCE (black → lavender)
      const blackStop = Math.max(0, 50 - progress * 50);
      const lavenderStart = Math.min(100, 50 + progress * 50);

      if (bg) {
        (bg as HTMLElement).style.setProperty(
          "--grad",
          `${blackStop}% , ${lavenderStart}%`
        );
      }

      // subtle glow follows cursor
      const move = (e: MouseEvent) => {
        if (!bg) return;
        bg.style.setProperty("--x", `${e.clientX}px`);
        bg.style.setProperty("--y", `${e.clientY}px`);
      };

      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    };

    window.addEventListener("scroll", update);
    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return null;
}