import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

const links = [
  { label: "Endocrinology", href: "#endocrinology" },
  { label: "Dermatology", href: "#dermatology" },
  { label: "Doctors", href: "#doctors" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="glass card-soft flex items-center justify-between w-full max-w-6xl pl-5 pr-2 py-2.5 rounded-full">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative grid place-items-center size-9 rounded-full bg-primary text-primary-foreground font-display font-semibold">
            i
          </span>
          <span className="font-display text-base font-semibold tracking-tight">
            Ilona <span className="text-muted-foreground font-normal hidden sm:inline">Endocrine &amp; Wellness</span>
          </span>
        </a>
        <div className="hidden lg:flex items-center gap-7 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:+919876543210"
            className="hidden sm:inline-flex items-center gap-2 rounded-full text-sm font-medium text-foreground/80 hover:text-foreground px-3 py-2"
          >
            <Phone className="size-4" /> Call
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 hover:opacity-90 transition-opacity"
          >
            <Calendar className="size-4" /> Book
          </a>
        </div>
      </div>
    </motion.nav>
  );
}