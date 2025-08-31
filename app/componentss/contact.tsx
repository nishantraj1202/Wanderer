'use client';

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  Users,
  Sparkles
} from 'lucide-react';

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  detail: string;
  color: string;
  bgColor: string;
}

interface SocialLink {
  icon: React.ElementType;
  color: string;
  label: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert("Message sent successfully! We'll get back to you soon.");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Call Us",
      detail: "+91 9876 543 210",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@wanderersclub.com",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: MapPin,
      title: "Visit Our Hub",
      detail: "123 Adventure Street, New Delhi, Delhi 110001, India",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50"
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, color: "bg-blue-600 hover:bg-blue-700", label: "Facebook" },
    { icon: Instagram, color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600", label: "Instagram" },
    { icon: Twitter, color: "bg-sky-500 hover:bg-sky-600", label: "Twitter" }
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 bg-gradient-to-b from-muted/30 to-background relative"
    >
      {/* Animated Background */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-orange-300 rounded-full opacity-40 animate-bounce"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: '3s'
              }}
            />
          ))}
          <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-lg rotate-45 opacity-30 animate-spin-slow"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-200 rounded-full opacity-40 animate-bounce"></div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles size={24} className="text-orange-500 animate-spin" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Connect with Fellow <span className="text-orange-500">Wanderers</span>
            </h1>
            <Sparkles size={24} className="text-purple-500 animate-spin" style={{ animationDelay: '1s' }} />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions about your next adventure? Want to connect with our community?
            <br />
            We're here to help you start your wandering journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-orange-100 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Send size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Send Us a Message</h3>
              </div>
              <div className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                        required
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                        required
                      />
                    </div>
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300 group-hover:border-gray-300"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your adventure plans, questions, or just say hello..."
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition-all duration-300 group-hover:border-gray-300 resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:from-orange-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Contact Info & Community */}
          <div className="order-1 lg:order-2 space-y-8 flex flex-col h-full -mt-2">
            {/* Get in Touch */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center ">
                  <Phone size={16} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Get in Touch</h3>
              </div>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {info.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Join Community */}
            <div className="bg-gradient-to-br from-purple-500 to-orange-500 p-4 rounded-2xl text-white shadow-xl flex-1 flex flex-col justify-center w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center">
                  <Users size={14} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Join Our Community</h3>
              </div>
              <div className="flex gap-3 mb-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={`w-10 h-10 ${social.color} rounded-xl flex items-center justify-center transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl group`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-white group-hover:animate-bounce" />
                  </button>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
                <p className="text-white/90 text-xs">
                  Connect with fellow travelers, share experiences, and discover new adventures together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;