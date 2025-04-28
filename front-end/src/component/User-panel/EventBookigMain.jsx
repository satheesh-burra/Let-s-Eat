




// import React, { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const restaurants = [
//   { id: 1, name: "Downtown Lounge", location: "Main Street 12" },
//   { id: 2, name: "Lakeview Banquets", location: "Lakeside Road 22" },
//   { id: 3, name: "Sunset Pavilion", location: "Sunset Boulevard 5" },
// ];

// const eventImages = {
//   "Team Building": "https://img.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006609.jpg?t=st=1745813122~exp=1745816722~hmac=e648c317f9967bd39f6ac56e1690ecdc39336181636c3ec508ac82983dc471df&w=996",
//   "Annual Party": "https://img.freepik.com/free-photo/high-angle-people-sitting-table_23-2149882902.jpg?t=st=1745813195~exp=1745816795~hmac=54f5d5f67f6432ab50ba440dd30a577535b225f5126c2404c460a05ef51f8786&w=740",
//   "Award Ceremony": "https://thebarbequetimes.com/wp-content/uploads/2024/07/unnamed-10-e1721478677143-768x440.png",
//   "Christmas Party": "https://img.freepik.com/free-photo/top-view-christmas-dinner_23-2147716351.jpg?t=st=1745814204~exp=1745817804~hmac=2c66e7529c8948739ce7e787b094f2aa16e616aa5a81c2aace027c0c90a42955&w=996",
//   "New Year Bash": "https://img.freepik.com/free-photo/bright-sparklers-cheerful-friends_329181-5713.jpg?ga=GA1.1.607992959.1707129454&semt=ais_hybrid&w=740",
//   "Diwali Night": "https://img.freepik.com/premium-photo/beautiful-diwali-lighting-diya-clay-oil-lamp-selective-focus_466689-47324.jpg?ga=GA1.1.607992959.1707129454&semt=ais_hybrid&w=740",
//   "Valentine's Dinner": "https://img.freepik.com/premium-photo/directly-shot-red-rose-table_1048944-30565119.jpg?w=900",
//   "Family Reunion Dinner": "https://img.freepik.com/premium-photo/indian-couple-hosting-cultural-exchange-dinner-their-hospitality-creating-atmosphere-warmth-friendship-where-guests-feel-welcomed-appreciated_748982-24951.jpg?w=996",
//   "Friends Meetup": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
//   "Custom Corporate Event": "https://img.freepik.com/premium-photo/group-people-are-walking-down-red-carpet-outside-building_1187092-79969.jpg?w=740",
//   "Custom Festive Celebration": "https://img.freepik.com/premium-photo/multigenerational-indian-family-eating-sweets-while-celebrating-festival-occasion-dressed-traditional-wear-sitting-sofa-couch_466689-33600.jpg?w=996",
//   "Custom Special Dinner": "https://img.freepik.com/free-photo/fried-chicken-with-mushrooms-tomato_140725-3752.jpg?ga=GA1.1.607992959.1707129454&semt=ais_hybrid&w=740",
// };

// const EventsMain = () => {
//   const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
//   const [showBookingForm, setShowBookingForm] = useState(false);
//   const [selectedEvent, setSelectedEvent] = useState("");
//   const [formData, setFormData] = useState({ date: "", time: "", phone: "" });

//   const corporateEvents = ["Team Building", "Annual Party", "Award Ceremony"];
//   const festiveEvents = ["Christmas Party", "New Year Bash", "Diwali Night"];
//   const dinnerEvents = ["Valentine's Dinner", "Family Reunion Dinner", "Friends Meetup"];
//   const customEvents = ["Custom Corporate Event", "Custom Festive Celebration", "Custom Special Dinner"];

//   const handleBookNow = (eventName) => {
//     setSelectedEvent(eventName);
//     setShowBookingForm(true);
//   };

//   const handleBookingSubmit = () => {
//     alert(
//       `✅ "${selectedEvent}" booked for ${formData.date} at ${formData.time}. Confirmation sent to ${formData.phone}`
//     );
//     setShowBookingForm(false);
//     setFormData({ date: "", time: "", phone: "" });
//   };

//   return (
//     <div className="p-6 mx-auto  mt-20 bg-gradient-to-r from-pink-200 via-white to-red-300">
//       <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">🎉 Book Your Special Event!</h1>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//         {restaurants.map((restaurant) => (
//           <div
//             key={restaurant.id}
//             className={`p-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transform transition-transform hover:scale-105 bg-gradient-to-r from-red-100 to-yellow-100 border-2 ${
//               selectedRestaurantId === restaurant.id ? "border-red-500" : "border-transparent"
//             }`}
//             onClick={() =>
//               setSelectedRestaurantId(
//                 selectedRestaurantId === restaurant.id ? null : restaurant.id
//               )
//             }
//           >
//             <h2 className="text-xl font-semibold text-red-700">{restaurant.name}</h2>
//             <p className="text-gray-700">{restaurant.location}</p>
//           </div>
//         ))}
//       </div>

//       {selectedRestaurantId && (
//         <div className="flex flex-col gap-8">
//           <EventSection title="🏢 Corporate Events" events={corporateEvents} onBook={handleBookNow} />
//           <EventSection title="🎊 Festive Celebrations" events={festiveEvents} onBook={handleBookNow} />
//           <EventSection title="🍽️ Special Dinners" events={dinnerEvents} onBook={handleBookNow} />
//           <EventSection title="✨ Custom Events" events={customEvents} onBook={handleBookNow} />
//         </div>
//       )}

//       {showBookingForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white p-6 rounded-2xl w-96">
//             <h3 className="text-xl font-semibold mb-4 text-red-600">
//               Booking: {selectedEvent}
//             </h3>
//             <input
//               type="date"
//               className="w-full mb-3 p-2 border rounded"
//               value={formData.date}
//               onChange={(e) =>
//                 setFormData({ ...formData, date: e.target.value })
//               }
//             />
//             <input
//               type="time"
//               className="w-full mb-3 p-2 border rounded"
//               value={formData.time}
//               onChange={(e) =>
//                 setFormData({ ...formData, time: e.target.value })
//               }
//             />
//             <PhoneInput
//               international
//               defaultCountry="US"
//               value={formData.phone}
//               onChange={(phone) => setFormData({ ...formData, phone })}
//               className="w-full mb-3 p-2 border rounded"
//               placeholder="Enter phone number"
//             />
//             <div className="flex justify-end space-x-2">
//               <button
//                 className="bg-gray-300 px-4 py-2 rounded"
//                 onClick={() => setShowBookingForm(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 onClick={handleBookingSubmit}
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const EventSection = ({ title, events, onBook }) => (
//   <div>
//     <h3 className="text-2xl font-bold text-red-500 mb-4">{title}</h3>
//     <div className="flex flex-wrap gap-6 justify-center">
//       {events.map((name, idx) => (
//         <EventCard key={idx} name={name} onBook={onBook} />
//       ))}
//     </div>
//   </div>
// );

// const EventCard = ({ name, onBook }) => {
//   const image = eventImages[name] || "https://via.placeholder.com/300x200?text=Event";

//   let gradient = "from-pink-100 to-pink-300";
//   if (name.toLowerCase().includes("corporate")) gradient = "from-gray-100 to-gray-300";
//   else if (name.toLowerCase().includes("party") || name.toLowerCase().includes("festive") || name.toLowerCase().includes("night")) gradient = "from-orange-100 to-yellow-300";
//   else if (name.toLowerCase().includes("dinner") || name.toLowerCase().includes("reunion")) gradient = "from-red-100 to-pink-300";
//   else if (name.toLowerCase().includes("custom")) gradient = "from-indigo-100 to-indigo-300";

//   return (
//     <div
//       className={`w-64 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br ${gradient} transition-all transform hover:scale-105 hover:shadow-2xl border-2 border-white`}
//     >
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-40 object-cover rounded-t-xl"
//       />
//       <div className="p-4 text-center">
//         <h4 className="text-lg font-bold text-gray-800 mb-2">{name}</h4>
//         <button
//           className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-transform hover:scale-105"
//           onClick={() => onBook(name)}
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EventsMain;





import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const restaurants = [
  { id: 1, name: "Downtown Lounge", location: "Main Street 12" },
  { id: 2, name: "Lakeview Banquets", location: "Lakeside Road 22" },
  { id: 3, name: "Sunset Pavilion", location: "Sunset Boulevard 5" },
];

const eventImages = {
  "Team Building": "https://img.freepik.com/free-photo/group-friends-eating-restaurant_23-2148006609.jpg?t=st=1745813122~exp=1745816722~hmac=e648c317f9967bd39f6ac56e1690ecdc39336181636c3ec508ac82983dc471df&w=996",
  "Annual Party": "https://img.freepik.com/free-photo/high-angle-people-sitting-table_23-2149882902.jpg?t=st=1745813195~exp=1745816795~hmac=54f5d5f67f6432ab50ba440dd30a577535b225f5126c2404c460a05ef51f8786&w=740",
  "Award Ceremony": "https://thebarbequetimes.com/wp-content/uploads/2024/07/unnamed-10-e1721478677143-768x440.png",
  "Christmas Party": "https://img.freepik.com/free-photo/top-view-christmas-dinner_23-2147716351.jpg?t=st=1745814204~exp=1745817804~hmac=2c66e7529c8948739ce7e787b094f2aa16e616aa5a81c2aace027c0c90a42955&w=996",
  "New Year Bash": "https://img.freepik.com/free-photo/bright-sparklers-cheerful-friends_329181-5713.jpg?ga=GA1.1.607992959.1707129454&semt=ais_hybrid&w=740",
  "Diwali Night": "https://img.freepik.com/premium-photo/beautiful-diwali-lighting-diya-clay-oil-lamp-selective-focus_466689-47324.jpg?ga=GA1.1.607992959.1707129454&semt=ais_hybrid&w=740",
  "Valentine's Dinner": "https://img.freepik.com/premium-photo/directly-shot-red-rose-table_1048944-30565119.jpg?w=900",
  "Family Reunion Dinner": "https://img.freepik.com/premium-photo/indian-couple-hosting-cultural-exchange-dinner-their-hospitality-creating-atmosphere-warmth-friendship-where-guests-feel-welcomed-appreciated_748982-24951.jpg?w=996",
  "Friends Meetup": "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
  "Custom Corporate Event": "https://img.freepik.com/premium-photo/group-people-are-walking-down-red-carpet-outside-building_1187092-79969.jpg?w=740",
  "Custom Festive Celebration": "https://img.freepik.com/premium-photo/multigenerational-indian-family-eating-sweets-while-celebrating-festival-occasion-dressed-traditional-wear-sitting-sofa-couch_466689-33600.jpg?w=996",
  "Custom Special Dinner": "https://img.freepik.com/free-photo/fried-chicken-with-mushrooms-tomato_140725-3752.jpg?ga=GA1.1.607992959.1707129454&semt=ais_hybrid&w=740",
};

const EventsMain = () => {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");
  const [formData, setFormData] = useState({ date: "", time: "", phone: "" });
  const [formErrors, setFormErrors] = useState({});

  const corporateEvents = ["Team Building", "Annual Party", "Award Ceremony"];
  const festiveEvents = ["Christmas Party", "New Year Bash", "Diwali Night"];
  const dinnerEvents = ["Valentine's Dinner", "Family Reunion Dinner", "Friends Meetup"];
  const customEvents = ["Custom Corporate Event", "Custom Festive Celebration", "Custom Special Dinner"];

  const handleBookNow = (eventName) => {
    setSelectedEvent(eventName);
    setShowBookingForm(true);
  };

  const validateForm = () => {
    const errors = {};
    const today = new Date();
    const selectedDate = new Date(formData.date);

    // Validate date (must not be in the past)
    if (selectedDate < today) {
      errors.date = "Event date cannot be in the past";
    }

    // Validate time (cannot be in the past relative to current time)
    if (selectedDate.toDateString() === today.toDateString()) {
      const selectedTime = new Date(`${today.toDateString()} ${formData.time}`);
      if (selectedTime < new Date()) {
        errors.time = "Event time cannot be in the past";
      }
    }

    // Validate phone
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleBookingSubmit = () => {
    if (validateForm()) {
      alert(
        `✅ "${selectedEvent}" booked for ${formData.date} at ${formData.time}. Confirmation sent to ${formData.phone}`
      );
      setShowBookingForm(false);
      setFormData({ date: "", time: "", phone: "" });
    }
  };

  return (
    <div className="p-6 mx-auto mt-20 bg-gradient-to-r from-pink-200 via-white to-red-300">
      <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">🎉 Book Your Special Event!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className={`p-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transform transition-transform hover:scale-105 bg-gradient-to-r from-red-100 to-yellow-100 border-2 ${
              selectedRestaurantId === restaurant.id ? "border-red-500" : "border-transparent"
            }`}
            onClick={() =>
              setSelectedRestaurantId(
                selectedRestaurantId === restaurant.id ? null : restaurant.id
              )
            }
          >
            <h2 className="text-xl font-semibold text-red-700">{restaurant.name}</h2>
            <p className="text-gray-700">{restaurant.location}</p>
          </div>
        ))}
      </div>

      {selectedRestaurantId && (
        <div className="flex flex-col gap-8">
          <EventSection title="🏢 Corporate Events" events={corporateEvents} onBook={handleBookNow} />
          <EventSection title="🎊 Festive Celebrations" events={festiveEvents} onBook={handleBookNow} />
          <EventSection title="🍽️ Special Dinners" events={dinnerEvents} onBook={handleBookNow} />
          <EventSection title="✨ Custom Events" events={customEvents} onBook={handleBookNow} />
        </div>
      )}

      {showBookingForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl w-96">
            <h3 className="text-xl font-semibold mb-4 text-red-600">
              Booking: {selectedEvent}
            </h3>
            <form>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="pr-4 text-right">Date:</td>
                    <td>
                      <input
                        type="date"
                        className="w-full mb-3 p-2 border rounded"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                      {formErrors.date && (
                        <p className="text-red-500 text-sm">{formErrors.date}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-right">Time:</td>
                    <td>
                      <input
                        type="time"
                        className="w-full mb-3 p-2 border rounded"
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                      />
                      {formErrors.time && (
                        <p className="text-red-500 text-sm">{formErrors.time}</p>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="pr-4 text-right">Phone:</td>
                    <td>
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={formData.phone}
                        onChange={(phone) => setFormData({ ...formData, phone })}
                        className="w-full mb-3 p-2 border rounded"
                        placeholder="Enter phone number"
                      />
                      {formErrors.phone && (
                        <p className="text-red-500 text-sm">{formErrors.phone}</p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={() => setShowBookingForm(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={handleBookingSubmit}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const EventSection = ({ title, events, onBook }) => (
  <div>
    <h3 className="text-2xl font-bold text-red-500 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-6 justify-center">
      {events.map((name, idx) => (
        <EventCard key={idx} name={name} onBook={onBook} />
      ))}
    </div>
  </div>
);

const EventCard = ({ name, onBook }) => {
  const image = eventImages[name] || "https://via.placeholder.com/300x200?text=Event";

  let gradient = "from-pink-100 to-pink-300";
  if (name.toLowerCase().includes("corporate")) gradient = "from-gray-100 to-gray-300";
  else if (name.toLowerCase().includes("party") || name.toLowerCase().includes("festive") || name.toLowerCase().includes("night")) gradient = "from-orange-100 to-yellow-300";
  else if (name.toLowerCase().includes("dinner") || name.toLowerCase().includes("reunion")) gradient = "from-red-100 to-pink-300";
  else if (name.toLowerCase().includes("custom")) gradient = "from-indigo-100 to-indigo-300";

  return (
    <div
      className={`w-64 rounded-xl shadow-lg overflow-hidden bg-gradient-to-br ${gradient} transition-all transform hover:scale-105 hover:shadow-2xl border-2 border-white`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold text-gray-800 mb-2">{name}</h4>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-transform hover:scale-105"
          onClick={() => onBook(name)}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default EventsMain;




