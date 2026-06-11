import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { q: "After years of unanswered thyroid symptoms, Dr. Gupta's protocol gave me my energy back in three months.", a: "Priya M.", r: "Thyroid patient" },
  { q: "The most thorough endocrine consultation I've ever had. The diagnostics are years ahead.", a: "Rohan K.", r: "Type 2 diabetes" },
  { q: "Finally a clinic that treats PCOS as the metabolic condition it actually is.", a: "Ananya S.", r: "PCOS care" },
];

export function Testimonials() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
            Voices of <span className="italic text-primary">restored</span> wellness.
          </h2>
          <div className="hidden md:block font-mono text-xs tracking-[0.2em] text-primary uppercase">— Testimonials</div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="glass rounded-3xl p-8 flex flex-col"
            >
              <Quote className="size-6 text-primary mb-6" />
              <blockquote className="text-lg leading-relaxed font-display text-foreground/90 flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border/60">
                <div className="font-medium">{t.a}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.r}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}