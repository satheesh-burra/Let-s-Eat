import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Let's Eat!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-gradient-to-r from-white via-pink-300 to-red-300">
      {/* Left Image */}
      <div className="w-full md:w-1/2 p-4">
        <img
          src="https://cdn.pixabay.com/photo/2016/07/17/18/23/contact-us-1524408_640.png"
          alt="Restaurant"
          className="rounded-2xl shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-6 text-red-500">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-400 "
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 border border-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-white-400"
          ></textarea>
          <button
            type="submit"
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
