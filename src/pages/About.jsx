// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaUserGraduate, FaMedal, FaWhatsapp } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaUserGraduate className="text-3xl text-blue-600" />, value: "3,000+", label: "Traders Trained" },
    { icon: <FaMedal className="text-3xl text-blue-600" />, value: "120+", label: "Premium Clients" },
    { icon: <FaChartLine className="text-3xl text-blue-600" />, value: "8+ Years", label: "Experience" }
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
            About TraderPaaji
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Transforming trading with expertise, discipline, and ethical practices.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">My Journey</h2>
              <p className="text-gray-600 mb-4">
                I started as an independent trader in 2017 with a mission to simplify trading and make it accessible to everyone. What began as sharing trading ideas has now grown into a SEBI-registered research firm.
              </p>
              <p className="text-gray-600 mb-4">
                With over 8 years of experience in options and swing trading, I've helped thousands of traders develop disciplined trading strategies and avoid common pitfalls.
              </p>
              <p className="text-gray-600">
                My approach focuses on risk management, trading psychology, and developing robust systems that work in all market conditions.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                SEBI Registered
              </div>
              <div className="absolute -top-6 -left-6 bg-yellow-500 text-white font-bold py-3 px-6 rounded-full">
                8+ Years Experience
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">My Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Only TraderPaaji */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 text-center"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-40 h-40 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900">TraderPaaji</h3>
              <p className="text-blue-600 text-xl mb-4">Founder & Research Analyst</p>
              <p className="text-gray-600 mb-6">
                8+ years trading experience, SEBI Registered (INH000014845)
              </p>
              <p className="text-gray-600">
                I specialize in options trading, swing strategies, and risk management. My mission is to empower traders with knowledge and systems that create sustainable success in the markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 text-gray-900"
            >
              My Trading Philosophy
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg italic"
            >
              <p className="relative">
                <span className="absolute left-0 top-0 transform -translate-x-6 text-4xl text-gray-300">"</span>
                Trading is not about making quick profits, but about consistent risk management and disciplined execution.
              </p>
              <p>
                I believe in empowering traders with knowledge and systems that work in all market conditions.
              </p>
              <p className="relative">
                The market is always right. Our job is to listen, adapt, and respond with disciplined strategies.
                <span className="absolute right-0 bottom-0 transform translate-x-6 text-4xl text-gray-300">"</span>
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <a
                href="/services"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Explore My Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;