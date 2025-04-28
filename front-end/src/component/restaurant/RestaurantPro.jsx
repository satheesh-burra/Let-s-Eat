// // import React, { useState } from 'react';



// // const RestaurantProfile = () => {
// //   const [restaurantDetails, setRestaurantDetails] = useState({
// //     name: "Let's Eat",
// //     description: "A cozy place for delicious meals.",
// //     address: "123 Tasty Street",
// //     phone: "123-456-7890",
// //     email: "lets.eat@example.com"
// //   });

// //   const handleChange = (e) => {
// //     setRestaurantDetails({
// //       ...restaurantDetails,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSave = () => {
// //     console.log('Updated Restaurant Details:', restaurantDetails);
// //   };

// //   return (
// //     <>
   
// //       <div className="p-6 h-screen">
// //         <h2 className="text-2xl font-bold text-red-700 mb-4">Restaurant Profile</h2>
// //         <div className="bg-white p-6 rounded shadow">
// //           <div className="space-y-4">
// //             <input
// //               type="text"
// //               name="name"
// //               value={restaurantDetails.name}
// //               onChange={handleChange}
// //               placeholder="Restaurant Name"
// //               className="border px-4 py-2 w-full rounded"
// //             />
// //             <textarea
// //               name="description"
// //               value={restaurantDetails.description}
// //               onChange={handleChange}
// //               placeholder="Restaurant Description"
// //               className="border px-4 py-2 w-full rounded"
// //               rows="4"
// //             />
// //             <input
// //               type="text"
// //               name="address"
// //               value={restaurantDetails.address}
// //               onChange={handleChange}
// //               placeholder="Restaurant Address"
// //               className="border px-4 py-2 w-full rounded"
// //             />
// //             <input
// //               type="text"
// //               name="phone"
// //               value={restaurantDetails.phone}
// //               onChange={handleChange}
// //               placeholder="Phone Number"
// //               className="border px-4 py-2 w-full rounded"
// //             />
// //             <input
// //               type="email"
// //               name="email"
// //               value={restaurantDetails.email}
// //               onChange={handleChange}
// //               placeholder="Restaurant Email"
// //               className="border px-4 py-2 w-full rounded"
// //             />
// //             <button
// //               onClick={handleSave}
// //               className="bg-red-500 text-white px-6 py-2 rounded mt-4 hover:bg-red-600"
// //             >
// //               Save Changes
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default RestaurantProfile;
// import React, { useState } from "react";

// const RestaurantProfile = () => {
//   const [restaurant, setRestaurant] = useState({
//     name: "Let's Eat",
//     description: "A cozy place for delicious meals.",
//     address: "123 Tasty Street, Flavor Town",
//     phone: "123-456-7890",
//     email: "lets.eat@example.com",
//     facebook: "",
//     instagram: "",
//     logo: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "logo" && files[0]) {
//       setRestaurant({ ...restaurant, logo: URL.createObjectURL(files[0]) });
//     } else {
//       setRestaurant({ ...restaurant, [name]: value });
//     }
//   };

//   const handleSave = () => {
//     console.log("Saved Restaurant Data:", restaurant);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 p-10">
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//         {/* Form Section */}
//         <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200">
//           <h2 className="text-3xl font-bold text-red-600 mb-6">Edit Profile</h2>
//           <div className="space-y-4">
//             <input
//               type="file"
//               name="logo"
//               accept="image/*"
//               onChange={handleChange}
//               className="block w-full text-sm text-gray-600"
//             />
//             <input
//               type="text"
//               name="name"
//               value={restaurant.name}
//               onChange={handleChange}
//               placeholder="Restaurant Name"
//               className="border p-3 rounded w-full"
//             />
//             <textarea
//               name="description"
//               value={restaurant.description}
//               onChange={handleChange}
//               placeholder="Description"
//               className="border p-3 rounded w-full"
//               rows="3"
//             />
//             <input
//               type="text"
//               name="address"
//               value={restaurant.address}
//               onChange={handleChange}
//               placeholder="Address"
//               className="border p-3 rounded w-full"
//             />
//             <input
//               type="tel"
//               name="phone"
//               value={restaurant.phone}
//               onChange={handleChange}
//               placeholder="Phone"
//               className="border p-3 rounded w-full"
//             />
//             <input
//               type="email"
//               name="email"
//               value={restaurant.email}
//               onChange={handleChange}
//               placeholder="Email"
//               className="border p-3 rounded w-full"
//             />
//             <input
//               type="text"
//               name="facebook"
//               value={restaurant.facebook}
//               onChange={handleChange}
//               placeholder="Facebook URL"
//               className="border p-3 rounded w-full"
//             />
//             <input
//               type="text"
//               name="instagram"
//               value={restaurant.instagram}
//               onChange={handleChange}
//               placeholder="Instagram URL"
//               className="border p-3 rounded w-full"
//             />
//             <button
//               onClick={handleSave}
//               className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
//             >
//               Save Profile
//             </button>
//           </div>
//         </div>

//         {/* Live Preview Section */}
//         <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200 flex flex-col items-center text-center">
//           {restaurant.logo && (
//             <img
//               src={restaurant.logo}
//               alt="Logo"
//               className="w-32 h-32 object-cover rounded-full mb-4 shadow"
//             />
//           )}
//           <h2 className="text-2xl font-bold text-red-700">{restaurant.name}</h2>
//           <p className="text-gray-600 italic mb-4">{restaurant.description}</p>
//           <div className="text-sm text-gray-500 space-y-1 mb-4">
//             <p>📍 {restaurant.address}</p>
//             <p>📞 {restaurant.phone}</p>
//             <p>📧 {restaurant.email}</p>
//           </div>
//           <div className="flex gap-4 mt-2">
//             {restaurant.facebook && (
//               <a href={restaurant.facebook} target="_blank" className="text-blue-600 hover:underline">
//                 Facebook
//               </a>
//             )}
//             {restaurant.instagram && (
//               <a href={restaurant.instagram} target="_blank" className="text-pink-500 hover:underline">
//                 Instagram
//               </a>
//             )}
//           </div>
//           <iframe
//             className="mt-6 rounded-lg shadow w-full h-48"
//             src={`https://maps.google.com/maps?q=${encodeURIComponent(
//               restaurant.address
//             )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantProfile;
import React, { useState } from "react";

const RestaurantProfile = () => {
  const [restaurant, setRestaurant] = useState({
    name: "Let's Eat",
    description: "A cozy place for delicious meals.",
    address: "123 Tasty Street, Flavor Town",
    phone: "123-456-7890",
    email: "lets.eat@example.com",
    facebook: "",
    instagram: "",
    logo: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo" && files[0]) {
      setRestaurant({ ...restaurant, logo: URL.createObjectURL(files[0]) });
    } else {
      setRestaurant({ ...restaurant, [name]: value });
    }
  };

  const handleSave = () => {
    console.log("Saved Restaurant Data:", restaurant);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 p-10 mt-[-67px]">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-6 border-2 border-red-100">
        <div className="flex flex-col items-center text-center">
          {restaurant.logo && (
            <img
              src={restaurant.logo}
              alt="Restaurant Logo"
              className="w-32 h-32 rounded-full object-cover shadow mb-4"
            />
          )}
          <h2 className="text-3xl font-bold text-red-700 mb-2">
            {restaurant.name}
          </h2>
          <p className="italic text-gray-600 mb-2">{restaurant.description}</p>
          <div className="text-gray-500 text-sm space-y-1 mb-4">
            <p>📍 {restaurant.address}</p>
            <p>📞 {restaurant.phone}</p>
            <p>📧 {restaurant.email}</p>
          </div>
          <div className="flex gap-4 mt-2">
            {restaurant.facebook && (
              <a
                href={restaurant.facebook}
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Facebook
              </a>
            )}
            {restaurant.instagram && (
              <a
                href={restaurant.instagram}
                target="_blank"
                className="text-pink-500 hover:underline"
              >
                Instagram
              </a>
            )}
          </div>
          <iframe
            className="mt-6 rounded-lg shadow w-full h-56"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              restaurant.address
            )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            allowFullScreen
          ></iframe>

          <button
            onClick={() => setShowModal(true)}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Modal for Editing */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-xl shadow-xl relative animate-fadeIn">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 text-red-600">
              Edit Restaurant Profile
            </h3>
            <div className="space-y-4">
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
              <input
                type="text"
                name="name"
                value={restaurant.name}
                onChange={handleChange}
                placeholder="Restaurant Name"
                className="border p-3 rounded w-full"
              />
              <textarea
                name="description"
                value={restaurant.description}
                onChange={handleChange}
                placeholder="Description"
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                name="address"
                value={restaurant.address}
                onChange={handleChange}
                placeholder="Address"
                className="border p-3 rounded w-full"
              />
              <input
                type="tel"
                name="phone"
                value={restaurant.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="border p-3 rounded w-full"
              />
              <input
                type="email"
                name="email"
                value={restaurant.email}
                onChange={handleChange}
                placeholder="Email"
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                name="facebook"
                value={restaurant.facebook}
                onChange={handleChange}
                placeholder="Facebook URL"
                className="border p-3 rounded w-full"
              />
              <input
                type="text"
                name="instagram"
                value={restaurant.instagram}
                onChange={handleChange}
                placeholder="Instagram URL"
                className="border p-3 rounded w-full"
              />
              <button
                onClick={handleSave}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantProfile;

