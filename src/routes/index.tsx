import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Doctor } from "@/components/site/Doctor";
import { Journey } from "@/components/site/Journey";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilona Endocrine & Wellness Centre | Precision Hormonal Care" },
      { name: "description", content: "Premium endocrine, thyroid, diabetes & hormonal care led by Dr. Kunal Gupta. Advanced diagnostics for metabolic wellness." },
      { property: "og:title", content: "Ilona Endocrine & Wellness Centre" },
      { property: "og:description", content: "Precision endocrine and metabolic care for modern life." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Doctor />
      <Journey />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
