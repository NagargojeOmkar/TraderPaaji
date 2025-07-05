// src/pages/Disclosure.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle, FaChartLine, FaBalanceScale, FaInfoCircle } from 'react-icons/fa';

const Disclosure = () => {
  const disclosures = [
    {
      icon: <FaExclamationTriangle className="text-yellow-500 text-2xl" />,
      title: "Risk Disclosure",
      content: "Trading in securities involves substantial risk of loss. Past performance is not indicative of future results. Clients should consider their financial situation, risk tolerance, and consult with a financial advisor before trading."
    },
    {
      icon: <FaChartLine className="text-yellow-500 text-2xl" />,
      title: "Performance Disclosure",
      content: "Research reports may contain simulated or hypothetical performance results that have certain inherent limitations. Unlike an actual performance record, simulated results do not represent actual trading."
    },
    {
      icon: <FaBalanceScale className="text-yellow-500 text-2xl" />,
      title: "Conflict of Interest",
      content: "Our research analysts or their relatives may have financial interest in the subject company. However, we ensure that such interests do not influence our research recommendations."
    },
    {
      icon: <FaInfoCircle className="text-yellow-500 text-2xl" />,
      title: "General Disclosure",
      content: "TraderPaaji is a SEBI Registered Research Analyst (Registration No. INH000014845). Registration granted by SEBI does not imply any level of skill or training."
    }
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
            Disclosure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Important disclosures as mandated by SEBI for Research Analysts.
          </motion.p>
        </div>
      </section>

      {/* Disclosures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Regulatory Disclosures
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              As per SEBI (Research Analysts) Regulations, 2014
            </motion.p>
          </div>

          <div className="space-y-8">
            {disclosures.map((disclosure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {disclosure.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{disclosure.title}</h3>
                    <p className="text-gray-600">{disclosure.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">Registration Details</h3>
                <p className="text-gray-600 mb-4">
                  TraderPaaji is registered with SEBI as a Research Analyst under SEBI (Research Analysts) Regulations, 2014.
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Registration Number:</span> INH000014845
                </p>
                <p className="text-gray-700">
                  <span className="font-bold">Validity:</span> Perpetual
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2 text-blue-600">Contact Information</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Registered Office:</span> 123 Trading Street, Mumbai, Maharashtra, India - 400001
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-bold">Compliance Officer:</span> compliance@traderpaaji.com
                </p>
                <p className="text-gray-600">
                  <span className="font-bold">SEBI Contact:</span> +91 22 26449000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclosure;