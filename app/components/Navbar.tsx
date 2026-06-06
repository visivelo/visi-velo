import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="nav-logo tracking-[0.35em] uppercase text-sm"
        >
          viši velo
        </Link>

        <nav className="hidden md:flex gap-10 text-white/70 text-sm">
          <Link
            href="/service"
            className="hover:text-[#d9772a] transition-colors"
          >
            Service
          </Link>

          <Link
            href="/bikes-for-sale"
            className="hover:text-[#d9772a] transition-colors"
          >
            Bikes For Sale
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
  );
}