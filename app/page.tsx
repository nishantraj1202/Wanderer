'use client';

import HeroSection from "./componentss/HeroSection";
import AboutSection from './componentss/AboutSection';
import ServicesSection from './componentss/ServicesSection';
import PackagesSection from './componentss/PackagesSection';
import FAQSection from './componentss/gallery';
import ReviewsSection from './componentss/ReviewsSection';
import Contact from "./componentss/contact";
import footer from "./componentss/footer";
import Footer from "./componentss/footer";



export default function TravelLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      {/* <PartnersSection /> */}
      <PackagesSection />
      <FAQSection />
      <ReviewsSection />
      <Contact/>
      <Footer/>
    </div>
  );
}