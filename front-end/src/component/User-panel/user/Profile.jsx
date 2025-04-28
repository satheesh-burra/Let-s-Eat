// import React from "react";

// const Profile = () => {
//   // Replace with real user data or fetch from API
//   const user = {
//     name: "John Doe",
//     email: "john@example.com",
//     phone: "+1234567890",
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6">
//       <h2 className="text-lg font-bold mb-4">User Profile</h2>
//       <div className="space-y-2">
//         <p><strong>Name:</strong> {user.name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//         <p><strong>Phone:</strong> {user.phone}</p>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
    // You can also send this data to the backend here
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">User Profile</h2>
        {!editMode && (
          <button
            className="text-sm text-blue-500 hover:underline"
            onClick={() => setEditMode(true)}
          >
            Edit
          </button>
        )}
      </div>

      <div className="space-y-3">
        {editMode ? (
          <>
            <div>
              <label className="block text-sm font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            <div className="flex gap-4 mt-4">
              <button
                onClick={handleSave}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
