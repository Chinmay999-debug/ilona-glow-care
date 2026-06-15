import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, X } from "lucide-react";
import { clinic } from "@/lib/clinic";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  const waUrl = clinic.whatsapp
    ? `https://wa.me/${clinic.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Ilona%20Clinic.`
    : "#contact";
  const telUrl = clinic.phone ? `tel:${clinic.phone.replace(/[^\d+]/g, "")}` : "#contact";

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 8 }}
            transition={{ duration: 0.2 }}
            className="glass rounded-[1.6rem] p-4 w-[calc(100vw-2rem)] max-w-80 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
                <span className="relative inline-flex size-2.5 rounded-full bg-[#25D366]" />
              </span>
              <p className="text-sm font-semibold">Need help choosing a specialist?</p>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              Message us for quick booking support, or call the clinic for time-sensitive
              appointment help.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={waUrl}
                target={clinic.whatsapp ? "_blank" : undefined}
                rel={clinic.whatsapp ? "noopener noreferrer" : undefined}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white py-3 text-sm font-semibold hover:bg-[#20b558] transition-colors"
              >
                <WhatsAppIcon className="size-4" />
                WhatsApp
              </a>
              <a
                href={telUrl}
                className="flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-3 text-sm font-semibold hover:shadow-[var(--shadow-glow)] transition-shadow"
              >
                <Phone className="size-4" />
                Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative">
        {!open && (
          <div className="absolute -inset-2 rounded-full bg-[#25D366]/30 blur-xl animate-pulse" />
        )}
        <motion.button
          type="button"
          aria-label={open ? "Close contact options" : "Open WhatsApp and call options"}
          onClick={() => setOpen((v) => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-2 rounded-full bg-background/85 px-2 py-2 text-white shadow-[0_16px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/12 backdrop-blur-xl"
        >
          <span className="grid place-items-center size-12 rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.4)]">
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="wa"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <WhatsAppIcon className="size-6" />
                </motion.span>
              )}
            </AnimatePresence>
          </span>
          <span className="hidden sm:flex flex-col pr-3 text-left leading-none">
            <span className="text-[10px] font-mono uppercase tracking-wider text-primary">
              Instant help
            </span>
            <span className="mt-1 text-xs font-semibold text-foreground">WhatsApp / Call</span>
          </span>
        </motion.button>
      </div>
    </div>
  );
}
