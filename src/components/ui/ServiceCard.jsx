// src/components/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="card bg-gray-800 text-white overflow-hidden"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold mb-2 text-accent-yellow">{service.title}</h3>
            <p className="text-gray-300 mb-4">{service.description}</p>
          </div>
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
        </div>
        
        <ul className="mb-4 space-y-2">
          {service.points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent-green mr-2">✓</span>
              <span className="text-gray-300">{point}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold">{service.price}</span>
            {service.discount && (
              <span className="ml-2 text-accent-green font-semibold">{service.discount}</span>
            )}
          </div>
          <Link
            to={service.path}
            className="btn-primary"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;