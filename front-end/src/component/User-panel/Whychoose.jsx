import React from "react";
import { FaStar, FaUtensils, FaConciergeBell, FaWineGlassAlt, FaClock, FaUsers } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Premium Quality Food",
    description: "We serve only the freshest ingredients with top-tier chefs.",
    icon: <FaUtensils className="text-5xl text-red-500" />,
  },
  {
    id: 2,
    title: "Luxury Dining Experience",
    description: "Enjoy a fine dining experience in a cozy and elegant ambiance.",
    icon: <FaWineGlassAlt className="text-5xl text-red-500" />,
  },
  {
    id: 3,
    title: "Fast & Easy Reservations",
    description: "Book a table in seconds through our online system.",
    icon: <FaClock className="text-5xl text-red-500" />,
  },
  {
    id: 4,
    title: "Exclusive Discounts",
    description: "Special offers and discounts available for our loyal customers.",
    icon: <FaStar className="text-5xl text-red-500" />,
  },
  {
    id: 5,
    title: "Catering & Private Events",
    description: "Host birthdays, weddings, and corporate events with us.",
    icon: <FaConciergeBell className="text-5xl text-red-500" />,
  },
  {
    id: 6,
    title: "Friendly & Professional Staff",
    description: "Experience top-notch service with our skilled hospitality team.",
    icon: <FaUsers className="text-5xl text-red-500" />,
  },
];

const Whychoose = () => {
  return (
    <div className="container mx-auto py-12 px-6 text-center bg-gradient-to-t from-red-400 to-white mt-10 rounded-2xl">
      <h2 className="text-4xl font-bold text-red-600 mb-6">Why Choose <span className="text-black">Let's Eat?</span></h2>
      <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
        At <span className="text-red-600 font-semibold">Let's Eat</span>, we bring you a world-class dining experience with delicious food, excellent service, and a welcoming atmosphere.
      </p>

      {/* Grid Layout for Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-gradient-to-t from-red-200 via-white via-white to-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-zinc-950">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Whychoose;
