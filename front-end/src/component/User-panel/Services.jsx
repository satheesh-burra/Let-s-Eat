import React from "react";
import { FaUtensils, FaCalendarAlt, FaPercentage, FaConciergeBell, FaClock, FaGlassCheers } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Book a Table",
    description: "Reserve your table in advance to enjoy hassle-free dining.",
    icon: <FaUtensils className="text-5xl text-red-500" />,
    animation: "hover:scale-105 hover:shadow-xl",
  },
  {
    id: 2,
    title: "Book an Event",
    description: "Host special occasions with us and enjoy our premium services.",
    icon: <FaCalendarAlt className="text-5xl text-red-500" />,
    animation: "hover:rotate-3 hover:shadow-xl",
  },
  {
    id: 3,
    title: "Exclusive Discounts",
    description: "Enjoy amazing deals and special discounts when you book online.",
    icon: <FaPercentage className="text-5xl text-red-500" />,
    animation: "hover:scale-110 hover:shadow-xl",
  },
  {
    id: 4,
    title: "Private Dining",
    description: "Experience a luxurious and private dining setup for special moments.",
    icon: <FaGlassCheers className="text-5xl text-red-500" />,
    animation: "hover:-rotate-3 hover:shadow-xl",
  },
  {
    id: 5,
    title: "Fast Reservations",
    description: "Easily book tables online within seconds with instant confirmation.",
    icon: <FaClock className="text-5xl text-red-500" />,
    animation: "hover:scale-110 hover:shadow-xl",
  },
  {
    id: 6,
    title: "Catering Services",
    description: "Let us cater your events with delicious food and excellent service.",
    icon: <FaConciergeBell className="text-5xl text-red-500" />,
    animation: "hover:rotate-3 hover:shadow-xl",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto py-12 px-6 text-center bg-gradient-to-t from-red-500 to-white mt-10 rounded-2xl">
      <h2 className="text-4xl font-bold text-red-600 mb-8"> <span className="text-black">Our</span> Services</h2>

      {/* Grid Layout for Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className={`bg-gradient-to-r from-red-200 via-red-200 to-white p-6 rounded-lg shadow-md transform transition duration-300 ${service.animation}`}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-red-600">{service.title}</h3>
            <p className="text-gray-700 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
