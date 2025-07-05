// src/components/layout/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const servicesMenu = [
    { name: 'Intraday Premium', path: '/intraday' },
    { name: 'Options Swing', path: '/swing' },
    { name: 'Equity Premium', path: '/equity' },
    { name: 'All-In-One Combo', path: '/combo' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research Services', path: null, subLinks: servicesMenu },
    { name: 'Complaint Board', path: '/complaints' },
    { name: 'Investor Charter', path: '/charter' },
    { name: 'Disclosure', path: '/disclosure' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white text-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
              <span className="text-blue-600 font-bold text-xl">Trader<span className="text-yellow-500">Paaji</span></span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((item) => (
                <div key={item.name} className="relative">
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `px-3 py-2 rounded-md text-sm font-medium transition ${
                          isActive
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <div
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                      className="relative"
                    >
                      <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center">
                        {item.name} <FaChevronDown className="ml-1 text-xs" />
                      </button>
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-gray-200"
                          >
                            <div className="py-1">
                              {item.subLinks.map((subItem) => (
                                <NavLink
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                  onClick={() => setDropdownOpen(false)}
                                >
                                  {subItem.name}
                                </NavLink>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navLinks.map((item) => (
                <div key={item.name}>
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-base font-medium ${
                          isActive
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`
                      }
                      onClick={closeMenu}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <div>
                      <div className="px-3 py-2 text-base font-medium text-gray-700">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.subLinks.map((subItem) => (
                          <NavLink
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            onClick={closeMenu}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;