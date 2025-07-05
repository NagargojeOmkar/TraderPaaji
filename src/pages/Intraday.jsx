// src/pages/Intraday.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/ui/PricingCard';
import { FaChartLine, FaClock, FaMobileAlt, FaFileAlt } from 'react-icons/fa';

const Intraday = () => {
  const features = [
    { 
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      title: "2-3 Calls Daily",
      description: "High probability intraday opportunities"
    },
    { 
      icon: <FaClock className="text-blue-600 text-2xl" />,
      title: "Real-time Updates",
      description: "Live market entry and exit alerts"
    },
    { 
      icon: <FaMobileAlt className="text-blue-600 text-2xl" />,
      title: "Mobile Alerts",
      description: "WhatsApp & Telegram notifications"
    },
    { 
      icon: <FaFileAlt className="text-blue-600 text-2xl" />,
      title: "Daily Reports",
      description: "Performance analysis and insights"
    }
  ];

  const sampleTrades = [
    { date: "15 Jul 2025", symbol: "RELIANCE", action: "Buy", entry: "₹2,850", target: "₹2,920", exit: "₹2,918", result: "Target Hit" },
    { date: "14 Jul 2025", symbol: "HDFCBANK", action: "Sell", entry: "₹1,650", target: "₹1,610", exit: "₹1,608", result: "Target Hit" },
    { date: "13 Jul 2025", symbol: "INFY", action: "Buy", entry: "₹1,420", target: "₹1,450", exit: "₹1,445", result: "Partial Target" },
    { date: "12 Jul 2025", symbol: "TATAMOTORS", action: "Sell", entry: "₹980", target: "₹950", exit: "₹985", result: "Stoploss Hit" }
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
            Intraday Premium Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Daily high-probability intraday calls with live market support and precise entry, target, and stoploss levels.
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
              What's Included?
            </motion.h2>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Recent Trade Performance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Stock</th>
                  <th className="py-3 px-4 text-left">Action</th>
                  <th className="py-3 px-4 text-left">Entry</th>
                  <th className="py-3 px-4 text-left">Target</th>
                  <th className="py-3 px-4 text-left">Exit</th>
                  <th className="py-3 px-4 text-left">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sampleTrades.map((trade, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                    <td className="py-3 px-4">{trade.date}</td>
                    <td className="py-3 px-4 font-medium">{trade.symbol}</td>
                    <td className={`py-3 px-4 ${trade.action === "Buy" ? 'text-green-600' : 'text-red-600'}`}>
                      {trade.action}
                    </td>
                    <td className="py-3 px-4">{trade.entry}</td>
                    <td className="py-3 px-4">{trade.target}</td>
                    <td className="py-3 px-4">{trade.exit}</td>
                    <td className={`py-3 px-4 font-semibold ${trade.result.includes('Target') ? 'text-green-600' : 'text-red-600'}`}>
                      {trade.result}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-gray-500 text-sm text-center">
            *Past performance is not indicative of future results. Trading involves risk of capital.
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Basic Plan"
              price="₹12,000"
              period="month"
              features={["1-2 calls daily", "Entry/Exit alerts", "Email support", "Basic reports"]}
            />
            <PricingCard 
              title="Premium Plan"
              price="₹15,000"
              period="month"
              features={["2-3 calls daily", "Live WhatsApp support", "Priority alerts", "Detailed analysis"]}
              popular={true}
            />
            <PricingCard 
              title="Pro Plan"
              price="₹40,000"
              period="3 months"
              features={["All Premium features", "Save ₹5,000", "Personal mentor", "Advanced tools"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Intraday Trading Journey Today</h2>
          <p className="text-xl mb-8">
            Join hundreds of successful traders who have transformed their trading with our premium intraday service.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Intraday;