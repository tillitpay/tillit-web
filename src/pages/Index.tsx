import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when coming from another page
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the '#'
      const element = document.getElementById(sectionId);
      if (element) {
        // Use a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
