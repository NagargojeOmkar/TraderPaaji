// src/pages/Home.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChartLine, FaBullseye, FaBrain, FaArrowRight, FaQuoteLeft, FaWhatsapp } from 'react-icons/fa';

const Home = () => {
  // Testimonial state for carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Services data
  const services = [
    {
      title: 'Intraday Premium',
      description: 'Daily 2-3 high probability intraday stock and options calls with live support.',
      points: ['Nifty & BankNifty Options', 'Entry, Target, Stoploss', 'WhatsApp & Telegram Updates'],
      price: '₹15,000 / month',
      path: '/intraday',
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
      badge: "Most Popular",
    },
    {
      title: 'Options Swing',
      description: 'Swing trades in options and futures for job holders with less screen time.',
      points: ['2-3 Trades per week', 'Holding period 1-3 days', 'WhatsApp & Telegram Updates'],
      price: '₹12,000 / month',
      path: '/swing',
      icon: <FaBullseye className="text-blue-600 text-2xl" />,
    },
    {
      title: 'Equity Premium',
      description: 'Long term equity investments with high growth potential and strong fundamentals.',
      points: ['Thorough Research Reports', 'Entry, Target, Stoploss', 'Quarterly Updates'],
      price: '₹10,000 / month',
      path: '/equity',
      icon: <FaChartLine className="text-blue-600 text-2xl" />,
    },
    {
      title: 'All-In-One Combo',
      description: 'Get all three services at a discounted price.',
      points: ['Intraday Premium', 'Options Swing', 'Equity Premium'],
      price: '₹30,000 / month',
      discount: 'Save ₹7,000',
      path: '/combo',
      icon: <FaBrain className="text-blue-600 text-2xl" />,
      badge: "Best Value",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Professional Trader',
      content: 'TraderPaaji\'s intraday calls have transformed my trading. I\'ve consistently made profits for the last 6 months with his precise entry and exit strategies.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Singh',
      role: 'Equity Investor',
      content: 'The fundamental research provided in the Equity Premium service is exceptional. I\'ve gained over 40% returns in my portfolio in the last year.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vikram Mehta',
      role: 'Job Holder Trader',
      content: 'As someone with a full-time job, the Options Swing service has been perfect for me. I get quality trades without needing to watch the market all day.',
      rating: 4,
    },
    {
      id: 4,
      name: 'Sanjay Patel',
      role: 'Combo Subscriber',
      content: 'The combo package is worth every rupee. It gives me comprehensive market coverage across all timeframes with expert guidance.',
      rating: 5,
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How do I subscribe to a service?',
      answer: 'You can subscribe by clicking the "Buy Now" button on the respective service page and making the payment. We accept all major payment methods including UPI, Net Banking, and Credit/Debit Cards.',
    },
    {
      question: 'Is there a refund policy?',
      answer: 'We offer a 3-day refund policy if you are not satisfied with the service. However, after 3 days, no refunds will be processed. Please review our terms and conditions for more details.',
    },
    {
      question: 'What is the performance track record?',
      answer: 'We maintain a transparent track record of all our calls. You can check the performance on our disclosure page which is updated monthly as per SEBI regulations.',
    },
    {
      question: 'Do you provide training?',
      answer: 'Yes, we conduct regular training sessions. Please contact us for personalized training programs tailored to your needs.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can reach us via WhatsApp (+91 9876543210), email (support@traderpaaji.com), or through the contact form on our website. We typically respond within 24 hours on business days.',
    },
    {
      question: 'Are your services suitable for beginners?',
      answer: 'Absolutely! We provide guidance for traders at all levels. For beginners, we recommend starting with our educational content before subscribing to our premium services.',
    },
  ];

  // Function to handle testimonial navigation
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            >
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-4"
              >
                SEBI Registered: INH000014845
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight"
              >
                Transforming Trading with <span className="text-blue-600">Expertise</span> and Insight
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 mb-6 max-w-2xl"
              >
                TraderPaaji, SEBI-Registered Research Analyst with over 8 years of experience in options and swing trading.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mb-6 bg-blue-100 p-4 rounded-lg inline-block"
              >
                <p className="text-blue-800 font-semibold text-xl">
                  <span className="text-2xl">3,000+</span> traders trained, <span className="text-2xl">120+</span> happy premium clients
                </p>
              </motion.div>
              
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mb-8 space-y-3 max-w-xl"
              >
                <li className="flex items-center text-gray-800">
                  <span className="text-green-500 mr-2 text-xl">✓</span> 
                  <span className="text-lg">Live Market Support & Guidance</span>
                </li>
                <li className="flex items-center text-gray-800">
                  <span className="text-green-500 mr-2 text-xl">✓</span> 
                  <span className="text-lg">Intraday & Swing Trading Insights</span>
                </li>
                <li className="flex items-center text-gray-800">
                  <span className="text-green-500 mr-2 text-xl">✓</span> 
                  <span className="text-lg">Trading Psychology & Risk Management</span>
                </li>
              </motion.ul>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center"
                >
                  Join me and start trading smarter!
                  <FaArrowRight className="ml-2" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80" />
                <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg">
                  SEBI Registered
                </div>
                <div className="absolute -top-6 -left-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-full">
                  8+ Years Experience
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center relative text-gray-900"
          >
            Our Premium Services
            <div className="w-20 h-1 bg-green-500 mx-auto mt-3"></div>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            Choose from our research services designed to cater to different trading styles and preferences
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xl hover:border-yellow-500 transition-all duration-300"
              >
                {service.badge && (
                  <span className="bg-blue-600 text-white font-bold py-1 px-3 rounded-full text-sm absolute top-4 right-4">
                    {service.badge}
                  </span>
                )}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        {service.icon}
                        <h3 className="text-xl font-bold ml-3 text-gray-900">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="mb-4 space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-800">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex justify-between items-center">
                    <div>
                      <span className="text-xl font-bold text-blue-600">{service.price}</span>
                      {service.discount && (
                        <span className="ml-2 text-green-500 font-semibold text-sm">{service.discount}</span>
                      )}
                    </div>
                    <Link
                      to={service.path}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-all"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link to="/combo" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-bold">
              View All Services <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { value: "8+", label: "Years Experience" },
              { value: "3,000+", label: "Traders Trained" },
              { value: "120+", label: "Happy Clients" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-white text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center relative text-gray-900"
          >
            What Our Clients Say
            <div className="w-20 h-1 bg-green-500 mx-auto mt-3"></div>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-12 max-w-3xl mx-auto"
          >
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </motion.p>
          
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex items-start mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</h3>
                    <p className="text-blue-600">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <FaQuoteLeft className="absolute top-0 left-0 text-gray-300 text-4xl -mt-2 -ml-1" />
                  <p className="text-gray-600 italic pl-8">"{testimonials[currentTestimonial].content}"</p>
                </div>
                
                <div className="flex mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonials[currentTestimonial].rating ? 'text-yellow-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="bg-white hover:bg-gray-100 text-blue-600 p-2 rounded-full shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`w-3 h-3 rounded-full ${idx === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-white hover:bg-gray-100 text-blue-600 p-2 rounded-full shadow-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-center relative text-gray-900"
          >
            Frequently Asked Questions
            <div className="w-20 h-1 bg-green-500 mx-auto mt-3"></div>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-12"
          >
            Have questions? We've got answers to help you get started.
          </motion.p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <motion.button
                  whileHover={{ backgroundColor: '#f3f4f6' }}
                  className="w-full flex justify-between items-center p-4 bg-white text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 bg-white border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-white"
          >
            Ready to Elevate Your Trading Journey?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl mb-8 text-white"
          >
            Contact us today and take the first step towards disciplined and profitable trading.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;