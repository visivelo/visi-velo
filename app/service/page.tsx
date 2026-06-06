"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ServicePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    bike: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const bg = document.getElementById("app-bg");
    if (bg) bg.classList.add("expand");
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          bike: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen px-6 py-24 text-black relative z-10 font-serif">
      <Link href="/" className="text-sm text-black/60 hover:text-black">
        ← home
      </Link>

      <h1 className="text-5xl mt-8 tracking-wide uppercase">
        service request
      </h1>

      {/* ONLY CHANGE: TEXT COLOR -> ORANGE */}
      <p className="mt-4 max-w-xl italic text-[#d9772a] text-lg leading-relaxed">
        Schedule repair, restoration, consultation, or custom build services.
      </p>

      <form onSubmit={handleSubmit} className="mt-12 max-w-xl space-y-5">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-4 rounded-md bg-white/70 border border-black/10 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-4 rounded-md bg-white/70 border border-black/10 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
        />

        <input
          type="text"
          placeholder="Bike / Model"
          value={form.bike}
          onChange={(e) => setForm({ ...form, bike: e.target.value })}
          className="w-full p-4 rounded-md bg-white/70 border border-black/10 text-black placeholder-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
        />

        <textarea
          placeholder="Describe the issue or project"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full p-4 rounded-md bg-white/70 border border-black/10 text-black placeholder-black/40 h-40 focus:outline-none focus:ring-2 focus:ring-black/20"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-full bg-black text-white hover:text-[#d9772a]"
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>

        {success && (
          <p className="text-black/70 mt-4">
            Request submitted successfully.
          </p>
        )}
      </form>
    </main>
  );
}