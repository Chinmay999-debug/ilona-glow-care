import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Clock, Phone } from "lucide-react";
import { useState } from "react";
import { clinic } from "@/lib/clinic";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/8 bg-white/4 backdrop-blur-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 transition-shadow";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const hasForm = Boolean(clinic.formspreeId);
  const waUrl = clinic.whatsapp
    ? `https://wa.me/${clinic.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Ilona%20Clinic.`
    : "#contact";
  const telUrl = clinic.phone ? `tel:${clinic.phone.replace(/[^\d+]/g, "")}` : "#contact";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!hasForm) return;
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(`https://formspree.io/f/${clinic.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
              Get in touch
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight max-w-3xl mx-auto leading-[1.05]">
              Book your first consultation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              {clinic.whatsapp
                ? "Chat on WhatsApp for quick queries, or fill in the form and we'll confirm your appointment."
                : "Fill in the form and we'll confirm your appointment, or reach out directly."}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Left column — WhatsApp + hours */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl border border-[#25D366]/25 bg-[linear-gradient(135deg,rgba(37,211,102,0.16),rgba(255,255,255,0.04)_48%,rgba(125,233,255,0.12))] p-6 shadow-[0_24px_80px_-45px_rgba(37,211,102,0.8)] backdrop-blur-xl"
            >
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-[#25D366]/20 blur-3xl" />
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-[#25D366]" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#25D366]">
                    Rapid booking line
                  </span>
                </div>

                <h3 className="font-display text-3xl font-medium leading-tight">
                  WhatsApp or call.
                  <br />
                  Skip the waiting.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Choose the fastest route for appointments, fees, treatment queries, or finding the
                  right specialist.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <a
                    href={waUrl}
                    target={clinic.whatsapp ? "_blank" : undefined}
                    rel={clinic.whatsapp ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-2xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-white shadow-[0_14px_34px_-18px_rgba(37,211,102,0.9)] transition-transform hover:scale-[1.015]"
                  >
                    <span className="flex items-center gap-2">
                      <WhatsAppIcon className="size-5" />
                      WhatsApp now
                    </span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href={telUrl}
                    className="group flex items-center justify-between rounded-2xl border border-primary/25 bg-background/50 px-4 py-3.5 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="size-5 text-primary" />
                      Call clinic
                    </span>
                    <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Appointments", "Doctor availability", "Consult fees"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Clinic hours card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="glass rounded-3xl p-6 flex gap-4 items-start"
            >
              <div className="grid place-items-center size-10 rounded-xl bg-primary/15 text-primary shrink-0">
                <Clock className="size-5" />
              </div>
              <div>
                <div className="font-medium text-sm">Clinic hours</div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed space-y-0.5">
                  <div>{clinic.hours.weekdays}</div>
                  <div>{clinic.hours.sunday}</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column — Appointment form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="lg:col-span-3 glass rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="grid place-items-center size-10 rounded-xl bg-primary/15 text-primary shrink-0">
                <CalendarCheck className="size-5" />
              </div>
              <div>
                <div className="font-display text-xl font-medium">Book an appointment</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  We'll confirm within 24 hours
                </div>
              </div>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center py-14 text-center gap-4"
              >
                <div className="grid place-items-center size-16 rounded-full bg-primary/15 text-primary">
                  <CalendarCheck className="size-8" />
                </div>
                <h3 className="font-display text-2xl font-medium">Request received!</h3>
                <p className="text-muted-foreground max-w-xs leading-relaxed">
                  We'll confirm your appointment via WhatsApp or phone shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-primary underline underline-offset-4"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="hidden"
                  name="_subject"
                  value="New appointment request for Ilona Clinic"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      Full name *
                    </label>
                    <input
                      name="name"
                      required
                      type="text"
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    Clinic / Doctor *
                  </label>
                  <select
                    name="clinic"
                    required
                    defaultValue=""
                    className={`${inputClass} [color-scheme:dark]`}
                  >
                    <option value="" disabled>
                      Select a specialist
                    </option>
                    <option value="Endocrinology with Dr. Kunal Gupta">
                      Endocrinology with Dr. Kunal Gupta
                    </option>
                    <option value="Skin & Hair with Dr. Pournami P">
                      Skin & Hair with Dr. Pournami P
                    </option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                    Brief concern
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Briefly describe what you'd like to consult about…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {hasForm ? (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {submitting ? "Sending…" : "Request appointment →"}
                  </button>
                ) : (
                  <div className="rounded-2xl bg-primary/5 border border-primary/15 px-5 py-4 text-sm text-muted-foreground text-center leading-relaxed">
                    Online booking is not yet active. Please use the WhatsApp or call options to
                    book your appointment.
                  </div>
                )}

                {hasForm && (
                  <p className="text-center text-[11px] text-muted-foreground">
                    Or reach us instantly on{" "}
                    <a
                      href={waUrl}
                      target={clinic.whatsapp ? "_blank" : undefined}
                      rel={clinic.whatsapp ? "noopener noreferrer" : undefined}
                      className="text-[#25D366] underline underline-offset-2"
                    >
                      WhatsApp
                    </a>
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
