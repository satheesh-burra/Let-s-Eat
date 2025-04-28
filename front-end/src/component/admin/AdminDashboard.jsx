import React from 'react';
import { FaUsers, FaUtensils, FaCalendarAlt, FaFlag } from 'react-icons/fa';
import AdminNavbar from './AdminNavbar';

const Dashboard = () => {
  return (
    <>
      <AdminNavbar />
      <div className="p-6 h-screen">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card: Users */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Users</h3>
              <p className="text-2xl font-bold">1200</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FaUsers className="text-red-500 text-3xl" />
            </div>
          </div>

          {/* Card: Restaurants */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Restaurants</h3>
              <p className="text-2xl font-bold">58</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FaUtensils className="text-red-500 text-3xl" />
            </div>
          </div>

          {/* Card: Events */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Events</h3>
              <p className="text-2xl font-bold">35</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FaCalendarAlt className="text-red-500 text-3xl" />
            </div>
          </div>

          {/* Card: Reports */}
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold">Flagged Reports</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <FaFlag className="text-red-500 text-3xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
