"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check, AlertCircle } from "lucide-react";

const TOPICS = [
  "General inquiry",
  "Volunteer",
  "Partnership",
  "Corporate sponsorship",
  "Tribute gift (in honor / in memory)",
  "Planned giving",
  "Mail-in donation address",
  "Press / media",
  "Speaking engagement",
  "Share my story",
] as const;

type Status = "idle" | "submitting" | "ok" | "error";

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");
}

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<string>(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Prefill topic from ?topic= after mount (avoids prerender Suspense).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const raw = new URLSearchParams(window.location.search).get("topic");
    if (!raw) return;
    const initial = raw.trim();
    const exact = TOPICS.find(
      (t) => t.toLowerCase() === initial.toLowerCase()
    );
    setTopic(exact ?? initial);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMsg("Please fill in your name, email, and message.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "bot-field": botField,
          name,
          email,
          topic,
          message,
        }),
      });
      if (!res.ok) throw new Error(`Submission failed (${res.status}).`);
      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setErrorMsg(`${message} Please email support@hopecareglobal.org if this keeps happening.`);
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl bg-white border border-teal/30 p-10 md:p-12 shadow-[0_20px_50px_-20px_rgba(15,139,158,0.3)]"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-deep via-teal to-green grid place-items-center text-white shadow-[0_12px_30px_-8px_rgba(15,139,158,0.5)]">
          <Check className="w-6 h-6" strokeWidth={2.5} />
        </div>
        <h2
          className="mt-7 font-bold text-navy"
          style={{
            fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
          }}
        >
          Thank you — your message is{" "}
          <span className="text-gradient-brand">in</span>.
        </h2>
        <p className="mt-4 text-lg text-ink-soft leading-relaxed max-w-xl">
          We&apos;ve received your note and one of us will respond within two
          business days. If your inquiry is time-sensitive, you can also email
          us at{" "}
          <a
            href="mailto:support@hopecareglobal.org"
            className="text-teal-deep font-semibold underline-offset-4 hover:underline"
          >
            support@hopecareglobal.org
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep hover:text-teal-bright transition-colors"
        >
          Send another message
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative rounded-3xl bg-white border border-navy/8 p-7 md:p-10 shadow-[0_20px_50px_-25px_rgba(10,37,64,0.18)]"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-px bg-gradient-to-r from-teal to-transparent" />
        <span className="text-[0.72rem] tracking-[0.28em] uppercase font-bold text-teal-deep">
          Send Us a Note
        </span>
      </div>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        className="space-y-5"
      >
        {/* Netlify form-name, used by the function that processes submissions */}
        <input type="hidden" name="form-name" value="contact" />
        {/* Honeypot field — bots fill this in, humans don't see it */}
        <p className="hidden">
          <label>
            Don&apos;t fill this out:{" "}
            <input
              name="bot-field"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field
            id="name"
            label="Your name"
            required
            value={name}
            onChange={setName}
            autoComplete="name"
            placeholder="First and last"
          />
          <Field
            id="email"
            label="Email"
            type="email"
            required
            value={email}
            onChange={setEmail}
            autoComplete="email"
            placeholder="you@email.com"
          />
        </div>

        <div>
          <Label htmlFor="topic">What&apos;s this about?</Label>
          <select
            id="topic"
            name="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-2 w-full bg-mist text-navy rounded-xl border border-navy/10 px-4 py-3.5 focus:outline-none focus:border-teal/40 focus:bg-white transition-colors appearance-none cursor-pointer"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%230a2540' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>\")",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 1rem center",
              backgroundSize: "12px",
              paddingRight: "2.5rem",
            }}
          >
            {!TOPICS.includes(topic as (typeof TOPICS)[number]) && (
              <option value={topic}>{topic}</option>
            )}
            {TOPICS.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="message">Your message</Label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            placeholder="Tell us what's on your mind..."
            className="mt-2 w-full bg-mist text-navy rounded-xl border border-navy/10 px-4 py-3.5 focus:outline-none focus:border-teal/40 focus:bg-white transition-colors resize-y min-h-[140px]"
          />
        </div>

        {status === "error" && errorMsg && (
          <div className="flex items-start gap-2 text-[0.85rem] text-rose-700 bg-rose-50 border border-rose-200 rounded-xl px-4 py-3">
            <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <p className="text-[0.72rem] text-ink-mute">
            By submitting, you agree we can use this info to respond to you. We don&apos;t share or sell it.
          </p>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-deep via-teal to-green text-white px-6 py-3.5 rounded-full font-semibold btn-lift shadow-[0_14px_40px_-12px_rgba(15,139,158,0.55)] disabled:opacity-60 disabled:cursor-wait"
          >
            {status === "submitting" ? "Sending…" : "Send Message"}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </form>
    </motion.div>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-[0.78rem] tracking-[0.06em] font-semibold text-navy"
    >
      {children}
    </label>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  autoComplete,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-teal-deep ml-1">*</span>}
      </Label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="mt-2 w-full bg-mist text-navy rounded-xl border border-navy/10 px-4 py-3.5 placeholder:text-ink-mute/50 focus:outline-none focus:border-teal/40 focus:bg-white transition-colors"
      />
    </div>
  );
}
