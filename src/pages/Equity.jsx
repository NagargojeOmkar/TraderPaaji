// src/pages/Equity.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/ui/PricingCard';
import { FaChartLine, FaSearchDollar, FaShieldAlt, FaBullseye } from 'react-icons/fa';

const Equity = () => {
  const features = [
    { 
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      title: "Fundamental Analysis",
      description: "In-depth company research and valuation"
    },
    { 
      icon: <FaSearchDollar className="text-blue-600 text-2xl" />,
      title: "Growth Potential",
      description: "Focus on high-growth opportunities"
    },
    { 
      icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
      title: "Risk Management",
      description: "Stoploss and position sizing guidance"
    },
    { 
      icon: <FaBullseye className="text-blue-600 text-2xl" />,
      title: "Target Prices",
      description: "Clear entry and exit strategies"
    }
  ];

  const performanceData = [
    { stock: "RELIANCE", entry: "₹2,450", current: "₹2,850", gain: "+16.3%" },
    { stock: "TCS", entry: "₹3,200", current: "₹3,650", gain: "+14.1%" },
    { stock: "HDFCBANK", entry: "₹1,420", current: "₹1,680", gain: "+18.3%" },
    { stock: "INFY", entry: "₹1,350", current: "₹1,520", gain: "+12.6%" }
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
            Equity Premium Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Long-term wealth creation through fundamentally strong stocks with high growth potential.
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
              Our Research Methodology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              We combine fundamental analysis, technical indicators, and market sentiment to identify high-potential stocks.
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

      {/* Performance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Portfolio Performance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Stock</th>
                  <th className="py-3 px-4 text-left">Entry Price</th>
                  <th className="py-3 px-4 text-left">Current Price</th>
                  <th className="py-3 px-4 text-left">Gain/Loss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {performanceData.map((stock, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                    <td className="py-3 px-4 font-medium">{stock.stock}</td>
                    <td className="py-3 px-4">{stock.entry}</td>
                    <td className="py-3 px-4">{stock.current}</td>
                    <td className={`py-3 px-4 font-semibold ${stock.gain.includes('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {stock.gain}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-gray-500 text-sm text-center">
            *Data as of July 2025. Past performance is not indicative of future results.
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Silver Plan"
              price="₹8,000"
              period="month"
              features={["2 stock recommendations", "Basic research reports", "Email updates", "Quarterly review"]}
            />
            <PricingCard 
              title="Gold Plan"
              price="₹12,000"
              period="month"
              features={["4 stock recommendations", "Detailed research reports", "WhatsApp support", "Monthly portfolio review"]}
              popular={true}
            />
            <PricingCard 
              title="Platinum Plan"
              price="₹30,000"
              period="3 months"
              features={["All Gold features", "Save ₹6,000", "Priority access", "Personal mentor"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Build Long-Term Wealth</h2>
          <p className="text-xl mb-8">
            Invest in fundamentally strong companies with our expert research guidance.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Equity;