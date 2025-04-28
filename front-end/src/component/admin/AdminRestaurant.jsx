// import React, { useState } from 'react';
// import AdminNavbar from './AdminNavbar';

// const initialRestaurants = [
//   { id: 1, name: "Let's Eat", owner: "John Doe", status: "Active", email: "lets.eat@gmail.com" },
//   { id: 2, name: "Spicy Spoon", owner: "Alice Smith", status: "Inactive", email: "spicyspoon@food.com" },
//   { id: 3, name: "Urban Bites", owner: "Michael Brown", status: "Active", email: "urbanbites@mealhub.com" },
// ];

// const Restaurants = () => {
//   const [restaurants, setRestaurants] = useState(initialRestaurants);
//   const [editId, setEditId] = useState(null);
//   const [formData, setFormData] = useState({ name: "", owner: "", email: "" });
//   const [newRestaurant, setNewRestaurant] = useState({ name: "", owner: "", email: "" });

//   const handleEditChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleNewChange = (e) => {
//     setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
//   };

//   const toggleStatus = (id) => {
//     const updated = restaurants.map((r) =>
//       r.id === id ? { ...r, status: r.status === "Active" ? "Inactive" : "Active" } : r
//     );
//     setRestaurants(updated);
//   };

//   const deleteRestaurant = (id) => {
//     const filtered = restaurants.filter((r) => r.id !== id);
//     setRestaurants(filtered);
//   };

//   const startEdit = (restaurant) => {
//     setEditId(restaurant.id);
//     setFormData({ name: restaurant.name, owner: restaurant.owner, email: restaurant.email });
//   };

//   const saveEdit = (id) => {
//     const updated = restaurants.map((r) =>
//       r.id === id ? { ...r, ...formData } : r
//     );
//     setRestaurants(updated);
//     setEditId(null);
//   };

//   const addRestaurant = () => {
//     if (!newRestaurant.name || !newRestaurant.owner || !newRestaurant.email) return;
//     const newEntry = {
//       id: Date.now(),
//       ...newRestaurant,
//       status: "Active",
//     };
//     setRestaurants([...restaurants, newEntry]);
//     setNewRestaurant({ name: "", owner: "", email: "" });
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Manage Restaurants</h2>

//         {/* Add Restaurant Form */}
//         <div className="mb-6 bg-white p-4 rounded shadow">
//           <h3 className="text-lg font-semibold mb-2">Add New Restaurant</h3>
//           <div className="flex flex-wrap gap-4">
//             <input
//               name="name"
//               placeholder="Restaurant Name"
//               value={newRestaurant.name}
//               onChange={handleNewChange}
//               className="border px-3 py-1 rounded w-full sm:w-auto"
//             />
//             <input
//               name="owner"
//               placeholder="Owner"
//               value={newRestaurant.owner}
//               onChange={handleNewChange}
//               className="border px-3 py-1 rounded w-full sm:w-auto"
//             />
//             <input
//               name="email"
//               placeholder="Email"
//               value={newRestaurant.email}
//               onChange={handleNewChange}
//               className="border px-3 py-1 rounded w-full sm:w-auto"
//             />
//             <button
//               onClick={addRestaurant}
//               className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
//             >
//               Add
//             </button>
//           </div>
//         </div>

//         {/* Restaurant Table */}
//         <div className="overflow-x-auto">
//           <table className="min-w-full border border-gray-300 bg-white shadow-md rounded">
//             <thead className="bg-red-100">
//               <tr>
//                 <th className="py-2 px-4 border">#</th>
//                 <th className="py-2 px-4 border">Name</th>
//                 <th className="py-2 px-4 border">Owner</th>
//                 <th className="py-2 px-4 border">Email</th>
//                 <th className="py-2 px-4 border">Status</th>
//                 <th className="py-2 px-4 border">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {restaurants.map((restaurant, index) => (
//                 <tr key={restaurant.id} className="text-center">
//                   <td className="py-2 px-4 border">{index + 1}</td>
//                   <td className="py-2 px-4 border">
//                     {editId === restaurant.id ? (
//                       <input
//                         name="name"
//                         value={formData.name}
//                         onChange={handleEditChange}
//                         className="border px-2 py-1 w-full"
//                       />
//                     ) : (
//                       restaurant.name
//                     )}
//                   </td>
//                   <td className="py-2 px-4 border">
//                     {editId === restaurant.id ? (
//                       <input
//                         name="owner"
//                         value={formData.owner}
//                         onChange={handleEditChange}
//                         className="border px-2 py-1 w-full"
//                       />
//                     ) : (
//                       restaurant.owner
//                     )}
//                   </td>
//                   <td className="py-2 px-4 border">
//                     {editId === restaurant.id ? (
//                       <input
//                         name="email"
//                         value={formData.email}
//                         onChange={handleEditChange}
//                         className="border px-2 py-1 w-full"
//                       />
//                     ) : (
//                       restaurant.email
//                     )}
//                   </td>
//                   <td className="py-2 px-4 border">
//                     <span className={`px-2 py-1 rounded-full text-white ${restaurant.status === 'Active' ? 'bg-green-500' : 'bg-gray-500'}`}>
//                       {restaurant.status}
//                     </span>
//                   </td>
//                   <td className="py-2 px-4 border space-x-2">
//                     {editId === restaurant.id ? (
//                       <button
//                         onClick={() => saveEdit(restaurant.id)}
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Save
//                       </button>
//                     ) : (
//                       <button
//                         onClick={() => startEdit(restaurant)}
//                         className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
//                       >
//                         Edit
//                       </button>
//                     )}
//                     <button
//                       onClick={() => toggleStatus(restaurant.id)}
//                       className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                     >
//                       {restaurant.status === 'Active' ? 'Disable' : 'Enable'}
//                     </button>
//                     <button
//                       onClick={() => deleteRestaurant(restaurant.id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {restaurants.length === 0 && (
//                 <tr>
//                   <td colSpan="6" className="text-center text-gray-500 py-4">No restaurants found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Restaurants;

import React, { useState } from 'react';
import AdminNavbar from './AdminNavbar';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    email: "",
    location: "",
    ownerId: "",
    description: "",
  });

  const [newRestaurant, setNewRestaurant] = useState({
    name: "",
    owner: "",
    email: "",
    location: "",
    ownerId: "",
    description: "",
  });

  const handleEditChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNewChange = (e) => {
    setNewRestaurant({ ...newRestaurant, [e.target.name]: e.target.value });
  };

  const deleteRestaurant = (id) => {
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };

  const startEdit = (restaurant) => {
    setEditId(restaurant.id);
    setFormData({ ...restaurant });
  };

  const saveEdit = (id) => {
    setRestaurants(
      restaurants.map((r) => (r.id === id ? { ...r, ...formData } : r))
    );
    setEditId(null);
  };

  const addRestaurant = () => {
    const { name, owner, email, location, ownerId, description } = newRestaurant;
    if (!name || !owner || !email || !location || !ownerId || !description) return;

    const newEntry = {
      id: Date.now(),
      ...newRestaurant,
    };
    setRestaurants([...restaurants, newEntry]);
    setNewRestaurant({
      name: "",
      owner: "",
      email: "",
      location: "",
      ownerId: "",
      description: "",
    });
  };

  return (
    <>
      <AdminNavbar />
      <div className="p-6 h-screen">
        <h2 className="text-2xl font-bold mb-4">Manage Restaurants</h2>

        {/* Add Restaurant Form */}
        <div className="mb-6 bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Add New Restaurant</h3>
          <div className="flex flex-wrap gap-4">
            <input name="name" placeholder="Restaurant Name" value={newRestaurant.name} onChange={handleNewChange} className="border px-3 py-1 rounded w-full sm:w-auto" />
            <input name="owner" placeholder="Owner" value={newRestaurant.owner} onChange={handleNewChange} className="border px-3 py-1 rounded w-full sm:w-auto" />
            <input name="email" placeholder="Email" value={newRestaurant.email} onChange={handleNewChange} className="border px-3 py-1 rounded w-full sm:w-auto" />
            <input name="location" placeholder="Location" value={newRestaurant.location} onChange={handleNewChange} className="border px-3 py-1 rounded w-full sm:w-auto" />
            <input name="ownerId" placeholder="Owner ID" value={newRestaurant.ownerId} onChange={handleNewChange} className="border px-3 py-1 rounded w-full sm:w-auto" />
            <input name="description" placeholder="Description" value={newRestaurant.description} onChange={handleNewChange} className="border px-3 py-1 rounded w-full sm:w-auto" />
            <button onClick={addRestaurant} className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Add</button>
          </div>
        </div>

        {/* Restaurant Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded">
            <thead className="bg-red-100">
              <tr>
                <th className="py-2 px-4 border">#</th>
                <th className="py-2 px-4 border">Restaurant ID</th>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Owner</th>
                <th className="py-2 px-4 border">Owner ID</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Location</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant, index) => (
                <tr key={restaurant.id} className="text-center">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{restaurant.id}</td>
                  <td className="py-2 px-4 border">
                    {editId === restaurant.id ? (
                      <input name="name" value={formData.name} onChange={handleEditChange} className="border px-2 py-1 w-full" />
                    ) : (
                      restaurant.name
                    )}
                  </td>
                  <td className="py-2 px-4 border">
                    {editId === restaurant.id ? (
                      <input name="owner" value={formData.owner} onChange={handleEditChange} className="border px-2 py-1 w-full" />
                    ) : (
                      restaurant.owner
                    )}
                  </td>
                  <td className="py-2 px-4 border">
                    {editId === restaurant.id ? (
                      <input name="ownerId" value={formData.ownerId} onChange={handleEditChange} className="border px-2 py-1 w-full" />
                    ) : (
                      restaurant.ownerId
                    )}
                  </td>
                  <td className="py-2 px-4 border">
                    {editId === restaurant.id ? (
                      <input name="email" value={formData.email} onChange={handleEditChange} className="border px-2 py-1 w-full" />
                    ) : (
                      restaurant.email
                    )}
                  </td>
                  <td className="py-2 px-4 border">
                    {editId === restaurant.id ? (
                      <input name="location" value={formData.location} onChange={handleEditChange} className="border px-2 py-1 w-full" />
                    ) : (
                      restaurant.location
                    )}
                  </td>
                  <td className="py-2 px-4 border">
                    {editId === restaurant.id ? (
                      <input name="description" value={formData.description} onChange={handleEditChange} className="border px-2 py-1 w-full" />
                    ) : (
                      restaurant.description
                    )}
                  </td>
                  <td className="py-2 px-4 border space-x-2">
                    {editId === restaurant.id ? (
                      <button onClick={() => saveEdit(restaurant.id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">Save</button>
                    ) : (
                      <button onClick={() => startEdit(restaurant)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">Edit</button>
                    )}
                    <button onClick={() => deleteRestaurant(restaurant.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                  </td>
                </tr>
              ))}
              {restaurants.length === 0 && (
                <tr>
                  <td colSpan="9" className="text-center text-gray-500 py-4">No restaurants found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Restaurants;
