import React from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

const branches = [
  {
    city: "New York",
    address: "123 Foodie Lane, Manhattan, NY",
    image: "https://idsb.tmgrup.com.tr/ly/uploads/images/2024/04/09/thumbs/800x531/323101.jpg", 
    mapLink: "https://www.google.com/maps?q=123+Foodie+Lane,+Manhattan,+NY"
  },
  {
    city: "Los Angeles",
    address: "456 Sunset Blvd, LA, CA",
    image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/71/39/f1.jpg", 
    mapLink: "https://www.google.com/maps?q=456+Sunset+Blvd,+Los+Angeles,+CA"
  },
  {
    city: "Chicago",
    address: "789 Windy St, Chicago, IL",
    image: "https://cdn.choosechicago.com/uploads/2024/09/iStock-1457709628-scaled-e1726779974760-1800x789.jpg",
    mapLink: "https://www.google.com/maps?q=789+Windy+St,+Chicago,+IL"
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

