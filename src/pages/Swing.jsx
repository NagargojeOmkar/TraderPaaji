// src/pages/Swing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/ui/PricingCard';
import { FaChartLine, FaClock, FaMobileAlt, FaFileAlt } from 'react-icons/fa';

const Swing = () => {
  const features = [
    { 
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      title: "2-3 Trades Weekly",
      description: "Carefully selected swing opportunities"
    },
    { 
      icon: <FaClock className="text-blue-600 text-2xl" />,
      title: "1-3 Day Holding",
      description: "Perfect for busy professionals"
    },
    { 
      icon: <FaMobileAlt className="text-blue-600 text-2xl" />,
      title: "Mobile Alerts",
      description: "Real-time entry/exit notifications"
    },
    { 
      icon: <FaFileAlt className="text-blue-600 text-2xl" />,
      title: "Detailed Reports",
      description: "Weekly performance analysis"
    }
  ];

  const sampleTrades = [
    { date: "15 Jul 2025", symbol: "NIFTY 19700 CE", entry: "₹85", target: "₹120", exit: "₹118", result: "Profit" },
    { date: "12 Jul 2025", symbol: "BANKNIFTY 46500 PE", entry: "₹92", target: "₹140", exit: "₹142", result: "Profit" },
    { date: "08 Jul 2025", symbol: "RELIANCE FUT", entry: "₹2840", target: "₹2900", exit: "₹2895", result: "Profit" },
    { date: "05 Jul 2025", symbol: "HDFCBANK 1650 CE", entry: "₹45", target: "₹65", exit: "₹42", result: "Stoploss" }
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
            Options Swing Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto text-gray-600"
          >
            Perfect for job holders and busy individuals. Get high-probability swing trades with clear entry and exit levels.
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
              Why Choose Swing Trading?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-3xl mx-auto"
            >
              Swing trading allows you to capture gains in options and futures over a period of a few days to several weeks.
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
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Recent Trade Performance</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Symbol</th>
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
                    <td className="py-3 px-4">{trade.entry}</td>
                    <td className="py-3 px-4">{trade.target}</td>
                    <td className="py-3 px-4">{trade.exit}</td>
                    <td className={`py-3 px-4 font-semibold ${trade.result === "Profit" ? 'text-green-600' : 'text-red-600'}`}>
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
              title="Basic Swing"
              price="₹8,000"
              period="month"
              features={["2 trades per week", "Entry/Exit alerts", "Weekly report", "Email support"]}
            />
            <PricingCard 
              title="Premium Swing"
              price="₹12,000"
              period="month"
              features={["3-4 trades per week", "Priority alerts", "Detailed analysis", "WhatsApp support"]}
              popular={true}
            />
            <PricingCard 
              title="Quarterly Plan"
              price="₹30,000"
              period="3 months"
              features={["All Premium features", "Save ₹6,000", "Personal mentor", "24/7 support"]}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Start Swing Trading Today</h2>
          <p className="text-xl mb-8">
            Join hundreds of successful traders who balance their jobs with profitable trading.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Swing;