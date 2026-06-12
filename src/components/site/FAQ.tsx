import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What conditions does Ilona treat?", a: "Endocrine: thyroid disorders, diabetes (Type 1 & 2), PCOS, adrenal and pituitary disorders, obesity and metabolic syndrome. Dermatology: acne, pigmentation, hair loss, psoriasis, eczema and vitiligo (including phototherapy and surgical options)." },
  { q: "Do you offer dermatology consultations?", a: "Yes. Dr. Pournami P, MD (Dermatology), leads our clinical and aesthetic dermatology services — including skin, hair, nail and vitiligo care at Ilona Skin & Hair Clinic." },
  { q: "What makes your approach different?", a: "Every patient receives extended consultations, advanced diagnostics and a fully personalised treatment roadmap — never a templated protocol." },
  { q: "Do you support continuous glucose monitoring (CGM)?", a: "Yes. We integrate CGM into our diabetes precision program for real-time insights and tighter glycaemic control." },
  { q: "How long is the first consultation?", a: "Your first visit is a 60-minute discovery session covering history, lifestyle and lab review." },
  { q: "Do you accept insurance?", a: "We work with most major insurance providers. Our team will verify coverage before your first appointment." },
];

export function FAQ() {
  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">— FAQ</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            Frequently asked.
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl border-0 px-6"
            >
              <AccordionTrigger className="font-display text-lg hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}