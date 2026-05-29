import "./globals.css";
import Link from "next/link";
import { Inter, Bebas_Neue } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata = {
  title: "viši velo",
  description: "bicycle atelier",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebas.variable}`}
    >
      <body>

        {/* NAVIGATION */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/10">

          {/* BRAND */}
          <Link
            href="/"
            className="text-black/80"
          >
            viši velo
          </Link>

          {/* CENTER LINKS */}
          <div className="hidden md:flex gap-8 text-sm">
            <Link
              href="/service"
              className="text-black/70"
            >
              Service
            </Link>

            <Link
              href="/restorations"
              className="text-black/70"
            >
              Restorations
            </Link>

            <Link
              href="/shop"
              className="text-black/70"
            >
              Shop
            </Link>
          </div>

          {/* CTA */}
          <Link
            href="/service"
            className="book-service px-4 py-2 bg-white text-black rounded-full text-sm"
          >
            Book Service
          </Link>

        </nav>

        <div className="pt-20">
          {children}
        </div>

      </body>
    </html>
  );
}