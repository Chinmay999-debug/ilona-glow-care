import { motion } from "framer-motion";
import { Award, GraduationCap, Microscope } from "lucide-react";
import portrait from "@/assets/doctor-kunal.jpg";
import portraitPournami from "@/assets/doctor-pournami.jpg";

const doctors = [
  {
    img: portrait,
    role: "Lead Endocrinologist",
    name: "Dr. Kunal Gupta",
    years: "15+",
    tagline: "A physician who treats the system, not the symptom.",
    bio: "Fifteen years of metabolic science combined with deeply personal care — building protocols that respect both your biology and your life.",
    creds: [
      { icon: GraduationCap, label: "MD, DM (Endocrinology) · AIIMS alumnus" },
      { icon: Award, label: "Fellow, American Association of Clinical Endocrinology" },
      { icon: Microscope, label: "Lead researcher · thyroid & metabolic disorders" },
    ],
    quote: "Precision is care made personal — that's the foundation of everything we do at Ilona.",
  },
  {
    img: portraitPournami,
    role: "Consultant Dermatologist",
    name: "Dr. Pournami P",
    years: "Clinical & Aesthetic",
    tagline: "Healthy skin, healthy hair, renewed confidence.",
    bio: "Evidence-based, compassionate skin, hair and nail care — with a special interest in vitiligo, pigmentation and complex dermatological conditions.",
    creds: [
      { icon: GraduationCap, label: "MBBS · Vydehi Institute of Medical Sciences, Bengaluru" },
      { icon: Award, label: "MD (Dermatology) · JSS Medical College, Mysuru" },
      { icon: Microscope, label: "Special interest · vitiligo, phototherapy & vitiligo surgery" },
    ],
    quote: "I want every patient to feel heard, understood — and to walk out with their confidence back.",
  },
];

export function Doctor() {
  return (
    <section id="doctors" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 size-[500px] rounded-full bg-primary/15 blur-[150px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">— Clinical leadership</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight max-w-3xl mx-auto leading-[1.05]">
            Two specialists. One <span className="italic text-primary">precision</span> standard of care.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {doctors.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.1 }}
              className="glass rounded-[2rem] p-6 md:p-8"
            >
              <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden">
                <img
                  src={d.img}
                  alt={`${d.name}, ${d.role}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass rounded-2xl px-4 py-3">
                  <div>
                    <div className="text-[10px] font-mono text-primary uppercase tracking-wider">{d.role}</div>
                    <div className="font-display text-lg font-medium">{d.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-xl text-primary">{d.years}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Years</div>
                  </div>
                </div>
              </div>

              <h3 className="mt-8 font-display text-2xl md:text-3xl font-medium leading-snug tracking-tight">
                {d.tagline}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{d.bio}</p>

              <ul className="mt-6 space-y-3">
                {d.creds.map((c) => (
                  <li key={c.label} className="flex items-center gap-3 rounded-xl px-3 py-2 bg-foreground/5">
                    <span className="grid place-items-center size-8 rounded-lg bg-primary/15 text-primary shrink-0">
                      <c.icon className="size-4" />
                    </span>
                    <span className="text-sm">{c.label}</span>
                  </li>
                ))}
              </ul>

              <blockquote className="mt-6 pl-4 border-l-2 border-primary text-foreground/80 italic font-display text-lg leading-relaxed">
                "{d.quote}"
              </blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}