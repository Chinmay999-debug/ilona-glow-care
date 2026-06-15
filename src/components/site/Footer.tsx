import { clinic } from "@/lib/clinic";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <span className="font-display text-lg font-semibold">Ilona<span className="text-primary">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Ilona Endocrine & Wellness Centre and Ilona Skin & Hair Clinic offer comprehensive, expert care for hormonal, metabolic and dermatological health under one roof.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Practice</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#specialties" className="hover:text-primary">Specialties</a></li>
            <li><a href="#doctors" className="hover:text-primary">Our doctors</a></li>
            <li><a href="#journey" className="hover:text-primary">Patient journey</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {clinic.email && <li>{clinic.email}</li>}
            {clinic.phone && <li>{clinic.phone}</li>}
            {clinic.address && <li>{clinic.address}</li>}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-border/60 flex justify-between text-xs text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Ilona Endocrine & Wellness Centre.</span>
      </div>
    </footer>
  );
}
