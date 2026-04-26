import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
} from "react-icons/fa";
import { Heart, Mail, Phone } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#004B8D] text-white w-full">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">
        {/* Mobile-First Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          
          {/* About Section */}
          <div className="space-y-4 sm:space-y-5">
            <div className="flex items-center gap-2 sm:gap-3">
              <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-[#FFDE73] flex-shrink-0" />
              <h5 className="text-lg sm:text-xl font-bold">Mahodara NGO</h5>
            </div>
            <p className="text-sm sm:text-base text-blue-100 leading-relaxed">
              Dedicated to creating a compassionate, sustainable world. Based in Surathkal, Karnataka, we foster social responsibility and environmental protection for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-5">
            <h5 className="text-lg sm:text-xl font-bold">Quick Links</h5>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm sm:text-base text-blue-100 hover:text-[#FFDE73] transition-colors duration-200 font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/event"
                  className="text-sm sm:text-base text-blue-100 hover:text-[#FFDE73] transition-colors duration-200 font-medium"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/donate"
                  className="text-sm sm:text-base text-blue-100 hover:text-[#FFDE73] transition-colors duration-200 font-medium"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="text-sm sm:text-base text-blue-100 hover:text-[#FFDE73] transition-colors duration-200 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-5">
            <h5 className="text-lg sm:text-xl font-bold">Contact</h5>
            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+918861216449"
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-blue-100 hover:text-[#FFDE73] transition-colors duration-200"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span>+91 88612 16449</span>
              </a>
              <a
                href="mailto:mahodara.ngo@gmail.com"
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-blue-100 hover:text-[#FFDE73] transition-colors duration-200"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span>mahodara.ngo@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4 sm:space-y-5">
            <h5 className="text-lg sm:text-xl font-bold">Follow Us</h5>
            <div className="flex gap-4 sm:gap-5">
              <a
                href="https://www.instagram.com/mahodara_ngo"
                className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-white/10 hover:bg-[#FFDE73] rounded-lg transition-all duration-200 text-base sm:text-lg hover:text-[#004B8D]"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20"></div>

        {/* Copyright Section */}
        <div className="pt-6 sm:pt-8 md:pt-10 text-center">
          <p className="text-xs sm:text-sm text-blue-100">
            © {currentYear} Mahodara NGO. All rights reserved. | Made for a compassionate, sustainable world.
          </p>
        </div>
      </div>

      {/* Mobile Safe Area Bottom */}
      <div className="h-safe-area-bottom"></div>
    </footer>
  );
}

export default Footer;