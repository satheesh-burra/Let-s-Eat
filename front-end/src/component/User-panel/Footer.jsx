import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-500 text-white py-8 ">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold">Let's Eat</h3>
          <p className="mt-2 text-gray-200">Enjoy the best dining experience with us. Quality food, great ambiance, and exclusive discounts.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/" className="hover:text-gray-300 transition">Home</a></li>
            <li><a href="/book-table" className="hover:text-gray-300 transition">Book a Table</a></li>
            <li><a href="/book-event" className="hover:text-gray-300 transition">Book an Event</a></li>
            <li><a href="/contact" className="hover:text-gray-300 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <ul className="mt-2 space-y-2">
            <li className="flex items-center justify-center sm:justify-start">
              <FaMapMarkerAlt className="mr-2 text-white" /> 123 Food Street, City
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <FaPhoneAlt className="mr-2 text-white" /> +123 456 7890
            </li>
            <li className="flex items-center justify-center sm:justify-start">
              <FaEnvelope className="mr-2 text-white" /> contact@letseat.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="flex justify-center sm:justify-start mt-2 space-x-4">
            <a href="#" className="text-white hover:text-gray-300 transition text-2xl"><FaFacebook /></a>
            <a href="#" className="text-white hover:text-gray-300 transition text-2xl"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-300 transition text-2xl"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} Let's Eat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
