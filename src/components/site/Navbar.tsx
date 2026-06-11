import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const links = ["Specialties", "Conditions", "Doctor", "Journey", "Contact"];
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center px-4"
    >
      <div className="glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full">
        <a href="#" className="flex items-center gap-2.5">
          <span className="relative grid place-items-center size-9 rounded-full bg-primary/15 ring-1 ring-primary/30">
            <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Ilona<span className="text-primary">.</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-sm font-medium pl-4 pr-1.5 py-1.5 hover:shadow-[var(--shadow-glow)] transition-shadow"
        >
          Book consult
          <span className="grid place-items-center size-7 rounded-full bg-background/20 group-hover:rotate-45 transition-transform">
            <ArrowUpRight className="size-3.5" />
          </span>
        </a>
      </div>
    </motion.nav>
  );
}