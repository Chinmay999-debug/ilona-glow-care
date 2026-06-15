import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedTreatments } from "@/components/site/FeaturedTreatments";
import { Services } from "@/components/site/Services";
import { Doctor } from "@/components/site/Doctor";
import { ClinicGallery } from "@/components/site/ClinicGallery";
import { Journey } from "@/components/site/Journey";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ilona Endocrine, Skin & Wellness Centre | Precision Care" },
      { name: "description", content: "Premium endocrine and dermatology care for thyroid, diabetes, PCOS, skin, hair and vitiligo. Led by Dr. Kunal Gupta and Dr. Pournami P." },
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
      <FeaturedTreatments />
      <Services />
      <Doctor />
      <ClinicGallery />
      <Journey />
      {/* Testimonials — placeholder for real, consented patient testimonials to be added later */}
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
