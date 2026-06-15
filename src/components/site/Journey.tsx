import { motion } from "framer-motion";

const steps = [
  { n: "01", t: "Book your appointment", d: "Schedule online, over the phone or via WhatsApp — at a time that works for you." },
  { n: "02", t: "Detailed consultation", d: "An unhurried visit with your specialist to understand your history, symptoms and goals." },
  { n: "03", t: "Investigations & diagnosis", d: "Targeted lab work, imaging or skin tests with clear explanations of every result." },
  { n: "04", t: "Personalised treatment plan", d: "Evidence-based therapy tailored to your condition, lifestyle and preferences." },
  { n: "05", t: "Follow-up & long-term care", d: "Regular reviews to track progress, adjust therapy and support your wellbeing." },
];

export function Journey() {
  return (
    <section id="journey" className="py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium mb-4">
            Patient Journey
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]">
            Simple, transparent care from <span className="text-primary">start to follow-up</span>.
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
                <span className="relative z-10 grid place-items-center size-[72px] shrink-0 rounded-full bg-primary text-primary-foreground font-display text-base font-semibold shadow-[var(--shadow-glow)]">
                  {s.n}
                </span>
                <div className="card-soft rounded-2xl px-6 py-5 flex-1">
                  <h3 className="font-display text-lg font-semibold">{s.t}</h3>
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