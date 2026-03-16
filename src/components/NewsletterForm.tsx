"use client";

import { useState } from "react";

type FormStatus = {
  tone: "success" | "error";
  message: string;
};

export function NewsletterForm() {
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
      const response = await fetch("/api/newsletter", {
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
            : "Une erreur est survenue lors de l'inscription.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 max-w-xl">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Adresse Email"
          className="w-full rounded-full border border-white/25 bg-white/8 px-5 py-3 text-sm text-white placeholder:text-white/55 focus:border-[#D4AF37]/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.1em] text-[#1b1408] transition-colors hover:bg-[#e5c55a] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Envoi..." : "S'inscrire"}
        </button>
      </div>

      {status ? (
        <p
          className={`mt-3 text-sm ${
            status.tone === "success" ? "text-[#dcefc7]" : "text-[#ffb2a6]"
          }`}
        >
          {status.message}
        </p>
      ) : null}
    </form>
  );
}

