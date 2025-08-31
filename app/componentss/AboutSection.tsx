'use client';

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import React from "react";

export default function AboutSection() {
  return (
    <section id="about-us" className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden py-2">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='m0 40l40-40h-40v40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4">
        {/* Clean Header */}
        <div className="mb-2">
          <h1 className="text-4xl text-center lg:text-5xl font-semibold text-gray-800 mb-6">
            About Us
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
        </div>
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Process Steps */}
          <div className="space-y-4">
            {/* Who We Are */}
            <div className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                    <span className="text-2xl font-light text-emerald-700">1.</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Who We Are</h3>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    We're seekers of stories, sunsets, and the roads less taken. A community of passionate explorers who believe every journey tells a story worth sharing.
                  </p>
                </div>
              </div>
            </div>
            {/* What We Do */}
            <div className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300">
                    <span className="text-2xl font-light text-teal-700">2.</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">What We Do</h3>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    We curate authentic travel experiences that go beyond typical tourist paths, connecting adventurous souls with hidden gems and local cultures.
                  </p>
                </div>
              </div>
            </div>
            {/* How We Help */}
            <div className="group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center group-hover:bg-cyan-200 transition-colors duration-300">
                    <span className="text-2xl font-light text-cyan-700">3.</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">How We Help</h3>
                  <p className="text-gray-600 leading-relaxed font-normal">
                    Through expert guides, carefully planned itineraries, and 24/7 support, we ensure your adventures are safe, memorable, and transformative.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - 3D Card */}
          <div className="flex justify-center">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card bg-gray-50 dark:bg-zinc-800 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[28rem] h-auto rounded-xl p-6 border shadow-xl">
                <CardItem translateZ={50} className="text-xl font-bold text-neutral-600 dark:text-neutral-200 mb-2">
                  Find Your Next Adventure
                </CardItem>
                <CardItem translateZ={60} as="p" className="text-neutral-500 text-sm max-w-sm mt-2 mb-4 dark:text-neutral-400">
                  Hover over the card to explore a new dimension of travel.
                </CardItem>
                <CardItem translateZ={100} className="w-full mt-4">
                  <img
                    src="/dramatic-coastal-cliffs-with-turquoise-water-and-r.png"
                    height={1000}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow"
                    alt="Coastal adventure"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="mt-2 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all duration-300">
              View Our Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
