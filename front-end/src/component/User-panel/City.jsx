import { useState } from "react";
import React from "react";
const restaurantsData = [
  {
    name: "Pasta Palace",
    city: "New York",
    description: "Authentic Italian pasta with homemade sauces.",
    image: "https://source.unsplash.com/400x300/?pasta,restaurant"
  },
  {
    name: "Burger Barn",
    city: "New York",
    description: "Juicy grilled burgers with fresh ingredients.",
    image: "https://source.unsplash.com/400x300/?burger,restaurant"
  },
  {
    name: "Pizza Point",
    city: "New York",
    description: "Delicious wood-fired pizzas with gourmet toppings.",
    image: "https://source.unsplash.com/400x300/?pizza,restaurant"
  },
  {
    name: "Sushi Central",
    city: "San Francisco",
    description: "Fresh sushi and sashimi made by expert chefs.",
    image: "https://source.unsplash.com/400x300/?sushi,restaurant"
  },
  {
    name: "Taco Town",
    city: "Austin",
    description: "Authentic Mexican tacos with spicy flavors.",
    image: "https://source.unsplash.com/400x300/?tacos,restaurant"
  },
  {
    name: "Curry Corner",
    city: "Chicago",
    description: "Spicy and flavorful Indian curries and naan.",
    image: "https://source.unsplash.com/400x300/?curry,restaurant"
  },
  {
    name: "Grill House",
    city: "Austin",
    description: "Grilled meats and BBQ specialties.",
    image: "https://source.unsplash.com/400x300/?bbq,restaurant"
  },
  {
    name: "Noodle Nest",
    city: "Austin",
    description: "Warm bowls of ramen and noodle soups.",
    image: "https://source.unsplash.com/400x300/?noodles,restaurant"
  }
];

export default function RestaurantSearch() {
  const [city, setCity] = useState("");

  // Filter restaurants by city
  const filteredRestaurants = restaurantsData.filter((r) =>
    r.city.toLowerCase().includes(city.toLowerCase())
  );

  // Determine how many restaurants to show
  let displayedRestaurants = [];
  if (filteredRestaurants.length === 1) {
    displayedRestaurants = filteredRestaurants;
  } else if (filteredRestaurants.length >= 3) {
    displayedRestaurants = filteredRestaurants.slice(0, 3);
  } else {
    displayedRestaurants = filteredRestaurants;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Find Restaurants by City</h1>
      <input
        type="text"
        placeholder="Enter city name..."
        className="p-3 border rounded-md mb-6 w-80 shadow-md"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {displayedRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedRestaurants.map((r, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={r.image} alt={r.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold">{r.name}</h2>
                <p className="text-gray-600">{r.city}</p>
                <p className="text-sm mt-2">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No restaurants found</p>
      )}
    </div>
  );
}
