import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Visi Velo",
  description: "Bicycle atelier focused on precision service and restoration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* GLOBAL NAV FRAME (shared across all pages) */}
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

            {/* BRAND */}
            <Link
              href="/"
              className="text-sm tracking-[0.35em] uppercase font-medium"
            >
              viši velo
            </Link>

            {/* NAV LINKS */}
            <nav className="hidden md:flex gap-10 text-sm text-white/70">
              <Link href="/service" className="hover:text-white transition">
                Service
              </Link>
              <Link href="/restorations" className="hover:text-white transition">
                Restorations
              </Link>
              <Link href="/shop" className="hover:text-white transition">
                Shop
              </Link>
            </nav>

            {/* CTA */}
            <Link
              href="/service"
              className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            >
              Book Service
            </Link>

          </div>
        </header>

        {/* PAGE WRAPPER (THIS FIXES ALIGNMENT ACROSS ALL PAGES) */}
        <div className="pt-24">
          {children}
        </div>

      </body>
    </html>
  );
}