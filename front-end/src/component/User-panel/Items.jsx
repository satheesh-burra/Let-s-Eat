

import React, { useState } from "react";
import "swiper/css";

import { motion } from "framer-motion";

const vegItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Creamy cottage cheese in a rich tomato gravy.",
    image: "https://platetopalateblog.com/wp-content/uploads/2020/07/20200506_131905-scaled.jpg",
  },
  {
    id: 2,
    name: "Veg Biryani",
    description: "Fragrant rice with seasonal vegetables and spices.",
    image: "https://www.chefkunalkapur.com/wp-content/uploads/2023/11/DSC07512-1300x731.jpg?v=1699167800",
  },
  {
    id: 3,
    name: "Palak Paneer",
    description: "Spinach gravy with soft paneer cubes.",
    image: "https://www.marionskitchen.com/wp-content/uploads/2021/08/Paneer-Curry8278-1200x1500.jpg",
  },
  {
    id: 4,
       name: "Veg Fried Rice",
     description: "Stir-fried rice with fresh vegetables.",
      image: "https://hajialirestaurant.com/wp-content/uploads/2023/04/veg-fried-rice-scaled.jpg",
     },
  {
      name: "Kaju Curry",
      description: "Rich cashew nut curry with creamy gravy.",
       image: "https://theredplatechronicles.home.blog/wp-content/uploads/2019/05/img_20190521_061255_677.jpg?w=1200",
   },
     {
      id: 6,
      name: "Chana Masala",
      description: "Spicy chickpea curry with bold Indian spices.",
          image: "https://vegecravings.com/wp-content/uploads/2017/01/chole-recipe-step-by-step-instructions-13.jpg",
   },
  
];

const nonVegItems = [
  {
    id: 7,
    name: "Chicken Biryani",
    description: "Spicy layered rice with marinated chicken.",
    image: "https://www.cookwithnabeela.com/wp-content/uploads/2025/01/ChickenBiryani-500x500.webp",
  },
  {
    id: 8,
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with grilled chicken.",
    image: "https://masalaandchai.com/wp-content/uploads/2024/04/Easy-Butter-Chicken.jpg",
  },
  {
    id: 9,
    name: "Fish Fry",
    description: "Crispy golden fried fish fillets.",
    image: "https://tiffinandteaofficial.com/wp-content/uploads/2024/04/Untitled-1-1.jpg",
  },
  {
         id: 10,
        name: "Butter Chicken",
       description: "Creamy tomato-based curry with grilled chicken.",
    image: "https://masalaandchai.com/wp-content/uploads/2024/04/Easy-Butter-Chicken.jpg",
       },
       {
         id: 11,
         name: "Prawn Masala",
         description: "Juicy prawns in spicy Indian masala.",
         image: "https://www.bigfattummy.com/wp-content/uploads/2020/03/Prawns-Masala-Fried-05-1200x675.jpg",
       },
       {
         id: 12,
         name: "Tandoori Chicken",
         description: "Grilled chicken marinated in yogurt and spices.",
         image: "https://static.toiimg.com/thumb/53240689.cms?width=1200&height=900",
       },
    

];

const Items = () => {
  const renderAnimatedCard = (item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-gradient-to-r from-red-200 via-pink-300 to-yellow-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-400 transform transition-all duration-50 w-full max-w-sm mx-auto"
    >
      <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-t-3xl" />
      <div className="p-4 text-center">
        <h3 className="text-2xl font-extrabold text-red-700 mb-2 drop-shadow-md">{item.name}</h3>
        <p className="text-gray-800 italic mb-4">{item.description}</p>
        <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 shadow-lg">
          Order Now
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen w-full px-4 py-10 bg-gradient-to-br from-yellow-100 via-pink-100 to-red-200 flex flex-col gap-16">
      <div className="text-center">
        <h2 className="text-5xl font-extrabold text-red-600 mb-4 tracking-wide">
          Our <span className="text-black">Special Dishes</span>
        </h2>
        <p className="text-gray-700 text-lg italic">Taste the tradition with a modern twist</p>
      </div>

      {/* Veg Items */}
      <div>
        <h3 className="text-3xl font-bold text-green-700 mb-6 text-center">Veg Items</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vegItems.map(renderAnimatedCard)}
        </div>
      </div>

      {/* Non-Veg Items */}
      <div>
        <h3 className="text-3xl font-bold text-red-700 mb-6 text-center">Non-Veg Items</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nonVegItems.map(renderAnimatedCard)}
        </div>
      </div>
    </div>
  );
};

export default Items;
