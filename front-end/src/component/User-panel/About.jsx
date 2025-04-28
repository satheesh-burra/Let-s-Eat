import React from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const branches = [
  {
    city: "Hyderabad",
    address: "Plot 12, Madhapur, Hyderabad, TS",
    image: "https://media.istockphoto.com/id/171225043/photo/outdoor-restaurant-terrace.jpg?s=612x612&w=0&k=20&c=wdjiziD2SLVHBcIHAt_xnodI_JyNphTqXlUI4UKkn5Q=",
    mapLink: "https://www.google.com/maps?q=Plot+12,+Madhapur,+Hyderabad"
  },
  {
    city: "Bengaluru",
    address: "88 MG Road, Bengaluru, KA",
    image: "https://i.pinimg.com/564x/c8/cc/de/c8ccde84591941cac2e6c33b135f9712.jpg",
    mapLink: "https://www.google.com/maps?q=88+MG+Road,+Bengaluru"
  },
  {
    city: "Chennai",
    address: "45 North Usman Rd, T. Nagar, Chennai, TN",
    image: "https://media.istockphoto.com/id/975054980/photo/shipping-container-restaurant-with-red-color-3d-rendering.jpg?s=612x612&w=0&k=20&c=x0dUpuo7jvMA3tT9-TND1czyrRQe12Vc9j-yspbC9WE=",
    mapLink: "https://www.google.com/maps?q=45+North+Usman+Rd,+T.+Nagar,+Chennai"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-red-400 to-white py-16 rounded-2xl">
      {/* 📌 Our Story Section */}
      <div className="max-w-6xl mx-auto p-8 text-center">
        <h2 className="text-3xl font-bold text-red-500">Our Story</h2>
        <p className="mt-4 text-neutral-900">
          Established in 2025, Let's Eat began with a simple mission: to bring people together over delicious meals. 
          Today, with multiple branches nationwide, we continue to serve authentic, high-quality food with love.
        </p>
      </div>
      <button
  onClick={() => {
    setSelectedItem(item);
    setQuantity(1);
  }}
  className="relative overflow-hidden px-6 py-2 rounded-full border border-red-600 text-red-600 font-semibold transition-all duration-300 group"
>
  <span className="absolute inset-0 bg-white transition-all duration-300 transform scale-y-0 origin-bottom group-hover:scale-y-100 z-0"></span>
  <span className="relative z-10 text-white group-hover:text-black">Order Now</span>
</button>

      {/* 📌 Branches Section */}
      <div className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center text-red-500">Our Branches</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map((branch, index) => (
            <div key={index} className="bg-rose-300 border-8 border-t-4 border-b-4 border-t-red-400 border-r-4 border-r-red-400 border-b-pink-300 border-l-4 border-l-red-200  rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src={branch.image} alt={branch.city} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-2xl font-semibold text-black">{branch.city}</h3>
                <p className="text-neutral-700 flex items-center justify-center mt-2">
                  <FaMapMarkerAlt className="text-red-500 mr-2" /> {branch.address}
                </p>
                <a 
                  href={branch.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-2xl mt-3 hover:bg-red-600"
                >
                  View on Map <FaExternalLinkAlt className="ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
