import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname === path.toLowerCase();
  };

  return (
    <header className="sticky top-0 z-50 bg-[#004B8D] shadow-md">
      <div className="flex items-center justify-start px-4 py-3 sm:px-6 sm:py-4 gap-4 sm:gap-6">
        {/* Logo - Left Side */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Mahodara NGO Logo"
            className="h-10 w-10 sm:h-14 sm:w-14 object-cover rounded-full border-2 border-white/80 bg-white shadow-sm"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/56?text=Logo';
            }}
          />
          <span className='text-xl sm:text-2xl text-white font-bold hidden sm:inline'>Mahodara NGO</span>
          <span className='text-lg sm:text-2xl text-white font-bold sm:hidden'>Mahodara</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-2 lg:gap-8">
            <li>
              <Link
                to="/"
                className={`px-3 lg:px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                  isActive('/')
                    ? 'text-[#FFDE73] border-[#FFDE73]'
                    : 'text-white border-b-2 border-transparent hover:text-[#FFDE73] hover:border-[#FFDE73]'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className={`px-3 lg:px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                  isActive('/donate')
                    ? 'text-[#FFDE73] border-[#FFDE73]'
                    : 'text-white border-b-2 border-transparent hover:text-[#FFDE73] hover:border-[#FFDE73]'
                }`}
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                className={`px-3 lg:px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                  isActive('/event')
                    ? 'text-[#FFDE73] border-[#FFDE73]'
                    : 'text-white border-b-2 border-transparent hover:text-[#FFDE73] hover:border-[#FFDE73]'
                }`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`px-3 lg:px-4 py-2 text-base font-medium transition-all duration-200 border-b-2 ${
                  isActive('/contact') || isActive('/Contact')
                    ? 'text-[#FFDE73] border-[#FFDE73]'
                    : 'text-white border-b-2 border-transparent hover:text-[#FFDE73] hover:border-[#FFDE73]'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Button - Right Side */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-auto p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu - Centered */}
      {isOpen && (
        <nav className="md:hidden bg-[#003D6B] border-t border-blue-400">
          <ul className="flex flex-col divide-y divide-blue-400">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className={`block px-6 py-4 text-base font-medium transition-all duration-200 ${
                  isActive('/')
                    ? 'bg-[#002D50] text-[#FFDE73] border-l-4 border-[#FFDE73]'
                    : 'text-white hover:bg-[#002D50]'
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                onClick={closeMenu}
                className={`block px-6 py-4 text-base font-medium transition-all duration-200 ${
                  isActive('/donate')
                    ? 'bg-[#002D50] text-[#FFDE73] border-l-4 border-[#FFDE73]'
                    : 'text-white hover:bg-[#002D50]'
                }`}
              >
                Donate
              </Link>
            </li>
            <li>
              <Link
                to="/event"
                onClick={closeMenu}
                className={`block px-6 py-4 text-base font-medium transition-all duration-200 ${
                  isActive('/event')
                    ? 'bg-[#002D50] text-[#FFDE73] border-l-4 border-[#FFDE73]'
                    : 'text-white hover:bg-[#002D50]'
                }`}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={closeMenu}
                className={`block px-6 py-4 text-base font-medium transition-all duration-200 ${
                  isActive('/contact') || isActive('/Contact')
                    ? 'bg-[#002D50] text-[#FFDE73] border-l-4 border-[#FFDE73]'
                    : 'text-white hover:bg-[#002D50]'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;