
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
    { name: "Menu", id: "menu" },
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
            {/* <button
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
            </button> */}
            {/* Desktop Animated Buttons */}

  <button
    onClick={() => scrollToSection("book-event")}
    className="  hidden md:block relative overflow-hidden px-6 py-2 rounded-full border-4 border-white bg-red-500 text-white font-semibold transition-all duration-300 group"
  >
    <span className="absolute inset-0 bg-white transition-all duration-300 transform scale-y-0 origin-top group-hover:scale-y-85 z-0"></span>
    <span className="relative z-10 text-white group-hover:text-black">Book an Event</span>
  </button>
  <button
    onClick={() => scrollToSection("book-table")}
    className=" hidden md:block  relative overflow-hidden px-6 py-2 rounded-full  border-4 border-white bg-red-500  font-semibold transition-all duration-300 group"
  >
    <span className="absolute inset-0 bg-white  transition-all duration-300 transform scale-y-0 origin-top group-hover:scale-y-85 z-0"></span>
    <span className="relative z-10 text-white group-hover:text-black">Book a Table</span>
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
            {/* <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => {
                setIsOpen(false);
                scrollToSection("book-event");
              }}
            >
              Book an Event
            </button>
            <button
              className="   bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 "
              onClick={() => {
                setIsOpen(false);
                scrollToSection("book-table");
              }}
            >
              Book a Table
             
            </button> */}
            {/* Mobile Animated Buttons */}
<button
  className="relative overflow-hidden px-4 py-2 rounded-lg  bg-red-500 font-semibold transition-all duration-300 group"
  onClick={() => {
    setIsOpen(false);
    scrollToSection("book-event");
  }}
>
  <span className="absolute inset-0 bg-white transition-all duration-300 transform scale-y-0 origin-top group-hover:scale-y-80 z-0"></span>
  <span className="relative z-10 text-white group-hover:text-black">Book an Event</span>
</button>
<button
  className="relative overflow-hidden px-4 py-2 rounded-lg bg-red-500 font-semibold transition-all duration-300 group"
  onClick={() => {
    setIsOpen(false);
    scrollToSection("book-table");
  }}
>
  <span className="absolute inset-0 bg-white transition-all duration-300 transform scale-y-0 origin-top group-hover:scale-y-85 z-0"></span>
  <span className="relative z-10 text-white group-hover:text-black">Book a Table</span>
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
