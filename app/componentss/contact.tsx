'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Users,
  ArrowLeft,
  Clock,
  CheckCircle
} from 'lucide-react';

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  detail: string;
  color: string;
}

interface SocialLink {
  icon: React.ElementType;
  color: string;
  label: string;
  href: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
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
      color: "from-green-400 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "hello@wanderersclub.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Visit Our Hub",
      detail: "123 Adventure Street, New Delhi, Delhi 110001, India",
      color: "from-red-400 to-red-600"
    }
  ];

  const socialLinks: SocialLink[] = [
    { icon: Facebook, color: "bg-blue-600 hover:bg-blue-700", label: "Facebook", href: "#" },
    { icon: Instagram, color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600", label: "Instagram", href: "#" },
    { icon: Twitter, color: "bg-sky-500 hover:bg-sky-600", label: "Twitter", href: "#" }
  ];

  const handleBackToHome = () => {
    // This would typically use router.push('/') or similar navigation
    console.log('Navigate back to home page');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
     

      <div className="container mx-auto px-6 py-12">
        {/* Success Message */}
        {isSubmitted && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-xl p-4 flex items-center gap-3 max-w-4xl mx-auto">
            <CheckCircle size={24} className="text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
              <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
                  <Send size={20} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Send Us a Message</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:outline-none transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:outline-none transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your adventure plans, questions, or just say hello..."
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-400 focus:outline-none transition-all duration-300 resize-none"
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-orange-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send size={18} />
                  )}
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-10 h-10 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <info.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{info.title}</h4>
                      <p className="text-gray-600 text-xs mt-1 leading-relaxed">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-red-500">Closed</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl shadow-xl p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <Users size={20} />
                <h3 className="text-lg font-bold">Follow Us</h3>
              </div>
              <p className="text-white/90 text-sm mb-4">
                Connect with our community and stay updated with the latest adventures!
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Adventure?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're planning your first trip or you're a seasoned traveler, our team is here to help you create unforgettable experiences. Get in touch with us today!
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                Free consultation
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                24/7 support
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle size={16} className="text-green-500" />
                Expert guidance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;