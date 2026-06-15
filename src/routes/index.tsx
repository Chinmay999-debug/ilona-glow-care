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
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilona Endocrine, Skin & Wellness Centre | Precision Care" },
      { name: "description", content: "Premium endocrine and dermatology care — thyroid, diabetes, PCOS, skin, hair & vitiligo. Led by Dr. Kunal Gupta and Dr. Pournami P." },
      { property: "og:title", content: "Ilona Endocrine, Skin & Wellness Centre" },
      { property: "og:description", content: "Precision endocrine and dermatology care for modern life." },
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
      <WhatsAppFab />
    </main>
  );
}
