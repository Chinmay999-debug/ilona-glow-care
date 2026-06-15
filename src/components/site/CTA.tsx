import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%20Ilona%20Clinic%2C%20I%27d%20like%20to%20book%20a%20consultation.";

export function CTA() {
  return (
    <section id="contact" className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="card-soft rounded-[2rem] overflow-hidden grid lg:grid-cols-5"
        >
          <div className="lg:col-span-3 p-8 md:p-12 bg-primary text-primary-foreground">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium mb-5">
              Book a Consultation
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
              Speak to a specialist at Ilona today.
            </h2>
            <p className="mt-5 text-base text-primary-foreground/85 max-w-lg leading-relaxed">
              Whether it's a thyroid review, diabetes care, a skin concern or vitiligo
              treatment — we'd love to help. Choose what's easiest for you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[color:var(--whatsapp)] text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="size-4" /> WhatsApp us
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2.5 rounded-full bg-white text-primary px-5 py-3 text-sm font-semibold hover:opacity-95 transition-opacity"
              >
                <Phone className="size-4" /> Call clinic
              </a>
              <a
                href="mailto:care@ilonaclinic.com"
                className="inline-flex items-center gap-2.5 rounded-full bg-white/10 text-primary-foreground border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/15 transition-colors"
              >
                <Mail className="size-4" /> Email
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 p-8 md:p-10 bg-card">
            <h3 className="font-display text-xl font-semibold flex items-center gap-2">
              <Calendar className="size-5 text-primary" /> Visit us
            </h3>
            <ul className="mt-6 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium">Ilona Endocrine &amp; Wellness Centre</div>
                  <div className="text-muted-foreground mt-0.5">123 Clinic Road, New Delhi, India</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium">Clinic hours</div>
                  <div className="text-muted-foreground mt-0.5">Mon – Sat · 9:00 AM – 8:00 PM</div>
                  <div className="text-muted-foreground">Sunday · By appointment</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="size-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium">+91 98765 43210</div>
                  <div className="text-muted-foreground mt-0.5">care@ilonaclinic.com</div>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}