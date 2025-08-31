import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import PartnersSection from "./PartnersSection";
import PackagesSection from "./PackagesSection";
import FAQSection from "./FAQSection";
import ReviewsSection from "./ReviewsSection";

export default function TravelLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnersSection />
      <PackagesSection />
      <FAQSection />
      <ReviewsSection />
    </div>
  );
}
