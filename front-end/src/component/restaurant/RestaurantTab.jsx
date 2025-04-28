// import React, { useState } from 'react';



// const TableBookings = () => {
//   const [bookings, setBookings] = useState([
//     { id: 1, tableName: "Table 1", date: "2024-03-10", status: "Pending" },
//     { id: 2, tableName: "Table 2", date: "2024-04-05", status: "Confirmed" },
//   ]);

//   const updateStatus = (id, status) => {
//     setBookings((prevBookings) =>
//       prevBookings.map((booking) =>
//         booking.id === id ? { ...booking, status } : booking
//       )
//     );
//   };

//   return (
//     <>
//       <div className="p-6 h-screen">
//         <h2 className="text-2xl font-bold text-red-700 mb-4">Table Bookings</h2>
//         <table className="min-w-full border">
//           <thead className="bg-red-100">
//             <tr>
//               <th className="py-2 px-4">Table</th>
//               <th className="py-2 px-4">Date</th>
//               <th className="py-2 px-4">Status</th>
//               <th className="py-2 px-4">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {bookings.map((booking) => (
//               <tr key={booking.id}>
//                 <td className="py-2 px-4">{booking.tableName}</td>
//                 <td className="py-2 px-4">{booking.date}</td>
//                 <td className="py-2 px-4">{booking.status}</td>
//                 <td className="py-2 px-4">
//                   <button
//                     onClick={() => updateStatus(booking.id, "Confirmed")}
//                     className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//                   >
//                     Confirm
//                   </button>
//                   <button
//                     onClick={() => updateStatus(booking.id, "Cancelled")}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                   >
//                     Cancel
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default TableBookings;


import React, { useState } from 'react';

const branches = [
  "First Branch - Downtown Street 21",
  "Second Branch - Lakeview Road 12",
  "Third Branch - Sunset Avenue 7",
];

const TableBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      tableName: "Table 1",
      customerName: "John Doe",
      date: "2024-03-10",
      time: "18:00",
      branch: branches[0],
      status: "Pending",
      paymentStatus: "Pending",
    },
    {
      id: 2,
      tableName: "Table 2",
      customerName: "Jane Smith",
      date: "2024-04-05",
      time: "20:00",
      branch: branches[1],
      status: "Confirmed",
      paymentStatus: "Paid",
    },
  ]);

  const updateStatus = (id, status) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
  };

  const updatePaymentStatus = (id, status) => {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking.id === id ? { ...booking, paymentStatus: status } : booking
      )
    );
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-red-50 via-white to-red-100 mt-[-67px]">
      <h2 className="text-3xl font-bold text-red-700 mb-6">🍽️ Table Bookings</h2>

      <table className="w-full border bg-white rounded-xl overflow-hidden shadow-md">
        <thead className="bg-red-100 text-red-800">
          <tr>
            <th className="py-2 px-4">Table</th>
            <th className="py-2 px-4">Customer</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Time</th>
            <th className="py-2 px-4">Branch</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Payment</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.id} className="text-center hover:bg-red-50 transition">
              <td className="py-2 px-4">{booking.tableName}</td>
              <td className="py-2 px-4">{booking.customerName}</td>
              <td className="py-2 px-4">{booking.date}</td>
              <td className="py-2 px-4">{booking.time}</td>
              <td className="py-2 px-4">{booking.branch}</td>
              <td className="py-2 px-4">{booking.status}</td>
              <td className="py-2 px-4">
                <span
                  className={`px-2 py-1 rounded text-white text-sm ${
                    booking.paymentStatus === "Paid"
                      ? "bg-green-500"
                      : booking.paymentStatus === "Failed"
                      ? "bg-red-500"
                      : "bg-yellow-400 text-black"
                  }`}
                >
                  {booking.paymentStatus}
                </span>
              </td>
              <td className="py-2 px-4 space-y-1">
                <button
                  onClick={() => updateStatus(booking.id, "Confirmed")}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 w-full"
                >
                  Confirm
                </button>
                <button
                  onClick={() => updateStatus(booking.id, "Cancelled")}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 w-full"
                >
                  Cancel
                </button>
                <select
                  onChange={(e) => updatePaymentStatus(booking.id, e.target.value)}
                  value={booking.paymentStatus}
                  className="p-1 rounded border text-sm mt-1 w-full"
                >
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Failed">Failed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableBookings;
