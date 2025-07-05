// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    { icon: <FaMapMarkerAlt className="text-blue-600 text-xl mr-3" />, text: "123 Trading Street, Financial District, Mumbai, India - 400001" },
    { icon: <FaPhone className="text-blue-600 text-xl mr-3" />, text: "+91 9876543210" },
    { icon: <FaEnvelope className="text-blue-600 text-xl mr-3" />, text: "support@traderpaaji.com" },
    { icon: <FaWhatsapp className="text-blue-600 text-xl mr-3" />, text: "+91 9876543210" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com' },
    { icon: <FaTwitter />, url: 'https://twitter.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com' },
    { icon: <FaYoutube />, url: 'https://youtube.com' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919876543210" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Have questions or feedback? Reach out to us and we'll get back to you as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl"
            >
              <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Contact Information</h2>
              
              <div className="space-y-8 bg-blue-50 p-8 rounded-xl shadow-md">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1">{item.icon}</div>
                    <p className="text-gray-700 text-lg">{item.text}</p>
                  </div>
                ))}
              
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Support Hours</h3>
                  <p className="text-gray-700">Monday to Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-semibold mb-6 text-blue-600">Follow Us</h3>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-600 text-2xl transition"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="mt-10 text-center">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-all"
                  >
                    <FaWhatsapp className="mr-2 text-xl" />
                    Chat with us on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;