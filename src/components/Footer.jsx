import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="  py-10 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-2xl w-full md:w-1/4 text-center flex flex-col items-center justify-between gap-4">
          <h2 className="text-xl font-bold"> 👩‍💻Career Hut</h2>
          <p className="text-sm">
            Empowering aspiring professionals across the globe. Whether you're exploring tech, design, healthcare, or entrepreneurship — Career Hut is your launchpad to success. Need guidance? We’re here to support your journey!
          </p>
          <div className="flex gap-4 text-xl mt-2">
            <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaLinkedin className="hover:text-gray-300 cursor-pointer" />
            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>support@careerhut.com</li>
            <li>+8801221235678</li>
            <li>42, Creativity Lane, Khulna, Bangladesh</li>
          </ul>
        </div>

        {/* Links */}
        <div className="w-full md:w-1/4 flex flex-wrap gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm flex flex-col">
              <NavLink to='/'>Home</NavLink>
            </ul>
          </div>
          <div>
           <h3 className="text-lg font-semibold mb-3 invisible md:visible"> </h3>
            <ul className="space-y-2 text-sm">
              <li>Community</li>
              <li>About Us</li>    
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email.."
            className="w-full px-4 py-2 mb-3 border rounded-full outline-none"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-full flex items-center justify-center gap-2">
            Subscribe →
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Career Hut. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;