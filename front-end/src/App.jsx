
// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// // Import Navbars
// import Navbar from "./component/User-panel/Navbar";
// import UserNavbar from "./component/User-panel/User/UserNavbar";
// import AdminNavbar from "./component/Admin/AdminNavbar";
// import RestaurantNavbar from "./component/restaurant/RestaurantNavbar";

// // Import Pages
// import Home from "./component/User-panel/Home";
// import EventsMain from "./component/User-panel/EventBookigMain";
// import BookTableMain from "./component/User-panel/BookTableMain";
// import Footer from "./component/User-panel/Footer";
// import UserPanel from "./component/User-panel/User/UserPanel";

// import Dashboard from "./component/Admin/AdminDashboard";
// import AdminUserPage from "./component/admin/AdminUserPage";
// import Restaurants from "./component/admin/AdminRestaurant";
// import Reports from "./component/admin/AdminReport";
// import AdminEvents from "./component/admin/AdminEvent";

// import RestaurantDashboard from "./component/restaurant/RestaurantDash";
// import EventManagement from "./component/restaurant/EventMan";
// import TableBookings from "./component/restaurant/RestaurantTab";
// import RestaurantProfile from "./component/restaurant/RestaurantPro";

// import "aos/dist/aos.css";
// import "./App.css";

// // Layout component
// const Layout = ({ children }) => {
//   const location = useLocation();
//   const isAdmin = location.pathname.startsWith("/admin");
//   const isUserPanel = location.pathname.startsWith("/user-panel");
//   const isRestaurantPanel = location.pathname.startsWith("/restaurant");

//   return (
//     <div>
//       {isAdmin ? (
//         <AdminNavbar />
//       ) : isUserPanel ? (
//         <UserNavbar />
//       ) : isRestaurantPanel ? (
//         <RestaurantNavbar />
//       ) : (
//         <Navbar />
//       )}
//       <div className="mt-16">{children}</div>
//     </div>
//   );
// };

// // Main App
// function App() {
//   const [isOnline, setIsOnline] = useState(true);

//   useEffect(() => {
//     // Check initial status
//     setIsOnline(navigator.onLine);

//     // Listen to online/offline events
//     const handleOnline = () => setIsOnline(true);
//     const handleOffline = () => setIsOnline(false);

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     // Cleanup
//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   if (!isOnline) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen text-center">
//         <h1 className="text-4xl font-bold text-black mb-4">You are offline</h1>
//         <p className="text-lg">Please check your internet connection and try again.</p>
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/book-table" element={<BookTableMain />} />
//           <Route path="/book-event" element={<EventsMain />} />

//           {/* User Panel Routes */}
//           <Route path="/user-panel" element={<UserPanel />} />

//           {/* Restaurant Panel Routes */}
//           <Route path="/restaurant-panel" element={<RestaurantDashboard />} />
//           <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
//           <Route path="/restaurant/events" element={<EventManagement />} />
//           <Route path="/restaurant/table-bookings" element={<TableBookings />} />
//           <Route path="/restaurant/profile" element={<RestaurantProfile />} />

//           {/* Admin Panel Routes */}
//           <Route path="/admin-panel" element={<Dashboard />} />
//           <Route path="/admin/users" element={<AdminUserPage />} />
//           <Route path="/admin/restaurants" element={<Restaurants />} />
//           <Route path="/admin/reports" element={<Reports />} />
//           <Route path="/admin/events" element={<AdminEvents />} />
//         </Routes>
//       </Layout>
//       <Footer />
//     </Router>
//   );
// }

// export default App;



import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Import Navbars
import Navbar from "./component/User-panel/Navbar";
import UserNavbar from "./component/User-panel/User/UserNavbar";
import AdminNavbar from "./component/Admin/AdminNavbar";
import RestaurantNavbar from "./component/restaurant/RestaurantNavbar";

// Import Pages
import Home from "./component/User-panel/Home";
import EventsMain from "./component/User-panel/EventBookigMain";
import BookTableMain from "./component/User-panel/BookTableMain";
import Footer from "./component/User-panel/Footer";
import UserPanel from "./component/User-panel/User/UserPanel";

import Dashboard from "./component/Admin/AdminDashboard";
import AdminUserPage from "./component/admin/AdminUserPage";
import Restaurants from "./component/admin/AdminRestaurant";
import Reports from "./component/admin/AdminReport";
import AdminEvents from "./component/admin/AdminEvent";

import RestaurantDashboard from "./component/restaurant/RestaurantDash";
import EventManagement from "./component/restaurant/EventMan";
import TableBookings from "./component/restaurant/RestaurantTab";
import RestaurantProfile from "./component/restaurant/RestaurantPro";

import "aos/dist/aos.css";
import "./App.css";

// Layout component
const Layout = ({ children }) => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  // const isUserPanel = location.pathname.startsWith("/user-panel");
  const isRestaurantPanel = location.pathname.startsWith("/restaurant");
    

  const isUserPanel = ["/user-panel", "/book-event", "/book-table"].some(path => location.pathname.startsWith(path));

  const getNavbar = () => {
    if (isAdmin) return <AdminNavbar />;
    if (isUserPanel) return <UserNavbar />;
    if (isRestaurantPanel) return <RestaurantNavbar />;
    return <Navbar />;
  };

  return (
    <div>
      {getNavbar()}
      <div className="mt-16">{children}</div> {/* Dynamic margin-top */}
    </div>
  );
};

// Main App
function App() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    // Check initial status
    setIsOnline(navigator.onLine);

    // Listen to online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-black mb-4">You are offline</h1>
        <p className="text-lg">Please check your internet connection and try again.</p>
      </div>
    );
  }

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/book-table" element={<BookTableMain />} />
          <Route path="/book-event" element={<EventsMain />} />

          {/* User Panel Routes */}
          <Route path="/user-panel" element={<UserPanel />} />

          {/* Restaurant Panel Routes */}
          <Route path="/restaurant-panel" element={<RestaurantDashboard />} />
          <Route path="/restaurant/dashboard" element={<RestaurantDashboard />} />
          <Route path="/restaurant/events" element={<EventManagement />} />
          <Route path="/restaurant/table-bookings" element={<TableBookings />} />
          <Route path="/restaurant/profile" element={<RestaurantProfile />} />

          {/* Admin Panel Routes */}
          <Route path="/admin-panel" element={<Dashboard />} />
          <Route path="/admin/users" element={<AdminUserPage />} />
          <Route path="/admin/restaurants" element={<Restaurants />} />
          <Route path="/admin/reports" element={<Reports />} />
          <Route path="/admin/events" element={<AdminEvents />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;

