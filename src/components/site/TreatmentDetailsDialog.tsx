import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { clinic } from "@/lib/clinic";

type TreatmentDetailsDialogProps = {
  title: string;
  specialty: string;
  description: string;
  details: string;
  icon: ComponentType<{ className?: string }>;
  children: ReactNode;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function TreatmentDetailsDialog({
  title,
  specialty,
  description,
  details,
  icon: Icon,
  children,
}: TreatmentDetailsDialogProps) {
  const waUrl = clinic.whatsapp
    ? `https://wa.me/${clinic.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20${encodeURIComponent(title)}%20at%20Ilona%20Clinic.`
    : "#contact";
  const telUrl = clinic.phone ? `tel:${clinic.phone.replace(/[^\d+]/g, "")}` : "#contact";

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl overflow-hidden rounded-3xl border-primary/20 bg-background/95 p-0 shadow-[var(--shadow-card)] backdrop-blur-xl">
        <div className="relative">
          <div className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute -left-14 top-20 size-44 rounded-full bg-[#25D366]/10 blur-3xl" />

          <div className="relative p-6 sm:p-8">
            <DialogHeader>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl border border-primary/20 bg-primary/12 text-primary">
                  <Icon className="size-6" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-primary">
                  {specialty}
                </span>
              </div>
              <DialogTitle className="font-display text-3xl font-medium leading-tight tracking-tight">
                {title}
              </DialogTitle>
              <DialogDescription className="pt-3 text-base leading-relaxed text-muted-foreground">
                {description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                What to expect
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{details}</p>
            </div>

            <div className="mt-8 rounded-2xl border border-primary/15 bg-primary/5 p-4">
              <div className="mb-3 flex items-center gap-2 text-sm font-medium">
                <MessageCircle className="size-4 text-primary" />
                Need help deciding if this is right for you?
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href={waUrl}
                  target={clinic.whatsapp ? "_blank" : undefined}
                  rel={clinic.whatsapp ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp
                </a>
                <a
                  href={telUrl}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/25 bg-background/60 px-4 py-3 text-sm font-bold text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10"
                >
                  <Phone className="size-4 text-primary" />
                  Call
                </a>
                <DialogClose asChild>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    <CalendarCheck className="size-4" />
                    Book appointment
                  </a>
                </DialogClose>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
