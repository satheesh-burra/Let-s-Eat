import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session or token here
    // Then redirect to home or login
    localStorage.removeItem("token"); // example
    navigate("/");
  };

  return (
    <nav className="bg-red-600 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-7 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/user-panel">Let's Eat | User Panel</Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/user-panel" className="hover:text-gray-200">Dashboard</Link>
          </li>
          <li>
            <Link to="/book-event" className="hover:text-gray-200">Book Event</Link>
          </li>
          <li>
            <Link to="/book-table" className="hover:text-gray-200">Book Table</Link>
          </li>
          <li>
            <button onClick={handleLogout} className="hover:text-gray-200">Logout</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserNavbar;
