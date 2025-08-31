'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar, Users } from 'lucide-react';

const maldivesPackage = '/images/assets/maldives-package.jpg';
const parisPackage = '/images/assets/paris-package.jpg';
const safariPackage = '/images/assets/safari-package.jpg';


const packages = [
  {
    id: 1,
    image: maldivesPackage,
    title: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    duration: "5 Days",
    price: "₹25,999",
    originalPrice: "₹32,999",
    rating: 4.9,
    reviews: 128,
    maxGuests: 4,
    highlight: "Houseboat Stay",
  },
  {
    id: 2,
    image: parisPackage,
    title: "Rajasthan Heritage",
    location: "Jaipur, Udaipur & Jodhpur",
    duration: "8 Days",
    price: "₹35,999",
    originalPrice: "₹45,999",
    rating: 4.8,
    reviews: 95,
    maxGuests: 6,
    highlight: "Palace Tours",
  },
  {
    id: 3,
    image: safariPackage,
    title: "Ladakh Adventure",
    location: "Leh, Ladakh",
    duration: "10 Days",
    price: "₹42,999",
    originalPrice: "₹52,999",
    rating: 4.9,
    reviews: 87,
    maxGuests: 8,
    highlight: "Mountain Adventure",
  },
];

export default function PackagesSection() {
  return (
    <section id='travel-packages' className="py-6 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-2"
        >
          Featured Packages
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
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="overflow-hidden hover:shadow-lg transition rounded-2xl h-full flex flex-col">
                {/* Image */}
                <div className="relative h-56 w-full">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-ocean-sunset text-white border-0">
                    {pkg.highlight}
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>

                  <div className="flex items-center gap-2 text-muted-foreground mb-3 text-sm">
                    <MapPin size={16} />
                    {pkg.location}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {pkg.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      Up to {pkg.maxGuests}
                    </div>
                  </div>

                  {/* Price + Rating */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-primary">{pkg.price}</span>
                        <span className="text-sm line-through text-muted-foreground">{pkg.originalPrice}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star size={14} className="text-accent fill-current" />
                        {pkg.rating} ({pkg.reviews})
                      </div>
                    </div>

                    <Link
                      href={`/packages/${pkg.id}`}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
