import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Discovery consult", d: "60-minute deep dive into history, lifestyle and symptoms." },
  { n: "02", t: "Advanced diagnostics", d: "Comprehensive hormonal panels, imaging and continuous monitoring." },
  { n: "03", t: "Precision roadmap", d: "Personalised clinical, nutritional and lifestyle protocol." },
  { n: "04", t: "Active treatment", d: "Guided therapy with weekly check-ins and protocol tuning." },
  { n: "05", t: "Long-term wellness", d: "Quarterly reviews to maintain metabolic equilibrium." },
];

export function Journey() {
  return (
    <section id="journey" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">— Patient journey</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            A clinically structured path to <span className="italic text-primary">balance</span>.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[42px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:left-1/2 md:-translate-x-px" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative flex items-start gap-6 md:gap-12 md:w-1/2 ${i % 2 === 0 ? "md:ml-auto md:flex-row" : "md:mr-auto md:flex-row-reverse md:text-right"}`}
              >
                <span className="relative z-10 grid place-items-center size-[88px] shrink-0 rounded-full glass font-display text-xl text-primary">
                  {s.n}
                </span>
                <div className="glass rounded-2xl px-6 py-5 flex-1">
                  <h3 className="font-display text-xl font-medium">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}