import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";
import BackgroundController from "./components/BackgroundController";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundController />
        <div id="app-bg" className="app-bg" />

        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="tracking-[0.35em] uppercase text-white text-sm hover:text-[#d9772a] transition-colors"
            >
              viši velo
            </Link>

            {/* FIXED NAV: each link independent hover */}
            <nav className="hidden md:flex gap-10 text-white/70 text-sm">
              <Link
                href="/service"
                className="hover:text-[#d9772a] transition-colors"
              >
                Service
              </Link>

              <Link
                href="/Builds"
                className="hover:text-[#d9772a] transition-colors"
              >
                Builds
              </Link>

              <Link
                href="/shop"
                className="hover:text-[#d9772a] transition-colors"
              >
                Shop
              </Link>
            </nav>

            <Link
              href="/service"
              className="bg-white text-black px-5 py-2 rounded-full text-sm hover:text-[#d9772a] transition-colors"
            >
              Book Service
            </Link>
          </div>
        </header>

        <main className="pt-24 relative z-10">{children}</main>
      </body>
    </html>
  );
}