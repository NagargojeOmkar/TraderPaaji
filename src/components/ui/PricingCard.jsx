// src/components/ui/PricingCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, period, features, popular = false }) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
        popular ? 'border-2 border-yellow-500 relative' : 'border-gray-200'
      }`}
    >
      {popular && (
        <div className="bg-yellow-500 text-white text-center py-1 text-sm font-bold">
          MOST POPULAR
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-blue-600">{price}</span>
          <span className="text-gray-600"> / {period}</span>
        </div>
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition-all">
          Select Plan
        </button>
      </div>
    </motion.div>
  );
};

export default PricingCard;