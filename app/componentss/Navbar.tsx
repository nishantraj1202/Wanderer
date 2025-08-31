"use client";
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About us", "Our services", "Travel Packages", "Destinations"];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between p-4 md:p-8 text-white bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="text-xl md:text-2xl font-semibold">Wanderers Club</div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map(item => {
            const hrefId = item.toLowerCase().replace(/\s/g, '-');
            return (
              <a
                key={item}
                href={`#${hrefId}`}
                className="hover:text-blue-300 transition-colors text-base font-medium"
              >
                {item}
              </a>
            );
          })}
        </div>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col pt-20 px-6">
              {menuItems.map(item => {
                const hrefId = item.toLowerCase().replace(/\s/g, '-');
                return (
                  <a
                    key={item}
                    href={`#${hrefId}`}
                    className="py-4 text-lg font-medium text-white hover:text-blue-300 transition-colors border-b border-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
