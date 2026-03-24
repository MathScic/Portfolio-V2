"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, Mail, Linkedin } from "lucide-react";
import { useT } from "../../context/LanguageContext";

export default function Contact() {
  const { t } = useT();
  const c = t.contact;

  const [formData, setFormData] = useState({ name: "", email: "", businessType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || c.errorDefault);
      setStatus("success");
      setFormData({ name: "", email: "", businessType: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : c.errorDefault);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 dark:border-white/10 dark:bg-white/[0.06]";

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" id="contact">
      <div className="mx-auto w-[90%] sm:w-full sm:max-w-2xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">{c.label}</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {c.title} <span className="text-primary">{c.titleAccent}</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">{c.subtitle}</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 space-y-6 rounded-2xl border border-black/10 bg-white/60 p-8 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground/80">{c.nameLabel}</label>
            <input type="text" id="name" value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} required disabled={status === "loading"} className={inputClass} placeholder={c.namePlaceholder} />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80">{c.emailLabel}</label>
            <input type="email" id="email" value={formData.email} onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))} required disabled={status === "loading"} className={inputClass} placeholder={c.emailPlaceholder} />
          </div>

          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-foreground/80">{c.businessTypeLabel}</label>
            <select id="businessType" value={formData.businessType} onChange={(e) => setFormData((p) => ({ ...p, businessType: e.target.value }))} disabled={status === "loading"} className={inputClass}>
              <option value="">{c.businessTypeDefault}</option>
              {c.businessTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80">{c.messageLabel}</label>
            <textarea id="message" value={formData.message} onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))} required disabled={status === "loading"} rows={5} className={`${inputClass} resize-none`} placeholder={c.messagePlaceholder} />
          </div>

          <div className="flex justify-center">
            <button type="submit" disabled={status === "loading" || status === "success"} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[220px]">
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <CheckCircle2 className="h-4 w-4" />}
              {(status === "idle" || status === "error") && <Send className="h-4 w-4" />}
              {status === "loading" ? c.sending : status === "success" ? c.sent : c.cta}
            </button>
          </div>

          {status === "success" && (
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm font-medium text-green-600">
              {c.successMsg}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm font-medium text-red-600">
              ✗ {errorMessage}
            </motion.p>
          )}
        </motion.form>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">{c.or}</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="mailto:scicluna.mathieu@hotmail.fr" className="inline-flex items-center gap-2 text-foreground/60 transition hover:text-foreground" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/mathieu-scicluna-8346482ba/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-foreground/60 transition hover:text-foreground" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
