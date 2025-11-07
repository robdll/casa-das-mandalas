"use client";

import { useState } from "react";
import {
  FaShower,
  FaTv,
  FaWifi,
  FaCar,
  FaUtensils,
  FaSnowflake,
  FaHome,
  FaGamepad,
  FaBook,
  FaLaptop,
  FaKey,
  FaBroom,
} from "react-icons/fa";
import {
  MdLocalLaundryService,
  MdFamilyRestroom,
  MdSecurity,
  MdCoffeeMaker,
  MdBalcony,
} from "react-icons/md";
import { BiSolidWasher } from "react-icons/bi";

interface Amenity {
  name: string;
  icon: React.ReactNode;
}

interface AmenityCategory {
  name: string;
  icon: React.ReactNode;
  items: Amenity[];
}

export default function Amenities() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: AmenityCategory[] = [
    {
      name: "Bathroom",
      icon: <FaShower className="w-5 h-5" />,
      items: [
        { name: "Hair dryer", icon: <FaShower className="w-4 h-4" /> },
        { name: "Shampoo", icon: <FaShower className="w-4 h-4" /> },
        { name: "Conditioner", icon: <FaShower className="w-4 h-4" /> },
        { name: "Body soap", icon: <FaShower className="w-4 h-4" /> },
        { name: "Bidet", icon: <FaShower className="w-4 h-4" /> },
        { name: "Hot water", icon: <FaShower className="w-4 h-4" /> },
        { name: "Shower gel", icon: <FaShower className="w-4 h-4" /> },
      ],
    },
    {
      name: "Bedroom and laundry",
      icon: <MdLocalLaundryService className="w-5 h-5" />,
      items: [
        { name: "Washer", icon: <BiSolidWasher className="w-4 h-4" /> },
        { name: "Essentials", icon: <FaHome className="w-4 h-4" /> },
        { name: "Hangers", icon: <FaHome className="w-4 h-4" /> },
        { name: "Bed linens", icon: <FaHome className="w-4 h-4" /> },
        { name: "Extra pillows and blankets", icon: <FaHome className="w-4 h-4" /> },
        { name: "Iron", icon: <FaHome className="w-4 h-4" /> },
        { name: "Mosquito net", icon: <FaHome className="w-4 h-4" /> },
        { name: "Clothing storage", icon: <FaHome className="w-4 h-4" /> },
      ],
    },
    {
      name: "Entertainment",
      icon: <FaTv className="w-5 h-5" />,
      items: [
        { name: "Ethernet connection", icon: <FaWifi className="w-4 h-4" /> },
        { name: "TV", icon: <FaTv className="w-4 h-4" /> },
        { name: "Books and reading material", icon: <FaBook className="w-4 h-4" /> },
        { name: "Theme room", icon: <FaHome className="w-4 h-4" /> },
      ],
    },
    {
      name: "Family",
      icon: <MdFamilyRestroom className="w-5 h-5" />,
      items: [
        { name: "Window guards", icon: <FaHome className="w-4 h-4" /> },
        { name: "Board games", icon: <FaGamepad className="w-4 h-4" /> },
      ],
    },
    {
      name: "Heating and cooling",
      icon: <FaSnowflake className="w-5 h-5" />,
      items: [
        { name: "Air conditioning", icon: <FaSnowflake className="w-4 h-4" /> },
        { name: "Heating", icon: <FaSnowflake className="w-4 h-4" /> },
      ],
    },
    {
      name: "Home safety",
      icon: <MdSecurity className="w-5 h-5" />,
      items: [
        { name: "Smoke alarm", icon: <MdSecurity className="w-4 h-4" /> },
        { name: "Carbon monoxide alarm", icon: <MdSecurity className="w-4 h-4" /> },
        { name: "Fire extinguisher", icon: <MdSecurity className="w-4 h-4" /> },
        { name: "First aid kit", icon: <MdSecurity className="w-4 h-4" /> },
      ],
    },
    {
      name: "Internet and office",
      icon: <FaLaptop className="w-5 h-5" />,
      items: [
        { name: "Wifi", icon: <FaWifi className="w-4 h-4" /> },
        { name: "Dedicated workspace", icon: <FaLaptop className="w-4 h-4" /> },
      ],
    },
    {
      name: "Kitchen and dining",
      icon: <FaUtensils className="w-5 h-5" />,
      items: [
        { name: "Kitchen", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Refrigerator", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Cooking basics", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Dishes and silverware", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Freezer", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Dishwasher", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Stove", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Oven", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Coffee maker", icon: <MdCoffeeMaker className="w-4 h-4" /> },
        { name: "Toaster", icon: <FaUtensils className="w-4 h-4" /> },
        { name: "Dining table", icon: <FaUtensils className="w-4 h-4" /> },
      ],
    },
    {
      name: "Location features",
      icon: <FaHome className="w-5 h-5" />,
      items: [
        { name: "Private entrance", icon: <FaHome className="w-4 h-4" /> },
        { name: "Laundromat nearby", icon: <MdLocalLaundryService className="w-4 h-4" /> },
      ],
    },
    {
      name: "Outdoor",
      icon: <MdBalcony className="w-5 h-5" />,
      items: [
        { name: "Private patio or balcony", icon: <MdBalcony className="w-4 h-4" /> },
      ],
    },
    {
      name: "Parking and facilities",
      icon: <FaCar className="w-5 h-5" />,
      items: [
        { name: "Free parking on premises", icon: <FaCar className="w-4 h-4" /> },
        { name: "Free street parking", icon: <FaCar className="w-4 h-4" /> },
        { name: "Paid street parking off premises", icon: <FaCar className="w-4 h-4" /> },
        { name: "Paid parking on premises", icon: <FaCar className="w-4 h-4" /> },
      ],
    },
    {
      name: "Services",
      icon: <FaKey className="w-5 h-5" />,
      items: [
        { name: "Long term stays allowed", icon: <FaKey className="w-4 h-4" /> },
        { name: "Self check-in", icon: <FaKey className="w-4 h-4" /> },
        { name: "Housekeeping available", icon: <FaBroom className="w-4 h-4" /> },
      ],
    },
  ];

  const toggleCategory = (categoryName: string) => {
    setExpandedCategory(
      expandedCategory === categoryName ? null : categoryName
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Amenities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.name)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-gray-600">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.name}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedCategory === category.name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {expandedCategory === category.name && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="text-gray-400">{item.icon}</span>
                        <span>{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

