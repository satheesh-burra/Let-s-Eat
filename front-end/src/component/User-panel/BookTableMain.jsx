


// import React, { useState } from "react";

// const branches = [
//   {
//     id: 1,
//     name: "City Center Branch",
//     location: "Downtown, Block A",
//     image: "https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_640.jpg",
//   },
//   {
//     id: 2,
//     name: "Lakeside Branch",
//     location: "Lakeview Garden",
//     image: "https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_640.jpg",
//   },
//   {
//     id: 3,
//     name: "Hilltop Branch",
//     location: "Sunset Avenue",
//     image: "https://cdn.pixabay.com/photo/2023/05/28/17/34/tavern-8024234_640.jpg",
//   },
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
//         seats: "", // Clear error when valid input is entered
//       }));
//     }
//     if (name === "date" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         date: "", // Clear error when valid input is entered
//       }));
//     }
//     if (name === "time" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         time: "", // Clear error when valid input is entered
//       }));
//     }
//     if (name === "phone" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         phone: "", // Clear error when valid input is entered
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
//                 <h2 className="text-xl font-semibold text-red-500 mb-1">{branch.name}</h2>
//                 <p className="text-gray-600 mb-4">{branch.location}</p>
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
//               <input
//                 type="date"
//                 name="date"
//                 className="w-full border p-2 rounded"
//                 value={formData.date}
//                 onChange={handleChange}
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


// import React, { useState, useEffect } from "react";

// const branches = [
//   {
//     id: 1,
//     name: "City Center Branch",
//     location: "Downtown, Block A",
//     image: "https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_640.jpg",
//   },
//   {
//     id: 2,
//     name: "Lakeside Branch",
//     location: "Lakeview Garden",
//     image: "https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_640.jpg",
//   },
//   {
//     id: 3,
//     name: "Hilltop Branch",
//     location: "Sunset Avenue",
//     image: "https://cdn.pixabay.com/photo/2023/05/28/17/34/tavern-8024234_640.jpg",
//   },
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

//   const [currentDate, setCurrentDate] = useState("");
  
//   // Set the current date for date validation
//   useEffect(() => {
//     const today = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
//     setCurrentDate(today);
//   }, []);

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
//         seats: "", // Clear error when valid input is entered
//       }));
//     }
//     if (name === "date" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         date: "", // Clear error when valid input is entered
//       }));
//     }
//     if (name === "time" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         time: "", // Clear error when valid input is entered
//       }));
//     }
//     if (name === "phone" && value) {
//       setErrors((prevErrors) => ({
//         ...prevErrors,
//         phone: "", // Clear error when valid input is entered
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
//                 <h2 className="text-xl font-semibold text-red-500 mb-1">{branch.name}</h2>
//                 <p className="text-gray-600 mb-4">{branch.location}</p>
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
//               <input
//                 type="date"
//                 name="date"
//                 className="w-full border p-2 rounded"
//                 value={formData.date}
//                 onChange={handleChange}
//                 min={currentDate} // Prevent past dates
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
//                 min={formData.date ? `${formData.date}T${new Date().toTimeString().slice(0, 5)}` : ""} // Prevent past time on the selected date
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
import "react-datepicker/dist/react-datepicker.css"; // Optional for default styling or you can customize

const branches = [
  {
    id: 1,
    name: "City Center Branch",
    location: "Downtown, Block A",
    image: "https://cdn.pixabay.com/photo/2016/02/10/13/35/hotel-1191718_640.jpg",
  },
  {
    id: 2,
    name: "Lakeside Branch",
    location: "Lakeview Garden",
    image: "https://cdn.pixabay.com/photo/2016/11/30/14/08/cafe-1872888_640.jpg",
  },
  {
    id: 3,
    name: "Hilltop Branch",
    location: "Sunset Avenue",
    image: "https://cdn.pixabay.com/photo/2023/05/28/17/34/tavern-8024234_640.jpg",
  },
];

const seatOptions = [2, 3, 4, 5, 6];

const BookTableMain = () => {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [seats, setSeats] = useState("");
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    seats: "",
    date: "",
    time: "",
    phone: "",
  });

  const handleBookClick = (branch) => {
    setSelectedBranch(branch);
  };

  const handleBookingSubmit = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate inputs before submitting
    if (!seats) {
      newErrors.seats = "Please select the number of seats.";
      isValid = false;
    } else {
      newErrors.seats = ""; // Clear error once valid input is given
    }

    if (!formData.date) {
      newErrors.date = "Please select a valid date.";
      isValid = false;
    } else {
      newErrors.date = ""; // Clear error once valid input is given
    }

    if (!formData.time) {
      newErrors.time = "Please select a valid time.";
      isValid = false;
    } else {
      newErrors.time = ""; // Clear error once valid input is given
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10 digits).";
      isValid = false;
    } else {
      newErrors.phone = ""; // Clear error once valid input is given
    }

    // Check if the selected date and time are not in the past
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    const currentDateTime = new Date();

    if (selectedDateTime < currentDateTime) {
      newErrors.date = "The selected date and time cannot be in the past.";
      newErrors.time = "The selected date and time cannot be in the past.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert(
        `✅ Table for ${seats} people booked at ${selectedBranch.name} on ${formData.date} at ${formData.time}. Confirmation sent to ${formData.phone}`
      );
      setSelectedBranch(null);
      setSeats("");
      setFormData({ date: "", time: "", phone: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // After the user corrects the input, clear the error for that specific field
    if (name === "seats" && value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        seats: "", // Clear error
      }));
    }
    if (name === "date" && value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        date: "", // Clear error
      }));
    }
    if (name === "time" && value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        time: "", // Clear error
      }));
    }
    if (name === "phone" && value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "", // Clear error
      }));
    }
  };

  return (
    <div className="w-full mx-auto h-screen px-30 rounded bg-pink-100 text-red-500 pt-3">
      <div className="mt-[30px]">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-10">Book a Table</h1>
      </div>
      {!selectedBranch ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <img src={branch.image} alt={branch.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-red-500 mb-1">{branch.name}</h2>
                <p className="text-gray-600 mb-4">{branch.location}</p>
                <button
                  onClick={() => handleBookClick(branch)}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Book Table
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-xl mx-auto text-black">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Booking at {selectedBranch.name}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Number of Seats</label>
              <select
                name="seats"
                value={seats}
                onChange={(e) => {
                  setSeats(e.target.value);
                  // Clear error on valid input
                  if (e.target.value) {
                    setErrors((prevErrors) => ({
                      ...prevErrors,
                      seats: "", // Clear error
                    }));
                  }
                }}
                className="w-full border p-2 rounded"
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

            <div>
              <label className="block mb-1 font-medium">Select Date</label>
              <DatePicker
                selected={formData.date}
                onChange={(date) => setFormData({ ...formData, date })}
                minDate={new Date()} // Prevents past date selection
                dateFormat="dd/MM/yyyy" // Custom format: day/month/year
                className="w-full border p-2 rounded"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Select Time</label>
              <input
                type="time"
                name="time"
                className="w-full border p-2 rounded"
                value={formData.time}
                onChange={handleChange}
              />
              {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Mobile Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full border p-2 rounded"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div className="flex justify-between">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setSelectedBranch(null)}
              >
                Back
              </button>
              <button
                onClick={handleBookingSubmit}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
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
