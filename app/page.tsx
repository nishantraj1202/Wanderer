'use client';

import HeroSection from "./componentss/HeroSection";
import AboutSection from './componentss/AboutSection';
import ServicesSection from './componentss/ServicesSection';
import PackagesSection from './componentss/PackagesSection';

import ReviewsSection from './componentss/ReviewsSection';
import Gallery from "./componentss/gallery";
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
      
      <Gallery />
      <ReviewsSection />
      <Contact/>
      <Footer/>
    </div>
  );
}