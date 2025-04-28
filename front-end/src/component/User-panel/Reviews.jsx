import React from "react";
import Slider from "react-slick"; // Import the Slider component

// Slick Slider settings with auto-play functionality
const settings = {
  dots: true,            // Show navigation dots
  infinite: true,        // Infinite loop for the slider
  speed: 500,            // Transition speed
  slidesToShow: 1,       // Show one review at a time
  slidesToScroll: 1,     // Scroll one slide at a time
  autoplay: true,        // Enable auto-play
  autoplaySpeed:  1500,   // Set auto-play speed to 3 seconds
  pauseOnHover: true,    // Pause slider on hover
  arrows: false,         // Hide navigation arrows (optional)
};

const reviews = [
  {
    name: "John Doe",
    review:
      "The food was absolutely amazing! I had a fantastic time and will definitely be returning soon.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review:
      "A great experience! The service was top-notch and the atmosphere was so cozy.",
    rating: 4,
  },
  {
    name: "Samuel Lee",
    review:
      "Loved the variety of dishes and the quality of food! Highly recommend the pasta dishes.",
    rating: 5,
  },
  {
    name: "Emily Parker",
    review:
      "Wonderful place for a date night. The food, the ambiance, and the staff were perfect!",
    rating: 5,
  },
  
  {
    name: "Chris Johnson",
    review:
      "Had a fantastic time here. The chef's special was incredible and the ambiance was perfect for a family dinner.",
    rating: 5,
  },
  {
    name: "Amanda White",
    review:
      "I visited the restaurant with my friends, and we all loved the food. The service was quick and friendly.",
    rating: 4,
  },
  {
    name: "Michael Brown",
    review:
      "This place has amazing food, and I love their seasonal menu. The staff was friendly and welcoming.",
    rating: 4,
  },
  {
    name: "Olivia Green",
    review:
      "What an amazing experience! Every dish was cooked to perfection, and the atmosphere was cozy and inviting.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-red-500 mb-6">Customer Reviews</h2>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-4 py-8 bg-gradient-to-r from-red-200 to-red-300 rounded-lg shadow-lg">
              <p className="text-xl text-gray-800 italic mb-4">"{review.review}"</p>
              <h3 className="text-lg font-semibold text-gray-700">{review.name}</h3>
              <div className="text-yellow-500">
                {"★".repeat(review.rating)}
                {"☆".repeat(5 - review.rating)} {/* Display stars based on rating */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
