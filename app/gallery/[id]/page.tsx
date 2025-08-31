"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Camera, Heart, Share2, MapPin, ArrowLeft, Calendar, User } from 'lucide-react';

// Full gallery data with all posts
const allGalleryPosts = [
  {
    id: 1,
    image: '/traditional-temple-pagoda-by-water-with-mountains.png',
    title: "Sunset at Kerala Backwaters",
    location: "Alleppey, Kerala",
    likes: 284,
    description: "Golden hour reflection on the serene backwaters. The tranquil waters mirror the sky painted in shades of orange and pink, creating a mesmerizing symphony of colors that dance across the surface.",
    tags: ["sunset", "backwaters", "kerala", "nature"],
    galleryLocation: "kerala",
    photographer: "Arjun Nair",
    date: "2024-08-15",
    story: "Captured during a peaceful houseboat journey through the famous backwaters of Kerala. The golden hour brought out the most incredible reflections I've ever witnessed."
  },
  {
    id: 2,
    image: '/dramatic-coastal-cliffs-with-turquoise-water-and-r.png',
    title: "Majestic Hawa Mahal",
    location: "Jaipur, Rajasthan",
    likes: 356,
    description: "The iconic Palace of Winds in all its glory, standing tall as a testament to Rajputana architecture. Its intricate pink sandstone facade tells stories of royal heritage.",
    tags: ["architecture", "heritage", "rajasthan", "palace"],
    galleryLocation: "rajasthan",
    photographer: "Priya Sharma",
    date: "2024-08-12",
    story: "Early morning light hitting the Hawa Mahal creates this magical pink glow. The 953 small windows were designed to allow royal ladies to observe street festivals while remaining unseen."
  },
  {
    id: 3,
    image: '/volcanic-mountain-landscape-with-dramatic-clouds.png',
    title: "Pangong Lake Beauty",
    location: "Ladakh",
    likes: 421,
    description: "Crystal clear waters surrounded by mountains that seem to touch the sky. The lake changes colors throughout the day, from deep blue to turquoise to emerald green.",
    tags: ["mountains", "lake", "ladakh", "adventure"],
    galleryLocation: "ladakh",
    photographer: "Vikram Singh",
    date: "2024-08-10",
    story: "At 14,270 feet above sea level, Pangong Lake is a surreal experience. The crystal-clear waters and changing colors make it feel like you're on another planet."
  },
  {
    id: 4,
    image: '/traditional-cultural-dancers-in-colorful-costumes.png',
    title: "Traditional Kathakali",
    location: "Kochi, Kerala",
    likes: 198,
    description: "Vibrant cultural performance showcase featuring the ancient art form of Kathakali. The elaborate costumes and expressive movements tell stories from Hindu epics.",
    tags: ["culture", "dance", "kerala", "tradition"],
    galleryLocation: "kerala",
    photographer: "Meera Pillai",
    date: "2024-08-14",
    story: "Witnessing Kathakali at the Kerala Kalamandalam was magical. The performers spend hours in makeup, and each gesture has deep symbolic meaning."
  },
  {
    id: 5,
    image: '/beautiful-coastal-cliff-with-turquoise-water-and-g.png',
    title: "Desert Sunset Safari",
    location: "Jaisalmer, Rajasthan",
    likes: 312,
    description: "Camel safari through the golden dunes of Thar Desert. As the sun sets, the entire landscape transforms into a canvas of gold and amber.",
    tags: ["desert", "safari", "sunset", "adventure"],
    galleryLocation: "rajasthan",
    photographer: "Rohit Jain",
    date: "2024-08-11",
    story: "The silence of the desert at sunset is profound. Only the gentle bells of the camels and the whisper of wind through the dunes break the peaceful stillness."
  },
  {
    id: 6,
    image: '/placeholder-user.jpg',
    title: "Monastery Prayers",
    location: "Leh, Ladakh",
    likes: 267,
    description: "Peaceful moments at ancient Buddhist monastery where monks gather for evening prayers. The chanting echoes through the mountain valleys.",
    tags: ["monastery", "buddhist", "peace", "spirituality"],
    galleryLocation: "ladakh",
    photographer: "Tenzin Norbu",
    date: "2024-08-09",
    story: "The evening prayers at Hemis Monastery are deeply moving. The sound of chanting and prayer wheels creates an atmosphere of profound peace."
  },
  // Additional posts for each location
  {
    id: 7,
    image: '/traditional-temple-pagoda-by-water-with-mountains.png',
    title: "Munnar Tea Gardens",
    location: "Munnar, Kerala",
    likes: 189,
    description: "Rolling hills covered in emerald green tea plantations as far as the eye can see.",
    tags: ["tea", "gardens", "kerala", "hills"],
    galleryLocation: "kerala",
    photographer: "Sita Menon",
    date: "2024-08-13",
    story: "The morning mist rolling over Munnar's tea gardens creates an ethereal landscape that feels like a dream."
  },
  {
    id: 8,
    image: '/dramatic-coastal-cliffs-with-turquoise-water-and-r.png',
    title: "Amber Fort Grandeur",
    location: "Amer, Rajasthan",
    likes: 445,
    description: "The magnificent Amber Fort perched on a hilltop, showcasing Rajput architecture at its finest.",
    tags: ["fort", "architecture", "rajasthan", "heritage"],
    galleryLocation: "rajasthan",
    photographer: "Kavita Rathore",
    date: "2024-08-10",
    story: "Climbing up to Amber Fort on elephant back felt like traveling back in time to the era of maharajas and royal splendor."
  },
  {
    id: 9,
    image: '/volcanic-mountain-landscape-with-dramatic-clouds.png',
    title: "Khardung La Pass",
    location: "Khardung La, Ladakh",
    likes: 378,
    description: "One of the highest motorable roads in the world, offering breathtaking views of the Himalayas.",
    tags: ["mountains", "pass", "ladakh", "adventure"],
    galleryLocation: "ladakh",
    photographer: "Jamyang Dolma",
    date: "2024-08-08",
    story: "At 17,982 feet, Khardung La tested both my endurance and my camera. The views from the top are absolutely worth every moment of altitude sickness."
  }
];

const GalleryDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [selectedPost, setSelectedPost] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (id) {
      const locationPosts = allGalleryPosts.filter(post => post.galleryLocation === id);
      setFilteredPosts(locationPosts);
    }
  }, [id]);

  const locationTitles = {
    kerala: "God's Own Country - Kerala",
    rajasthan: "Land of Kings - Rajasthan", 
    ladakh: "Land of High Passes - Ladakh"
  };

  const locationDescriptions = {
    kerala: "Experience the serene backwaters, lush tea gardens, and rich cultural heritage of Kerala. From tranquil houseboats to vibrant Kathakali performances, every moment is magical.",
    rajasthan: "Discover the royal grandeur of Rajasthan with its majestic forts, colorful markets, and golden desert landscapes. A land where history comes alive in every corner.",
    ladakh: "Journey to the roof of the world in Ladakh, where pristine lakes, ancient monasteries, and towering peaks create landscapes that seem almost otherworldly."
  };

  if (!id || !locationTitles[id]) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gray-50 p-10">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Gallery Not Found</h1>
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Return Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-orange-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Gallery</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Location Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {locationTitles[id]}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
            {locationDescriptions[id]}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>{filteredPosts.length} Photos</span>
            <span>•</span>
            <span>Multiple Contributors</span>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Overlay Icons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <Camera size={16} />
                  </div>
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
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

                {/* Photographer and Date */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{post.photographer}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Engagement */}
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors group/heart">
                    <Heart size={16} className="group-hover/heart:fill-current" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </button>
                  <span className="text-xs text-primary font-medium cursor-pointer hover:underline">
                    View Details
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Share Your {locationTitles[id]} Memories
          </h3>
          <p className="text-muted-foreground mb-6">
            Have you captured amazing moments in {locationTitles[id]}? Share them with fellow travelers!
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">
            Upload Your Photos
          </button>
        </div>
      </div>

      {/* Modal for Selected Post */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-muted-foreground hover:text-foreground text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image */}
                <div className="relative">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-black/30 text-white border-0 backdrop-blur-sm">
                      <MapPin size={12} className="mr-1" />
                      {selectedPost.location}
                    </Badge>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {selectedPost.description}
                  </p>
                  
                  <div className="p-4 bg-muted/30 rounded-xl">
                    <h4 className="font-semibold mb-2">Photographer's Story</h4>
                    <p className="text-sm text-muted-foreground italic">
                      "{selectedPost.story}"
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <User size={16} />
                      <span>{selectedPost.photographer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                      <Heart size={20} />
                      <span>{selectedPost.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Share2 size={20} />
                      <span>Share</span>
                    </button>
                    <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <Camera size={20} />
                      <span>Save</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default GalleryDetailPage;