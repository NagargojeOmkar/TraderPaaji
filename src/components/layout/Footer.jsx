// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Intraday Premium', path: '/intraday' },
    { name: 'Options Swing', path: '/swing' },
    { name: 'Equity Premium', path: '/equity' },
    { name: 'All-In-One Combo', path: '/combo' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Complaint Board', path: '/complaints' },
    { name: 'Investor Charter', path: '/charter' },
    { name: 'Disclosure', path: '/disclosure' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaYoutube />, url: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-white text-gray-700 pt-12 pb-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Trader<span className="text-yellow-500">Paaji</span></h3>
            <p className="text-gray-600">
              SEBI Registered Research Analyst (INH000014845). Providing expert trading insights and education.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-blue-600 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-600 hover:text-blue-600 transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 text-xl transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-gray-600">support@traderpaaji.com</p>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-600">
          <p>© {currentYear} TraderPaaji. All rights reserved.</p>
          <p className="mt-2 text-sm">SEBI Registration No: INH000014845</p>
          <p className="mt-2 text-sm">
            Disclaimer: Investment in securities market are subject to market risks. 
            Read all the related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;