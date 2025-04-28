// import React, { useState } from 'react';

// const EventManagement = () => {
//   const [selectedRestaurant, setSelectedRestaurant] = useState("Let's Eat Bistro");
//   const [allEvents, setAllEvents] = useState({
//     "Let's Eat Bistro": [],
//     "Royal Spice Palace": [],
//     "The Flavor Den": [],
//   });

//   const [newEvent, setNewEvent] = useState({
//     eventName: '',
//     date: '',
//     time: '',
//     description: '',
//     location: '',
//     organizer: '',
//     status: 'Upcoming',
//   });

//   const [editingId, setEditingId] = useState(null);

//   const handleRestaurantChange = (e) => {
//     setSelectedRestaurant(e.target.value);
//     setEditingId(null);
//     setNewEvent({
//       eventName: '',
//       date: '',
//       time: '',
//       description: '',
//       location: '',
//       organizer: '',
//       status: 'Upcoming',
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewEvent((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddOrEditEvent = () => {
//     const currentEvents = allEvents[selectedRestaurant];

//     if (!newEvent.eventName || !newEvent.date || !newEvent.time || !newEvent.description || !newEvent.location || !newEvent.organizer) {
//       alert("Please fill all fields");
//       return;
//     }

//     let updatedEvents;
//     if (editingId) {
//       updatedEvents = currentEvents.map((event) =>
//         event.id === editingId ? { ...event, ...newEvent } : event
//       );
//     } else {
//       const newId = currentEvents.length ? currentEvents[currentEvents.length - 1].id + 1 : 1;
//       updatedEvents = [...currentEvents, { ...newEvent, id: newId }];
//     }

//     setAllEvents((prev) => ({
//       ...prev,
//       [selectedRestaurant]: updatedEvents,
//     }));

//     setEditingId(null);
//     setNewEvent({
//       eventName: '',
//       date: '',
//       time: '',
//       description: '',
//       location: '',
//       organizer: '',
//       status: 'Upcoming',
//     });
//   };

//   const handleEdit = (event) => {
//     setEditingId(event.id);
//     setNewEvent({ ...event });
//   };

//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this event?");
//     if (confirmDelete) {
//       const updated = allEvents[selectedRestaurant].filter(event => event.id !== id);
//       setAllEvents({ ...allEvents, [selectedRestaurant]: updated });
//     }
//   };

//   const events = allEvents[selectedRestaurant];

//   return (
//     <div className="p-6 min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100">
//       <h2 className="text-3xl font-extrabold text-center text-red-700 mb-6 underline decoration-wavy">🎊 Event Management</h2>

//       {/* Restaurant Dropdown */}
//       <div className="max-w-md mx-auto mb-6">
//         <label className="block text-red-600 font-semibold mb-2">Select Restaurant</label>
//         <select
//           value={selectedRestaurant}
//           onChange={handleRestaurantChange}
//           className="w-full p-3 border border-red-300 rounded-lg shadow-sm bg-white"
//         >
//           <option value="Let's Eat Bistro">Let's Eat Bistro</option>
//           <option value="Royal Spice Palace">Royal Spice Palace</option>
//           <option value="The Flavor Den">The Flavor Den</option>
//         </select>
//       </div>

//       {/* Form Section */}
//       <div className="bg-white border border-red-300 rounded-xl shadow-lg p-6 max-w-5xl mx-auto mb-8">
//         <h3 className="text-xl font-semibold text-red-600 mb-4">{editingId ? "Edit Event" : "Add New Event"}</h3>
//         <div className="grid md:grid-cols-2 gap-4">
//           <input type="text" name="eventName" placeholder="Event Name" value={newEvent.eventName} onChange={handleChange} className="p-3 border border-red-300 rounded-lg shadow-sm" />
//           <input type="date" name="date" value={newEvent.date} onChange={handleChange} className="p-3 border border-red-300 rounded-lg shadow-sm" />
//           <input type="time" name="time" value={newEvent.time} onChange={handleChange} className="p-3 border border-red-300 rounded-lg shadow-sm" />
//           <input type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} className="p-3 border border-red-300 rounded-lg shadow-sm" />
//           <input type="text" name="organizer" placeholder="Organizer" value={newEvent.organizer} onChange={handleChange} className="p-3 border border-red-300 rounded-lg shadow-sm" />
//           <select name="status" value={newEvent.status} onChange={handleChange} className="p-3 border border-red-300 rounded-lg shadow-sm">
//             <option value="Upcoming">Upcoming</option>
//             <option value="Ongoing">Ongoing</option>
//             <option value="Completed">Completed</option>
//           </select>
//           <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} className="p-3 border border-red-300 rounded-lg shadow-sm col-span-2" />
//         </div>
//         <button
//           onClick={handleAddOrEditEvent}
//           className="mt-6 bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition"
//         >
//           {editingId ? "✅ Update Event" : "➕ Add Event"}
//         </button>
//       </div>

//       {/* Event Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {events.map((event) => (
//           <div
//             key={event.id}
//             className="bg-white border-l-8 border-pink-400 rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300"
//           >
//             <h4 className="text-xl font-bold text-pink-600 mb-2">{event.eventName}</h4>
//             <p><strong>Date:</strong> {event.date}</p>
//             <p><strong>Time:</strong> {event.time}</p>
//             <p><strong>Location:</strong> {event.location}</p>
//             <p><strong>Organizer:</strong> {event.organizer}</p>
//             <p>
//               <strong>Status:</strong>{' '}
//               <span className={`inline-block px-2 py-1 rounded-full text-white ${
//                 event.status === "Upcoming" ? "bg-blue-500" :
//                 event.status === "Ongoing" ? "bg-yellow-500" : "bg-green-600"
//               }`}>
//                 {event.status}
//               </span>
//             </p>
//             <p className="mt-2 text-gray-600">{event.description}</p>
//             <div className="flex justify-end gap-2 mt-4">
//               <button
//                 onClick={() => handleEdit(event)}
//                 className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(event.id)}
//                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventManagement;
import React, { useState } from "react";

const branches = [
  "First Branch - Downtown Street 21",
  "Second Branch - Lakeview Road 12",
  "Third Branch - Sunset Avenue 7",
];

const EventManagement = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [newEvent, setNewEvent] = useState({
    eventName: "",
    date: "",
    time: "",
    description: "",
    location: branches[0],
    organizer: "",
    status: "Upcoming",
  });

  const resetForm = () => {
    setNewEvent({
      eventName: "",
      date: "",
      time: "",
      description: "",
      location: branches[0],
      organizer: "",
      status: "Upcoming",
    });
    setEditingId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setEvents(events.map((ev) => (ev.id === editingId ? { ...newEvent, id: editingId } : ev)));
    } else {
      setEvents([...events, { ...newEvent, id: Date.now() }]);
    }
    setShowForm(false);
    resetForm();
  };

  const handleEdit = (event) => {
    setNewEvent(event);
    setEditingId(event.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 text-center mt-[-67px]">
      <h2 className="text-3xl font-bold text-red-700 mb-4">🎉 Event Management</h2>

      <button
        onClick={() => {
          setShowForm(true);
          resetForm();
        }}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-md transition"
      >
        ➕ Add Event
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-6 p-4 bg-white rounded-xl shadow-md grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Event Name"
            className="p-2 border rounded"
            value={newEvent.eventName}
            onChange={(e) => setNewEvent({ ...newEvent, eventName: e.target.value })}
            required
          />
          <input
            type="date"
            className="p-2 border rounded"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            required
          />
          <input
            type="time"
            className="p-2 border rounded"
            value={newEvent.time}
            onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Organizer"
            className="p-2 border rounded"
            value={newEvent.organizer}
            onChange={(e) => setNewEvent({ ...newEvent, organizer: e.target.value })}
          />
          <select
            className="p-2 border rounded"
            value={newEvent.status}
            onChange={(e) => setNewEvent({ ...newEvent, status: e.target.value })}
          >
            <option value="Upcoming">Upcoming</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
          <select
            className="p-2 border rounded"
            value={newEvent.location}
            onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
          >
            {branches.map((branch, index) => (
              <option key={index} value={branch}>
                {branch}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Event Description"
            className="p-2 border rounded col-span-2"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          />
          <div className="col-span-2 flex gap-4">
            <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              {editingId ? "Update Event" : "Create Event"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                resetForm();
              }}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        </form>
      )}

      {/* Events Table */}
      <div className="mt-10">
        {events.length === 0 ? (
          <p className="text-gray-600">No events added yet.</p>
        ) : (
          <table className="w-full border shadow-sm bg-white rounded-xl overflow-hidden">
            <thead className="bg-red-100 text-red-800">
              <tr>
                <th className="py-2 px-4">Event</th>
                <th className="py-2 px-4">Date</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">Organizer</th>
                <th className="py-2 px-4">Status</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id} className="text-center hover:bg-red-50 transition">
                  <td className="py-2 px-4">{event.eventName}</td>
                  <td className="py-2 px-4">{event.date}</td>
                  <td className="py-2 px-4">{event.time}</td>
                  <td className="py-2 px-4">{event.location}</td>
                  <td className="py-2 px-4">{event.organizer}</td>
                  <td className="py-2 px-4">{event.status}</td>
                  <td className="py-2 px-4 space-x-2">
                    <button
                      onClick={() => handleEdit(event)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(event.id)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default EventManagement;
