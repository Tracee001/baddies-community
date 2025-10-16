import React from "react";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => (
  <footer className="bg-pink-700 text-white py-10 mt-12">
    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Brand Section */}
      <div>
        <h2 className="text-xl font-bold">Baddies in Tech</h2>
        <p className="mt-2 text-sm text-gray-200">
          Empowering women in technology through community, mentorship, and growth.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold mb-3">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/about" className="hover:text-gray-300 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="/programs" className="hover:text-gray-300 transition">
              Programs
            </a>
          </li>
          <li>
            <a href="/events" className="hover:text-gray-300 transition">
              Events
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Socials & Contact */}
      <div>
        <h3 className="font-semibold mb-3">Connect with Us</h3>
        <div className="flex gap-5 mb-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="mailto:info@baddiesintech.com"
            className="hover:text-gray-300 transition"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-200">info@baddiesintech.com</p>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div className="mt-10 border-t border-pink-500 pt-4 text-center text-sm text-gray-200">
      &copy; {new Date().getFullYear()} Baddies in Tech. All rights reserved.
    </div>
  </footer>
);

export default Footer;
