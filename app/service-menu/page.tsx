"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ServiceMenuPage() {
  useEffect(() => {
    const bg = document.getElementById("app-bg");
    if (bg) bg.classList.remove("expand");
  }, []);

  return (
    <main className="min-h-screen px-6 py-24 relative z-10 font-serif text-[#d9772a]">
      <Link
        href="/"
        className="text-sm text-[#d9772a] hover:opacity-70 transition"
      >
        ← home
      </Link>

      <h1 className="text-5xl mt-8 tracking-wide uppercase text-[#d9772a]">
        Service Menu
      </h1>

      <p className="mt-4 max-w-xl italic text-[#d9772a] text-lg opacity-80">
        Bicycle repair, maintenance, and mechanical services.
      </p>

      <div className="mt-12 max-w-3xl space-y-10 text-[#d9772a]">
        {/* EVERYTHING BELOW SAME CONTENT — ONLY COLOR FIXED */}

        <div>
          <h2 className="text-xl font-semibold mb-4">Basic Repairs</h2>

          <div className="space-y-2">
            <div className="flex justify-between"><span>Flat Fix, Tube/Tire Install</span><span>$20</span></div>
            <div className="flex justify-between"><span>Flat Fix, Tube/Tire Install (Labor Intensive)</span><span>$40</span></div>
            <div className="flex justify-between"><span>Wheel True</span><span>$25</span></div>
            <div className="flex justify-between"><span>Hub Adjustment, Lubrication</span><span>$20</span></div>
            <div className="flex justify-between"><span>Hub Overhaul</span><span>$50</span></div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Drivetrain & Mechanical</h2>
          <div className="space-y-2">
            <div className="flex justify-between"><span>Bottom Bracket Overhaul / Replacement</span><span>$35</span></div>
            <div className="flex justify-between"><span>Headset Overhaul / Bearing Install</span><span>$40</span></div>
            <div className="flex justify-between"><span>Derailleur Install</span><span>$30</span></div>
            <div className="flex justify-between"><span>Chain Install</span><span>$15</span></div>
            <div className="flex justify-between"><span>Cassette / Freewheel Install</span><span>$25</span></div>
            <div className="flex justify-between"><span>Chainring Install</span><span>$35</span></div>
            <div className="flex justify-between"><span>Crankset Install</span><span>$50</span></div>
            <div className="flex justify-between"><span>Drivetrain Deep Clean</span><span>$50</span></div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Cockpit & Controls</h2>
          <div className="space-y-2">
            <div className="flex justify-between"><span>Stem Install</span><span>$15</span></div>
            <div className="flex justify-between"><span>Handlebar Install</span><span>$30</span></div>
            <div className="flex justify-between"><span>Handlebar Install (Aero / Labor Intensive)</span><span>$75</span></div>
            <div className="flex justify-between"><span>Install Shifter / Brake Lever</span><span>$30</span></div>
            <div className="flex justify-between"><span>Hydraulic / Internal / Electronic Controls</span><span>$50</span></div>
            <div className="flex justify-between"><span>Wrap Handlebars</span><span>$25</span></div>
          </div>
        </div>

        {/* rest unchanged */}
      </div>
    </main>
  );
}