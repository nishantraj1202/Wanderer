import { LayoutGridDemo } from "@/components/LayoutGrid";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

function ServiceCard({ image, title, description, className = "h-80" }: ServiceCardProps) {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${image}')` }} />
      <div className="absolute inset-0 bg-black/30" />
      <CardContent className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
        <h3 className="text-xl font-light mb-2">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </CardContent>
    </Card>
  );
}

export default function ServicesSection() {
  return (
    <section id="our-services" className="py-6 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
         <h1 className="text-4xl text-center lg:text-5xl font-semibold text-gray-800 ">
            Our Service 
            <div className="animated-gradient-bar mx-auto"></div>
            <style jsx>{`
              .animated-gradient-bar {
                height: 0.3rem;
                width: 7rem;
                border-radius: 9999px;
                background: linear-gradient(to right, #3b82f6, #22c55e);
                animation: widenShrink 2.5s infinite ease-in-out;
              }
              @keyframes widenShrink {
                0% { width: 7rem; }
                50% { width: 12rem; }
                100% { width: 7rem; }
              }
            `}</style>
          </h1>
        <div className="grid md:grid-cols-1 gap-6">
             <LayoutGridDemo/>
          </div>
        </div>
    </section>
  );
}
