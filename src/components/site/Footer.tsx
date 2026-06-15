import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919876543210";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center size-9 rounded-full bg-primary text-primary-foreground font-display font-semibold">i</span>
            <span className="font-display text-lg font-semibold">Ilona Endocrine &amp; Wellness Centre</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            Expert, compassionate care for thyroid, diabetes, hormonal health, skin,
            hair and vitiligo — under one trusted roof.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-[color:var(--whatsapp)] text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="size-4" /> Message us on WhatsApp
          </a>

          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Instagram" className="grid place-items-center size-9 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
              <Instagram className="size-4" />
            </a>
            <a href="#" aria-label="Facebook" className="grid place-items-center size-9 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Specialties</div>
          <ul className="space-y-2.5 text-sm">
            <li><a href="#endocrinology" className="text-foreground/80 hover:text-primary">Endocrinology</a></li>
            <li><a href="#dermatology" className="text-foreground/80 hover:text-primary">Dermatology</a></li>
            <li><a href="#doctors" className="text-foreground/80 hover:text-primary">Our doctors</a></li>
            <li><a href="#journey" className="text-foreground/80 hover:text-primary">Patient journey</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4 font-medium">Contact</div>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground/80">123 Clinic Road, New Delhi, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 text-primary shrink-0" />
              <a href="tel:+919876543210" className="text-foreground/80 hover:text-primary">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-4 text-primary shrink-0" />
              <a href="mailto:care@ilonaclinic.com" className="text-foreground/80 hover:text-primary">care@ilonaclinic.com</a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="size-4 text-primary shrink-0" />
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary">WhatsApp: +91 98765 43210</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Ilona Endocrine &amp; Wellness Centre. All rights reserved.</span>
        <span>For medical emergencies, please call your nearest hospital.</span>
      </div>
    </footer>
  );
}