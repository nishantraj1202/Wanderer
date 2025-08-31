"use client";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = ["Home", "About us", "Our services", "Travel-Packages", "Destinations", "Contact"];

  // Scroll smoothly to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  // Detect active section + scroll for background
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section
      let current = "home";
      menuItems.forEach((item) => {
        const id = item.toLowerCase().replace(/\s/g, "-");
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 flex items-center justify-between p-4 md:p-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-md border-b border-gray-200"
            : "bg-transparent text-white"
        }`}
      >
        <div className="text-xl md:text-2xl font-semibold">Wanderers Club</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {menuItems.map((item) => {
            const hrefId = item.toLowerCase().replace(/\s/g, "-");
            const isActive = activeSection === hrefId;

            return (
              <button
                key={item}
                onClick={() => scrollToSection(hrefId)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg scale-105"
                    : isScrolled
                    ? "text-black hover:text-blue-600 hover:bg-gray-100 border border-gray-200 hover:scale-105"
                    : "text-white hover:text-white font-semibold hover:bg-white/10 border border-white/20 hover:scale-105"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>
    </>
  );
};

export default Navigation;
