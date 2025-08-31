import React from "react";

export default function PartnersSection() {
  const partners = ["Opendoor", "Airbnb", "Booking.com", "Traveloka", "Expedia", "Hotels.com", "Agoda", "Priceline"];
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Trusted by Industry Leaders
          </h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto"></div>
        </div>
        {/* Professional moving strip */}
        <div className="relative overflow-hidden bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="py-8 overflow-hidden">
            <div className="flex animate-scroll-professional">
              {/* First set */}
              <div className="flex items-center min-w-full">
                {partners.map((partner, index) => (
                  <div 
                    key={`first-${index}`}
                    className="flex-1 text-center px-4"
                  >
                    <div className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                      {partner}
                    </div>
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center min-w-full">
                {partners.map((partner, index) => (
                  <div 
                    key={`second-${index}`}
                    className="flex-1 text-center px-4"
                  >
                    <div className="text-lg font-medium text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                      {partner}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Subtle fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Serving customers across 50+ countries worldwide
          </p>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll-professional {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-professional {
          animation: scroll-professional 30s linear infinite;
        }
        .animate-scroll-professional:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
