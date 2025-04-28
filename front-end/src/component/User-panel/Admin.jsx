import { React,useState } from "react";
import {
  FaUsers,
  FaUtensils,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaFlag,
  FaChartBar,
} from "react-icons/fa";

const tabs = [
  { name: "Dashboard", icon: <FaChartBar /> },
  { name: "User & Restaurant Oversight", icon: <FaUsers /> },
  { name: "Issue Resolution & Support", icon: <FaExclamationTriangle /> },
  { name: "Event Monitoring", icon: <FaCalendarAlt /> },
  { name: "Report Management", icon: <FaFlag /> },
];

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-red-500 to-red-600 text-white p-5 shadow-lg">
        <div className="text-2xl font-bold mb-6 flex items-center">
          <FaUtensils className="mr-2" /> Let's Eat Admin
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`w-full flex items-center px-4 py-3 mb-2 rounded-xl text-left transition ${
              activeTab === tab.name ? "bg-white text-red-600 font-bold shadow-md" : "hover:bg-red-400"
            }`}
          >
            <span className="mr-3 text-lg">{tab.icon}</span>
            {tab.name}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-6 text-red-600">{activeTab}</h1>
        <div className="space-y-6">
          {activeTab === "Dashboard" && <Dashboard />}
          {activeTab === "User & Restaurant Oversight" && <UserRestaurantManagement />}
          {activeTab === "Issue Resolution & Support" && <IssueResolution />}
          {activeTab === "Event Monitoring" && <EventMonitoring />}
          {activeTab === "Report Management" && <ReportManagement />}
        </div>
      </main>
    </div>
  );
}

const Card = ({ title, children }) => (
  <div className="bg-white p-6 rounded-2xl shadow space-y-4">
    <h2 className="text-xl font-semibold text-red-600">{title}</h2>
    {children}
  </div>
);

const Dashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <DashboardCard title="Total Users" value="1,230" icon={<FaUsers />} />
    <DashboardCard title="Restaurants" value="85" icon={<FaUtensils />} />
    <DashboardCard title="Events This Month" value="42" icon={<FaCalendarAlt />} />
    <DashboardCard title="Open Issues" value="7" icon={<FaExclamationTriangle />} />
  </div>
);

const DashboardCard = ({ title, value, icon }) => (
  <div className="bg-white p-5 rounded-xl shadow-md flex items-center space-x-4">
    <div className="text-3xl text-red-500">{icon}</div>
    <div>
      <h3 className="text-sm text-gray-500 font-medium">{title}</h3>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

const UserRestaurantManagement = () => (
  <Card title="User & Restaurant Oversight">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-red-100">
          <th className="p-2 text-left">Type</th>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Status</th>
          <th className="p-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {["User", "Restaurant"].map((type, i) => (
          <tr key={i} className="border-b">
            <td className="p-2">{type}</td>
            <td className="p-2">{type === "User" ? "John Doe" : "Let's Eat"}</td>
            <td className="p-2">Active</td>
            <td className="p-2">
              <button className="bg-red-500 text-white px-3 py-1 rounded">Disable</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
);

const IssueResolution = () => (
  <Card title="Issue Resolution & Support">
    {["Booking not confirmed", "Payment failed", "Wrong order delivered"].map((issue, i) => (
      <div key={i} className="bg-gray-100 p-4 rounded flex justify-between items-center">
        <span><strong>Complaint:</strong> {issue}</span>
        <div className="space-x-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded">Resolve</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded">Dismiss</button>
        </div>
      </div>
    ))}
  </Card>
);

const EventMonitoring = () => (
  <Card title="Event Monitoring">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-red-100">
          <th className="p-2 text-left">Event</th>
          <th className="p-2 text-left">Restaurant</th>
          <th className="p-2 text-left">Date</th>
          <th className="p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {["Wine Night", "Birthday Bash", "Tasting Menu"].map((event, i) => (
          <tr key={i} className="border-b">
            <td className="p-2">{event}</td>
            <td className="p-2">Let's Eat</td>
            <td className="p-2">2025-04-0{i + 2}</td>
            <td className="p-2">Upcoming</td>
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
);

const ReportManagement = () => (
  <Card title="Report Management">
    {["JaneDoe99", "UserX12", "SpamRest"] .map((user, i) => (
      <div key={i} className="bg-gray-100 p-4 rounded flex justify-between items-center">
        <span><strong>Flagged:</strong> {user}</span>
        <div className="space-x-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded">Ignore</button>
          <button className="bg-red-500 text-white px-3 py-1 rounded">Take Action</button>
        </div>
      </div>
    ))}
  </Card>
);
