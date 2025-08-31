import React, { useState, useEffect } from 'react';
import { Star, Compass, MapPin, Users, Globe, ChevronLeft, ChevronRight, Send, Camera } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review: "Wanderers Club transformed my travel dreams into reality! The Golden Triangle adventure was perfectly curated. Every wanderer in our group became lifelong friends.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b68b8032?w=100&h=100&fit=crop&crop=face",
    trip: "Golden Triangle Adventure"
  },
  {
    name: "Rajesh Kumar",
    location: "Bangalore",
    rating: 5,
    review: "The Kerala wanderlust trip was pure magic! Joining this club of adventurous souls was the best decision. The experiences were beyond imagination.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    trip: "Kerala Backwaters"
  },
  {
    name: "Anita Gupta",
    location: "Delhi",
    rating: 5,
    review: "As a solo female traveler, Wanderers Club made me feel safe and welcomed. The Rajasthan expedition was incredible - from royal palaces to desert nights under the stars!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    trip: "Rajasthan Heritage"
  },
  {
    name: "Vikram Singh",
    location: "Pune",
    rating: 5,
    review: "The Ladakh adventure was life-changing! The breathtaking landscapes and the camaraderie with fellow travelers made it unforgettable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    trip: "Ladakh Adventure"
  },
  {
    name: "Meera Patel",
    location: "Ahmedabad",
    rating: 5,
    review: "Goa with Wanderers Club was absolutely fantastic! Perfect blend of relaxation and adventure. Made so many new friends!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    trip: "Goa Beach Paradise"
  },
  {
    name: "Arjun Nair",
    location: "Chennai",
    rating: 5,
    review: "The Himachal Pradesh trek was beyond my expectations! Every moment was perfectly planned, and the group dynamics were amazing.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    trip: "Himachal Trek"
  },
  {
    name: "Kavya Reddy",
    location: "Hyderabad",
    rating: 5,
    review: "Northeast India exploration was a revelation! The untouched beauty and warm hospitality made this trip absolutely memorable.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    trip: "Northeast Explorer"
  },
  {
    name: "Rohit Mehta",
    location: "Jaipur",
    rating: 5,
    review: "The Andaman Islands package was pure paradise! Crystal clear waters, amazing coral reefs, and great company throughout the journey.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    trip: "Andaman Paradise"
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    trip: '',
    rating: 5,
    review: '',
    email: ''
  });

  const reviewsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / reviewsPerPage);

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentReviews = () => {
    const startIndex = currentIndex * reviewsPerPage;
    return testimonials.slice(startIndex, startIndex + reviewsPerPage);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('New review submitted:', formData);
    alert('Thank you for sharing your experience! We\'ll review and add it soon.');
    setFormData({ name: '', location: '', trip: '', rating: 5, review: '', email: '' });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-purple-50 via-orange-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Stories from Fellow <span className="text-transparent bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text">Wanderers</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Hear from our amazing community of wanderers who've discovered India's magic and forged lifelong friendships along the way.
          </p>
        </div>

        {/* Reviews Slider Container */}
        <div className="relative mb-12">
          {/* Reviews Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-3 gap-8 px-4">
                    {testimonials
                      .slice(pageIndex * reviewsPerPage, (pageIndex + 1) * reviewsPerPage)
                      .map((testimonial, cardIndex) => (
                      <div
                        key={`${pageIndex}-${cardIndex}`}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-orange-200 overflow-hidden group"
                        onMouseEnter={() => setIsPlaying(false)}
                        onMouseLeave={() => setIsPlaying(true)}
                      >
                        <div className="p-6">
                          {/* Trip Badge */}
                          <div className="inline-block bg-gradient-to-r from-orange-100 to-purple-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                            {testimonial.trip}
                          </div>

                          {/* Rating */}
                          <div className="flex mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>

                          {/* Wanderer Badge */}
                          <div className="flex items-center mb-4">
                            <Users className="w-4 h-4 mr-2 text-orange-600" />
                            <span className="text-sm font-medium text-orange-600">Verified Wanderer</span>
                          </div>

                          {/* Review Text */}
                          <p className="text-gray-700 mb-6 italic leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                            "{testimonial.review}"
                          </p>

                          {/* User Info */}
                          <div className="flex items-center mt-auto">
                            <div className="relative">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-200"
                              />
                              <div className="absolute -bottom-1 -right-2 w-6 h-6 bg-gradient-to-r from-orange-600 to-purple-600 rounded-full flex items-center justify-center">
                                <Compass className="w-3 h-3 text-white" />
                              </div>
                            </div>
                            <div className="ml-3">
                              <p className="font-semibold text-gray-900">{testimonial.name}</p>
                              <p className="text-sm text-gray-600 flex items-center">
                                <MapPin className="w-3 h-3 mr-1" />
                                {testimonial.location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50 disabled:opacity-50 disabled:cursor-not-allowed"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <ChevronLeft className="w-6 h-6 text-orange-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-orange-600 w-8' 
                      : 'bg-orange-200 hover:bg-orange-300 w-3'
                  }`}
                  onMouseEnter={() => setIsPlaying(false)}
                  onMouseLeave={() => setIsPlaying(true)}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-50"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              <ChevronRight className="w-6 h-6 text-orange-600" />
            </button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-sm text-gray-500 hover:text-orange-600 transition-colors"
            >
              {isPlaying ? 'Auto-playing • Click to pause' : 'Paused • Click to resume'}
            </button>
          </div>
        </div>

        {/* Share Experience Section */}
        <div className="max-w-2xl mx-auto">
          {!showForm ? (
            <div className="text-center bg-white rounded-xl p-8 shadow-lg">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Wandering Story</h3>
              <p className="text-gray-600 mb-6">
                Been on an amazing trip with us? We'd love to hear about your experience!
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                <Camera className="w-5 h-5 mr-2 inline" />
                Share Your Experience
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Share Your Experience</h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="text"
                    name="location"
                    placeholder="Your City *"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="trip"
                    placeholder="Trip/Package Name *"
                    value={formData.trip}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating *</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        className="focus:outline-none hover:scale-110 transition-transform"
                      >
                        <Star 
                          className={`w-8 h-8 transition-colors ${
                            star <= formData.rating 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300 hover:text-yellow-300'
                          }`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  name="review"
                  placeholder="Tell us about your amazing experience... *"
                  value={formData.review}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none outline-none"
                />

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-600 to-purple-600 text-white rounded-lg hover:from-orange-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-lg text-gray-700 mb-6">Ready to create your own wandering story?</p>
          <button 
            className="bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('bookings')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Globe className="w-5 h-5 mr-2 inline" />
            Join the Adventure
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default ReviewsSection;