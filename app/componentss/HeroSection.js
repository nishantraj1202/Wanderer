'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, CalendarDays, Users, Search } from "lucide-react";
import Select from 'react-select'; // Import react-select

// Import for react-day-picker and its styles
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

// Convert destinations array to the format react-select expects
const destinations = [
  "New Delhi",
  "Mumbai", 
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Udaipur",
  "Goa",
  "Kerala",
  "Rajasthan"
].map(city => ({ value: city.toLowerCase().replace(/\s/g, '-'), label: city }));

const guests = [
  { value: 1, label: "1 Guest" },
  { value: 2, label: "2 Guests" },
  { value: 3, label: "3 Guests" },
  { value: 4, label: "4 Guests" },
  { value: 5, label: "5+ Guests" },
];

export default function HeroSection() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGuests, setSelectedGuests] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuestsDropdown, setShowGuestsDropdown] = useState(false);

  const calendarRef = useRef(null);
  const guestsRef = useRef(null);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target)) {
        setShowGuestsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const buttonClassNames = "flex-1 w-full md:w-auto flex items-center justify-between gap-2 px-4 py-3 text-sm md:text-base cursor-pointer rounded-full md:rounded-lg transition-all duration-200 hover:bg-white/30";

  // Custom styles for react-select to match the existing theme
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: 'none',
      boxShadow: 'none',
      color: 'white',
      borderRadius: '9999px',
      cursor: 'pointer',
      padding: '4px',
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'rgba(255, 255, 255, 0.7)',
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'white',
      '&:hover': {
        color: 'white',
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      color: 'white',
      cursor: 'pointer',
    }),
  };

  return (
    <section id='home' className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/12bg.jpg"
          alt="Travel background"
          className="w-full h-full object-cover pt-14"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      {/* Hero Content */}
      <div className="relative z-10 text-center text-black font-bold px-4">
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl font-extralight mb-6 md:mb-8 max-w-4xl tracking-wide leading-tight bg-transparent"
          style={{ background: "rgba(255,255,255,0.15)", borderRadius: "1rem", padding: "0.5rem 1.5rem" }}
        >
          Begin your dream journey with our expert guidance
        </h1>

        {/* Search Form */}
        <div className="mx-auto max-w-lg md:max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 p-2 mb-8 shadow-lg">
            
            {/* Search Destination Dropdown */}
            <div className="flex-1 z-[9999] w-full text-black">
              <Select
                options={destinations}
                placeholder="Search destination"
                onChange={(option) => setSelectedDestination(option.label)}
                styles={customStyles}
                classNamePrefix="react-select"
              />
            </div>

            {/* Date Dropdown (Calendar) */}
            <div className="relative flex-1" ref={calendarRef}>
              <button
                onClick={() => {
                  setShowCalendar(!showCalendar);
                  setShowGuestsDropdown(false);
                }}
                className={`${buttonClassNames} text-white`}
              >
                <span className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4" />
                  {selectedDate ? format(selectedDate, 'PPP') : "Select a date"}
                </span>
              </button>
              
              {showCalendar && (
                <div className="absolute z-50 mt-2 left-1/2 -translate-x-1/2 p-3 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 text-white w-72 max-w-[200px]">
                  <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={(date) => {
                      setSelectedDate(date);
                      setShowCalendar(false);
                    }}
                    disabled={{ before: new Date() }} // Disable past dates
                    className="p-2"
                    classNames={{
                        root: "rdp-root",
                        day: "rdp-day",
                        selected: "bg-blue-500 text-white hover:bg-blue-600",
                        today: "text-blue-500 font-bold",
                        caption: "text-white font-semibold text-center",
                        nav_button: "text-white hover:bg-white/20 transition-colors rounded-full",
                        head: "text-gray-400 font-medium",
                        month: "w-72",
                    }}
                  />
                </div>
              )}
            </div>

            {/* Guests Dropdown */}
            <div className="relative flex-1 w-full" ref={guestsRef}>
              <button
                onClick={() => {
                  setShowGuestsDropdown(!showGuestsDropdown);
                  setShowCalendar(false);
                }}
                className={`${buttonClassNames} text-white`}
              >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {selectedGuests || "No. of Guests"}
                </span>
              </button>
              
              {showGuestsDropdown && (
                <div className="absolute z-50 w-full mt-2 left-0 top-full p-2 bg-black/90 backdrop-blur-md rounded-lg shadow-xl border border-gray-700 text-white max-h-40 overflow-y-auto">
                  <div className="flex flex-col gap-1">
                    {guests.map(guest => (
                      <button
                        key={guest.value}
                        onClick={() => {
                          setSelectedGuests(guest.label);
                          setShowGuestsDropdown(false);
                        }}
                        className="p-2 text-left rounded hover:bg-white/10 transition-colors font-medium text-sm"
                      >
                        {guest.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="w-full md:w-auto bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-semibold transition-colors shadow-lg flex items-center justify-center gap-2">
              <Search className="w-4 h-4" />
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Left Content */}
      <div className="absolute bottom-8 left-8 text-white z-10 px-4 md:px-0">
        <p className="text-sm md:text-base max-w-xs md:max-w-sm mb-4">
          Book your travel and transportation service with us and enjoy a hassle-free journey
        </p>
        <button className="border border-white text-white hover:bg-white hover:text-black bg-transparent px-6 py-3 rounded-lg text-sm transition-colors">
          Explore more →
        </button>
      </div>
    </section>
  );
}