import React, { useEffect, useState } from "react";

const EventBookings = () => {
  const [events, setEvents] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2); // initially show 2

  useEffect(() => {
    // Replace with actual API call
    const fakeData = [
      { id: 1, title: "Birthday Party", date: "2025-05-01", time: "7:00 PM" },
      { id: 2, title: "Anniversary", date: "2025-06-15", time: "6:00 PM" },
      { id: 3, title: "Corporate Meetup", date: "2025-07-10", time: "5:00 PM" },
      { id: 4, title: "Graduation Party", date: "2025-08-20", time: "8:00 PM" },
    ];
    setEvents(fakeData);
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisibleCount(2);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {events.length === 0 ? (
        <p>No event bookings found.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {events.slice(0, visibleCount).map((event) => (
              <li key={event.id} className="border-b pb-2">
                <p><strong>Event:</strong> {event.title}</p>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Time:</strong> {event.time}</p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-4">
            {visibleCount < events.length ? (
              <button
                onClick={handleSeeMore}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                See More
              </button>
            ) : events.length > 2 ? (
              <button
                onClick={handleShowLess}
                className="px-4 py-2 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition"
              >
                Show Less
              </button>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default EventBookings;
