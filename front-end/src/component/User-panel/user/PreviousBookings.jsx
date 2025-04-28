import React, { useState } from "react";

const PreviousBookings = () => {
  // Dummy data - replace with props or backend data
  const bookings = [
    { id: 1, type: "Event", date: "2024-12-20", status: "Completed" },
    { id: 2, type: "Table", date: "2025-01-15", status: "Completed" },
    { id: 3, type: "Event", date: "2024-11-10", status: "Completed" },
    { id: 4, type: "Table", date: "2024-10-05", status: "Completed" },
    { id: 5, type: "Event", date: "2024-09-20", status: "Completed" },
    { id: 6, type: "Table", date: "2024-08-25", status: "Completed" },
  ];

  const initialCount = 3;
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleShowLess = () => {
    setVisibleCount(initialCount);
  };

  return (
    <div>
      <ul className="space-y-2">
        {bookings.slice(0, visibleCount).map((booking) => (
          <li key={booking.id} className="border p-3 rounded-lg bg-pink-100">
            <span className="font-medium">{booking.type} Booking</span> on{" "}
            {booking.date} –{" "}
            <span className="text-green-700">{booking.status}</span>
          </li>
        ))}
      </ul>

      <div className="text-center mt-4">
        {visibleCount < bookings.length ? (
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            See More
          </button>
        ) : bookings.length > initialCount ? (
          <button
            onClick={handleShowLess}
            className="px-4 py-2 bg-rose-400 text-white rounded-full hover:bg-rose-500 transition"
          >
            Show Less
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default PreviousBookings;
