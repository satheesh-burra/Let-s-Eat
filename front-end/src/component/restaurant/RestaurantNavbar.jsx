// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory

// const RestaurantNavbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Replace with your logout logic
//     console.log("User logged out");
//     navigate("/"); // Redirect after logout
//   };

//   return (
//     <nav className="bg-red-600 text-white p-4 shadow-md py-6">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <h1 className="text-2xl font-bold">Restaurant Panel</h1>
//           <ul className="flex space-x-6">
//             <li>
//               <Link to="/restaurant/dashboard" className="hover:text-pink-300">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="/restaurant/events" className="hover:text-pink-300">Events</Link>
//             </li>
//             <li>
//               <Link to="/restaurant/table-bookings" className="hover:text-pink-300">Table Bookings</Link>
//             </li>
//             <li>
//               <Link to="/restaurant/profile" className="hover:text-pink-300">Profile</Link>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <button
//             onClick={handleLogout}
//             className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md"
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default RestaurantNavbar;



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RestaurantNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/"); 
  };

  return (
    <nav className="bg-red-600 text-white px-6 py-4 shadow-md h-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold whitespace-nowrap">Restaurant Panel</h1>
        {/* Left Section: Logo + Links */}
        <div className="flex items-center space-x-10">
         

          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link to="/restaurant/dashboard" className="hover:text-pink-300 transition">Dashboard</Link>
            </li>
            <li>
              <Link to="/restaurant/events" className="hover:text-pink-300 transition">Events</Link>
            </li>
            <li>
              <Link to="/restaurant/table-bookings" className="hover:text-pink-300 transition">Table Bookings</Link>
            </li>
            <li>
              <Link to="/restaurant/profile" className="hover:text-pink-300 transition">Profile</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Logout Button */}
        <div>
          <button
            onClick={handleLogout}
            className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-5 rounded-md transition"
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default RestaurantNavbar;

