
import React, { useState } from "react";
import "swiper/css";
import { motion } from "framer-motion";

// Veg Items
const vegItems = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    description: "Creamy cottage cheese in a rich tomato gravy.",
    image: "https://platetopalateblog.com/wp-content/uploads/2020/07/20200506_131905-scaled.jpg",
  },
  {
    id: 2,
    name: "Veg Biryani",
    description: "Fragrant rice with seasonal vegetables and spices.",
    image: "https://www.chefkunalkapur.com/wp-content/uploads/2023/11/DSC07512-1300x731.jpg?v=1699167800",
  },
  {
    id: 3,
    name: "Palak Paneer",
    description: "Spinach gravy with soft paneer cubes.",
    image: "https://www.marionskitchen.com/wp-content/uploads/2021/08/Paneer-Curry8278-1200x1500.jpg",
  },
  {
    id: 4,
    name: "Veg Fried Rice",
    description: "Stir-fried rice with fresh vegetables.",
    image: "https://hajialirestaurant.com/wp-content/uploads/2023/04/veg-fried-rice-scaled.jpg",
  },
  {
    id: 5,
    name: "Kaju Curry",
    description: "Rich cashew nut curry with creamy gravy.",
    image: "https://theredplatechronicles.home.blog/wp-content/uploads/2019/05/img_20190521_061255_677.jpg?w=1200",
  },
  {
    id: 6,
    name: "Chana Masala",
    description: "Spicy chickpea curry with bold Indian spices.",
    image: "https://vegecravings.com/wp-content/uploads/2017/01/chole-recipe-step-by-step-instructions-13.jpg",
  },
];

// Non-Veg Items
const nonVegItems = [
  {
    id: 7,
    name: "Chicken Biryani",
    description: "Spicy layered rice with marinated chicken.",
    image: "https://www.cookwithnabeela.com/wp-content/uploads/2025/01/ChickenBiryani-500x500.webp",
  },
  {
    id: 8,
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with grilled chicken.",
    image: "https://masalaandchai.com/wp-content/uploads/2024/04/Easy-Butter-Chicken.jpg",
  },
  {
    id: 9,
    name: "Fish Fry",
    description: "Crispy golden fried fish fillets.",
    image: "https://tiffinandteaofficial.com/wp-content/uploads/2024/04/Untitled-1-1.jpg",
  },
  {
    id: 10,
    name: "Prawn Masala",
    description: "Juicy prawns in spicy Indian masala.",
    image: "https://www.bigfattummy.com/wp-content/uploads/2020/03/Prawns-Masala-Fried-05-1200x675.jpg",
  },
  {
    id: 11,
    name: "Tandoori Chicken",
    description: "Grilled chicken marinated in yogurt and spices.",
    image: "https://static.toiimg.com/thumb/53240689.cms?width=1200&height=900",
  },
  {
    id: 12,
    name: "Lamb Shank Rogan Josh",  // Special Non-Veg Item
    description: "Tender lamb shanks slow-cooked in a rich and aromatic Kashmiri gravy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMx53v2fnJPi-N4HuIJTeXuHnuwIvKhaBDFoHlMnVYWZBwHk-ywuI28iSIpU_EM3l0PZw&usqp=CAU",  // Replace with actual image URL
  },
];

// Cool Drinks
const coolDrinks = [
  {
    id: 13,
    name: "Mango Lassi",
    description: "Sweet and creamy yogurt-based mango drink.",
    image: "https://www.midwestliving.com/thmb/2n9egOlUYE0dnPxJoHYY7disquI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/KeyIngredient_MangoLassi_BP_1019_preview-0bdf9f28d35043748efaa9fd1c7b806c.jpg",
  },
  {
    id: 14,
    name: "Masala Soda",
    description: "Spicy and tangy Indian-style soda.",
    image: "https://i0.wp.com/mommyandkitchen.com/wp-content/uploads/2021/08/Website.jpg?fit=1457%2C2048&ssl=1",
  },
  {
    id: 15,
    name: "Cold Coffee",
    description: "Chilled coffee with a touch of chocolate.",
    image: "https://www.ircagroup.com/IRCA/Recipes/image/1501838215_crema%20fredda%20CAFF%C3%90%C5%A1.jpg",
  },
  {
    id: 16,
    name: "Coconut Water",
    description: "Natural and refreshing tender coconut drink.",
    image: "https://i.cdn.newsbytesapp.com/images/l83220220125105253.jpeg",
  },
  {
    id: 17,
    name: "Watermelon Juice",
    description: "Freshly squeezed watermelon goodness.",
    image: "https://www.justonecookbook.com/wp-content/uploads/2021/06/Watermelon-Juice-9016.jpg",
  },
  {
    id: 18,
    name: "Lemon Mint Cooler",
    description: "Zesty lemon and mint infusion drink.",
    image: "https://www.allrecipes.com/thmb/VD4bYSMbXH-bOkiSnaexbLQ4fyk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1044272-ad02972cd75d4d2ba3dbc53948cb316a.jpg",
  },
];



const Items = () => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const getPrice = (item) => (item.id + 1) * 50;

  const addToCart = () => {
    const existing = cart.find((i) => i.id === selectedItem.id);
    if (existing) {
      setCart(cart.map(i =>
        i.id === selectedItem.id
          ? { ...i, quantity: i.quantity + quantity }
          : i
      ));
    } else {
      setCart([...cart, { ...selectedItem, quantity }]);
    }
    setSelectedItem(null);
    setQuantity(1);
  };

  const renderAnimatedCard = (item) => (
    <motion.div
      key={item.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="bg-gradient-to-r from-red-200 via-pink-300 to-yellow-200 rounded-3xl overflow-hidden shadow-2xl hover:shadow-red-400 transform transition-all duration-50 w-full max-w-sm mx-auto"
    >
      <img src={item.image} alt={item.name} className="w-full h-60 object-cover rounded-t-3xl" />
      <div className="p-4 text-center">
        <h3 className="text-2xl font-extrabold text-red-700 mb-2 drop-shadow-md">{item.name}</h3>
        <p className="text-gray-800 italic mb-4">{item.description}</p>
        <p className="text-lg font-semibold text-pink-700 mb-4">₹{getPrice(item)}</p>
        <button
          onClick={() => {
            setSelectedItem(item);
            setQuantity(1);
          }}
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300 shadow-lg"
        >
          Order Now
        </button>
      </div>
    </motion.div>
  );

  const totalAmount = cart.reduce((sum, item) => sum + getPrice(item) * item.quantity, 0);

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-yellow-100 via-pink-100 to-red-200">
      <div className="text-center mb-10">
        <h2 className="text-5xl font-extrabold text-red-600 mb-4 tracking-wide">
          Our <span className="text-black">Special Menu</span>
        </h2>
        <p className="text-gray-700 text-lg italic">Taste the tradition with a modern twist</p>
      </div>

      {/* Veg Items */}
      <div>
        <h3 className="text-3xl font-bold text-green-700 mb-6 text-center">Veg Items</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {vegItems.map(renderAnimatedCard)}
        </div>
      </div>

      {/* Non-Veg Items */}
      <div className="mt-16">
        <h3 className="text-3xl font-bold text-red-700 mb-6 text-center">Non-Veg Items</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nonVegItems.map(renderAnimatedCard)}
        </div>
      </div>

      {/* Cool Drinks Items */}
<div className="mt-16">
  <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">Cool Drinks</h3>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {coolDrinks.map(renderAnimatedCard)}
  </div>
</div>


      {/* Order Form Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Order {selectedItem.name}</h2>
            <p className="mb-2">Price: ₹{getPrice(selectedItem)} each</p>
            <label className="block mb-2">Quantity:</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-full border rounded px-3 py-2 mb-4"
            />
            <button
              onClick={addToCart}
              className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {cart.length > 0 && !showPayment && (
        <div className="fixed top-30 right-6 z-50  bg-white border shadow-lg rounded-xl p-4">
          <button
            onClick={() => setShowCart(true)}
            className="bg-gradient-to-r from-red-500 to-pink-400  text-white px-4 py-2 rounded-full shadow-lg hover:from-red-600 hover:via-pink-500 hover:to-white transition"

          >
            View Cart ({cart.length})
          </button>
        </div>
      )}

      {/* Cart Details Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center">Your Cart</h2>
            {cart.map((item) => (
              <div key={item.id} className="mb-2 flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{getPrice(item) * item.quantity}</span>
              </div>
            ))}
            <hr className="my-4" />
            <p className="text-lg font-bold">Total: ₹{totalAmount}</p>
            <div className="flex gap-2 mt-4 justify-center">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={() => {
                  alert("Order Confirmed!");
                  setShowCart(false);
                  setShowPayment(true);
                }}
              >
                Confirm Order
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setShowCart(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Payment</h2>
            <p className="mb-4">Total Amount: <strong>₹{totalAmount}</strong></p>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
              onClick={() => {
                alert("Payment Successful!");
                setCart([]);
                setShowPayment(false);
              }}
            >
              Complete Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;
