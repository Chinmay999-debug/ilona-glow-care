import { motion } from "framer-motion";
import {
  Activity, Droplets, Scale, HeartPulse, Bone, Stethoscope,
  Sparkles, Scissors, Wand2, Sun, Shield, Microscope, ScanFace, Leaf, Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
};

const endocrineServices: Service[] = [
  {
    icon: Droplets,
    title: "Diabetes Management",
    desc: "Specialised care for Type 1, Type 2 and pancreatic-related diabetes with modern therapies.",
    points: ["Type 1 & Type 2 diabetes", "GLP-1 / GIP receptor agonist therapy", "Continuous glucose monitoring (CGM)", "Insulin titration & lifestyle plans"],
  },
  {
    icon: Activity,
    title: "Thyroid Care",
    desc: "Advanced diagnosis and treatment for the full spectrum of thyroid disorders.",
    points: ["Hypothyroidism & Hashimoto's", "Hyperthyroidism & Graves' disease", "Thyroid nodules & cancer", "Pregnancy thyroid care"],
  },
  {
    icon: Scale,
    title: "Weight & Metabolic Health",
    desc: "Comprehensive, sustainable support for obesity and related metabolic concerns.",
    points: ["Medical weight management", "Metabolic syndrome", "Insulin resistance", "Modern anti-obesity therapy"],
  },
  {
    icon: HeartPulse,
    title: "Hormonal & Reproductive Health",
    desc: "Expert management of hormonal disorders affecting women and men.",
    points: ["PCOS & PCOD", "Reproductive endocrinology", "Male infertility & low testosterone", "Delayed / precocious puberty"],
  },
  {
    icon: Bone,
    title: "Bone Health",
    desc: "Diagnosis and treatment for bone metabolism disorders at every life stage.",
    points: ["Osteoporosis & osteopenia", "Vitamin D & calcium disorders", "Rickets & metabolic bone disease", "DEXA-guided treatment"],
  },
  {
    icon: Stethoscope,
    title: "General Endocrinology",
    desc: "Tailored care for complex hormone-related conditions across all glands.",
    points: ["Adrenal & cortisol disorders", "Pituitary & growth hormone", "Electrolyte imbalance", "Endocrine cancers"],
  },
];

const dermatologyServices: Service[] = [
  {
    icon: ScanFace,
    title: "Acne & Acne Scar Treatment",
    desc: "Customised plans for active acne and advanced scar revision protocols.",
    points: ["Chemical peels & medical therapy", "Subcision & microneedling", "PRP therapy", "Fractional laser resurfacing"],
  },
  {
    icon: Sun,
    title: "Pigmentation & Melasma",
    desc: "Targeted treatment for melasma, hyperpigmentation, tanning and uneven tone.",
    points: ["Melasma & PIH", "Sun damage & tanning", "Chemical peels", "Customised skincare regimens"],
  },
  {
    icon: Sparkles,
    title: "Hair Fall & Hair Restoration",
    desc: "Diagnosis-led treatment for hair loss, alopecia and scalp disorders.",
    points: ["PRP therapy", "Growth Factor Concentrate (GFC)", "Male & female pattern hair loss", "Alopecia areata"],
  },
  {
    icon: Leaf,
    title: "Hydrafacial & Medi-Facials",
    desc: "Professional skin rejuvenation to cleanse, hydrate and restore skin health.",
    points: ["Signature Hydrafacial", "Medical-grade facials", "Glow & brightening protocols", "Bridal & event skincare"],
  },
  {
    icon: Scissors,
    title: "Mole, Skin Tag & Cyst Removal",
    desc: "Safe surgical removal of benign skin growths with excellent cosmetic results.",
    points: ["Moles & skin tags", "Sebaceous & epidermoid cysts", "Seborrheic keratoses", "Minimal-scar techniques"],
  },
  {
    icon: Wand2,
    title: "Wart Removal",
    desc: "Advanced options for all wart types using the most suitable modality.",
    points: ["Cryotherapy", "Radiofrequency & electrocautery", "Immunotherapy", "Plantar, periungual & genital warts"],
  },
  {
    icon: Shield,
    title: "Vitiligo & Melanocyte Grafting",
    desc: "Special expertise in comprehensive medical and surgical vitiligo care.",
    points: ["Medical management", "Phototherapy (NB-UVB)", "Stability assessment", "Surgical vitiligo & melanocyte grafting"],
  },
  {
    icon: Microscope,
    title: "Medical Dermatology",
    desc: "Diagnosis and management of skin, hair and nail disorders for all ages.",
    points: ["Psoriasis & eczema", "Fungal & bacterial infections", "Urticaria", "Pediatric & nail disorders"],
  },
];

function ServiceCard({ s, i, accent }: { s: Service; i: number; accent: "primary" | "accent" }) {
  const Icon = s.icon;
  const iconBg = accent === "primary" ? "bg-primary/10 text-primary" : "bg-accent/30 text-accent-foreground";
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
      className="card-soft rounded-2xl p-6 hover:border-primary/30 transition-colors flex flex-col"
    >
      <div className={`grid place-items-center size-12 rounded-xl ${iconBg} mb-5`}>
        <Icon className="size-5" />
      </div>
      <h3 className="font-display text-lg font-semibold leading-snug">{s.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
      <ul className="mt-4 space-y-2 pt-4 border-t border-border">
        {s.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
            <Check className={`size-4 mt-0.5 shrink-0 ${accent === "primary" ? "text-primary" : "text-[oklch(0.55_0.12_75)]"}`} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function Section({
  id, eyebrow, title, intro, items, accent,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  items: Service[];
  accent: "primary" | "accent";
}) {
  return (
    <section id={id} className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium mb-4">
            {eyebrow}
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => <ServiceCard key={s.title} s={s} i={i} accent={accent} />)}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <div id="specialties">
      <Section
        id="endocrinology"
        eyebrow="Endocrinology"
        title={<>Expert care for <span className="text-primary">hormonal &amp; metabolic</span> health.</>}
        intro="Led by Dr. Kunal Gupta — comprehensive endocrine care for diabetes, thyroid, obesity, PCOS, bone and pituitary disorders, with the latest evidence-based therapies."
        items={endocrineServices}
        accent="primary"
      />
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-px bg-border" />
      </div>
      <Section
        id="dermatology"
        eyebrow="Dermatology"
        title={<>Healthy skin, healthy hair, <span className="text-primary">renewed confidence</span>.</>}
        intro="Led by Dr. Pournami P at Ilona Skin & Hair Clinic — clinical and aesthetic dermatology including acne, pigmentation, hair restoration, vitiligo surgery and medi-facials."
        items={dermatologyServices}
        accent="accent"
      />
    </div>
  );
}