"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ServiceMenuPage() {
  useEffect(() => {
    const bg = document.getElementById("app-bg");
    if (bg) bg.classList.remove("expand");
  }, []);

  return (
    <main className="service-menu min-h-screen px-6 py-24 relative z-10">
      <Link href="/" className="text-sm text-[#d9772a] hover:opacity-70 transition">
        ← home
      </Link>

      <h1 className="text-5xl mt-8 tracking-wide uppercase text-[#d9772a]">
        Service Menu
      </h1>

      <p className="mt-4 max-w-xl italic text-[#d9772a] text-lg opacity-80">
        Bicycle repair, maintenance, and mechanical services.
      </p>

      <div className="mt-12 max-w-3xl space-y-12">

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#d9772a]">Basic Repairs</h2>

          <div className="space-y-2">
            <div className="price-row"><span className="svc-name">Flat Fix, Tube/Tire Install</span><span className="svc-price">$20</span></div>
            <div className="price-row"><span className="svc-name">Flat Fix, Tube/Tire Install *Labor Intensive*</span><span className="svc-price">$40</span></div>
            <div className="price-row"><span className="svc-name">Wheel True</span><span className="svc-price">$25</span></div>
            <div className="price-row"><span className="svc-name">Hub Adjustment, Lubrication</span><span className="svc-price">$20</span></div>
            <div className="price-row"><span className="svc-name">Hub Overhaul</span><span className="svc-price">$50</span></div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#d9772a]">Drivetrain & Mechanical</h2>
          <div className="space-y-2">
            <div className="price-row"><span className="svc-name">Bottom Bracket Overhaul / Replacement</span><span className="svc-price">$35</span></div>
            <div className="price-row"><span className="svc-name">Headset Overhaul / Bearing Install</span><span className="svc-price">$40</span></div>
            <div className="price-row"><span className="svc-name">Derailleur Install</span><span className="svc-price">$30</span></div>
            <div className="price-row"><span className="svc-name">Chain Install</span><span className="svc-price">$15</span></div>
            <div className="price-row"><span className="svc-name">Cassette / Freewheel Install</span><span className="svc-price">$25</span></div>
            <div className="price-row"><span className="svc-name">Chainring Install</span><span className="svc-price">$35</span></div>
            <div className="price-row"><span className="svc-name">Crankset Install</span><span className="svc-price">$50</span></div>
            <div className="price-row"><span className="svc-name">Drivetrain Deep Clean</span><span className="svc-price">$50</span></div>
          </div>
        </div>

      </div>
    </main>
  );
}