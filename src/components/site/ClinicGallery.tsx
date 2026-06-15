import { motion } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import clinicReception from "@/assets/clinic1.jpeg";
import clinicWaitingWide from "@/assets/clinic2.jpeg";
import clinicWaiting from "@/assets/clinic3.jpeg";
import clinicConsultation from "@/assets/clinic4.jpeg";
import clinicDoctorRoom from "@/assets/clinic5.jpeg";

const gallery = [
  {
    src: clinicReception,
    title: "Reception",
    detail: "A welcoming first stop for appointments",
    className: "",
  },
  {
    src: clinicWaitingWide,
    title: "Waiting lounge",
    detail: "Spacious seating before your consultation",
    className: "",
  },
  {
    src: clinicWaiting,
    title: "Consultation access",
    detail: "Clear patient flow inside the clinic",
    className: "",
  },
  {
    src: clinicConsultation,
    title: "Skin & wellness room",
    detail: "Warm, private consultation setting",
    className: "",
  },
];

export function ClinicGallery() {
  return (
    <section id="clinic" className="relative scroll-mt-28 overflow-hidden py-28">
      <div className="absolute left-0 top-16 size-[420px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">
              The clinic
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-[1.05]">
              A calm space for endocrine, skin and wellness care.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid gap-3 text-sm text-muted-foreground lg:max-w-md lg:justify-self-end"
          >
            <p className="leading-relaxed">
              Visit Ilona Endocrine and Wellness Centre in Indiranagar for specialist consultations
              in a clean, comfortable clinical environment.
            </p>
            <div className="flex items-start gap-2 text-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>HAL 2nd Stage, Indiranagar, Bengaluru</span>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr]">
          <motion.figure
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75 }}
            className="group relative h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-card shadow-[var(--shadow-card)] lg:h-[640px]"
          >
            <img
              src={clinicDoctorRoom}
              alt="Doctor consultation room at Ilona Endocrine and Wellness Centre"
              loading="lazy"
              width={1088}
              height={1280}
              className="absolute inset-0 h-full w-full object-cover object-[50%_72%] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-background/65 px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-primary backdrop-blur-md">
                <Sparkles className="size-3.5" />
                Consultation room
              </div>
              <h3 className="mt-3 font-display text-3xl font-medium">Focused clinical care.</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Private consultation rooms for endocrine, metabolic, skin and wellness visits.
              </p>
            </figcaption>
          </motion.figure>

          <div className="grid gap-4 md:grid-cols-2">
            {gallery.map((item, index) => (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.65, delay: index * 0.06 }}
                className={`group relative h-[250px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-[var(--shadow-card)] md:h-[300px] ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={`${item.title} at Ilona Endocrine and Wellness Centre`}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/82 via-background/5 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <h3 className="font-display text-xl font-medium">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.detail}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
