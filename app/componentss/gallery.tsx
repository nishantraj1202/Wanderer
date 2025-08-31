'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Share2, MapPin } from 'lucide-react';

const galleryPosts = [
  {
    id: 1,
    image: '/traditional-temple-pagoda-by-water-with-mountains.png',
    title: "Sunset at Kerala Backwaters",
    location: "Alleppey, Kerala",
    likes: 284,
    description: "Golden hour reflection on the serene backwaters",
    tags: ["sunset", "backwaters", "kerala", "nature"],
    galleryLocation: "kerala"
  },
  {
    id: 2,
    image: '/dramatic-coastal-cliffs-with-turquoise-water-and-r.png',
    title: "Majestic Hawa Mahal",
    location: "Jaipur, Rajasthan",
    likes: 356,
    description: "The iconic Palace of Winds in all its glory",
    tags: ["architecture", "heritage", "rajasthan", "palace"],
    galleryLocation: "rajasthan"
  },
  {
    id: 3,
    image: '/volcanic-mountain-landscape-with-dramatic-clouds.png',
    title: "Pangong Lake Beauty",
    location: "Ladakh",
    likes: 421,
    description: "Crystal clear waters surrounded by mountains",
    tags: ["mountains", "lake", "ladakh", "adventure"],
    galleryLocation: "ladakh"
  },
  {
    id: 4,
    image: '/traditional-cultural-dancers-in-colorful-costumes.png',
    title: "Traditional Kathakali",
    location: "Kochi, Kerala",
    likes: 198,
    description: "Vibrant cultural performance showcase",
    tags: ["culture", "dance", "kerala", "tradition"],
    galleryLocation: "kerala"
  },
  {
    id: 5,
    image: '/beautiful-coastal-cliff-with-turquoise-water-and-g.png',
    title: "Desert Sunset Safari",
    location: "Jaisalmer, Rajasthan",
    likes: 312,
    description: "Camel safari through the golden dunes",
    tags: ["desert", "safari", "sunset", "adventure"],
    galleryLocation: "rajasthan"
  },
  {
    id: 6,
    image: '/placeholder-user.jpg',
    title: "Monastery Prayers",
    location: "Leh, Ladakh",
    likes: 267,
    description: "Peaceful moments at ancient Buddhist monastery",
    tags: ["monastery", "buddhist", "peace", "spirituality"],
    galleryLocation: "ladakh"
  }
];

const GallerySection = () => {
  const router = useRouter();

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Travel
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-purple-400 bg-clip-text text-transparent"> Memories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore stunning moments captured by our travelers across incredible Indian destinations.
            Get inspired for your next adventure.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-xl cursor-pointer"
              onClick={() => router.push(`/gallery/${post.galleryLocation}`)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer">
                    <Camera size={16} />
                  </div>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors cursor-pointer">
                    <Share2 size={16} />
                  </div>
                </div>
                {/* Location Badge */}
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-black/30 text-white border-0 backdrop-blur-sm">
                    <MapPin size={12} className="mr-1" />
                    {post.location}
                  </Badge>
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                {/* Engagement */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors group/heart">
                    <Heart size={16} className="group-hover/heart:fill-current" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <span className="text-xs text-muted-foreground">
                    2 days ago
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary-hover transition-colors">
            Load More Adventures
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
