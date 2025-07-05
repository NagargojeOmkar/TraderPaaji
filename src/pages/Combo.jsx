// src/pages/Combo.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaChartLine, FaMobileAlt, FaHeadset } from 'react-icons/fa';

const Combo = () => {
  const features = [
    { 
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      title: "Complete Market Coverage",
      description: "Intraday, swing, and long-term investments"
    },
    { 
      icon: <FaStar className="text-blue-600 text-2xl" />,
      title: "Premium Research",
      description: "Highest quality analysis across all segments"
    },
    { 
      icon: <FaMobileAlt className="text-blue-600 text-2xl" />,
      title: "Real-time Alerts",
      description: "Instant notifications for all services"
    },
    { 
      icon: <FaHeadset className="text-blue-600 text-2xl" />,
      title: "Priority Support",
      description: "Dedicated relationship manager"
    }
  ];

  const services = [
    { name: "Intraday Premium", description: "Daily 2-3 high probability intraday calls" },
    { name: "Options Swing", description: "2-3 trades per week with 1-3 day holding" },
    { name: "Equity Premium", description: "Long-term fundamentally strong stock picks" },
    { name: "Personal Mentor", description: "One-on-one guidance sessions" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            All-In-One Combo Package
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Get complete market coverage with our premium bundle and save over 20% compared to individual services.
          </motion.p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Ultimate Trading Experience
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Our combo package provides everything you need for successful trading across all timeframes.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:border-blue-600 transition-all"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Included Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Combo Pricing</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">All-In-One Combo Package</h3>
                  <p className="text-blue-100">Complete access to all services</p>
                </div>
                <div className="mt-6 md:mt-0 text-center">
                  <div className="text-4xl font-bold">₹35,000 <span className="text-lg">/ month</span></div>
                  <div className="text-yellow-400 font-semibold mt-2">Save ₹12,000 compared to individual plans</div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-700/50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-white">Quarterly Plan</h4>
                  <p className="text-2xl font-bold text-white">₹95,000</p>
                  <p className="text-green-400">Save ₹10,000</p>
                </div>
                <div className="bg-blue-700/50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-white">Annual Plan</h4>
                  <p className="text-2xl font-bold text-white">₹3,50,000</p>
                  <p className="text-green-400">Save ₹70,000</p>
                </div>
              </div>
              
              <button className="w-full mt-8 bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 rounded-md shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                Get Full Access Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Comprehensive Trading Journey</h2>
          <p className="text-xl mb-8">
            Join our premium combo package and get access to all our research services.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Combo;