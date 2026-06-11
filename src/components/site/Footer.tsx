export function Footer() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="grid place-items-center size-9 rounded-full bg-primary/15 ring-1 ring-primary/30">
              <span className="size-2 rounded-full bg-primary" />
            </span>
            <span className="font-display text-lg font-semibold">Ilona<span className="text-primary">.</span></span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            Ilona Endocrine & Wellness Centre — precision care for thyroid, diabetes and hormonal health.
          </p>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Practice</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#specialties" className="hover:text-primary">Specialties</a></li>
            <li><a href="#doctor" className="hover:text-primary">Dr. Kunal Gupta</a></li>
            <li><a href="#journey" className="hover:text-primary">Patient journey</a></li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm">
            <li className="text-muted-foreground">care@ilonaendocrine.com</li>
            <li className="text-muted-foreground">+91 00000 00000</li>
            <li className="text-muted-foreground">New Delhi, India</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-border/60 flex justify-between text-xs text-muted-foreground font-mono">
        <span>© {new Date().getFullYear()} Ilona Endocrine & Wellness Centre.</span>
        <span>EST · 2012</span>
      </div>
    </footer>
  );
}