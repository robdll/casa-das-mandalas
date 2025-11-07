"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
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
  nameKey: string;
  icon: React.ReactNode;
}

interface AmenityCategory {
  nameKey: string;
  icon: React.ReactNode;
  items: Amenity[];
}

export default function Amenities() {
  const t = useTranslations();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: AmenityCategory[] = [
    {
      nameKey: "bathroom",
      icon: <FaShower className="w-5 h-5" />,
      items: [
        { nameKey: "hairDryer", icon: <FaShower className="w-4 h-4" /> },
        { nameKey: "shampoo", icon: <FaShower className="w-4 h-4" /> },
        { nameKey: "conditioner", icon: <FaShower className="w-4 h-4" /> },
        { nameKey: "bodySoap", icon: <FaShower className="w-4 h-4" /> },
        { nameKey: "bidet", icon: <FaShower className="w-4 h-4" /> },
        { nameKey: "hotWater", icon: <FaShower className="w-4 h-4" /> },
        { nameKey: "showerGel", icon: <FaShower className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "bedroomAndLaundry",
      icon: <MdLocalLaundryService className="w-5 h-5" />,
      items: [
        { nameKey: "washer", icon: <BiSolidWasher className="w-4 h-4" /> },
        { nameKey: "essentials", icon: <FaHome className="w-4 h-4" /> },
        { nameKey: "hangers", icon: <FaHome className="w-4 h-4" /> },
        { nameKey: "bedLinens", icon: <FaHome className="w-4 h-4" /> },
        { nameKey: "extraPillowsAndBlankets", icon: <FaHome className="w-4 h-4" /> },
        { nameKey: "iron", icon: <FaHome className="w-4 h-4" /> },
        { nameKey: "mosquitoNet", icon: <FaHome className="w-4 h-4" /> },
        { nameKey: "clothingStorage", icon: <FaHome className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "entertainment",
      icon: <FaTv className="w-5 h-5" />,
      items: [
        { nameKey: "ethernetConnection", icon: <FaWifi className="w-4 h-4" /> },
        { nameKey: "tv", icon: <FaTv className="w-4 h-4" /> },
        { nameKey: "booksAndReadingMaterial", icon: <FaBook className="w-4 h-4" /> },
        { nameKey: "themeRoom", icon: <FaHome className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "family",
      icon: <MdFamilyRestroom className="w-5 h-5" />,
      items: [
        { nameKey: "windowGuards", icon: <FaHome className="w-4 h-4" /> },
        { nameKey: "boardGames", icon: <FaGamepad className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "heatingAndCooling",
      icon: <FaSnowflake className="w-5 h-5" />,
      items: [
        { nameKey: "airConditioning", icon: <FaSnowflake className="w-4 h-4" /> },
        { nameKey: "heating", icon: <FaSnowflake className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "homeSafety",
      icon: <MdSecurity className="w-5 h-5" />,
      items: [
        { nameKey: "smokeAlarm", icon: <MdSecurity className="w-4 h-4" /> },
        { nameKey: "carbonMonoxideAlarm", icon: <MdSecurity className="w-4 h-4" /> },
        { nameKey: "fireExtinguisher", icon: <MdSecurity className="w-4 h-4" /> },
        { nameKey: "firstAidKit", icon: <MdSecurity className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "internetAndOffice",
      icon: <FaLaptop className="w-5 h-5" />,
      items: [
        { nameKey: "wifi", icon: <FaWifi className="w-4 h-4" /> },
        { nameKey: "dedicatedWorkspace", icon: <FaLaptop className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "kitchenAndDining",
      icon: <FaUtensils className="w-5 h-5" />,
      items: [
        { nameKey: "kitchen", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "refrigerator", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "cookingBasics", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "dishesAndSilverware", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "freezer", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "dishwasher", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "stove", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "oven", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "coffeeMaker", icon: <MdCoffeeMaker className="w-4 h-4" /> },
        { nameKey: "toaster", icon: <FaUtensils className="w-4 h-4" /> },
        { nameKey: "diningTable", icon: <FaUtensils className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "locationFeatures",
      icon: <FaHome className="w-5 h-5" />,
      items: [
        { nameKey: "privateEntrance", icon: <FaHome className="w-4 h-4" /> },
        { nameKey: "laundromatNearby", icon: <MdLocalLaundryService className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "outdoor",
      icon: <MdBalcony className="w-5 h-5" />,
      items: [
        { nameKey: "privatePatioOrBalcony", icon: <MdBalcony className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "parkingAndFacilities",
      icon: <FaCar className="w-5 h-5" />,
      items: [
        { nameKey: "freeParkingOnPremises", icon: <FaCar className="w-4 h-4" /> },
        { nameKey: "freeStreetParking", icon: <FaCar className="w-4 h-4" /> },
        { nameKey: "paidStreetParkingOffPremises", icon: <FaCar className="w-4 h-4" /> },
        { nameKey: "paidParkingOnPremises", icon: <FaCar className="w-4 h-4" /> },
      ],
    },
    {
      nameKey: "services",
      icon: <FaKey className="w-5 h-5" />,
      items: [
        { nameKey: "longTermStaysAllowed", icon: <FaKey className="w-4 h-4" /> },
        { nameKey: "selfCheckIn", icon: <FaKey className="w-4 h-4" /> },
        { nameKey: "housekeepingAvailable", icon: <FaBroom className="w-4 h-4" /> },
      ],
    },
  ];

  const toggleCategory = (categoryNameKey: string) => {
    setExpandedCategory(
      expandedCategory === categoryNameKey ? null : categoryNameKey
    );
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          {t("amenities.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.nameKey}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleCategory(category.nameKey)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-gray-600">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t(`amenities.categories.${category.nameKey}`)}
                  </h3>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedCategory === category.nameKey ? "rotate-180" : ""
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
              {expandedCategory === category.nameKey && (
                <div className="px-6 py-4 border-t border-gray-200">
                  <ul className="space-y-2">
                    {category.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="text-gray-400">{item.icon}</span>
                        <span>{t(`amenities.items.${item.nameKey}`)}</span>
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
