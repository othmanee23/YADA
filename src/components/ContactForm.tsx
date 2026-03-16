"use client";

import { useState } from "react";

type FormStatus = {
  tone: "success" | "error";
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as {
        ok: boolean;
        message: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Une erreur est survenue.");
      }

      form.reset();
      setStatus({
        tone: "success",
        message: data.message,
      });
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : "Une erreur est survenue lors de l'envoi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="block">
        <span className="sr-only">Nom et prénom</span>
        <input
          type="text"
          name="fullName"
          placeholder="Nom & Prénom"
          required
          className="w-full rounded-2xl border border-[#d4af37]/22 bg-white px-5 py-4 text-sm text-[#1f170d] placeholder:text-[#8a7962] focus:border-[#b58a2b] focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="sr-only">Email</span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-2xl border border-[#d4af37]/22 bg-white px-5 py-4 text-sm text-[#1f170d] placeholder:text-[#8a7962] focus:border-[#b58a2b] focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="sr-only">Sujet</span>
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          required
          className="w-full rounded-2xl border border-[#d4af37]/22 bg-white px-5 py-4 text-sm text-[#1f170d] placeholder:text-[#8a7962] focus:border-[#b58a2b] focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="sr-only">Téléphone</span>
        <input
          type="tel"
          name="phone"
          placeholder="Téléphone"
          className="w-full rounded-2xl border border-[#d4af37]/22 bg-white px-5 py-4 text-sm text-[#1f170d] placeholder:text-[#8a7962] focus:border-[#b58a2b] focus:outline-none"
        />
      </label>

      <label className="block sm:col-span-2">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="w-full rounded-[1.7rem] border border-[#d4af37]/22 bg-white px-5 py-4 text-sm text-[#1f170d] placeholder:text-[#8a7962] focus:border-[#b58a2b] focus:outline-none"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex rounded-full bg-[linear-gradient(135deg,#a87a22,#d4af37)] px-7 py-4 text-sm font-extrabold uppercase tracking-[0.1em] text-[#1b1408] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Envoi..." : "Envoyer"}
        </button>

        {status ? (
          <p
            className={`mt-4 text-sm ${
              status.tone === "success" ? "text-[#217246]" : "text-[#9d2d1b]"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

