import { motion } from "framer-motion";
import { Award, GraduationCap, Microscope } from "lucide-react";
import portrait from "@/assets/doctor-kunal.jpg";

const creds = [
  { icon: GraduationCap, label: "MD, DM (Endocrinology) · AIIMS alumnus" },
  { icon: Award, label: "Fellow, American Association of Clinical Endocrinology" },
  { icon: Microscope, label: "Lead researcher · thyroid & metabolic disorders" },
];

export function Doctor() {
  return (
    <section id="doctor" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 size-[500px] rounded-full bg-primary/15 blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] max-w-md rounded-[2rem] overflow-hidden glass">
            <img
              src={portrait}
              alt="Dr. Kunal Gupta, lead endocrinologist"
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass rounded-2xl px-4 py-3">
              <div>
                <div className="text-xs font-mono text-primary uppercase tracking-wider">Lead Endocrinologist</div>
                <div className="font-display text-lg font-medium">Dr. Kunal Gupta</div>
              </div>
              <div className="text-right">
                <div className="font-display text-2xl text-primary">15+</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Years</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-5">— Clinical director</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
            A physician who treats the <span className="italic text-primary">system</span>, not the symptom.
          </h2>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Dr. Gupta combines fifteen years of metabolic science with deeply personal
            care — building protocols that respect both your biology and your life.
          </p>

          <ul className="mt-10 space-y-4">
            {creds.map((c) => (
              <li key={c.label} className="flex items-center gap-4 glass rounded-2xl px-5 py-4">
                <span className="grid place-items-center size-10 rounded-xl bg-primary/15 text-primary">
                  <c.icon className="size-5" />
                </span>
                <span className="text-sm">{c.label}</span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-10 pl-5 border-l-2 border-primary text-foreground/80 italic font-display text-xl leading-relaxed">
            "Precision is care made personal — and that's the foundation of everything we do at Ilona."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}