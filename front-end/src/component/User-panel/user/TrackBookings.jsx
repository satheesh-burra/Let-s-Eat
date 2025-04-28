import React, { useState } from "react";

const TrackBookings = () => {
  const [trackingData, setTrackingData] = useState([
    { id: 1, description: "Event Booking on 2025-04-25", date: "2025-04-25T19:00:00", status: "Pending Confirmation" },
    { id: 2, description: "Table Booking on 2025-04-18", date: "2025-04-18T18:00:00", status: "Confirmed" },
  ]);

  const [refundMessages, setRefundMessages] = useState({});

  const handleCancel = (id) => {
    const confirmCancel = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmCancel) {
      const updatedData = trackingData.map((item) =>
        item.id === id ? { ...item, status: "Cancelled" } : item
      );
      setTrackingData(updatedData);
      setRefundMessages((prev) => ({
        ...prev,
        [id]: "Your booking has been cancelled. Refund will be processed within 5-7 business days.",
      }));
    }
  };

  const isCancelable = (bookingDate) => {
    const now = new Date();
    const eventDate = new Date(bookingDate);
    const diffInHours = (eventDate - now) / (1000 * 60 * 60);
    return diffInHours >= 24;
  };

  return (
    <ul className="space-y-4">
      {trackingData.map((item) => (
        <li
          key={item.id}
          className="border p-4 rounded-lg bg-pink-100 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center"
        >
          <div>
            <p className="font-medium">{item.description}</p>
            <p
              className={`font-semibold ${
                item.status === "Confirmed"
                  ? "text-green-600"
                  : item.status === "Cancelled"
                  ? "text-red-600"
                  : "text-yellow-600"
              }`}
            >
              {item.status}
            </p>
            {refundMessages[item.id] && (
              <p className="text-sm text-blue-600 mt-1">{refundMessages[item.id]}</p>
            )}
          </div>

          {item.status !== "Cancelled" && isCancelable(item.date) && (
            <button
              onClick={() => handleCancel(item.id)}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 text-sm w-fit"
            >
              Cancel Booking
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TrackBookings;
