import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { q: "Dr. Gupta took the time to actually understand my thyroid symptoms. Within months I felt like myself again.", a: "Priya M.", r: "Thyroid patient" },
  { q: "The clearest explanation I've ever received about my diabetes — and a plan that finally works for my routine.", a: "Rohan K.", r: "Type 2 diabetes" },
  { q: "Dr. Pournami's vitiligo treatment changed how I feel about my skin. Kind, patient and genuinely skilled.", a: "Ananya S.", r: "Dermatology patient" },
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium mb-4">
              Patient Stories
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] max-w-xl">
              Trusted by patients across <span className="text-primary">every age &amp; stage</span>.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="card-soft rounded-3xl p-7 flex flex-col"
            >
              <Quote className="size-6 text-primary mb-6" />
              <blockquote className="text-base leading-relaxed text-foreground/85 flex-1">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border">
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