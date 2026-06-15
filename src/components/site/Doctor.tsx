import { motion } from "framer-motion";
import { Award, GraduationCap, Microscope, Calendar, MessageCircle } from "lucide-react";
import portrait from "@/assets/doctor-kunal.jpg";
import portraitPournami from "@/assets/doctor-pournami.jpg";

const WHATSAPP_URL = "https://wa.me/919876543210";

const doctors = [
  {
    img: portrait,
    role: "Endocrinologist",
    name: "Dr. Kunal Gupta",
    sub: "MD, DM (Endocrinology)",
    tagline: "Comprehensive care for diabetes, thyroid, obesity and complex endocrine disorders.",
    bio: "Dr. Kunal Gupta is an endocrinologist with special expertise in the comprehensive management of diabetes mellitus, thyroid disorders, obesity and complex endocrine diseases such as osteoporosis, PCOS, pubertal disorders and male infertility. His clinical interests include advanced diabetes care, individualised metabolic management and the use of modern therapies such as GIP/GLP-1 receptor agonists. He is committed to evidence-based, patient-centred care focused on optimising metabolic health and long-term outcomes.",
    creds: [
      { icon: GraduationCap, label: "MD, DM (Endocrinology)" },
      { icon: Award, label: "Expertise in diabetes, thyroid, obesity & PCOS" },
      { icon: Microscope, label: "Advanced therapy: GLP-1 / GIP receptor agonists" },
    ],
  },
  {
    img: portraitPournami,
    role: "Consultant Dermatologist",
    name: "Dr. Pournami P",
    sub: "MBBS, MD (Dermatology)",
    tagline: "Compassionate, evidence-based skin, hair and vitiligo care.",
    bio: "Dr. Pournami P completed her MBBS from Vydehi Institute of Medical Sciences, Bengaluru, and her MD in Dermatology from JSS Medical College, Mysuru. She combines scientific excellence with a patient-centric approach to manage acne, pigmentation, hair loss, psoriasis, eczema and complex skin conditions. She has special expertise in vitiligo — offering medical therapy, phototherapy and vitiligo surgery — and is known for her empathetic, detail-oriented care.",
    creds: [
      { icon: GraduationCap, label: "MBBS · Vydehi Institute, Bengaluru" },
      { icon: Award, label: "MD (Dermatology) · JSS Medical College, Mysuru" },
      { icon: Microscope, label: "Special interest: vitiligo, phototherapy & vitiligo surgery" },
    ],
  },
];

export function Doctor() {
  return (
    <section id="doctors" className="py-24 md:py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-medium mb-4">
            Meet Our Doctors
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]">
            Two senior specialists. <span className="text-primary">One trusted clinic.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {doctors.map((d, i) => (
            <motion.article
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="card-soft rounded-3xl overflow-hidden grid sm:grid-cols-5"
            >
              <div className="relative sm:col-span-2 aspect-[4/5] sm:aspect-auto">
                <img
                  src={d.img}
                  alt={`${d.name}, ${d.role}`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="sm:col-span-3 p-6 md:p-7 flex flex-col">
                <div className="text-xs font-medium text-primary uppercase tracking-wider">{d.role}</div>
                <h3 className="mt-1 font-display text-2xl font-semibold">{d.name}</h3>
                <div className="text-sm text-muted-foreground">{d.sub}</div>
                <p className="mt-4 text-sm font-medium text-foreground/90 leading-relaxed">{d.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-6">{d.bio}</p>

                <ul className="mt-5 space-y-2.5">
                  {d.creds.map((c) => (
                    <li key={c.label} className="flex items-start gap-3 text-sm">
                      <span className="grid place-items-center size-7 rounded-md bg-primary/10 text-primary shrink-0 mt-0.5">
                        <c.icon className="size-3.5" />
                      </span>
                      <span className="text-foreground/80">{c.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-border">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold hover:opacity-90">
                    <Calendar className="size-3.5" /> Book consultation
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] text-white px-4 py-2 text-xs font-semibold hover:opacity-90">
                    <MessageCircle className="size-3.5" /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}