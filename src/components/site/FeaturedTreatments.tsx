import { motion } from "framer-motion";
import { ArrowUpRight, Activity, Droplets, Scale, Sparkles } from "lucide-react";
import hair from "@/assets/derm-hair.jpg";
import skin from "@/assets/derm-skin.jpg";
import pancreas from "@/assets/organ-pancreas.jpg";
import dna from "@/assets/organ-dna.jpg";
import { TreatmentDetailsDialog } from "./TreatmentDetailsDialog";

const featured = [
  {
    img: hair,
    icon: Droplets,
    specialty: "Dermatology",
    title: "PRP Hair Restoration",
    desc: "We draw a little of your blood, concentrate the platelets and inject them into the scalp to support thinning hair. No surgery, and you're back to your day after.",
    details:
      "This treatment begins with a scalp and hair-fall assessment so the doctor can understand the likely cause of thinning. PRP is then planned as a non-surgical clinic procedure, usually for early hair loss, hair thinning, or reduced hair density. The visit includes guidance on sessions, after-care, and the follow-up schedule needed to track response.",
  },
  {
    img: skin,
    icon: Sparkles,
    specialty: "Dermatology",
    title: "Vitiligo Surgery & Melanocyte Grafting",
    desc: "For vitiligo that has stopped spreading, we can transplant your own pigment cells into the white patches to help the skin colour return.",
    details:
      "This option is considered for vitiligo patches that have remained stable and are suitable for surgical repigmentation. The dermatologist reviews stability, location, skin type, and expectations before planning the procedure. You also receive clear guidance on preparation, healing, sun protection, and follow-up care.",
  },
  {
    img: pancreas,
    icon: Activity,
    specialty: "Endocrinology",
    title: "Advanced Diabetes Care",
    desc: "Type 1 and Type 2 care built around continuous glucose data, with insulin and medication adjusted to how your body actually responds.",
    details:
      "Care is built around your glucose patterns, medication history, lifestyle, and long-term risk profile. Where useful, continuous glucose monitoring helps identify highs, lows, food responses, and treatment gaps. The plan may include medication optimisation, insulin adjustment, nutrition guidance, and structured follow-up.",
  },
  {
    img: dna,
    icon: Scale,
    specialty: "Metabolic Health",
    title: "Medical Weight Management",
    desc: "Doctor-led weight care that checks for the hormonal causes behind stubborn weight, paired with a plan that fits your routine.",
    details:
      "The programme looks beyond calories alone and checks metabolic, hormonal, lifestyle, and medication-related factors that can affect weight. Treatment is physician-led and may include lab evaluation, nutrition planning, activity guidance, and appropriate medical therapy. Follow-ups are used to adjust the plan safely over time.",
  },
];

export function FeaturedTreatments() {
  return (
    <section id="featured" className="py-32 relative overflow-hidden">
      <div className="absolute left-0 top-1/3 size-[400px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
              Treatments
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight max-w-3xl">
              The treatments we focus on
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            A curated look at the conditions we manage most often, across both the endocrine and
            skin clinics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {featured.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: "easeOut" }}
              className="group glass rounded-3xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <div className="relative h-full min-h-[430px]">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/20" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex h-full flex-col justify-end p-6 md:p-8">
                  <div className="flex min-h-[300px] flex-col">
                    <div className="mb-5 flex min-h-8 items-center justify-between gap-3">
                      <span className="glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-primary">
                        {item.specialty}
                      </span>
                      <span className="grid place-items-center size-8 rounded-full bg-primary/15 text-primary">
                        <item.icon className="size-4" />
                      </span>
                    </div>
                    <h3 className="min-h-[5.25rem] font-display text-xl font-medium leading-tight tracking-tight md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 min-h-[7.5rem] max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                    <TreatmentDetailsDialog
                      title={item.title}
                      specialty={item.specialty}
                      description={item.desc}
                      details={item.details}
                      icon={item.icon}
                    >
                      <button
                        type="button"
                        className="mt-auto inline-flex items-center justify-between gap-3 rounded-full border border-primary/20 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Learn more
                        <ArrowUpRight className="size-4" />
                      </button>
                    </TreatmentDetailsDialog>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
