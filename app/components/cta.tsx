import Link from "next/link";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function CTA({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAProps) {
  const base =
    "px-6 py-3 rounded-full text-sm transition-colors duration-200 inline-flex items-center justify-center";

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/90"
      : "border border-white/30 text-white hover:bg-white/10";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}