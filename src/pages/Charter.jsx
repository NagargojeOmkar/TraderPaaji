// src/pages/Charter.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHandshake, FaBalanceScale, FaHeadset } from 'react-icons/fa';

const Charter = () => {
  const principles = [
    {
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Investor Protection",
      description: "We prioritize the protection of investor interests above all else"
    },
    {
      icon: <FaHandshake className="text-blue-600 text-2xl" />,
      title: "Transparency",
      description: "Clear disclosure of risks, fees, and potential conflicts of interest"
    },
    {
      icon: <FaBalanceScale className="text-blue-600 text-2xl" />,
      title: "Fairness",
      description: "Equal treatment for all clients regardless of portfolio size"
    },
    {
      icon: <FaHeadset className="text-blue-600 text-2xl" />,
      title: "Redressal",
      description: "Timely resolution of investor grievances"
    }
  ];

  const commitments = [
    "Provide accurate and unbiased research reports",
    "Maintain confidentiality of client information",
    "Disclose all material information about recommended securities",
    "Avoid conflicts of interest in research recommendations",
    "Provide clear risk disclosure for all investment advice",
    "Resolve client complaints within 15 days",
    "Maintain proper books of accounts and records",
    "Comply with all SEBI regulations and guidelines"
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
            Investor Charter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Our commitment to protecting investor interests and maintaining the highest ethical standards.
          </motion.p>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Our Core Principles
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center hover:border-blue-600 transition-all"
              >
                <div className="flex justify-center mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitments to Investors</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              As a SEBI-registered Research Analyst (INH000014845), we adhere to the highest standards of ethical conduct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">General Commitments</h3>
              <ul className="space-y-3">
                {commitments.slice(0, 4).map((commitment, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">{commitment}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">Compliance Commitments</h3>
              <ul className="space-y-3">
                {commitments.slice(4).map((commitment, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span className="text-gray-700">{commitment}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grievance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Grievance Redressal</h3>
                <p className="text-blue-100 mb-4">
                  We are committed to resolving investor grievances promptly and fairly.
                </p>
                <p className="text-blue-100">
                  All complaints will be acknowledged within 24 hours and resolved within 15 days.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact for Complaints</h3>
                <p className="text-blue-100 mb-2">Email: complaints@traderpaaji.com</p>
                <p className="text-blue-100 mb-2">Phone: +91 9876543210 (10am-6pm Mon-Fri)</p>
                <p className="text-blue-100">Address: 123 Trading Street, Mumbai, India - 400001</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Charter;