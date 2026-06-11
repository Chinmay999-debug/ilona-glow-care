import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-[2.5rem] glass p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-primary/30 blur-[140px]" />
          <div className="relative">
            <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-5">— Ready when you are</div>
            <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight max-w-3xl mx-auto leading-[1.05]">
              Begin your journey to <span className="italic text-primary">hormonal harmony</span>.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Schedule a discovery consultation with Dr. Kunal Gupta — and design a metabolic roadmap built for your biology.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 text-sm font-semibold shadow-[var(--shadow-glow)]"
              >
                Book consultation
                <span className="grid place-items-center size-9 rounded-full bg-background/15 group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
              <a
                href="tel:+910000000000"
                className="inline-flex items-center gap-3 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition-colors"
              >
                <Phone className="size-4 text-primary" /> Speak to our team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}