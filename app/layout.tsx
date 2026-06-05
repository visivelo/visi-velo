import "./globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {/* GLOBAL NAV */}
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            <Link
              href="/"
              className="text-sm tracking-[0.35em] uppercase text-white"
            >
              viši velo
            </Link>

            <nav className="hidden md:flex gap-10 text-sm text-white/70">
              <Link href="/service">Service</Link>
              <Link href="/Builds">Builds</Link>
              <Link href="/shop">Shop</Link>
            </nav>

            <Link
              href="/service"
              className="rounded-full bg-white px-5 py-2 text-sm text-black"
            >
              Book Service
            </Link>

          </div>
        </header>

        <main className="pt-24 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}