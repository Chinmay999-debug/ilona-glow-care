import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import thyroid from "@/assets/hero-thyroid.jpg";
import pancreas from "@/assets/organ-pancreas.jpg";
import ovary from "@/assets/organ-ovary.jpg";
import brain from "@/assets/organ-brain.jpg";
import adrenal from "@/assets/organ-adrenal.jpg";
import dna from "@/assets/organ-dna.jpg";

const services = [
  { img: thyroid, tag: "Endocrine core", title: "Thyroid disorders", desc: "Hashimoto's, hypothyroidism, nodules and advanced thyroid imaging." },
  { img: pancreas, tag: "Metabolic", title: "Diabetes precision", desc: "Type 1 & 2 management with CGM and individualised insulin protocols." },
  { img: ovary, tag: "Hormonal", title: "PCOS & women's health", desc: "Root-cause approach to PCOS, fertility and reproductive metabolism." },
  { img: brain, tag: "Neuroendocrine", title: "Pituitary care", desc: "Hormone-axis disorders, prolactinomas and growth hormone therapy." },
  { img: adrenal, tag: "Adrenal", title: "Adrenal & cortisol", desc: "Cushing's, Addison's and adrenal fatigue with targeted diagnostics." },
  { img: dna, tag: "Longevity", title: "Metabolic wellness", desc: "Genomic-guided protocols for energy, sleep, body composition and ageing." },
];

export function Services() {
  return (
    <section id="specialties" className="py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">— Clinical focus</div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight max-w-xl">
              Six disciplines, one <span className="italic text-primary">precision</span> framework.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Every protocol is engineered around your unique endocrine signature — not a template.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass rounded-3xl p-6 overflow-hidden hover:border-primary/40 transition-colors"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-background/40 mb-6">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute top-3 left-3 glass rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-primary">
                  {s.tag}
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <span className="grid place-items-center size-10 shrink-0 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}