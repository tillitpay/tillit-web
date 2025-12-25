import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PaymentFlexibility from "@/components/PaymentFlexibility";
import Savings from "@/components/Savings";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import AnnouncementBanner from "@/components/AnnouncementBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AnnouncementBanner />
      <main className="pt-36 md:pt-40">
        <Hero />
        <Features />
        <PaymentFlexibility />
        <Savings />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
