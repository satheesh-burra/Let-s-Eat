import React, { useEffect, useState } from "react";

const TableBookings = () => {
  const [tables, setTables] = useState([]);
  const [visibleCount, setVisibleCount] = useState(2); // Show 2 initially

  useEffect(() => {
    // Replace with real API call
    const fakeData = [
      { id: 1, restaurant: "Spice Villa", date: "2025-04-20", time: "8:00 PM" },
      { id: 2, restaurant: "Ocean Breeze", date: "2025-05-10", time: "6:30 PM" },
      { id: 3, restaurant: "Sunset Dine", date: "2025-06-05", time: "7:00 PM" },
      { id: 4, restaurant: "Fire & Ice", date: "2025-07-01", time: "9:00 PM" },
    ];
    setTables(fakeData);
  }, []);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleShowLess = () => {
    setVisibleCount(2);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {tables.length === 0 ? (
        <p>No table bookings found.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {tables.slice(0, visibleCount).map((table) => (
              <li key={table.id} className="border-b pb-2">
                <p><strong>Restaurant:</strong> {table.restaurant}</p>
                <p><strong>Date:</strong> {table.date}</p>
                <p><strong>Time:</strong> {table.time}</p>
              </li>
            ))}
          </ul>

          <div className="text-center mt-4">
            {visibleCount < tables.length ? (
              <button
                onClick={handleSeeMore}
                className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                See More
              </button>
            ) : tables.length > 2 ? (
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

export default TableBookings;
