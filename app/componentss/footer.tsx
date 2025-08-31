
import React, { useState, useEffect } from 'react';
import { 
	Plane, 
	Instagram, 
	Facebook, 
	Twitter,
	Mail,
	Phone,
	MapPin,
	Home,
	User,
	Camera,
	MessageCircle,
	Mountain,
	Waves,
	Navigation,
	TreePine,
	Sun,
	Heart
} from 'lucide-react';

const Footer = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	const quickLinks = [
		{ icon: Home, name: 'Home', href: '#home' },
		{ icon: User, name: 'About', href: '#about' },
		{ icon: Mountain, name: 'Adventures', href: '#adventures' },
		{ icon: Camera, name: 'Gallery', href: '#gallery' },
		{ icon: MessageCircle, name: 'Contact', href: '#contact' }
	];

	const adventures = [
		{ icon: Navigation, name: 'Golden Triangle', color: 'text-yellow-400' },
		{ icon: Waves, name: 'Kerala Backwaters', color: 'text-blue-400' },
		{ icon: Mountain, name: 'Rajasthan Explorer', color: 'text-orange-400' },
		{ icon: TreePine, name: 'Himalayan Trek', color: 'text-green-400' },
		{ icon: Sun, name: 'Goa Beaches', color: 'text-pink-400' }
	];

	return (
		<footer className="relative bg-gray-900 text-white overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30">
				{/* Floating particles */}
				{Array.from({ length: 20 }).map((_, i) => (
					<div
						key={i}
						className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-ping"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 3}s`,
							animationDuration: `${2 + Math.random() * 2}s`
						}}
					/>
				))}
				{/* Moving gradient orb */}
				<div 
					className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
					style={{
						left: mousePosition.x - 192,
						top: mousePosition.y - 192,
					}}
				/>
			</div>

			<div className="relative z-10 container mx-auto px-6 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Brand Section */}
					<div className="space-y-6">
						<div className="group">
							<div className="flex items-center gap-3 mb-4">
								<div className="relative">
									<div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
										<Plane size={20} className="text-white animate-pulse" />
									</div>
									<div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
								</div>
								<h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent">
									Wanderers Club
								</h3>
							</div>
							<p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
								A community of adventurous souls exploring India's incredible beauty, one journey at a time. Join us in creating unforgettable memories and lifelong friendships.
							</p>
							<div className="flex gap-3">
								{[
									{ Icon: Facebook, color: 'hover:bg-blue-600', bgColor: 'bg-blue-500/20' },
									{ Icon: Instagram, color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500', bgColor: 'bg-pink-500/20' },
									{ Icon: Twitter, color: 'hover:bg-sky-500', bgColor: 'bg-sky-500/20' }
								].map(({ Icon, color, bgColor }, index) => (
									<button
										key={index}
										className={`w-10 h-10 ${bgColor} rounded-lg flex items-center justify-center ${color} transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg`}
									>
										<Icon size={18} className="text-white" />
									</button>
								))}
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="flex items-center gap-2 text-lg font-semibold text-orange-400 mb-6">
							<div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
								<Navigation size={12} className="text-white" />
							</div>
							Quick Links
						</h4>
						<div className="space-y-3">
							{quickLinks.map((link, index) => (
								<a
									key={index}
									href={link.href}
									className="flex items-center gap-3 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 group"
								>
									<link.icon size={16} className="text-gray-500 group-hover:text-orange-400 transition-colors" />
									<span className="text-sm">{link.name}</span>
								</a>
							))}
						</div>
					</div>

					{/* Popular Adventures */}
					<div className="space-y-4">
						<h4 className="flex items-center gap-2 text-lg font-semibold text-purple-400 mb-6">
							<div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
								<Mountain size={12} className="text-white" />
							</div>
							Popular Adventures
						</h4>
						<div className="space-y-3">
							{adventures.map((adventure, index) => (
								<div
									key={index}
									className="flex items-center gap-3 text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 group cursor-pointer"
								>
									<adventure.icon size={16} className={`${adventure.color} group-hover:animate-bounce`} />
									<span className="text-sm">{adventure.name}</span>
								</div>
							))}
						</div>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h4 className="flex items-center gap-2 text-lg font-semibold text-blue-400 mb-6">
							<div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center">
								<Phone size={12} className="text-white" />
							</div>
							Contact Info
						</h4>
						<div className="space-y-4">
							<a
								href="tel:+919876543210"
								className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
							>
								<div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
									<Phone size={14} className="text-green-400 group-hover:animate-pulse" />
								</div>
								<span className="text-sm">+91 9876 543 210</span>
							</a>
							<a
								href="mailto:hello@wanderersclub.com"
								className="flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300 group"
							>
								<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
									<Mail size={14} className="text-blue-400 group-hover:animate-pulse" />
								</div>
								<span className="text-sm">hello@wanderersclub.com</span>
							</a>
							<div className="flex items-start gap-3 text-gray-400 group">
								<div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
									<MapPin size={14} className="text-orange-400 group-hover:animate-bounce" />
								</div>
								<div className="text-sm">
									<div>Adventure Street</div>
									<div>New Delhi, India</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-gray-800 mt-12 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<div className="flex items-center gap-2 text-gray-400 text-sm">
							<span>© 2025 Wanderers Club. All rights reserved. Made with</span>
							<Heart size={16} className="text-red-400 animate-pulse fill-current" />
							<span>for adventurous souls.</span>
						</div>
						<div className="flex items-center gap-2 text-gray-500 text-sm hover:text-purple-400 transition-colors cursor-pointer">
							<div className="w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
							<span>Keep Wandering</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
