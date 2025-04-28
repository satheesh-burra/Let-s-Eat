import { useState } from "react";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const tabs = [
  "Profile Management",
  "Event Hosting",
  "Booking Management",
  "Customer Chat",
  "Analytics Dashboard",
];

export default function RestaurantPanel() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col">
      <header className="bg-red-600 text-white p-4 text-xl font-bold">Restaurant Panel</header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-red-100 p-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-3 py-2 rounded hover:bg-red-200 ${
                activeTab === tab ? "bg-red-300 font-semibold" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 bg-gray-50">
          {activeTab === "Profile Management" && <ProfileManagement />}
          {activeTab === "Event Hosting" && <EventHosting />}
          {activeTab === "Booking Management" && <BookingManagement />}
          {activeTab === "Customer Chat" && <CustomerChat />}
          {activeTab === "Analytics Dashboard" && <AnalyticsDashboard />}
        </main>
      </div>
    </div>
  );
}

// ---- Components ----

const Card = ({ title, children }) => (
  <div className="bg-white rounded shadow p-6 mb-6">
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    {children}
  </div>
);

const ProfileManagement = () => (
  <Card title="Restaurant Profile Management">
    <form className="space-y-4">
      <input type="text" placeholder="Restaurant Name" className="w-full border p-2 rounded" />
      <textarea placeholder="Description" className="w-full border p-2 rounded" />
      <input type="text" placeholder="Operational Hours" className="w-full border p-2 rounded" />
      <input type="text" placeholder="Menu Link" className="w-full border p-2 rounded" />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
        Update Profile
      </button>
    </form>
  </Card>
);

const EventHosting = () => (
  <Card title="Event Hosting">
    <form className="space-y-4">
      <input type="text" placeholder="Event Title" className="w-full border p-2 rounded" />
      <textarea placeholder="Event Description" className="w-full border p-2 rounded" />
      <input type="date" className="w-full border p-2 rounded" />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
        Create Event
      </button>
    </form>
  </Card>
);

const BookingManagement = () => (
  <Card title="Booking Management">
    <table className="w-full border">
      <thead>
        <tr className="bg-red-100">
          <th className="border p-2">Customer</th>
          <th className="border p-2">Date</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">John Doe</td>
          <td className="border p-2">2025-04-01</td>
          <td className="border p-2">Pending</td>
          <td className="border p-2 space-x-2">
            <button className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>
            <button className="bg-red-500 text-white px-2 py-1 rounded">Decline</button>
          </td>
        </tr>
      </tbody>
    </table>
  </Card>
);

const CustomerChat = () => (
  <Card title="Customer Interaction - Live Chat">
    <div className="border rounded h-64 p-4 overflow-y-auto bg-gray-100">
      <p><strong>Customer:</strong> Hi, can I book a table for 4?</p>
      <p className="text-right"><strong>You:</strong> Sure! Please share your preferred time.</p>
      {/* More messages */}
    </div>
    <div className="flex mt-4">
      <input type="text" placeholder="Type a message..." className="flex-1 border p-2 rounded" />
      <button className="bg-red-600 text-white px-4 ml-2 rounded">Send</button>
    </div>
  </Card>
);

const AnalyticsDashboard = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Reservations",
        data: [30, 45, 60, 50],
        backgroundColor: "rgba(239, 68, 68, 0.7)",
      },
    ],
  };

  return (
    <Card title="Analytics Dashboard">
      <Bar data={data} />
    </Card>
  );
};
