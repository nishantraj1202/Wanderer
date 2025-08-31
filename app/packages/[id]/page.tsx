'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, MapPin, Calendar, Users, Award, Wifi, Car, Camera, Mountain } from 'lucide-react';

const packages = [
  {
    id: 1,
    image: '/images/assets/maldives-package.jpg',
    title: "Kerala Backwaters",
    location: "Alleppey, Kerala",
    duration: "5 Days",
    price: "₹25,999",
    originalPrice: "₹32,999",
    rating: 4.9,
    reviews: 128,
    maxGuests: 4,
    highlight: "Houseboat Stay",
    description: "Experience the serene backwaters of Kerala with a luxurious houseboat stay. Cruise through palm-fringed canals, witness traditional village life, and enjoy authentic Kerala cuisine prepared fresh on board.",
    inclusions: [
      "4 nights houseboat accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Airport transfers",
      "Sightseeing as per itinerary",
      "Professional guide"
    ],
    amenities: ["WiFi", "Air Conditioning", "Traditional Cuisine", "Scenic Views"],
    itinerary: [
      { day: 1, title: "Arrival in Cochin", activities: "Airport pickup, transfer to houseboat, welcome drink" },
      { day: 2, title: "Backwater Cruise", activities: "Full day cruise, village visits, traditional lunch" },
      { day: 3, title: "Kumrakom Exploration", activities: "Bird sanctuary visit, local market tour" },
      { day: 4, title: "Cultural Experience", activities: "Kathakali performance, cooking demonstration" },
      { day: 5, title: "Departure", activities: "Check-out, airport transfer" }
    ]
  },
  {
    id: 2,
    image: '/images/assets/paris-package.jpg',
    title: "Rajasthan Heritage",
    location: "Jaipur, Udaipur & Jodhpur",
    duration: "8 Days",
    price: "₹35,999",
    originalPrice: "₹45,999",
    rating: 4.8,
    reviews: 95,
    maxGuests: 6,
    highlight: "Palace Tours",
    description: "Immerse yourself in the royal heritage of Rajasthan. Visit magnificent palaces, ancient forts, and experience the vibrant culture of the Pink City, City of Lakes, and Blue City.",
    inclusions: [
      "7 nights hotel accommodation",
      "Daily breakfast and dinner",
      "AC transportation",
      "Monument entrance fees",
      "Cultural performances"
    ],
    amenities: ["Heritage Hotels", "Cultural Shows", "Local Cuisine", "Shopping Tours"],
    itinerary: [
      { day: 1, title: "Arrival in Jaipur", activities: "Airport pickup, hotel check-in, evening at leisure" },
      { day: 2, title: "Jaipur Sightseeing", activities: "Amber Fort, City Palace, Hawa Mahal" },
      { day: 3, title: "Jaipur to Jodhpur", activities: "Travel to Jodhpur, Mehrangarh Fort" },
      { day: 4, title: "Jodhpur Exploration", activities: "Jaswant Thada, local markets" },
      { day: 5, title: "Jodhpur to Udaipur", activities: "Travel to Udaipur, Lake Pichola boat ride" },
      { day: 6, title: "Udaipur Palaces", activities: "City Palace, Jagdish Temple" },
      { day: 7, title: "Udaipur Leisure", activities: "Saheliyon Ki Bari, shopping" },
      { day: 8, title: "Departure", activities: "Check-out, airport transfer" }
    ]
  },
  {
    id: 3,
    image: '/images/assets/safari-package.jpg',
    title: "Ladakh Adventure",
    location: "Leh, Ladakh",
    duration: "10 Days",
    price: "₹42,999",
    originalPrice: "₹52,999",
    rating: 4.9,
    reviews: 87,
    maxGuests: 8,
    highlight: "Mountain Adventure",
    description: "Embark on an unforgettable journey to the Land of High Passes. Experience breathtaking landscapes, ancient monasteries, and thrilling mountain adventures in one of the world's most spectacular destinations.",
    inclusions: [
      "9 nights accommodation",
      "All meals included",
      "Airport transfers",
      "Inner line permits",
      "Professional mountain guide",
      "Oxygen cylinders"
    ],
    amenities: ["Mountain Views", "Adventure Sports", "Monastery Visits", "Local Culture"],
    itinerary: [
      { day: 1, title: "Arrival in Leh", activities: "Airport pickup, rest for acclimatization" },
      { day: 2, title: "Leh Local Sightseeing", activities: "Shanti Stupa, Leh Palace, local market" },
      { day: 3, title: "Nubra Valley", activities: "Khardung La Pass, camel safari" },
      { day: 4, title: "Nubra to Pangong", activities: "Drive to Pangong Lake" },
      { day: 5, title: "Pangong Lake", activities: "Sunrise viewing, photography" },
      { day: 6, title: "Return to Leh", activities: "Drive back via Chang La Pass" },
      { day: 7, title: "Monastery Circuit", activities: "Hemis, Thiksey monasteries" },
      { day: 8, title: "Tso Moriri", activities: "Day trip to Tso Moriri Lake" },
      { day: 9, title: "Adventure Day", activities: "River rafting or trekking" },
      { day: 10, title: "Departure", activities: "Check-out, airport transfer" }
    ]
  },
];

export default function PackageDetailPage() {
  const params = useParams();
  const packageId = Number(params.id);
  
  const pkg = packages.find((p) => p.id === packageId);
  
  if (!pkg) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Package Not Found</h1>
        <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
          ← Return to Home
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-25 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            ← Back to Packages
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Section */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <div className="relative h-96">
                <Image 
                  src={pkg.image} 
                  alt={pkg.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {pkg.highlight}
                </div>
              </div>
              
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{pkg.title}</h1>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  {pkg.location}
                </div>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-600">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-600">Up to {pkg.maxGuests} guests</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{pkg.rating} ({pkg.reviews} reviews)</span>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Detailed Itinerary</h2>
              <div className="space-y-4">
                {pkg.itinerary.map((item, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-800">
                      Day {item.day}: {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{item.activities}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Included</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {pkg.inclusions.map((inclusion, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">{inclusion}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Amenities & Features</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pkg.amenities.map((amenity, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <Award className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                    <span className="text-sm text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-800">
                  {pkg.price}
                  <span className="text-sm font-normal text-gray-500"> per person</span>
                </div>
                <div className="text-lg text-gray-500 line-through">{pkg.originalPrice}</div>
                <div className="text-green-600 font-medium">
                  Save {((parseFloat(pkg.originalPrice.replace('₹', '').replace(',', '')) - parseFloat(pkg.price.replace('₹', '').replace(',', ''))) / 1000).toFixed(0)}k
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{pkg.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Max Guests</span>
                  <span className="font-medium">{pkg.maxGuests} people</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="font-medium">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4">
                Book Now
              </button>
              
              <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                Add to Wishlist
              </button>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-500 text-center">
                  🛡️ 100% Safe & Secure Payment<br />
                  📞 24/7 Customer Support<br />
                  🔄 Free Cancellation up to 48hrs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}