"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2, Mail, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
      if (!res.ok) throw new Error(data.error || "Erreur lors de l'envoi");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue");
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50";

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
          <p className="text-sm text-muted-foreground">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Travaillons <span className="text-primary">ensemble</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Un projet en tête ? Une question ? N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 space-y-6 rounded-2xl border border-black/10 bg-white/60 p-8 backdrop-blur-sm"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground/80">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
              required
              disabled={status === "loading"}
              className={inputClass}
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
              required
              disabled={status === "loading"}
              className={inputClass}
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
              required
              disabled={status === "loading"}
              rows={5}
              className={`${inputClass} resize-none`}
              placeholder="Décrivez votre projet..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:min-w-[200px]"
            >
              {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "success" && <CheckCircle2 className="h-4 w-4" />}
              {(status === "idle" || status === "error") && <Send className="h-4 w-4" />}
              {status === "loading" && "Envoi..."}
              {status === "success" && "Envoyé !"}
              {(status === "idle" || status === "error") && "Envoyer"}
            </button>
          </div>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm font-medium text-green-600"
            >
              ✓ Merci ! Votre message a bien été envoyé.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm font-medium text-red-600"
            >
              ✗ {errorMessage}
            </motion.p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground">Ou contactez-moi directement :</p>
          <div className="mt-4 flex justify-center gap-6">
            <a
              href="mailto:scicluna.mathieu@hotmail.fr"
              className="inline-flex items-center gap-2 text-foreground/60 transition hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mathieu-scicluna-8346482ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground/60 transition hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
