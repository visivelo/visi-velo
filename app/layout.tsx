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
      <body>
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="tracking-[0.35em] uppercase text-white text-sm">
              viši velo
            </Link>

            <nav className="hidden md:flex gap-10 text-white/70 text-sm">
              <Link href="/service">Service</Link>
              <Link href="/Builds">Builds</Link>
              <Link href="/shop">Shop</Link>
            </nav>

            <Link
              href="/service"
              className="bg-white text-black px-5 py-2 rounded-full text-sm"
            >
              Book Service
            </Link>
          </div>
        </header>

        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}