import React from "react";
import { motion } from "framer-motion";

const menuItems = [
  { name: "Margherita Pizza", price: "$12.99", image: "https://source.unsplash.com/300x200/?pizza" },
  { name: "Spaghetti Carbonara", price: "$14.99", image: "https://source.unsplash.com/300x200/?pasta" },
  { name: "Grilled Salmon", price: "$18.99", image: "https://source.unsplash.com/300x200/?salmon" },
  { name: "Caesar Salad", price: "$10.99", image: "https://source.unsplash.com/300x200/?salad" },
  { name: "Tiramisu", price: "$8.99", image: "https://source.unsplash.com/300x200/?dessert" },
  { name: "Mango Smoothie", price: "$6.99", image: "https://source.unsplash.com/300x200/?smoothie" },
];

const Menu = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">Our Menu</h2>
        <motion.div 
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {menuItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-red-100 p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-lg text-red-500 font-bold">{item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
