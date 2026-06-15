import { motion } from "framer-motion";
import { Calendar, MessageCircle, Star, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";
import clinicHero from "@/assets/clinic-hero.jpg";
import drKunal from "@/assets/doctor-kunal.jpg";
import drPournami from "@/assets/doctor-pournami.jpg";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%20Ilona%20Clinic%2C%20I%27d%20like%20to%20book%20a%20consultation.";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Grid + glow background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.42_0.07_195/0.08),transparent_70%)]" />
      <div className="absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left copy */}
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3.5 py-1.5 text-xs font-medium tracking-wide"
          >
            <ShieldCheck className="size-3.5" />
            Endocrine · Dermatology · Wellness
          </motion.div>

          <motion.h1
            {...fadeUp(0.08)}
            className="mt-5 font-display text-4xl md:text-5xl lg:text-[3.75rem] font-medium leading-[1.05] tracking-tight text-foreground"
          >
            Compassionate care for your{" "}
            <span className="text-primary">hormones</span>,{" "}
            <span className="text-primary">skin</span> &amp; wellbeing.
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Ilona Endocrine &amp; Wellness Centre brings together expert endocrine
            medicine and clinical &amp; aesthetic dermatology — under one roof.
            Personalised, evidence-based care from Dr. Kunal Gupta and Dr. Pournami P.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] hover:opacity-95 transition-opacity"
            >
              <Calendar className="size-4" />
              Book a Consultation
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[color:var(--whatsapp)] text-white px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="size-4" />
              Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.32)}
            className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img src={drKunal} alt="Dr. Kunal Gupta" className="size-9 rounded-full object-cover border-2 border-background" />
                <img src={drPournami} alt="Dr. Pournami P" className="size-9 rounded-full object-cover border-2 border-background" />
              </div>
              <span>Led by 2 senior specialists</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="flex items-center gap-0.5 text-accent">
                {[0,1,2,3,4].map(i => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
              <span>4.9/5 from 500+ patients</span>
            </div>
          </motion.div>
        </div>

        {/* Right — clinic image with floating credentials */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative rounded-[2rem] overflow-hidden shadow-[var(--shadow-card)] border border-border"
          >
            <img
              src={clinicHero}
              alt="Ilona Endocrine and Wellness Centre — modern consultation room"
              width={1280}
              height={1280}
              className="w-full h-[520px] md:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
          </motion.div>

          {/* Floating credential card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="absolute -bottom-6 -left-4 sm:left-6 card-soft rounded-2xl p-4 flex items-center gap-3 max-w-[260px]"
          >
            <div className="grid place-items-center size-11 rounded-xl bg-primary/10 text-primary shrink-0">
              <Stethoscope className="size-5" />
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">Endocrinology</div>
              <div className="text-xs text-muted-foreground mt-0.5">Thyroid · Diabetes · PCOS · Hormones</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="absolute -top-4 -right-2 sm:right-6 card-soft rounded-2xl p-4 flex items-center gap-3 max-w-[260px]"
          >
            <div className="grid place-items-center size-11 rounded-xl bg-accent/30 text-accent-foreground shrink-0">
              <Sparkles className="size-5" />
            </div>
            <div>
              <div className="text-sm font-semibold leading-tight">Dermatology</div>
              <div className="text-xs text-muted-foreground mt-0.5">Skin · Hair · Vitiligo · Aesthetics</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}