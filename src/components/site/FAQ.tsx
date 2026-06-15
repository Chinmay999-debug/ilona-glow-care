import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What conditions does Dr. Kunal Gupta treat?",
    a: "Dr. Kunal specialises in diabetes mellitus (Type 1, Type 2 and pancreatic), thyroid disorders (hypothyroidism, hyperthyroidism and thyroid cancer), obesity, PCOS, osteoporosis, pubertal disorders, male infertility and complex endocrine diseases.",
  },
  {
    q: "What services are available at Ilona Skin & Hair Clinic?",
    a: "Dr. Pournami P offers comprehensive skin, hair and nail care, including acne and scar treatment, pigmentation and melasma, hair restoration (PRP and GFC therapy), vitiligo (medical, phototherapy and surgery), mole/cyst/wart removal, Hydrafacial and medical dermatology for conditions like psoriasis and eczema.",
  },
  {
    q: "Do you offer GLP-1 / GIP receptor agonist therapies?",
    a: "Yes. Dr. Kunal Gupta has specific expertise in modern GIP/GLP-1 receptor agonist therapies for both diabetes management and obesity treatment, personalised to each patient's metabolic profile.",
  },
  {
    q: "Do you treat vitiligo surgically?",
    a: "Yes. Vitiligo surgery and melanocyte grafting is a special area of expertise at Ilona Skin & Hair Clinic. Dr. Pournami offers a full spectrum of care, covering medical management, phototherapy, stability assessment and surgical repigmentation for suitable candidates.",
  },
  {
    q: "What makes your approach different?",
    a: "Every patient receives extended, personalised consultations and evidence-based treatment protocols, never a templated approach. Our dual-specialty model means endocrine and dermatological conditions, which often overlap, can be managed together under one roof.",
  },
  {
    q: "Does Dr. Kunal Gupta treat male infertility and bone disorders?",
    a: "Yes. His scope includes male infertility and pubertal disorders on the reproductive side, along with osteoporosis and rickets for bone health. These conditions are often rooted in hormonal imbalances that respond well to endocrine management.",
  },
  {
    q: "Do you support continuous glucose monitoring (CGM)?",
    a: "Yes. CGM is integrated into our diabetes care protocols for real-time metabolic insights and tighter glycaemic control, alongside individualised insulin and medication strategies.",
  },
];

export function FAQ() {
  return (
    <section className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="font-mono text-xs tracking-[0.2em] text-primary uppercase mb-4">FAQ</div>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
            Questions we hear a lot.
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