import { motion } from "framer-motion";

const stats = [
  { v: "15+", l: "Years of clinical practice" },
  { v: "12k", l: "Hormonal panels analysed" },
  { v: "98%", l: "Patient satisfaction" },
  { v: "4.0", l: "Avg. A1C improvement" },
];

const stats2 = [
  { v: "15+", l: "Years of clinical experience" },
  { v: "10k+", l: "Patients cared for" },
  { v: "2", l: "Senior super-specialists" },
  { v: "4.9★", l: "Average patient rating" },
];

export function Stats() {
  return (
    <section className="relative bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
            className="text-center md:text-left"
          >
            <div className="font-display text-3xl md:text-4xl font-semibold text-primary">
              {s.v}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}