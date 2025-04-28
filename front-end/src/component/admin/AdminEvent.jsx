import React from 'react';
import AdminNavbar from './AdminNavbar';

const events = [
  {
    id: 1,
    name: "Spring Feast",
    date: "2024-03-10",
    time: "6:00 PM",
    location: "Let's Eat Hall A",
    description: "A delicious spring-themed event.",
  },
  {
    id: 2,
    name: "Foodie Friday",
    date: new Date().toISOString().split('T')[0], // Today
    time: "7:00 PM",
    location: "Urban Bites Rooftop",
    description: "Weekly gathering for food lovers.",
  },
  {
    id: 3,
    name: "Summer Sizzler",
    date: "2025-06-20",
    time: "5:00 PM",
    location: "Spicy Spoon Banquet",
    description: "Hot and spicy delights under the sun.",
  },
];

const AdminEvents = () => {
  const today = new Date().toDateString();

  const categorizeEvents = () => {
    const previous = [], ongoing = [], upcoming = [];
    events.forEach(event => {
      const eventDate = new Date(event.date).toDateString();
      if (eventDate < today) previous.push(event);
      else if (eventDate === today) ongoing.push(event);
      else upcoming.push(event);
    });
    return { previous, ongoing, upcoming };
  };

  const { previous, ongoing, upcoming } = categorizeEvents();

  const renderEvents = (list, bgColor, textColor, borderColor) =>
    list.map((event, idx) => (
      <div
        key={event.id}
        className={`mb-6 p-6 text-left bg-${bgColor}-500 text-${textColor}-100 rounded-lg shadow-lg border-l-8 border-${borderColor}-400`}
      >
        <h4 className={`font-bold text-2xl`}>{event.name}</h4>
        <p className="text-sm"><span className="font-semibold">Date:</span> {event.date}</p>
        <p className="text-sm"><span className="font-semibold">Time:</span> {event.time}</p>
        <p className="text-sm"><span className="font-semibold">Location:</span> {event.location}</p>
        <p className="text-sm"><span className="font-semibold">Description:</span> {event.description}</p>
      </div>
    ));

  return (
    <>
      <AdminNavbar />
      <div className="p-6 space-y-8 bg-red-100 min-h-screen">
        <h2 className="text-4xl font-bold text-red-700 mb-6">Admin Events</h2>

        {/* Ongoing Events */}
        <div>
          <h3 className="text-3xl font-semibold text-pink-600 mb-4">🟠 Ongoing Events</h3>
          {ongoing.length > 0 ? renderEvents(ongoing, 'yellow', 'gray', 'yellow') : (
            <p className="text-gray-600">No ongoing events.</p>
          )}
        </div>

        {/* Upcoming Events */}
        <div>
          <h3 className="text-3xl font-semibold text-green-600 mb-4">🟢 Upcoming Events</h3>
          {upcoming.length > 0 ? renderEvents(upcoming, 'green', 'white', 'green') : (
            <p className="text-gray-600">No upcoming events.</p>
          )}
        </div>

        {/* Previous Events */}
        <div>
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">🔵 Previous Events</h3>
          {previous.length > 0 ? renderEvents(previous, 'purple', 'white', 'purple') : (
            <p className="text-gray-600">No previous events.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminEvents;
