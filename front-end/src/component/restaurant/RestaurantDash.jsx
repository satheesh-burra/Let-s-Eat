// import React, { useState, useEffect } from 'react';



// const RestaurantDashboard = () => {
//   const [bookingStats, setBookingStats] = useState({ totalBookings: 0, upcomingBookings: 0, revenue: 0 });
//   const [eventsStats, setEventsStats] = useState({ upcomingEvents: 0, pastEvents: 0 });

//   // Mock data for dashboard stats
//   useEffect(() => {
//     setBookingStats({ totalBookings: 120, upcomingBookings: 30, revenue: 5000 });
//     setEventsStats({ upcomingEvents: 10, pastEvents: 50 });
//   }, []);

//   return (
//     <>
//       <div className="p-6 h-screen">
//         <h2 className="text-2xl font-bold text-red-700 mb-4">Restaurant Dashboard</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <div className="bg-pink-100 p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">Total Bookings</h3>
//             <p>{bookingStats.totalBookings} Bookings</p>
//           </div>
//           <div className="bg-green-100 p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">Upcoming Bookings</h3>
//             <p>{bookingStats.upcomingBookings} Bookings</p>
//           </div>
//           <div className="bg-yellow-100 p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">Total Revenue</h3>
//             <p>${bookingStats.revenue}</p>
//           </div>
//         </div>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div className="bg-blue-100 p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">Upcoming Events</h3>
//             <p>{eventsStats.upcomingEvents} Events</p>
//           </div>
//           <div className="bg-purple-100 p-4 rounded shadow">
//             <h3 className="text-xl font-semibold">Past Events</h3>
//             <p>{eventsStats.pastEvents} Events</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RestaurantDashboard;


// import React, { useState, useEffect } from "react";
// import {
//   CalendarDays,
//   DollarSign,
//   Clock,
//   Users,
//   Star,
//   Activity,
// } from "lucide-react";

// const RestaurantDashboard = () => {
//   const [bookingStats, setBookingStats] = useState({
//     totalBookings: 0,
//     upcomingBookings: 0,
//     revenue: 0,
//   });

//   const [eventsStats, setEventsStats] = useState({
//     upcomingEvents: 0,
//     pastEvents: 0,
//   });

//   useEffect(() => {
//     setBookingStats({ totalBookings: 120, upcomingBookings: 30, revenue: 5000 });
//     setEventsStats({ upcomingEvents: 10, pastEvents: 50 });
//   }, []);

//   const cards = [
//     {
//       title: "Total Bookings",
//       value: `${bookingStats.totalBookings}`,
//       icon: <Users className="w-6 h-6 text-white" />,
//       bg: "from-pink-500 to-red-400",
//     },
//     {
//       title: "Upcoming Bookings",
//       value: `${bookingStats.upcomingBookings}`,
//       icon: <Clock className="w-6 h-6 text-white" />,
//       bg: "from-green-400 to-teal-300",
//     },
//     {
//       title: "Total Revenue",
//       value: `$${bookingStats.revenue}`,
//       icon: <DollarSign className="w-6 h-6 text-white" />,
//       bg: "from-yellow-400 to-orange-300",
//     },
//     {
//       title: "Upcoming Events",
//       value: `${eventsStats.upcomingEvents}`,
//       icon: <CalendarDays className="w-6 h-6 text-white" />,
//       bg: "from-blue-400 to-indigo-300",
//     },
//     {
//       title: "Past Events",
//       value: `${eventsStats.pastEvents}`,
//       icon: <Star className="w-6 h-6 text-white" />,
//       bg: "from-purple-500 to-pink-400",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50 p-6">
//       <h2 className="text-3xl font-bold text-red-700 mb-8 text-center drop-shadow">
//         🍽️ Restaurant Dashboard
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`bg-gradient-to-r ${card.bg} text-white p-6 rounded-2xl shadow-xl transform transition hover:scale-105 hover:shadow-2xl`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-semibold">{card.title}</h3>
//                 <p className="text-3xl font-bold mt-2">{card.value}</p>
//               </div>
//               <div className="bg-white bg-opacity-20 p-3 rounded-full shadow-inner">
//                 {card.icon}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 text-center text-gray-600 text-sm italic">
//         Keep track of your bookings and events to maximize your restaurant’s success!
//       </div>
//     </div>
//   );
// };

// export default RestaurantDashboard;



// import React, { useState, useEffect } from "react";
// import {
//   CalendarDays,
//   DollarSign,
//   Clock,
//   Users,
//   Star,
// } from "lucide-react";

// const RestaurantDashboard = () => {
//   const [bookingStats, setBookingStats] = useState({
//     totalBookings: 0,
//     upcomingBookings: 0,
//     revenue: 0,
//   });

//   const [eventsStats, setEventsStats] = useState({
//     upcomingEvents: 0,
//     pastEvents: 0,
//   });

//   useEffect(() => {
//     setBookingStats({ totalBookings: 120, upcomingBookings: 30, revenue: 5000 });
//     setEventsStats({ upcomingEvents: 10, pastEvents: 50 });
//   }, []);

//   const cards = [
//     {
//       title: "Total Bookings",
//       value: `${bookingStats.totalBookings}`,
//       icon: <Users className="w-6 h-6 text-white" />,
//       color: "bg-gradient-to-r from-pink-500 to-red-400",
//     },
//     {
//       title: "Upcoming Bookings",
//       value: `${bookingStats.upcomingBookings}`,
//       icon: <Clock className="w-6 h-6 text-white" />,
//       color: "bg-gradient-to-r from-green-400 to-emerald-300",
//     },
//     {
//       title: "Total Revenue",
//       value: `$${bookingStats.revenue}`,
//       icon: <DollarSign className="w-6 h-6 text-white" />,
//       color: "bg-gradient-to-r from-yellow-400 to-orange-300",
//     },
//     {
//       title: "Upcoming Events",
//       value: `${eventsStats.upcomingEvents}`,
//       icon: <CalendarDays className="w-6 h-6 text-white" />,
//       color: "bg-gradient-to-r from-blue-400 to-sky-300",
//     },
//     {
//       title: "Past Events",
//       value: `${eventsStats.pastEvents}`,
//       icon: <Star className="w-6 h-6 text-white" />,
//       color: "bg-gradient-to-r from-purple-500 to-fuchsia-400", 
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-500 via-white to-yellow-800 p-8 mt-[-67px]">
//       <h2 className="text-4xl font-bold text-center text-red-700 mb-10 drop-shadow-lg">
//         🍽️ Restaurant Dashboard
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`rounded-2xl shadow-2xl p-6 text-white transform transition hover:scale-105 hover:shadow-2xl ${card.color}`}
//           >
//             <div className="flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-medium">{card.title}</h3>
//                 <p className="text-3xl font-bold mt-2">{card.value}</p>
//               </div>
//               <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
//                 {card.icon}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-12 text-center text-gray-700 italic">
//         💡 Keep your restaurant thriving with real-time insights and updates!
//       </div>
//     </div>
//   );
// };

// export default RestaurantDashboard;



import React, { useState, useEffect } from "react";
import {
  CalendarDays,
  DollarSign,
  Clock,
  Users,
  Star,
} from "lucide-react";
import { Loader2, UtensilsCrossed } from "lucide-react"; // 🍽️ Restaurant icon + Loading spinner

const RestaurantDashboard = () => {
  const [bookingStats, setBookingStats] = useState({
    totalBookings: 0,
    upcomingBookings: 0,
    revenue: 0,
  });

  const [eventsStats, setEventsStats] = useState({
    upcomingEvents: 0,
    pastEvents: 0,
  });

  const [loading, setLoading] = useState(true); // NEW: loading state

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setBookingStats({ totalBookings: 120, upcomingBookings: 30, revenue: 5000 });
      setEventsStats({ upcomingEvents: 10, pastEvents: 50 });
      setLoading(false); // After loading, show dashboard
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      title: "Total Bookings",
      value: `${bookingStats.totalBookings}`,
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-pink-500 to-red-400",
    },
    {
      title: "Upcoming Bookings",
      value: `${bookingStats.upcomingBookings}`,
      icon: <Clock className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-green-400 to-emerald-300",
    },
    {
      title: "Total Revenue",
      value: `$${bookingStats.revenue}`,
      icon: <DollarSign className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-yellow-400 to-orange-300",
    },
    {
      title: "Upcoming Events",
      value: `${eventsStats.upcomingEvents}`,
      icon: <CalendarDays className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-blue-400 to-sky-300",
    },
    {
      title: "Past Events",
      value: `${eventsStats.pastEvents}`,
      icon: <Star className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-purple-500 to-fuchsia-400",
    },
  ];

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-red-500 via-white to-yellow-800">
        <div className="animate-bounce mb-4">
          <UtensilsCrossed className="h-20 w-20 text-red-600" />
        </div>
        <p className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          Loading
          <Loader2 className="animate-spin h-6 w-6 text-red-500" />
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-white to-yellow-800 p-8 mt-[-67px]">
      <h2 className="text-4xl font-bold text-center text-red-700 mb-10 drop-shadow-lg">
        🍽️ Restaurant Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-2xl p-6 text-white transform transition hover:scale-105 hover:shadow-2xl ${card.color}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{card.title}</h3>
                <p className="text-3xl font-bold mt-2">{card.value}</p>
              </div>
              <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-700 italic">
        💡 Keep your restaurant thriving with real-time insights and updates!
      </div>
    </div>
  );
};

export default RestaurantDashboard;

