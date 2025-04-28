
// import React from "react";
// const Home = () => {
//     return (
//         <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/flat-lay-composition-mexican-food-with-copyspace_23-2148140329.jpg?t=st=1742187374~exp=1742190974~hmac=fbfb733ac2e6ee5be9c27a6712baa6b0f667f4ec440dbd89e8e688a96fc23256&w=1380')" }}>
//             <h1 className="text-5xl font-bold text-red-500">W<span className="text-black">elcome to <span  className="text-red-500">L</span>et's  <span  className="text-red-500">E</span>at</span></h1>
//             <p className="text-lg mt-4 max-w-md text-neutral-950 ">Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.</p>
//             <div className="mt-6 flex items-center space-x-2">
//                 <input 
//                     type="text" 
//                     placeholder="Search for dishes or cuisines..." 
//                     className="p-3 w-80 rounded-lg border-2 border-t-red-500 border-l-red-500 text-black"
//                 />
//                 <button className="p-3 px-6 bg-red-500 text-white rounded-lg hover:bg-orange-600">Search</button>
//             </div>
//         </div>
//     );
// };

// export default Home;

// import React from "react";
// const Home = () => {
//     return (
//                 <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4 sm:px-8" >
  
// <div 
//   className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[0px] shadow-10xl"
//   style={{ 
//     backgroundImage: "url('https://img.freepik.com/free-photo/top-view-sweet-cookies-with-little-cake-cup-tea-white-background-sweet-biscuit-tea-cake-cookie-sugar_140725-80621.jpg?t=st=1742286560~exp=1742290160~hmac=8ecdf42916e2c31444280093bbc27d48bc6ac2159cdac166d002ec156d875ebf&w=996')",
//     clipPath: "ellipse(100% 80% at center top)", 
//     filter: "drop-shadow(40px 500px 70px rgba(2, 2, 3, 0.3))" 
//   }} 
// />





//   <div className="relative z-10 bg-white/100 rounded-xl p-10">
//             <h1 className="text-4xl sm:text-5xl font-bold text-red-500">W<span className="text-black">elcome to <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at</span></h1>
//             <p className="text-base sm:text-lg mt-4 max-w-md text-neutral-950">Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.</p>
//             <div className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2 w-full max-w-md">
//                 <input 
//                     type="text" 
//                     placeholder="Search restaurants by cities" 
//                     className="p-3 w-full sm:w-80 rounded-lg border-2 border-t-red-500 border-l-red-500 text-black"
//                 />
//                 <button className="p-3  px-6 bg-red-500 text-white rounded-lg hover:bg-orange-600 w-full sm:w-auto">Search</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Home;
// import React from "react";
// import Items from "../User-panel/Items";
// import Services from '../User-panel/Services';
// import Whychoose from '../User-panel/Whychoose';

// const Home = () => {
//   return (
//     <>
//     <div className="h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 relative overflow-hidden">
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         className="absolute inset-0 w-full h-full object-cover"
//       >
//         <source
//           src="../videos/background.mp4"
//           type="video/mp4"
//         />
//       </video>

//       {/* Overlay to Darken Background */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Content Box */}
//       <div className="relative z-10 bg-white/90 rounded-xl p-10 shadow-lg">
//         <h1 className="text-4xl sm:text-5xl font-bold text-red-500">
//           W<span className="text-black">elcome to <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at</span>
//         </h1>
//         <p className="text-base sm:text-lg mt-4 max-w-md text-neutral-900">
//           Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.
//         </p>
//         <div className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search restaurants by cities"
//             className="p-3 w-full sm:w-80 rounded-lg border-2 border-t-red-500 border-l-red-500 text-black"
//           />
//           <button className="p-3 px-6 bg-red-500 text-white rounded-lg hover:bg-orange-600 w-full sm:w-auto">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
    
//     <Items/>
//     <Services />
//     <Whychoose/>
//     </>
//   );
// };

// export default Home; 






// import React from "react";
// import About from "../User-panel/About"
// import Items from "../User-panel/Items";
// import Services from '../User-panel/Services';
// import Whychoose from '../User-panel/Whychoose';
// import { motion } from "framer-motion"; // Import Framer Motion for animations

// const Home = () => {
//   return (
//     <>
//       <div className="h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 relative overflow-hidden">
        
//         {/* Background Video */}
//         <video
//           autoPlay
//           loop
//           muted
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source src="../videos/background.mp4" type="video/mp4" />
//         </video>

//         {/* Overlay with Animated Gradient */}
//         <div className="absolute inset-0 bg-black/40 animate-gradient"></div>

//         {/* Content Box with Floating Effect */}
//         <motion.div 
//           className="relative z-10 bg-white/90 rounded-xl p-10 shadow-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           whileHover={{ scale: 1.02 }} // Slight hover scaling
//         >
//           <motion.h1 
//             className="text-4xl sm:text-5xl font-bold text-red-500"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             W<span className="text-black">elcome to <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at</span>
//           </motion.h1>

//           <motion.p 
//             className="text-base sm:text-lg mt-4 max-w-md text-neutral-900"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.
//           </motion.p>

//           <motion.div 
//             className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2 w-full max-w-md"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <input
//               type="text"
//               placeholder="Search restaurants by cities"
//               className="p-3 w-full sm:w-80 rounded-lg border-2 border-t-red-500 border-l-red-500 text-black focus:ring-2 focus:ring-red-500 focus:outline-none transition"
//             />
//             <motion.button 
//               className="p-3 px-6 bg-red-500 text-white rounded-lg hover:bg-orange-600 w-full sm:w-auto transition-all duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               Search
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Other Sections */}
//       <Items/>
//       <Services />
//       <Whychoose/>
//       <About/>
//     </>
//   );
// };

// export default Home;

// import "../User-panel/Home.css"
// import React from "react";
// import About from "../User-panel/About";
// import Items from "../User-panel/Items";
// import Services from '../User-panel/Services';
// import Whychoose from '../User-panel/Whychoose';
// import { motion } from "framer-motion"; // Import Framer Motion for animations

// const Home = () => {
//   return (
//     <>
//       <div className="h-screen flex flex-col items-center justify-center text-white text-center px-4 sm:px-8 relative overflow-hidden bg-cover bg-center animated-bg">
        
//         {/* Overlay with Animated Gradient */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         {/* Content Box with Floating Effect */}
//         <motion.div 
//           className="relative z-10 bg-white/90 rounded-xl p-10 shadow-lg"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           whileHover={{ scale: 1.02 }} // Slight hover scaling
//         >
//           <motion.h1 
//             className="text-4xl sm:text-5xl font-bold text-red-500"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           >
//             W<span className="text-black">elcome to <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at</span>
//           </motion.h1>

//           <motion.p 
//             className="text-base sm:text-lg mt-4 max-w-md text-neutral-900"
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.
//           </motion.p>

//           <motion.div 
//             className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2 w-full max-w-md"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.8, duration: 0.8 }}
//           >
//             <input
//               type="text"
//               placeholder="Search restaurants by cities"
//               className="p-3 w-full sm:w-80 rounded-lg border-2 border-t-red-500 border-l-red-500 text-black focus:ring-2 focus:ring-red-500 focus:outline-none transition"
//             />
//             <motion.button 
//               className="p-3 px-6 bg-red-500 text-white rounded-lg hover:bg-orange-600 w-full sm:w-auto transition-all duration-300"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               Search
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Other Sections */}
//       <Items/>
//       <Services />
//       <Whychoose/>
//       <About/>
//     </>
//   );
// };

// export default Home
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // Import the AOS styles

// import React from "react";
// import About from "../User-panel/About";
// import Items from "../User-panel/Items";
// import Services from '../User-panel/Services';
// import Whychoose from '../User-panel/Whychoose';
// import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
// import Reviews from "../User-panel/Reviews";

// import BookTablePage from './BookTableMain';
// import EventsPage1 from './EventBookigMain';

// const Home = () => {
//   return (
//     <>
//       {/* Main Section */}
//       <div className="h-screen flex flex-col items-end justify-center text-white text-left px-10 sm:px-20 relative overflow-hidden bg-[url('../image/home200.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
        
//         <h1 className="text-4xl sm:text-5xl font-bold text-red-500" >
//           W<span className="text-black  ">elcome to <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at</span>
//         </h1>

//         <p className="text-base sm:text-lg mt-4 text-neutral-900 max-w-lg">
//           Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.
//         </p>

//         <div className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-2 w-full max-w-md">
//           <input
//             type="text"
//             placeholder="Search restaurants by cities"
//             className="p-3 w-full sm:w-80 rounded-lg border-2 border-t-red-500 border-l-red-500 text-black focus:ring-2 focus:ring-red-500 focus:outline-none transition"
//           />
//           <button className="p-3 px-6 bg-red-500 text-white rounded-lg hover:bg-orange-600 w-full sm:w-auto transition-all duration-300">
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <Items />
//       <Services />
//       <Whychoose />
//       <About />
//       <Reviews />
      
//       <EventsPage1/>
//       <BookTablePage/>
      

//       {/* Floating WhatsApp Button */}
//       <a
//         href="https://wa.me/6281196856"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-5 right-5 bg-gradient-to-b from-red-500 to-white text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center space-x-2 z-100"
//       >
//         <FaWhatsapp size={28} />
//       </a>
//     </>
//   );
// };

// export default Home;



// import React, { useState } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import About from "../User-panel/About";
// import Items from "../User-panel/Items";
// import Services from '../User-panel/Services';
// import Whychoose from '../User-panel/Whychoose';
// import Reviews from "../User-panel/Reviews";
// import BookTablePage from './BookTableMain';
// import EventsPage1 from './EventBookigMain';
// import ContactUs from "./ContactUs";



// AOS.init();

// const Home = () => {
//   const [showChatBox, setShowChatBox] = useState(false);
//   const [messages, setMessages] = useState([
//     { from: "bot", text: "Hi there! How can I help you today?" },
//   ]);
//   const [userInput, setUserInput] = useState("");

//   const handleSendMessage = () => {
//     if (userInput.trim() === "") return;

//     setMessages([...messages, { from: "user", text: userInput }]);
//     setUserInput("");

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { from: "bot", text: "Thanks for your message. We'll get back to you shortly!" },
//       ]);
//     }, 1000);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="h-screen flex items-center justify-end text-white text-right px-10 sm:px-20 relative overflow-hidden bg-[url('../image/home200.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
//         <div className="max-w-xl space-y-4">
//           <h1 className="text-4xl sm:text-5xl font-bold text-red-500">
//             W<span className="text-black">elcome to <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at</span>
//           </h1>

//           <p className="text-base sm:text-lg text-neutral-900">
//             Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.
//           </p>

//           <div className="text-center">
//             <button
//               onClick={() => {
//                 const element = document.getElementById("book-now");
//                 if (element) element.scrollIntoView({ behavior: "smooth" });
//               }}
//               className="p-3 px-6 relative bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-4 hover:ring-pink-300 hover:ring-offset-2">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Other Sections */}
//       {/* <Items />
//       <Services />
//       <Whychoose />
//       <About />
//       <Reviews />

//       {/* Scroll Target 
//       <div id="book-now">
//         <BookTablePage />
//         <EventsPage1 />
//       </div>
//       <ContactUs/> */}
//       <div id="dishes">
//       <Items id="dishes" />
//       </div>
//       <div id="services">
//       <Services id="services" />
//       </div>

// <Whychoose />
// <About />
// {/* <Reviews /> */}
// <div id="book-now">
//   <BookTablePage />
//   <EventsPage1 />
// </div>
// <div id="contact">
//   <ContactUs />
// </div>


//       {/* Floating Chat Button & Box */}
//       <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
//         {showChatBox && (
//           <div className="bg-white p-4 rounded-lg shadow-lg w-72 h-96 flex flex-col justify-between mb-2">
//             <div className="overflow-y-auto mb-2 flex-1 space-y-2 pr-1">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`text-sm p-2 rounded-lg max-w-[80%] ${
//                     msg.from === "user"
//                       ? "bg-red-100 self-end text-right"
//                       : "bg-gray-200 self-start text-left"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder="Type a message..."
//                 className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 className="bg-red-500 text-white px-3 rounded hover:bg-red-600 text-sm"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}

//         <button
//           onClick={() => setShowChatBox(!showChatBox)}
//           className="bg-red-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all"
//         >
//           Can I help you?
//         </button>
//       </div>
//     </>
//   );
// };

// export default Home;



// import React, { useState } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import About from "../User-panel/About";
// import Items from "../User-panel/Items";
// import Services from '../User-panel/Services';
// import Whychoose from '../User-panel/Whychoose';
// import Reviews from "../User-panel/Reviews";
// import BookTablePage from './BookTableMain';
// import EventsPage1 from './EventBookigMain';
// import ContactUs from "./ContactUs";

// AOS.init();

// const Home = () => {
//   const [showChatBox, setShowChatBox] = useState(false);
//   const [messages, setMessages] = useState([
//     { from: "bot", text: "Hi there! How can I help you today?" },
//   ]);
//   const [userInput, setUserInput] = useState("");

//   const handleSendMessage = () => {
//     if (userInput.trim() === "") return;

//     setMessages([...messages, { from: "user", text: userInput }]);
//     setUserInput("");

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { from: "bot", text: "Thanks for your message. We'll get back to you shortly!" },
//       ]);
//     }, 1000);
//   };

//   const handleBookNowScroll = () => {
//     const element = document.getElementById("book-now");
//     if (element) {
//       const yOffset = -98; // Adjust based on your fixed navbar height
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="h-screen flex items-center justify-end text-white text-right px-10 sm:px-20 relative overflow-hidden bg-[url('../image/home200.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
//         <div className="max-w-xl space-y-4">
//           <h1 className="text-4xl sm:text-5xl font-bold text-red-500">
//             W<span className="text-black">elcome to <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at</span>
//           </h1>

//           <p className="text-base sm:text-lg text-neutral-900">
//             Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.
//           </p>

//           <div className="text-center">
//             <button
//               onClick={handleBookNowScroll}
//               className="p-3 px-6 relative bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-4 hover:ring-pink-300 hover:ring-offset-2"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Sections */}
//       <div id="dishes">
//         <Items />
//       </div>

//       <div id="services">
//         <Services />
//       </div>

     
//       {/* <Reviews /> */}

//       <div id="book-now">
//       <section id="book-event">
      
//       <EventsPage1 />
// </section>

// <section id="book-table">
// <BookTablePage />
// </section>

//         {/* <BookTablePage />
//         <EventsPage1 /> */}
//       </div>
//       <Whychoose />
//       <About />

//       <div id="contact">
//         <ContactUs />
//       </div>

//       {/* Floating Chat Button & Box */}
//       <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
//         {showChatBox && (
//           <div className="bg-white p-4 rounded-lg shadow-lg w-72 h-96 flex flex-col justify-between mb-2">
//             <div className="overflow-y-auto mb-2 flex-1 space-y-2 pr-1">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`text-sm p-2 rounded-lg max-w-[80%] ${
//                     msg.from === "user"
//                       ? "bg-red-100 self-end text-right"
//                       : "bg-gray-200 self-start text-left"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder="Type a message..."
//                 className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 className="bg-red-500 text-white px-3 rounded hover:bg-red-600 text-sm"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}

//         <button
//           onClick={() => setShowChatBox(!showChatBox)}
//           className="bg-red-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all relative group-hover:ml-2  duration-300">
        
//           Can I help you?
//         </button>
//       </div>
//     </>
//   );
// };

// export default Home;

// import React, { useState, useEffect, useRef } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { io } from "socket.io-client";

// import About from "../User-panel/About";
// import Items from "../User-panel/Items";
// import Services from '../User-panel/Services';
// import Whychoose from '../User-panel/Whychoose';
// import Reviews from "../User-panel/Reviews";
// import BookTablePage from './BookTableMain';
// import EventsPage1 from './EventBookigMain';
// import ContactUs from "./ContactUs";

// AOS.init();

// // Connect to Socket.IO server
// const socket = io("http://localhost:5000"); // Change this URL for deployment

// const Home = () => {
//   const [showChatBox, setShowChatBox] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     // Listen for messages from server
//     socket.on("receive_message", (message) => {
//       setMessages((prev) => [...prev, message]);
//     });

//     return () => {
//       socket.off("receive_message");
//     };
//   }, []);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (!userInput.trim()) return;

//     const message = { from: "user", text: userInput };
//     socket.emit("send_message", message);
//     setMessages((prev) => [...prev, message]);
//     setUserInput("");
//   };

//   const handleBookNowScroll = () => {
//     const element = document.getElementById("book-now");
//     if (element) {
//       const yOffset = -98;
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="h-screen flex items-center justify-end text-white text-right px-10 sm:px-20 relative overflow-hidden bg-[url('../image/home200.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
//         <div className="max-w-xl space-y-4">
//           <h1 className="text-4xl sm:text-5xl font-bold text-red-500">
//             W<span className="text-black">elcome to <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at</span>
//           </h1>
//           <p className="text-base sm:text-lg text-neutral-900">
//             Enjoy delicious meals from our top chefs. Fresh ingredients, mouth-watering recipes, and a cozy ambiance await you.
//           </p>
//           <div className="text-center">
//             <button
//               onClick={handleBookNowScroll}
//               className="p-3 px-6 relative bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-4 hover:ring-pink-300 hover:ring-offset-2"
//             >
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Sections */}
//       <div id="dishes">
//         <Items />
//       </div>
//       <div id="services">
//         <Services />
//       </div>

//       <div id="book-now">
//         <section id="book-event">
//           <EventsPage1 />
//         </section>
//         <section id="book-table">
//           <BookTablePage />
//         </section>
//       </div>

//       <Whychoose />
//       <About />

//       <div id="contact">
//         <ContactUs />
//       </div>

//       {/* Floating Chat Button & Chat Box */}
//       <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
//         {showChatBox && (
//           <div className="bg-white border-2 border-pink-300 p-4 rounded-lg shadow-lg w-72 h-96 flex flex-col justify-between mb-2">
//             <div className="overflow-y-auto mb-2 flex-1 space-y-2 pr-1">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={`text-sm p-2 rounded-lg max-w-[80%] ${
//                     msg.from === "user"
//                       ? "bg-red-100 self-end text-right"
//                       : "bg-pink-200 self-start text-left"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//               <div ref={messagesEndRef} />
//             </div>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={userInput}
//                 onChange={(e) => setUserInput(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder="Type a message..."
//                 className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 className="bg-red-500 text-white px-3 rounded hover:bg-red-600 text-sm"
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         )}

//         <button
//           onClick={() => setShowChatBox(!showChatBox)}
//           className="bg-red-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all"
//         >
//           Can I help you?
//         </button>
//       </div>
//     </>
//   );
// };

// export default Home;

import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "../User-panel/About";
import Items from "../User-panel/Items";
import Services from "../User-panel/Services";
import Whychoose from "../User-panel/Whychoose";
import Reviews from "../User-panel/Reviews";
import BookTablePage from "./BookTableMain";
import EventsPage1 from "./EventBookigMain";
import ContactUs from "./ContactUs";

AOS.init();

const Home = () => {
  const [showChatBox, setShowChatBox] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    setMessages([...messages, { from: "user", text: userInput }]);
    setUserInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks for your message. We'll get back to you shortly!",
        },
      ]);
    }, 1000);
  };

  const handleBookNowScroll = () => {
    const element = document.getElementById("book-table");
    if (element) {
      const yOffset = -98;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      

<div 
  className="relative h-screen w-full overflow-hidden font-sans" 
  style={{
    backgroundImage: "url('../image/home200.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Layered Glow Background */}
  <div className="absolute w-full h-full bg-gradient-to-tr from-pink-300/30 to-red-400/30 animate-pulse blur-2xl scale-110 z-0"></div>

  {/* Floating Food Icons */}
  {/* <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
    <img src="https://hips.hearstapps.com/hmg-prod/images/chicken-burgers-index-667b185b5f528.jpg?crop=0.500xw:1.00xh;0.282xw,0&resize=1200:" alt="burger" className="w-14 absolute top-10 left-20 animate-float" />
    <img src="/food/pizza.png" alt="pizza" className="w-16 absolute bottom-16 right-10 animate-float-delay" />
    <img src="/food/sushi.png" alt="sushi" className="w-12 absolute top-1/2 left-1/3 animate-float-slow" />
  </div> */}

  {/* Main Content */}
  <div className="relative z-20 flex flex-col justify-center items-end h-full text-right px-10 sm:px-20">
    <div className="max-w-xl space-y-6 p-8 bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
      <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-500 to-pink-500 animate-textPulse">
        Welcome to <br />
        <span className="text-red-600">Let's Eat</span>
      </h1>
      <p className="text-lg text-gray-800">
        Explore a world of taste. Let our chefs serve joy on your plate.
      </p>

      <div>
        <button
          onClick={handleBookNowScroll}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 text-white font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:ring-4 hover:ring-red-300 animate-bounce-slow"
        >
          🍴 Reserve Your Table
        </button>
      </div>
    </div>
  </div>
</div>




      {/* Sections */}
      <div id="dishes">
        <Items />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="book-now">
        <section id="book-event">
          <EventsPage1 />
        </section>

        <section id="book-table">
          <BookTablePage />
        </section>
      </div>

      <Whychoose />
      <About />

      <div id="contact">
        <ContactUs />
      </div>

      {/* Floating Chat Button & Box */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
        {showChatBox && (
          <div className="bg-white border border-pink-300 p-4 rounded-lg shadow-lg w-72 h-96 flex flex-col justify-between relative mb-2">
            {/* Close Button */}
            <button
              onClick={() => setShowChatBox(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
              aria-label="Close chat"
            >
              &times;
            </button>

            <div className="overflow-y-auto mb-2 flex-1 space-y-2 pr-1">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`text-sm p-2 rounded-lg max-w-[80%] ${
                    msg.from === "user"
                      ? "bg-red-100 self-end text-right"
                      : "bg-gray-200 self-start text-left"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none"
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-500 text-white px-3 rounded hover:bg-red-600 text-sm"
              >
                Send
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setShowChatBox(!showChatBox)}
          className="bg-red-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-red-600 transition-all"
        >
          Can I help you?
        </button>
      </div>
    </>
  );
};

export default Home;
