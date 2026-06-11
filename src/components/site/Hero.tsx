import { motion } from "framer-motion";
import { Activity, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-thyroid.jpg";

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

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
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
            ENDOCRINE · METABOLIC · HORMONAL
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight"
          >
            Precision care
            <br />
            for your <span className="text-primary text-glow">hormonal</span>
            <br />
            architecture.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Ilona Endocrine & Wellness Centre combines advanced diagnostics with
            world-class clinical expertise — led by Dr. Kunal Gupta — to restore
            thyroid, diabetic and metabolic equilibrium.
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
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="relative aspect-square max-w-[560px] mx-auto"
          >
            {/* concentric rings */}
            <div className="absolute inset-0 rounded-full border border-primary/15 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-6 rounded-full border border-primary/10" />
            <div className="absolute inset-16 rounded-full border border-dashed border-primary/15 animate-[spin_60s_linear_infinite_reverse]" />

            <motion.img
              src={heroImg}
              alt="3D rendering of human thyroid gland with glowing vasculature"
              width={1024}
              height={1024}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(56,189,248,0.25)]"
            />
          </motion.div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute top-6 -left-2 lg:left-0 glass rounded-2xl p-4 max-w-[210px] shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-primary">
              <Activity className="size-3" /> TSH · Live
            </div>
            <div className="mt-2 font-display text-2xl font-semibold">2.14 <span className="text-xs text-muted-foreground">mIU/L</span></div>
            <div className="mt-2 h-1 w-full rounded-full bg-foreground/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "68%" }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="h-full bg-primary"
              />
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground leading-snug">
              Within optimal endocrine range.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 -right-2 lg:right-0 glass rounded-2xl p-4 flex items-center gap-3 shadow-[var(--shadow-card)]"
          >
            <div className="grid place-items-center size-10 rounded-xl bg-primary/15 text-primary">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">98.4% accuracy</div>
              <div className="text-[11px] text-muted-foreground">AI-assisted diagnostics</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-1/2 -right-6 hidden lg:flex glass rounded-full px-3 py-1.5 items-center gap-2 text-xs font-mono text-primary"
          >
            <Sparkles className="size-3" /> 24/7 monitoring
          </motion.div>
        </div>
      </div>
    </section>
  );
}