import { motion } from "framer-motion";

const stats = [
  { v: "2", l: "Specialist clinics under one roof" },
  { v: "13+", l: "Dermatology treatments offered" },
  { v: "6", l: "Endocrine care programmes" },
  { v: "100%", l: "Personalised treatment protocols" },
];

export function Stats() {
  return (
    <section className="relative border-y border-border/60 bg-card/40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.7 }}
          >
            <div className="font-display text-4xl md:text-5xl font-medium text-primary">
              {s.v}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}