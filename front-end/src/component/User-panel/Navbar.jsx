// import React from "react";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// const Navbar = () => {

// const [isOpen, setIsOpen] = useState(false);
//   return (

// <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 via-gray-100 via-gray-100  to-white  bg-opacity-10 backdrop-blur-[700px]">

//       <div className=" mx-auto flex items-center justify-between">

//                 <div className="flex items-center gap-2">
//  <img src="../Logo/logo11.png" alt="Logo" className="h-20 w-20 rounded-b-full rounded-t-full" />
//   <span className="text-2xl font-bold text-gray-800">
//             <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
//  </span>
//                </div>
      
//               <div className="hidden md:flex gap-6 ">
//  <a href="#" className="relative inline-block text-neutral-950 hover:text-gray-900 after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
//   Home
// </a>
// <a href="#" className="relative inline-block text-neutral-950 hover:text-gray-900 after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full after:absolute after:top-0 after:left-0">
//   Menu
// </a>
// <a href="#" className="relative text-neutral-950 hover:text-gray-900 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
//   Contact
// </a>  
// <a href="#" className="relative inline-block text-neutral-950 hover:text-gray-900 after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full after:absolute after:top-0 after:left-0">Add Restaurant</a>
//              </div>
//         <div className="flex gap-2.5">

//           <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//             Book an Event
//           </button>

//           <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//             Book a Table
//           </button>
//           <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//          Login
//        </button> 

//         </div>

//         <button
//           className="md:hidden text-gray-800"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {isOpen && (
//         <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
//           <a href="#" className=" text-neutral-950  hover:text-gray-900">Home</a>
//           <a href="#" className=" text-neutral-950  hover:text-gray-900">Menu</a>
//           <a href="#" className=" text-neutral-950  hover:text-gray-900">Add Restaurant</a>
//           <a href="#" className=" text-neutral-950  hover:text-gray-900">Contact</a>
//                  <div className="flex flex-col gap-2.5">
//          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//          Book an Event
//         </button>
//          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//          Book a Table
//        </button>
//        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//          Login
//        </button> 
//          </div>
//         </div>
//       )}
//     </nav> 
//   );
// }
// export default Navbar;
// import React, { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // Mobile menu state
//   const [showDropdown, setShowDropdown] = useState(false); // Dropdown state
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
//   const [loginType, setLoginType] = useState(null); // Track login type
//   const navigate = useNavigate();

//   const handleLoginClick = (type) => {
//     setLoginType(type);
//     setShowModal(true);
//     setShowDropdown(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowModal(false); // Close modal on submit
//     if (loginType === "admin") {
//       navigate("/admin-panel");
//     } else {
//       navigate("/restaurant-panel");
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 to-white bg-opacity-10 backdrop-blur-lg">
//         <div className="mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <img src="../Logo/logo11.png" alt="Logo" className="h-16 w-16 rounded-full" />
//             <span className="text-2xl font-bold text-gray-800">
//               <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-6">
//             {["Home", "Menu", "Add Restaurant", "Contact"].map((item, index) => (
//               <a key={index} href="#" className="relative inline-block text-neutral-950 hover:text-gray-900 after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
//                 {item}
//               </a>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2.5 items-center">
//             <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//               Book an Event
//             </button>
//             <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
//               Book a Table
//             </button>

//             {/* Login Button with Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowDropdown(!showDropdown)}
//                 className="bg-red-500 text-white px-1 py-1.5 rounded-lg hover:bg-red-600 flex items-center gap-1"
//               >
//                 Login <ChevronDown size={10} />
//               </button>

//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg">
//                   <button
//                     onClick={() => handleLoginClick("admin")}
//                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
//                   >
//                     Admin
//                   </button>
//                   <button
//                     onClick={() => handleLoginClick("restaurant")}
//                     className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
//                   >
//                     Restaurant
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
//             {["Home", "Menu", "Add Restaurant", "Contact"].map((item, index) => (
//               <a key={index} href="#" className="text-neutral-950 hover:text-gray-900">
//                 {item}
//               </a>
//             ))}
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Book an Event</button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Book a Table</button>

//             {/* Mobile Login Dropdown */}
//             <div className="relative">
//               <button
//                 onClick={() => setShowDropdown(!showDropdown)}
//                 className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-1"
//               >
//                 Login <ChevronDown size={16} />
//               </button>
//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg">
//                   <button onClick={() => handleLoginClick("admin")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                     Admin
//                   </button>
//                   <button onClick={() => handleLoginClick("restaurant")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                     Restaurant
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>

//       Login Modal
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-200">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-lg font-bold mb-4">{loginType === "admin" ? "Admin Login" : "Restaurant Login"}</h2>
//             <form onSubmit={handleSubmit}>
//               <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//               <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//               <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
//                 Login
//               </button>
//             </form>
//             <button onClick={() => setShowModal(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

// import React, { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [loginType, setLoginType] = useState(null);
//   const navigate = useNavigate();

//   const openLogin = (type) => {
//     setLoginType(type);
//     setShowModal(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowModal(false);
//     if (loginType === "admin") {
//       navigate("/admin-panel");
//     } else {
//       navigate("/restaurant-panel");
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 to-white bg-opacity-10 backdrop-blur-lg">
//         <div className="mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <img src="../Logo/logo11.png" alt="Logo" className="h-16 w-16 rounded-full" />
//             <span className="text-2xl font-bold text-gray-800">
//               <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-6">
//             {["Home", "Menu", "Add Restaurant", "Contact"].map((item, index) => (
//               <a key={index} href="#" className="relative inline-block text-neutral-950 hover:text-gray-900 after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
//                 {item}
//               </a>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2.5 items-center">
//             <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => openLogin("restaurant")}>
//               Book an Event
//             </button>
//             <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => openLogin("restaurant")}>
//               Book a Table
//             </button>

//             {/* Login Dropdown */}
//             <div className="relative">
//               <button onClick={() => setShowDropdown(!showDropdown)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-1">
//                 Login <ChevronDown size={16} />
//               </button>

//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg">
//                   <button onClick={() => openLogin("admin")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                     Admin
//                   </button>
//                   <button onClick={() => openLogin("restaurant")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                     Restaurant
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
//             {["Home", "Menu", "Add Restaurant", "Contact"].map((item, index) => (
//               <a key={index} href="#" className="text-neutral-950 hover:text-gray-900">
//                 {item}
//               </a>
//             ))}
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => openLogin("restaurant")}>
//               Book an Event
//             </button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => openLogin("restaurant")}>
//               Book a Table
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Login Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <h2 className="text-lg font-bold mb-4">{loginType === "admin" ? "Admin Login" : "Restaurant Login"}</h2>
//             <form onSubmit={handleSubmit}>
//               <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//               <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//               <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
//                 Login
//               </button>
//             </form>
//             <button onClick={() => setShowModal(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
// import React, { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [loginType, setLoginType] = useState(null);
//   const navigate = useNavigate();

//   const openLogin = (type) => {
//     setLoginType(type);
//     setIsSignUp(false);
//     setShowModal(true);
//   };

//   const openSignUp = () => {
//     setIsSignUp(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignUp) {
//       setIsSignUp(false); // Switch to login after signup
//     } else {
//       setShowModal(false);
//       if (loginType === "admin") {
//         navigate("/admin-panel");
//       } else {
//         navigate("/restaurant-panel");
//       }
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 to-white bg-opacity-10 backdrop-blur-lg">
//         <div className="mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <img src="../Logo/logo11.png" alt="Logo" className="h-16 w-16 rounded-full" />
//             <span className="text-2xl font-bold text-gray-800">
//               <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-10">
//             {["Home", "Dishes", "Services", "Contact"].map((item, index) => (
//               <a key={index} href="#" className="relative inline-block text-neutral-950 text-[18px] hover:text-gray-900 after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full">
//                 {item}
//               </a>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2.5 items-center">
//             <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => openLogin("restaurant")}>
//               Book an Event
//             </button>
//             <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => openLogin("restaurant")}>
//               Book a Table
//             </button>

//             {/* Login Dropdown */}
//             <div className="relative">
//               <button onClick={() => setShowDropdown(!showDropdown)} className="bg-red-500 text-white px-1 py-1.5 rounded-lg hover:bg-red-600 flex items-center gap-1">
//                 Login <ChevronDown size={13} />
//               </button>

//               {showDropdown && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg">
//                   <button onClick={() => openLogin("admin")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                     Admin
//                   </button>
//                   <button onClick={() => openLogin("restaurant")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                     Restaurant
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
//             {["Home", "Dishes", "Services", "Contact"].map((item, index) => (
//               <a key={index} href="#" className="text-neutral-950 hover:text-gray-900">
//                 {item}
//               </a>
//             ))}
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => openLogin("restaurant")}>
//               Book an Event
//             </button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => openLogin("restaurant")}>
//               Book a Table
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Login & Signup Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80 z-200">
//             {isSignUp ? (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
//                     Sign Up
//                   </button>
//                 </form>
//                 <button onClick={() => setIsSignUp(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Already have an account? Log in
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
//                     Login
//                   </button>
//                 </form>
//                 <button onClick={openSignUp} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Don't have an account? Sign up
//                 </button>
//               </>
//             )}
//             <button onClick={() => setShowModal(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar main;
     



// import React, { useState } from "react";
// import { Menu, X, ChevronDown, User } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [loginType, setLoginType] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const openLogin = (type) => {
//     setLoginType(type);
//     setIsSignUp(false);
//     setShowModal(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignUp) {
//       setIsSignUp(false);
//     } else {
//       setShowModal(false);
//       setIsLoggedIn(true);
//       if (loginType === "admin") {
//         navigate("/admin-panel");
//       } else if (loginType === "restaurant") {
//         navigate("/restaurant-panel");
//       } else {
//         navigate("/user-panel");
//       }
//     }
//   };

//   const handleUserIconClick = () => {
//     navigate("/user-panel");
//   };

//   const navLinks = [
//     { name: "Home", id: "home" },
//     { name: "Dishes", id: "dishes" },
//     { name: "Services", id: "services" },
//     { name: "Contact", id: "contact" },
//   ];

//   const scrollToSection = (id) => {
//     const scrollTo = () => {
//       if (id === "home") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       } else {
//         const element = document.getElementById(id);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }
//     };

//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(scrollTo, 100); // wait for Home page to render
//     } else {
//       scrollTo();
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 to-white bg-opacity-10 backdrop-blur-lg">
//         <div className="mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
//             <img src="../Logo/logo11.png" alt="Logo" className="h-16 w-16 rounded-full" />
//             <span className="text-2xl font-bold text-gray-800">
//               <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-10">
//             {navLinks.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => scrollToSection(item.id)}
//                 className="cursor-pointer text-neutral-950 text-[18px] hover:text-gray-900 relative after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item.name}
//               </span>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2.5 items-center">
//             <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => navigate("/book-event")}>
//               Book an Event
//             </button>
//             <button className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => navigate("/book-table")}>
//               Book a Table
//             </button>

//             {/* User Icon or Login Dropdown */}
//             {isLoggedIn && loginType === null ? (
//               <div onClick={handleUserIconClick} className="cursor-pointer bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
//                 <User size={24} />
//               </div>
//             ) : (
//               <div className="relative">
//                 <button onClick={() => setShowDropdown(!showDropdown)} className="bg-red-500 text-white px-1 py-1.5 rounded-lg hover:bg-red-600 flex items-center gap-1">
//                   Login <ChevronDown size={13} />
//                 </button>

//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg z-50">
//                     <button onClick={() => openLogin("admin")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                       Admin
//                     </button>
//                     <button onClick={() => openLogin("restaurant")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                       Restaurant
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Mobile Menu Toggle */}
//             <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
//             {navLinks.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => {
//                   setIsOpen(false);
//                   scrollToSection(item.id);
//                 }}
//                 className="text-neutral-950 hover:text-gray-900 cursor-pointer"
//               >
//                 {item.name}
//               </span>
//             ))}
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => { setIsOpen(false); navigate("/book-event"); }}>
//               Book an Event
//             </button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => { setIsOpen(false); navigate("/book-table"); }}>
//               Book a Table
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Login & Signup Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             {isSignUp ? (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Sign Up</button>
//                 </form>
//                 <button onClick={() => setIsSignUp(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Already have an account? Log in
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Login</button>
//                 </form>
//                 <button onClick={() => setIsSignUp(true)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Don't have an account? Sign up
//                 </button>
//               </>
//             )}
//             <button onClick={() => setShowModal(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


// import React, { useState } from "react";
// import { Menu, X, ChevronDown, User } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [loginType, setLoginType] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const openLogin = (type) => {
//     setLoginType(type);
//     setIsSignUp(false);
//     setShowModal(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignUp) {
//       setIsSignUp(false);
//     } else {
//       setShowModal(false);
//       setIsLoggedIn(true);
//       if (loginType === "admin") {
//         navigate("/admin-panel");
//       } else if (loginType === "restaurant") {
//         navigate("/restaurant-panel");
//       } else {
//         navigate("/user-panel");
//       }
//     }
//   };

//   const handleUserIconClick = () => {
//     navigate("/user-panel");
//   };

//   const navLinks = [
//     { name: "Home", id: "home" },
//     { name: "Dishes", id: "dishes" },
//     { name: "Services", id: "services" },
//     { name: "Contact", id: "contact" },
//   ];

//   const scrollToSection = (id) => {
//     const scrollTo = () => {
//       const navbarHeight = 80; // Adjust this based on your actual navbar height
//       if (id === "home") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       } else {
//         const element = document.getElementById(id);
//         if (element) {
//           const offsetTop = element.getBoundingClientRect().top + window.scrollY;
//           window.scrollTo({
//             top: offsetTop - navbarHeight,
//             behavior: "smooth",
//           });
//         }
//       }
//     };

//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(scrollTo, 100);
//     } else {
//       scrollTo();
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 to-white bg-opacity-10 backdrop-blur-lg">
//         <div className="mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
//             <img src="../Logo/logo11.png" alt="Logo" className="h-16 w-16 rounded-full" />
//             <span className="text-2xl font-bold text-gray-800">
//               <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-10">
//             {navLinks.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => scrollToSection(item.id)}
//                 className="cursor-pointer text-neutral-950 text-[18px] hover:text-gray-900 relative after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item.name}
//               </span>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2.5 items-center">
//             <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 animate-pulse hover:animate-none">
//               Book an Event
//             </button>
//             <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none">
//               Book a Table
//             </button>

//             {/* User Icon or Login Dropdown */}
//             {isLoggedIn && loginType === null ? (
//               <div onClick={handleUserIconClick} className="cursor-pointer bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
//                 <User size={24} />
//               </div>
//             ) : (
//               <div className="relative">
//                 <button onClick={() => setShowDropdown(!showDropdown)} className="bg-red-500 text-white px-1 py-1.5 rounded-lg hover:bg-red-600 flex items-center gap-1">
//                   Login <ChevronDown size={13} />
//                 </button>

//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg z-50">
//                     <button onClick={() => openLogin("admin")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                       Admin
//                     </button>
//                     <button onClick={() => openLogin("restaurant")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                       Restaurant
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Mobile Menu Toggle */}
//             <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
//             {navLinks.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => {
//                   setIsOpen(false);
//                   scrollToSection(item.id);
//                 }}
//                 className="text-neutral-950 hover:text-gray-900 cursor-pointer"
//               >
//                 {item.name}
//               </span>
//             ))}
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => { setIsOpen(false); navigate("/book-event"); }}>
//               Book an Event
//             </button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onClick={() => { setIsOpen(false); navigate("/book-table"); }}>
//               Book a Table
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Login & Signup Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             {isSignUp ? (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Sign Up</button>
//                 </form>
//                 <button onClick={() => setIsSignUp(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Already have an account? Log in
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Login</button>
//                 </form>
//                 <button onClick={() => setIsSignUp(true)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Don't have an account? Sign up
//                 </button>
//               </>
//             )}
//             <button onClick={() => setShowModal(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;







// import React, { useState } from "react";
// import { Menu, X, ChevronDown, User } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Fingerprint,ChevronUp } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [loginType, setLoginType] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const openLogin = (type) => {
//     setLoginType(type);
//     setIsSignUp(false);
//     setShowModal(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignUp) {
//       setIsSignUp(false);
//     } else {
//       setShowModal(false);
//       setIsLoggedIn(true);
//       if (loginType === "admin") {
//         navigate("/admin-panel");
//       } else if (loginType === "restaurant") {
//         navigate("/restaurant-panel");
//       } else {
//         navigate("/user-panel");
//       }
//     }
//   };

//   const handleUserIconClick = () => {
//     navigate("/user-panel");
//   };

//   const navLinks = [
//     { name: "Home", id: "home" },
//     { name: "Dishes", id: "dishes" },
//     { name: "Services", id: "services" },
//     { name: "Contact", id: "contact" },
//   ];

//   const scrollToSection = (id) => {
//     const scrollTo = () => {
//       const navbarHeight = 80;
//       if (id === "home") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       } else {
//         const element = document.getElementById(id);
//         if (element) {
//           const offsetTop = element.getBoundingClientRect().top + window.scrollY;
//           window.scrollTo({
//             top: offsetTop - navbarHeight,
//             behavior: "smooth",
//           });
//         }
//       }
//     };

//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(scrollTo, 100);
//     } else {
//       scrollTo();
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 to-white bg-opacity-10 backdrop-blur-lg">
//         <div className="mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
//             <img src="../Logo/logo11.png" alt="Logo" className="h-16 w-16 rounded-full" />
//             <span className="text-2xl font-bold text-gray-800">
//               <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-10">
//             {navLinks.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => scrollToSection(item.id)}
//                 className="cursor-pointer text-neutral-950 text-[18px] hover:text-gray-900 relative after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item.name}
//               </span>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2.5 items-center">
//             <button
//               className="hidden md:block bg-red-500 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 animate-pulse hover:animate-none"
//               onClick={() => scrollToSection("book-event")}
//             >
//               Book an Event
//             </button>
//             <button
//               className="hidden md:block bg-red-500 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
//               onClick={() => scrollToSection("book-table")}
//             >
//               Book a Table
//             </button>

//             {/* User Icon or Login Dropdown */}
//             {isLoggedIn && loginType === null ? (
//               <div onClick={handleUserIconClick} className="cursor-pointer bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
//                 <User size={24} />
//               </div>
//             ) : (
//               <div className="relative">
//                <button
//   onClick={() => setShowDropdown(!showDropdown)}
//   className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 flex items-center gap-1"
// >
// <Fingerprint size={18}/>
// {showDropdown ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
// </button>
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg z-50">
//                     <button onClick={() => openLogin("admin")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                       Admin
//                     </button>
//                     <button onClick={() => openLogin("restaurant")} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">
//                       Restaurant
//                     </button>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Mobile Menu Toggle */}
//             <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
//             {navLinks.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => {
//                   setIsOpen(false);
//                   scrollToSection(item.id);
//                 }}
//                 className="text-neutral-950 hover:text-gray-900 cursor-pointer"
//               >
//                 {item.name}
//               </span>
//             ))}
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//               onClick={() => {
//                 setIsOpen(false);
//                 scrollToSection("book-event");
//               }}
//             >
//               Book an Event
//             </button>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//               onClick={() => {
//                 setIsOpen(false);
//                 scrollToSection("book-table");
//               }}
//             >
//               Book a Table
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Login & Signup Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             {isSignUp ? (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Sign Up</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Sign Up</button>
//                 </form>
//                 <button onClick={() => setIsSignUp(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Already have an account? Log in
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Login</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Login</button>
//                 </form>
//                 <button onClick={() => setIsSignUp(true)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Don't have an account? Sign up
//                 </button>
//               </>
//             )}
//             <button onClick={() => setShowModal(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { Menu, X, User } from "lucide-react";
// import { useLocation, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [isSignUp, setIsSignUp] = useState(false);
//   const [loginType, setLoginType] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const openLogin = (type) => {
//     setLoginType(type);
//     setIsSignUp(false);
//     setShowModal(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isSignUp) {
//       setIsSignUp(false);
//     } else {
//       setShowModal(false);
//       setIsLoggedIn(true);
//       if (loginType === "admin") {
//         navigate("/admin-panel");
//       } else if (loginType === "restaurant") {
//         navigate("/restaurant-panel");
//       } else {
//         navigate("/user-panel");
//       }
//     }
//   };

//   const navLinks = [
//     { name: "Home", id: "home" },
//     { name: "Dishes", id: "dishes" },
//     { name: "Services", id: "services" },
//     { name: "Contact", id: "contact" },
//   ];

//   const scrollToSection = (id) => {
//     const scrollTo = () => {
//       const navbarHeight = 80;
//       if (id === "home") {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       } else {
//         const element = document.getElementById(id);
//         if (element) {
//           const offsetTop = element.getBoundingClientRect().top + window.scrollY;
//           window.scrollTo({
//             top: offsetTop - navbarHeight,
//             behavior: "smooth",
//           });
//         }
//       }
//     };

//     if (location.pathname !== "/") {
//       navigate("/");
//       setTimeout(scrollTo, 100);
//     } else {
//       scrollTo();
//     }
//   };

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 to-white bg-opacity-10 backdrop-blur-lg">
//         <div className="mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
//             <img src="../Logo/logo11.png" alt="Logo" className="h-16 w-16 rounded-full" />
//             <span className="text-2xl font-bold text-gray-800">
//               <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex gap-10">
//             {navLinks.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => scrollToSection(item.id)}
//                 className="cursor-pointer text-neutral-950 text-[18px] hover:text-gray-900 relative after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {item.name}
//               </span>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2 items-center">
//             <button
//               className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-all"
//               onClick={() => scrollToSection("book-event")}
//             >
//               Book an Event
//             </button>
//             <button
//               className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-all"
//               onClick={() => scrollToSection("book-table")}
//             >
//               Book a Table
//             </button>

//             {/* Direct Login Buttons */}
//             {!isLoggedIn ? (
//               <div className="flex gap-2">
//                 <button onClick={() => openLogin("admin")} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600">Admin Login</button>
//                 <button onClick={() => openLogin("restaurant")} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600">Restaurant Login</button>
//                 <button onClick={() => openLogin("user")} className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600">User Login</button>
//               </div>
//             ) : (
//               <div className="cursor-pointer bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
//                 <User size={24} onClick={() => navigate("/user-panel")} />
//               </div>
//             )}

//             {/* Mobile Menu Toggle */}
//             <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
//             {navLinks.map((item, index) => (
//               <span
//                 key={index}
//                 onClick={() => {
//                   setIsOpen(false);
//                   scrollToSection(item.id);
//                 }}
//                 className="text-neutral-950 hover:text-gray-900 cursor-pointer"
//               >
//                 {item.name}
//               </span>
//             ))}
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//               onClick={() => {
//                 setIsOpen(false);
//                 scrollToSection("book-event");
//               }}
//             >
//               Book an Event
//             </button>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
//               onClick={() => {
//                 setIsOpen(false);
//                 scrollToSection("book-table");
//               }}
//             >
//               Book a Table
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* Login & Signup Modal */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             {isSignUp ? (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Sign Up as {loginType}</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="tel" placeholder="Phone Number (+91-)" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Sign Up</button>
//                 </form>
//                 <button onClick={() => setIsSignUp(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Already have an account? Log in
//                 </button>
//               </>
//             ) : (
//               <>
//                 <h2 className="text-lg font-bold mb-4">Login as {loginType}</h2>
//                 <form onSubmit={handleSubmit}>
//                   <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
//                   <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Login</button>
//                 </form>
//                 <button onClick={() => setIsSignUp(true)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//                   Don't have an account? Sign up
//                 </button>
//               </>
//             )}
//             <button onClick={() => setShowModal(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState(""); // NEW: for capturing email
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      setIsSignUp(false);
    } else {
      setShowModal(false);
      setIsLoggedIn(true);
      
      if (email.includes("@admin")) {
        navigate("/admin-panel");
      } else if (email.includes("@restaurant")) {
        navigate("/restaurant-panel");
      } else {
        navigate("/user-panel");
      }
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Dishes", id: "dishes" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const scrollTo = () => {
      const navbarHeight = 80;
      if (id === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollTo, 100);
    } else {
      scrollTo();
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md p-4 bg-gradient-to-b from-red-500 via-gray-100 to-white bg-opacity-10 backdrop-blur-lg">
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img src="../Logo/logo11.png" alt="Logo" className="h-16 w-16 rounded-full" />
            <span className="text-2xl font-bold text-gray-800">
              <span className="text-red-500">L</span>et's <span className="text-red-500">E</span>at
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((item, index) => (
              <span
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer text-neutral-950 text-[18px] hover:text-gray-900 relative after:block after:w-0 after:h-0.5 after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-2.5 items-center">
            <button
              className="hidden md:block bg-red-500 text-white px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 animate-pulse hover:animate-none"
              onClick={() => scrollToSection("book-event")}
            >
              Book an Event
            </button>
            <button
              className="hidden md:block bg-red-500 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
              onClick={() => scrollToSection("book-table")}
            >
              Book a Table
            </button>

            {/* Login Icon */}
            <div onClick={() => setShowModal(true)} className="cursor-pointer bg-red-500 text-white p-2 rounded-full hover:bg-red-600">
              <User size={24} />
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col bg-white shadow-md mt-2 p-4 space-y-4 text-center">
            {navLinks.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  scrollToSection(item.id);
                }}
                className="text-neutral-950 hover:text-gray-900 cursor-pointer"
              >
                {item.name}
              </span>
            ))}
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("book-event");
              }}
            >
              Book an Event
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("book-table");
              }}
            >
              Book a Table
            </button>
          </div>
        )}
      </nav>

      {/* Login & Signup Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            {isSignUp ? (
              <>
                <h2 className="text-lg font-bold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded mb-2" required />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                    required
                  />
                  <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
                  <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Sign Up
                  </button>
                </form>
                <button onClick={() => setIsSignUp(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
                  Already have an account? Log in
                </button>
              </>
            ) : (
              <>
                <h2 className="text-lg font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                    required
                  />
                  <input type="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded mb-2" required />
                  <button type="submit" className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">
                    Login
                  </button>
                </form>
                <button onClick={() => setIsSignUp(true)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
                  Don't have an account? Sign up
                </button>
              </>
            )}
            <button onClick={() => setShowModal(false)} className="mt-3 text-gray-600 hover:underline w-full text-center block">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
