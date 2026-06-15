import { motion } from "framer-motion";
import { Activity, Phone, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import thyroid from "@/assets/hero-thyroid.jpg";
import derm from "@/assets/derm-skin.jpg";
import { clinic } from "@/lib/clinic";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: "easeOut" as const },
});

export function Hero() {
  const telUrl = clinic.phone ? `tel:${clinic.phone.replace(/[^\d+]/g, "")}` : "#contact";

  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/12 blur-[160px] -z-0" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left copy */}
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-primary shrink-0" />
            Endocrinology & Dermatology · Bangalore
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-5 font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight"
          >
            Precision care
            <br />
            for your <span className="text-primary">hormones</span>
            <br />
            <span className="italic">&</span> skin.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Ilona Endocrine &amp; Wellness Centre brings together endocrine medicine and clinical
            &amp; aesthetic dermatology. Dr. Kunal Gupta and Dr. Pournami P look after your
            hormonal, metabolic and skin health.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 text-sm font-semibold shadow-[var(--shadow-glow)] hover:scale-[1.02] transition-transform"
            >
              Book a consultation
              <span className="grid place-items-center size-9 rounded-full bg-background/15 group-hover:bg-background/25 transition-colors">
                →
              </span>
            </a>
            <a
              href={telUrl}
              className="group inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-5 py-3 text-sm font-semibold text-foreground shadow-[0_0_30px_-18px_var(--color-primary)] hover:border-primary/60 hover:bg-primary/12 transition-colors"
            >
              <Phone className="size-4 text-primary group-hover:rotate-12 transition-transform" />
              Call clinic
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-12 pt-10 border-t border-border/40 flex flex-wrap gap-8"
          >
            <div className="flex items-center gap-3 text-sm">
              <div className="grid place-items-center size-9 rounded-xl bg-primary/10 text-primary">
                <ShieldCheck className="size-4" />
              </div>
              <div>
                <div className="font-medium text-foreground">Evidence-based care</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Every protocol clinically grounded
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="grid place-items-center size-9 rounded-xl bg-primary/10 text-primary">
                <Stethoscope className="size-4" />
              </div>
              <div>
                <div className="font-medium text-foreground">Two specialist clinics</div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  Endocrine & Skin under one roof
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right — layered dual-specialty medical visual */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full max-w-[480px]"
          >
            {/* Orbital ring + glow behind the composition */}
            <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[118%] rounded-full border border-primary/10" />
            <div className="absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[64%] rounded-full bg-primary/12 blur-[80px]" />

            {/* Main endocrine figure card */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden ring-1 ring-primary/20 shadow-[var(--shadow-card)]">
              <img
                src={thyroid}
                alt="Endocrine thyroid visualisation"
                width={1024}
                height={1280}
                className="w-full h-full object-cover scale-105"
              />
              {/* Diagnostic grid + tone overlays */}
              <div className="absolute inset-0 grid-bg opacity-[0.12]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />

              {/* HUD corner brackets */}
              <div className="absolute top-4 left-4 size-6 border-t-2 border-l-2 border-primary/40 rounded-tl-md" />
              <div className="absolute top-4 right-4 size-6 border-t-2 border-r-2 border-primary/40 rounded-tr-md" />
              <div className="absolute bottom-4 left-4 size-6 border-b-2 border-l-2 border-primary/40 rounded-bl-md" />
              <div className="absolute bottom-4 right-4 size-6 border-b-2 border-r-2 border-primary/40 rounded-br-md" />

              {/* Endocrinology chip */}
              <div className="absolute top-7 left-1/2 -translate-x-1/2 glass rounded-full px-3.5 py-1.5 flex items-center gap-2 whitespace-nowrap">
                <Activity className="size-3.5 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-semibold">
                  Endocrinology
                </span>
              </div>

              {/* Main caption — width capped so it clears the overlapping derm card */}
              <div className="absolute bottom-7 left-6 right-[44%]">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80 mb-1.5">
                  Specialty 01 · Metabolic
                </div>
                <div className="font-display text-lg md:text-xl font-medium leading-snug">
                  Thyroid · Diabetes · Hormones
                </div>
              </div>
            </div>

            {/* Secondary dermatology card — overlapping, with a gentle float */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{
                opacity: { delay: 0.45, duration: 0.7 },
                scale: { delay: 0.45, duration: 0.7 },
                y: { delay: 1.2, duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-6 -right-4 sm:-right-6 w-[40%] aspect-square rounded-[1.5rem] overflow-hidden ring-4 ring-background shadow-[var(--shadow-card)]"
            >
              <div className="absolute inset-0 ring-1 ring-inset ring-primary/25 rounded-[1.5rem] z-20" />
              <img
                src={derm}
                alt="Dermatology skin and hair visualisation"
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              {/* Dermatology chip */}
              <div className="absolute bottom-3 left-3 right-3 glass rounded-full px-3 py-1.5 flex items-center gap-2 justify-center">
                <Sparkles className="size-3 text-primary" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-primary font-semibold">
                  Dermatology
                </span>
              </div>
            </motion.div>

            {/* Floating dual-specialty badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { delay: 0.7, duration: 0.6 },
                scale: { delay: 0.7, duration: 0.6 },
                y: { delay: 1.3, duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-5 -left-3 sm:-left-5 z-20 glass rounded-2xl px-4 py-2.5 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex rounded-full size-2 bg-primary" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  Dual specialty
                </span>
              </div>
              <div className="text-sm font-semibold font-display mt-0.5 whitespace-nowrap">
                One precision clinic
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
