import React, { useState } from "react";
import { FaUtensils, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // You can add session clearing logic here
    navigate("/"); // Redirect to home or login page
  };

  return (
    <nav className="fixed top-0 w-full bg-red-600 text-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-7">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 text-xl font-bold">
          <FaUtensils size={24} />
          Let's Eat Admin
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex gap-6 flex space-x-5 text-lg font-medium">
          
          <button onClick={() => navigate("/admin-panel")} className="hover:underline">Dashboard</button>
        <button onClick={() => navigate("/admin/users")} className="hover:underline">Users</button>
        <button onClick={() => navigate("/admin/restaurants")} className="hover:underline">Restaurants</button>
        <button onClick={() => navigate("/admin/events")} className="hover:underline">Events</button>
        <button onClick={() => navigate("/admin/reports")} className="hover:underline">Reports</button>
        </div>

        {/* Right: Admin Dropdown */}
        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center gap-2">
            <FaUserCircle size={24} />
            <span className="hidden md:inline-block">Admin</span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-md z-50">
              <button className="w-full px-4 py-2 hover:bg-gray-100 text-left">Profile</button>
              <button className="w-full px-4 py-2 hover:bg-gray-100 text-left">Settings</button>
              <button
                className="w-full px-4 py-2 text-red-600 hover:bg-gray-100 text-left"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
