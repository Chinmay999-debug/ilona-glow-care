import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  Atom,
  Bone,
  Circle,
  ClipboardPlus,
  Dna,
  Droplet,
  Droplets,
  FlaskConical,
  Gauge,
  HeartPulse,
  Scale,
  Scissors,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  Sun,
  Syringe,
  Zap,
} from "lucide-react";
import { useState } from "react";
import thyroid from "@/assets/hero-thyroid.jpg";
import pancreas from "@/assets/organ-pancreas.jpg";
import skin from "@/assets/derm-skin.jpg";
import hair from "@/assets/derm-hair.jpg";
import { TreatmentDetailsDialog } from "./TreatmentDetailsDialog";

// Both specialties share the same premium icon-card system (see EndocrineGrid /
// DermatologyGrid) so the section reads as one design, with a unique, fitting icon
// per service.
const endocrineServices: Array<{ icon: typeof Sparkles; title: string; desc: string }> = [
  {
    icon: Droplet,
    title: "Diabetes Management",
    desc: "Specialised care for Type 1, Type 2 and pancreatic-related diabetes, including CGM-guided protocols and modern GLP-1/GIP receptor agonist therapies.",
  },
  {
    icon: Gauge,
    title: "Thyroid Care",
    desc: "Advanced diagnosis and treatment of hypothyroidism, hyperthyroidism, thyroid nodules and thyroid cancer.",
  },
  {
    icon: Scale,
    title: "Weight & Metabolic Health",
    desc: "Comprehensive physician-led obesity care integrating hormonal profiling, GIP/GLP-1 therapies and sustainable metabolic management.",
  },
  {
    icon: Dna,
    title: "Hormonal & Reproductive Health",
    desc: "Expert management of PCOS, reproductive endocrinology, male infertility and pubertal disorders including delayed puberty.",
  },
  {
    icon: Bone,
    title: "Bone Health",
    desc: "Diagnosis and targeted treatment of osteoporosis, rickets and other bone-related disorders.",
  },
  {
    icon: Atom,
    title: "General Endocrinology",
    desc: "Tailored care for all complex hormone-related conditions, including pituitary, adrenal and neuroendocrine disorders.",
  },
];

type DermCategory = "Skin & complexion" | "Hair restoration" | "Surgical & medical";

const dermatologyServices: Array<{
  category: DermCategory;
  title: string;
  desc: string;
  icon: typeof Sparkles;
}> = [
  // Each service has a unique, semantically matched icon. Both the endocrine and
  // dermatology grids now share this premium icon-card system so the whole section
  // reads as one design.
  // ASSET NOTE: if real photography for every service is sourced later (~19 images),
  // both grids can be upgraded to the image-card format for full visual parity.
  {
    category: "Skin & complexion",
    title: "Acne & acne scar treatment",
    desc: "Medical-grade protocols for active acne, scarring and post-inflammatory marks.",
    icon: Sparkles,
  },
  {
    category: "Skin & complexion",
    title: "Pigmentation & melasma treatment",
    desc: "Targeted therapies for uneven tone, melasma and hyperpigmentation.",
    icon: Sun,
  },
  {
    category: "Skin & complexion",
    title: "Hydrafacial & medi-facials",
    desc: "Clinical facials combining exfoliation, hydration and bespoke actives.",
    icon: Droplets,
  },
  {
    category: "Skin & complexion",
    title: "Vitiligo treatment",
    desc: "Medical and phototherapy approaches for stable vitiligo management.",
    icon: HeartPulse,
  },
  {
    category: "Skin & complexion",
    title: "Melanocyte grafting",
    desc: "Surgical repigmentation for resistant vitiligo patches.",
    icon: FlaskConical,
  },
  {
    category: "Hair restoration",
    title: "Hair fall & hair restoration",
    desc: "Diagnosis-led therapy for thinning, alopecia and scalp disorders.",
    icon: Activity,
  },
  {
    category: "Hair restoration",
    title: "PRP therapy",
    desc: "Platelet-rich plasma injections to stimulate follicle health and regrowth.",
    icon: Syringe,
  },
  {
    category: "Hair restoration",
    title: "GFC therapy",
    desc: "Growth factor concentrate therapy for advanced hair restoration.",
    icon: Zap,
  },
  {
    category: "Surgical & medical",
    title: "Mole removal",
    desc: "Safe excision and cosmetic removal with histopathology when indicated.",
    icon: Circle,
  },
  {
    category: "Surgical & medical",
    title: "Skin tag removal",
    desc: "Quick, minimal-scar removal of benign skin tags.",
    icon: Scissors,
  },
  {
    category: "Surgical & medical",
    title: "Cyst excision",
    desc: "Complete cyst removal with careful closure for optimal healing.",
    icon: Stethoscope,
  },
  {
    category: "Surgical & medical",
    title: "Wart removal",
    desc: "Cryotherapy and surgical options for viral warts.",
    icon: ShieldPlus,
  },
  {
    category: "Surgical & medical",
    title: "Medical dermatology",
    desc: "Evidence-based care for eczema, psoriasis, infections and complex skin disease.",
    icon: ClipboardPlus,
  },
];

const dermCategories: DermCategory[] = [
  "Skin & complexion",
  "Hair restoration",
  "Surgical & medical",
];

const dermCategoryMeta: Record<
  DermCategory,
  { index: string; photo?: string; hasSurgicalIcons?: boolean }
> = {
  "Skin & complexion": { index: "01", photo: "skin" },
  "Hair restoration": { index: "02", photo: "hair" },
  "Surgical & medical": { index: "03" },
};

const specialties = [
  {
    id: "endocrine",
    label: "Endocrinology & Metabolic Health",
    short: "Endocrine",
    summary:
      "Hormone and metabolic conditions like thyroid, diabetes, PCOS, weight and bone health.",
    accentImg: pancreas,
  },
  {
    id: "dermatology",
    label: "Dermatology, Skin & Hair Care",
    short: "Dermatology",
    summary: "Clinical, surgical and aesthetic dermatology from acne to hair restoration.",
    accentImg: skin,
  },
] as const;

type SpecialtyId = (typeof specialties)[number]["id"];

// Shared card hover classes — both grids use the same chrome and interaction system.
const cardHover =
  "hover:border-primary/40 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] transition-all duration-300";

function treatmentDetails(specialty: string, desc: string) {
  return `${desc} During the consultation, the ${specialty.toLowerCase()} team reviews your symptoms, history, previous reports, current medicines, and treatment goals before recommending the next step. You get a clear explanation of the likely approach, what preparation may be needed, how follow-up is handled, and when WhatsApp or phone support is useful for booking or clarifying doubts.`;
}

function EndocrineGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
      {endocrineServices.map((s, i) => (
        <motion.article
          key={s.title}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05, duration: 0.45, ease: "easeOut" }}
          className={`group glass rounded-3xl p-6 overflow-hidden flex flex-col ${cardHover}`}
        >
          {/* Icon medallion — premium gradient tile that intensifies on hover */}
          <div className="size-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/15 grid place-items-center mb-5 text-primary group-hover:from-primary/30 group-hover:to-primary/10 group-hover:border-primary/35 group-hover:shadow-[0_0_18px_-4px_var(--color-primary)] transition-all duration-300 shrink-0">
            <s.icon className="size-7" />
          </div>

          <div className="flex flex-col flex-1">
            <h4 className="font-display text-base font-medium leading-snug">{s.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
            <TreatmentDetailsDialog
              title={s.title}
              specialty="Endocrinology"
              description={s.desc}
              details={treatmentDetails("Endocrinology", s.desc)}
              icon={s.icon}
            >
              <button
                type="button"
                className="mt-5 inline-flex items-center justify-between gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Learn more
                <ArrowUpRight className="size-4" />
              </button>
            </TreatmentDetailsDialog>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

function DermCategoryBanner({ category, index }: { category: DermCategory; index: string }) {
  if (category === "Skin & complexion") {
    return (
      <div className="relative rounded-2xl overflow-hidden h-28 mb-6">
        <img src={skin} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/75 to-card/40" />
        <div className="relative z-10 h-full flex items-center px-6 gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60">
            {index}
          </span>
          <div className="h-6 w-px bg-primary/20" />
          <h3 className="font-display text-xl font-medium">{category}</h3>
        </div>
      </div>
    );
  }

  if (category === "Hair restoration") {
    return (
      <div className="relative rounded-2xl overflow-hidden h-28 mb-6">
        <img src={hair} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 via-card/75 to-card/40" />
        <div className="relative z-10 h-full flex items-center px-6 gap-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60">
            {index}
          </span>
          <div className="h-6 w-px bg-primary/20" />
          <h3 className="font-display text-xl font-medium">{category}</h3>
        </div>
      </div>
    );
  }

  // Surgical & medical — no suitable photo; glass/gradient banner with icon cluster
  return (
    <div className="relative rounded-2xl overflow-hidden h-28 mb-6 glass">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-4 opacity-15">
        <Scissors className="size-9 text-primary" />
        <ShieldPlus className="size-9 text-primary" />
        <ClipboardPlus className="size-9 text-primary" />
      </div>
      <div className="relative z-10 h-full flex items-center px-6 gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/60">
          {index}
        </span>
        <div className="h-6 w-px bg-primary/20" />
        <h3 className="font-display text-xl font-medium">{category}</h3>
      </div>
    </div>
  );
}

function DermatologyGrid() {
  return (
    <div className="space-y-12">
      {dermCategories.map((category, catIndex) => {
        const items = dermatologyServices.filter((s) => s.category === category);
        const meta = dermCategoryMeta[category];
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.06, duration: 0.5 }}
          >
            <DermCategoryBanner category={category} index={meta.index} />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {items.map((s, i) => (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: catIndex * 0.06 + i * 0.04,
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className={`group glass rounded-3xl p-6 overflow-hidden flex flex-col ${cardHover}`}
                >
                  {/* Icon medallion — premium gradient tile that intensifies on hover */}
                  <div className="size-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/15 grid place-items-center mb-5 text-primary group-hover:from-primary/30 group-hover:to-primary/10 group-hover:border-primary/35 group-hover:shadow-[0_0_18px_-4px_var(--color-primary)] transition-all duration-300 shrink-0">
                    <s.icon className="size-7" />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h4 className="font-display text-base font-medium leading-snug">{s.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <TreatmentDetailsDialog
                      title={s.title}
                      specialty={s.category}
                      description={s.desc}
                      details={treatmentDetails(s.category, s.desc)}
                      icon={s.icon}
                    >
                      <button
                        type="button"
                        className="mt-5 inline-flex items-center justify-between gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Learn more
                        <ArrowUpRight className="size-4" />
                      </button>
                    </TreatmentDetailsDialog>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function Services() {
  const [active, setActive] = useState<SpecialtyId>("endocrine");

  return (
    <section id="specialties" className="py-32 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
              Clinical specialties
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight max-w-2xl">
              Two specialties, one clinic.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Endocrine and skin care under one roof, each led by its own specialist. Choose a side to
            see what we treat.
          </p>
        </div>

        {/* Specialty tabs */}
        <div className="flex flex-col lg:flex-row gap-4 mb-10">
          {specialties.map((spec) => {
            const isActive = active === spec.id;
            return (
              <button
                key={spec.id}
                type="button"
                onClick={() => setActive(spec.id)}
                className={`group relative flex-1 text-left rounded-3xl overflow-hidden transition-all duration-500 ${
                  isActive
                    ? "ring-1 ring-primary/50 shadow-[var(--shadow-glow)]"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={spec.accentImg}
                    alt=""
                    className="w-full h-full object-cover scale-110 group-hover:scale-115 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 transition-colors duration-500 ${isActive ? "bg-card/75" : "bg-card/85"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent" />
                </div>
                <div className="relative z-10 p-6 md:p-8">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-mono text-[10px] tracking-[0.2em] uppercase transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`}
                    >
                      Specialty {spec.id === "endocrine" ? "01" : "02"}
                    </span>
                    <span
                      className={`size-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-primary shadow-[0_0_12px_var(--color-primary)]"
                          : "bg-muted-foreground/40"
                      }`}
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl md:text-2xl font-medium tracking-tight">
                    {spec.label}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                    {spec.summary}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-mono text-primary">
                    <span>
                      {spec.id === "endocrine"
                        ? `${endocrineServices.length} programmes`
                        : `${dermatologyServices.length} treatments`}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="active-indicator"
                        className="inline-block h-1 w-8 rounded-full bg-primary"
                      />
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Specialty hero strip */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {active === "dermatology" && (
              <div className="relative rounded-3xl overflow-hidden mb-10 h-48 md:h-56">
                <img src={skin} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-card/40" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 h-full p-6 md:p-8">
                  <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-2">
                      Led by Dr. Pournami P
                    </p>
                    <p className="font-display text-2xl md:text-3xl font-medium max-w-lg">
                      Skin, hair & surgical dermatology under one roof.
                    </p>
                  </div>
                  <div className="flex gap-6 text-center">
                    <div>
                      <div className="font-display text-3xl text-primary">
                        {dermatologyServices.length}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Treatments</div>
                    </div>
                    <div>
                      <div className="font-display text-3xl text-primary">
                        {dermCategories.length}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Specialties</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {active === "endocrine" && (
              <div className="relative rounded-3xl overflow-hidden mb-10 h-48 md:h-56">
                <img src={thyroid} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-card via-card/80 to-card/40" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 h-full p-6 md:p-8">
                  <div>
                    <p className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-2">
                      Led by Dr. Kunal Gupta
                    </p>
                    <p className="font-display text-2xl md:text-3xl font-medium max-w-lg">
                      Thyroid, diabetes and hormones, managed with modern care.
                    </p>
                  </div>
                  <div className="flex gap-6 text-center">
                    <div>
                      <div className="font-display text-3xl text-primary">
                        {endocrineServices.length}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Programmes</div>
                    </div>
                    <div>
                      <div className="font-mono text-sm text-primary mt-1 font-medium">CGM</div>
                      <div className="text-xs text-muted-foreground mt-1">Guided care</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {active === "endocrine" ? <EndocrineGrid /> : <DermatologyGrid />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
