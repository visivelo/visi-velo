"use client";

import Link from "next/link";

export default function ServiceMenuPage() {
  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed inset-0 bg-[#b4a0ff] -z-10" />

      <main className="min-h-screen px-6 py-24 font-serif text-[#d9772a]">

        {/* BACK LINK */}
        <Link
          href="/"
          className="text-sm text-black/60 hover:text-black transition-colors"
        >
          ← home
        </Link>

        {/* TITLE */}
        <h1 className="text-5xl mt-8 tracking-wide uppercase">
          Service Menu
        </h1>

        <p className="mt-4 max-w-xl text-black/70 italic text-lg">
          Bicycle repair, maintenance, and mechanical services.
        </p>

        {/* MENU */}
        <div className="mt-12 max-w-3xl space-y-10">

          {/* CATEGORY */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Basic Repairs</h2>

            <div className="space-y-2 text-black/80">
              <div className="flex justify-between">
                <span>Flat Fix, Tube/Tire Install</span><span>$20</span>
              </div>
              <div className="flex justify-between">
                <span>Flat Fix, Tube/Tire Install (Labor Intensive)</span><span>$40</span>
              </div>
              <div className="flex justify-between">
                <span>Wheel True</span><span>$25</span>
              </div>
              <div className="flex justify-between">
                <span>Hub Adjustment, Lubrication</span><span>$20</span>
              </div>
              <div className="flex justify-between">
                <span>Hub Overhaul</span><span>$50</span>
              </div>
            </div>
          </div>

          {/* DRIVETRAIN / MECHANICAL */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Drivetrain & Mechanical</h2>

            <div className="space-y-2 text-black/80">
              <div className="flex justify-between">
                <span>Bottom Bracket Overhaul / Replacement</span><span>$35</span>
              </div>
              <div className="flex justify-between">
                <span>Headset Overhaul / Bearing Install</span><span>$40</span>
              </div>
              <div className="flex justify-between">
                <span>Derailleur Install</span><span>$30</span>
              </div>
              <div className="flex justify-between">
                <span>Chain Install</span><span>$15</span>
              </div>
              <div className="flex justify-between">
                <span>Cassette / Freewheel Install</span><span>$25</span>
              </div>
              <div className="flex justify-between">
                <span>Chainring Install</span><span>$35</span>
              </div>
              <div className="flex justify-between">
                <span>Crankset Install</span><span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>Drivetrain Deep Clean</span><span>$50</span>
              </div>
            </div>
          </div>

          {/* COCKPIT / CONTROLS */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Cockpit & Controls</h2>

            <div className="space-y-2 text-black/80">
              <div className="flex justify-between">
                <span>Stem Install</span><span>$15</span>
              </div>
              <div className="flex justify-between">
                <span>Handlebar Install</span><span>$30</span>
              </div>
              <div className="flex justify-between">
                <span>Handlebar Install (Aero / Labor Intensive)</span><span>$75</span>
              </div>
              <div className="flex justify-between">
                <span>Install Shifter / Brake Lever</span><span>$30</span>
              </div>
              <div className="flex justify-between">
                <span>Hydraulic / Internal / Electronic Controls</span><span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>Wrap Handlebars</span><span>$25</span>
              </div>
            </div>
          </div>

          {/* BRAKES */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Brakes</h2>

            <div className="space-y-2 text-black/80">
              <div className="flex justify-between">
                <span>Brake Pad Install</span><span>$20</span>
              </div>
              <div className="flex justify-between">
                <span>Brake Bleed</span><span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>Brake Hose Replacement</span><span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>Mechanical Caliper Install</span><span>$30</span>
              </div>
              <div className="flex justify-between">
                <span>Hydraulic Caliper Install</span><span>$50</span>
              </div>
              <div className="flex justify-between">
                <span>Rim Brake Adjustment</span><span>$20</span>
              </div>
              <div className="flex justify-between">
                <span>Disc Brake Adjustment</span><span>$20</span>
              </div>
              <div className="flex justify-between">
                <span>Pad + Rotor Resurface / Clean</span><span>$30</span>
              </div>
            </div>
          </div>

          {/* CABLES / DRIVETRAIN TUNING */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Cables & Adjustment</h2>

            <div className="space-y-2 text-black/80">
              <div className="flex justify-between">
                <span>Replace Cable / Housing (x1)</span><span>$25</span>
              </div>
              <div className="flex justify-between">
                <span>Replace Cable / Housing (Internal x1)</span><span>$35</span>
              </div>
              <div className="flex justify-between">
                <span>Replace Cable / Housing (x4)</span><span>$75</span>
              </div>
              <div className="flex justify-between">
                <span>Replace Cable / Housing (Internal x4)</span><span>$100</span>
              </div>
              <div className="flex justify-between">
                <span>Derailleur Adjustment</span><span>$20</span>
              </div>
              <div className="flex justify-between">
                <span>Derailleur Hanger Alignment / Replacement</span><span>$20</span>
              </div>
            </div>
          </div>

          {/* CLEANING / INSTALLS / OTHER */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Cleaning & Install</h2>

            <div className="space-y-2 text-black/80">
              <div className="flex justify-between">
                <span>Full Bike Deep Clean</span><span>$125</span>
              </div>
              <div className="flex justify-between">
                <span>Fender Install</span><span>$40</span>
              </div>
              <div className="flex justify-between">
                <span>Fender Install (Labor Intensive)</span><span>$100</span>
              </div>
              <div className="flex justify-between">
                <span>Rack Install</span><span>$40</span>
              </div>
              <div className="flex justify-between">
                <span>Lighting / Accessories Wiring</span><span>$75</span>
              </div>
              <div className="flex justify-between">
                <span>Firmware Update (Electronic Drivetrains)</span><span>$15</span>
              </div>
            </div>
          </div>

          {/* TUNES */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Tune Packages</h2>

            <div className="space-y-2 text-black/80">
              <div className="flex justify-between">
                <span>Tune Level 1 (Adjustments)</span><span>$150</span>
              </div>
              <div className="flex justify-between">
                <span>Tune Level 2 (Standard Tune)</span><span>$275</span>
              </div>
              <div className="flex justify-between">
                <span>Tune Level 3 (Overhaul)</span><span>$500</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}