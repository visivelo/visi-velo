import "./globals.css";
import type { ReactNode } from "react";
import BackgroundController from "./components/BackgroundController";
import Navbar from "./components/Navbar";

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

        <Navbar />

        <main className="pt-24 relative z-10">{children}</main>
      </body>
    </html>
  );
}