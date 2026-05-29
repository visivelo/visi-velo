"use client";

import { useState } from "react";
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
    <main className="min-h-screen px-6 py-24 text-white">

      {/* HOME LINK */}
      <Link
        href="/"
        className="text-sm text-white/60"
      >
        ← home
      </Link>

      {/* HEADER */}
      <h1 className="text-5xl mt-8 text-[#d9772a]">
        service request
      </h1>

      <p className="mt-4 max-w-xl text-white/80">
        Schedule repair, restoration, consultation, or custom build services.
      </p>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="mt-10 max-w-xl space-y-4"
      >

        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full p-4 rounded bg-white/5 border border-white/10"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="w-full p-4 rounded bg-white/5 border border-white/10"
          required
        />

        <input
          type="text"
          placeholder="Bike / Model"
          value={form.bike}
          onChange={(e) =>
            setForm({ ...form, bike: e.target.value })
          }
          className="w-full p-4 rounded bg-white/5 border border-white/10"
        />

        <textarea
          placeholder="Describe the issue or project"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="w-full p-4 rounded bg-white/5 border border-white/10 h-40"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-white text-black rounded-full"
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>

        {success && (
          <p className="text-green-400">
            Request submitted successfully.
          </p>
        )}

      </form>

    </main>
  );
}