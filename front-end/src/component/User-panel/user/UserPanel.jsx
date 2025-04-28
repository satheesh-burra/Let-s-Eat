// import React from "react";
// import UserNavbar from "./UserNavbar"; // Assuming UserNavbar is the correct import
// import Profile from "./Profile";
// import EventBookings from "./EventBookings";
// import TableBookings from "./TableBookings";

// const UserPanel = () => {
//   return (
//     <div>
//       <UserNavbar />
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h1>
//         <Profile />
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-2">Your Event Bookings</h2>
//           <EventBookings />
//         </div>
//         <div className="mt-8">
//           <h2 className="text-xl font-semibold mb-2">Your Table Bookings</h2>
//           <TableBookings />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPanel;
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import UserNavbar from "./UserNavbar";
import Profile from "./Profile";
import EventBookings from "./EventBookings";
import TableBookings from "./TableBookings";
import PreviousBookings from "./PreviousBookings";
import TrackBookings from "./TrackBookings";

const UserPanel = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 text-red-700">
      <UserNavbar />
      <div className="p-4 mt-24 max-w-5xl mx-auto">
        <h1
          className="text-3xl font-bold mb-6 text-center text-rose-600"
          data-aos="fade-up"
        >
          Welcome to Your Dashboard
        </h1>

        {/* Profile Section */}
        <div
          className="bg-white p-6 rounded-2xl shadow-lg"
          data-aos="fade-up"
        >
          <Profile />
        </div>

        {/* Current Event Bookings */}
        <div
          className="mt-10 bg-white p-6 rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Your Event Bookings
          </h2>
          <EventBookings />
        </div>

        {/* Current Table Bookings */}
        <div
          className="mt-10 bg-white p-6 rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Your Table Bookings
          </h2>
          <TableBookings />
        </div>

        {/* Previous Bookings */}
        <div
          className="mt-10 bg-white p-6 rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Previous Bookings
          </h2>
          <PreviousBookings />
        </div>

        {/* Booking Tracker */}
        <div
          className="mt-10 mb-16 bg-white p-6 rounded-2xl shadow-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Track Your Booking
          </h2>
          <TrackBookings />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
