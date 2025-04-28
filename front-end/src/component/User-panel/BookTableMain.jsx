
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css"; // Optional for default styling or you can customize

// const branches = [
//   {
//     city: "Hyderabad",
//     address: "Plot 12, Madhapur, Hyderabad, TS",
//     image: "https://img.freepik.com/premium-photo/restaurant-with-orange-chairs-red-tablecloth_946039-9181.jpg?ga=GA1.1.607992959.1707129454&semt=ais_hybrid&w=740",
//     mapLink: "https://www.google.com/maps?q=Plot+12,+Madhapur,+Hyderabad"
//   },
//   {
//     city: "Bengaluru",
//     address: "88 MG Road, Bengaluru, KA",
//     image: "https://img.freepik.com/premium-photo/symphony-culinary-art-restaurant_960396-74081.jpg?ga=GA1.1.607992959.1707129454&semt=ais_hybrid&w=740",
//     mapLink: "https://www.google.com/maps?q=88+MG+Road,+Bengaluru"
//   },
//   {
//     city: "Chennai",
//     address: "45 North Usman Rd, T. Nagar, Chennai, TN",
//     image: "https://img.freepik.com/premium-photo/3d-rendering-loft-luxury-hotel-reception-cafe-lounge-restaurant_105762-1204.jpg?w=900",
//     mapLink: "https://www.google.com/maps?q=45+North+Usman+Rd,+T.+Nagar,+Chennai"
//   }
// ];


// const seatOptions = [2, 3, 4, 5, 6];

// const BookTableMain = () => {
//   const [selectedBranch, setSelectedBranch] = useState(null);
//   const [seats, setSeats] = useState("");
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     phone: "",
//   });
//   const [errors, setErrors] = useState({
//     seats: "",
//     date: "",
//     time: "",
//     phone: "",
//   });

//   const handleBookClick = (branch) => {
//     setSelectedBranch(branch);
//   };

//   const handleBookingSubmit = () => {
//     let isValid = true;
//     const newErrors = { ...errors };

//     // Validate inputs before submitting
//     if (!seats) {
//       newErrors.seats = "Please select the number of seats.";
//       isValid = false;
//     } else {
//       newErrors.seats = ""; // Clear error once valid input is given
//     }

//     if (!formData.date) {
//       newErrors.date = "Please select a valid date.";
//       isValid = false;
//     } else {
//       newErrors.date = ""; // Clear error once valid input is given
//     }

//     if (!formData.time) {
//       newErrors.time = "Please select a valid time.";
//       isValid = false;
//     } else {
//       newErrors.time = ""; // Clear error once valid input is given
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!formData.phone || !phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid phone number (10 digits).";
//       isValid = false;
//     } else {
//       newErrors.phone = ""; // Clear error once valid input is given
//     }

//     // Check if the selected date and time are not in the past
//     const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
//     const currentDateTime = new Date();

//     if (selectedDateTime < currentDateTime) {
//       newErrors.date = "The selected date and time cannot be in the past.";
//       newErrors.time = "The selected date and time cannot be in the past.";
//       isValid = false;
//     }

//     setErrors(newErrors);

//     if (isValid) {
//       alert(
//         `✅ Table for ${seats} people booked at ${selectedBranch.name} on ${formData.date} at ${formData.time}. Confirmation sent to ${formData.phone}`
//       );
//       setSelectedBranch(null);
//       setSeats("");
//       setFormData({ date: "", time: "", phone: "" });
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     // After the user corrects the input, clear the error for that specific field
//     if (name === "seats" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         seats: "", // Clear error
//       }));
//     }
//     if (name === "date" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         date: "", // Clear error
//       }));
//     }
//     if (name === "time" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         time: "", // Clear error
//       }));
//     }
//     if (name === "phone" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         phone: "", // Clear error
//       }));
//     }
//   };

//   return (
//     <div className="w-full mx-auto h-screen px-30 rounded bg-pink-100 text-red-500 pt-3">
//       <div className="mt-[30px]">
//         <h1 className="text-4xl font-bold text-red-600 text-center mb-10">Book a Table</h1>
//       </div>
//       {!selectedBranch ? (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {branches.map((branch) => (
//             <div
//               key={branch.id}
//               className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//             >
//               <img src={branch.image} alt={branch.name} className="w-full h-48 object-cover" />
//               <div className="p-4 text-center">
//                 <h2 className="text-xl font-semibold text-red-500 mb-1">{branch.city}</h2>
//                 <p className="text-gray-600 mb-4">{branch.address}</p>
//                 <button
//                   onClick={() => handleBookClick(branch)}
//                   className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                 >
//                   Book Table
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl mx-auto text-black">
//           <h2 className="text-xl font-semibold mb-4 text-center">
//             Booking at {selectedBranch.name}
//           </h2>

//           <div className="space-y-4">
//             <div>
//               <label className="block mb-1 font-medium">Number of Seats</label>
//               <select
//                 name="seats"
//                 value={seats}
//                 onChange={(e) => {
//                   setSeats(e.target.value);
//                   // Clear error on valid input
//                   if (e.target.value) {
//                     setErrors((prevErrors) => ({
//                       ...prevErrors,
//                       seats: "", // Clear error
//                     }));
//                   }
//                 }}
//                 className="w-full border p-2 rounded"
//               >
//                 <option value="">-- Select Seats --</option>
//                 {seatOptions.map((seat) => (
//                   <option key={seat} value={seat}>
//                     {seat} Seats
//                   </option>
//                 ))}
//               </select>
//               {errors.seats && <p className="text-red-500 text-sm">{errors.seats}</p>}
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Select Date</label>
//               <DatePicker
//                 selected={formData.date}
//                 onChange={(date) => setFormData({ ...formData, date })}
//                 minDate={new Date()} // Prevents past date selection
//                 dateFormat="dd/MM/yyyy" // Custom format: day/month/year
//                 className="w-full border p-2 rounded"
//               />
//               {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Select Time</label>
//               <input
//                 type="time"
//                 name="time"
//                 className="w-full border p-2 rounded"
//                 value={formData.time}
//                 onChange={handleChange}
//               />
//               {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
//             </div>

//             <div>
//               <label className="block mb-1 font-medium">Mobile Number</label>
//               <input
//                 type="tel"
//                 name="phone"
//                 className="w-full border p-2 rounded"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//               {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
//             </div>

//             <div className="flex justify-between">
//               <button
//                 className="bg-gray-300 px-4 py-2 rounded"
//                 onClick={() => setSelectedBranch(null)}
//               >
//                 Back
//               </button>
//               <button
//                 onClick={handleBookingSubmit}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//               >
//                 Confirm Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookTableMain;



import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const branches = [
  {
    city: 'Hyderabad',
    address: 'Plot 12, Madhapur, Hyderabad, TS',
    image: 'https://img.freepik.com/premium-photo/restaurant-with-orange-chairs-red-tablecloth_946039-9181.jpg',
    mapLink: 'https://www.google.com/maps?q=Plot+12,+Madhapur,+Hyderabad',
  },
  {
    city: 'Bengaluru',
    address: '88 MG Road, Bengaluru, KA',
    image: 'https://img.freepik.com/premium-photo/symphony-culinary-art-restaurant_960396-74081.jpg',
    mapLink: 'https://www.google.com/maps?q=88+MG+Road,+Bengaluru',
  },
  {
    city: 'Chennai',
    address: '45 North Usman Rd, T. Nagar, Chennai, TN',
    image: 'https://img.freepik.com/premium-photo/3d-rendering-loft-luxury-hotel-reception-cafe-lounge-restaurant_105762-1204.jpg',
    mapLink: 'https://www.google.com/maps?q=45+North+Usman+Rd,+T.+Nagar,+Chennai',
  },
];

const seatOptions = [2, 3, 4, 5, 6];

const BookTableMain = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [seats, setSeats] = useState('');
  const [formData, setFormData] = useState({ date: '', time: '', phone: '' });
  const [errors, setErrors] = useState({ seats: '', date: '', time: '', phone: '' });

  const handleBookClick = (branch) => setSelectedBranch(branch);

  const handleBookingSubmit = () => {
    let isValid = true;
    const newErrors = {};

    if (!seats) {
      newErrors.seats = 'Please select the number of seats.';
      isValid = false;
    }
    if (!formData.date) {
      newErrors.date = 'Please select a valid date.';
      isValid = false;
    }
    if (!formData.time) {
      newErrors.time = 'Please select a valid time.';
      isValid = false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10 digits).';
      isValid = false;
    }

    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    if (selectedDateTime < new Date()) {
      newErrors.date = 'The selected date and time cannot be in the past.';
      newErrors.time = 'The selected date and time cannot be in the past.';
      isValid = false;
    }

    setErrors(newErrors);
    if (isValid) {
      alert(
        `✅ Table for ${seats} people booked at ${selectedBranch.city} on ${formData.date} at ${formData.time}. Confirmation sent to ${formData.phone}`
      );
      setSelectedBranch(null);
      setSeats('');
      setFormData({ date: '', time: '', phone: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-pink-100 px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-600 mb-10">
        Book a Table
      </h1>

      {!selectedBranch ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {branches.map((branch, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <img src={branch.image} alt={branch.city} className="w-full h-48 sm:h-56 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-bold text-red-600 mb-1">{branch.city}</h2>
                <p className="text-gray-600 mb-4">{branch.address}</p>
                <button
                  onClick={() => handleBookClick(branch)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-full font-semibold transition"
                >
                  Book Table
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-red-600">
            Booking at {selectedBranch.city}
          </h2>
          <div className="space-y-6">
            {/* Seats */}
            <div>
              <label className="block font-semibold">Number of Seats</label>
              <select
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                className="w-full border p-2 rounded mt-1"
              >
                <option value="">-- Select Seats --</option>
                {seatOptions.map((seat) => (
                  <option key={seat} value={seat}>
                    {seat} Seats
                  </option>
                ))}
              </select>
              {errors.seats && <p className="text-red-500 text-sm">{errors.seats}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block font-semibold">Select Date</label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                minDate={new Date()}
                dateFormat="yyyy-MM-dd"
                className="w-full border p-2 rounded mt-1"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            {/* Time */}
            <div>
              <label className="block font-semibold">Select Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border p-2 rounded mt-1"
              />
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded mt-1"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 pt-4">
              <button
                onClick={() => setSelectedBranch(null)}
                className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Back
              </button>
              <button
                onClick={handleBookingSubmit}
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-all"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookTableMain;

