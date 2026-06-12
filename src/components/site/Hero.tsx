import { motion } from "framer-motion";
import { Activity, ShieldCheck, Sparkles, Sparkle } from "lucide-react";
import heroImg from "@/assets/hero-figure.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: "easeOut" as const },
});

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      {/* Grid + glow background */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-60" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/20 blur-[140px] -z-0" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left copy */}
        <div className="lg:col-span-6 relative z-10">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-mono tracking-wider text-primary"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
              <span className="relative rounded-full bg-primary size-1.5" />
            </span>
            ENDOCRINE · DERMATOLOGY · WELLNESS
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight"
          >
            Precision care
            <br />
            for your <span className="text-primary text-glow">hormones</span>
            <br />
            <span className="italic">&</span> skin.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Ilona Endocrine & Wellness Centre unites advanced endocrine medicine
            with clinical & aesthetic dermatology — led by Dr. Kunal Gupta and
            Dr. Pournami P — to restore hormonal, metabolic and skin health.
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
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
              href="#specialties"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors border-b border-foreground/20 pb-0.5"
            >
              Explore the practice
            </a>
          </motion.div>
        </div>

        {/* Right — hero render with floating cards */}
        <div className="lg:col-span-6 relative">
          <div className="relative mx-auto w-full max-w-[560px] aspect-square">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-[2rem] overflow-hidden glass shadow-[var(--shadow-card)]"
            >
              {/* concentric rings behind subject */}
              <div className="absolute inset-6 rounded-full border border-primary/15 animate-[spin_50s_linear_infinite]" />
              <div className="absolute inset-20 rounded-full border border-dashed border-primary/20 animate-[spin_70s_linear_infinite_reverse]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,oklch(0.82_0.16_195/0.25),transparent_60%)]" />

              <motion.img
                src={heroImg}
                alt="Translucent 3D human figure visualising endocrine and dermatological care"
                width={1024}
                height={1024}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full h-full object-cover"
              />

              {/* subject overlay sheen */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

              {/* corner tag */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 text-[10px] font-mono tracking-wider text-primary/90 glass rounded-full px-2.5 py-1 z-20">
                <Sparkle className="size-3" /> ILONA · BIO-SCAN
              </div>
            </motion.div>

            {/* Floating card — Thyroid / Endocrine */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="absolute top-8 -left-4 sm:-left-8 glass rounded-2xl p-4 w-[210px] shadow-[var(--shadow-card)] z-20"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-primary">
                <Activity className="size-3" /> Thyroid · TSH
              </div>
              <div className="mt-2 font-display text-2xl font-semibold">
                2.14 <span className="text-xs text-muted-foreground">mIU/L</span>
              </div>
              <div className="mt-2 h-1 w-full rounded-full bg-foreground/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "68%" }}
                  transition={{ delay: 1.1, duration: 1.2 }}
                  className="h-full bg-primary"
                />
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground leading-snug">
                Within optimal endocrine range.
              </p>
            </motion.div>

            {/* Floating card — Skin / Dermatology */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="absolute top-1/3 -right-4 sm:-right-6 glass rounded-2xl p-4 w-[190px] shadow-[var(--shadow-card)] z-20"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-primary">
                <Sparkles className="size-3" /> Skin · Analysis
              </div>
              <div className="mt-2 font-display text-lg font-semibold leading-tight">
                Hydration 92%
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground leading-snug">
                Barrier & pigment scan complete.
              </div>
            </motion.div>

            {/* Floating card — Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-2xl px-4 py-3 flex items-center gap-3 shadow-[var(--shadow-card)] z-20 whitespace-nowrap"
            >
              <div className="grid place-items-center size-9 rounded-xl bg-primary/15 text-primary">
                <ShieldCheck className="size-4" />
              </div>
              <div>
                <div className="text-sm font-semibold leading-tight">Evidence-based care</div>
                <div className="text-[11px] text-muted-foreground">Dual-specialty clinical team</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}