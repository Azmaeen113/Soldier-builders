import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQs = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqCategories = [
    {
      title: "Booking Process",
      faqs: [
        {
          question: "How do I book an apartment?",
          answer: "To book an apartment, visit our sales office or contact our sales team. You'll need to select your preferred unit, complete the booking form, and make the initial payment as per our payment schedule."
        },
        {
          question: "What documents do I need for booking?",
          answer: "You'll need a valid national ID card or passport, recent passport-sized photographs, and proof of income. Additional documents may be required based on your payment method."
        },
        {
          question: "Can I book an apartment online?",
          answer: "Currently, we require in-person visits for apartment bookings to ensure you can view the unit and understand all terms. However, you can express interest online and our team will guide you through the process."
        }
      ]
    },
    {
      title: "Legal Process",
      faqs: [
        {
          question: "What is the legal process for buying an apartment?",
          answer: "The legal process includes deed registration, mutation, and obtaining necessary clearances. Our legal team handles all documentation and ensures compliance with local regulations."
        },
        {
          question: "Is the land ownership clear?",
          answer: "Yes, all our projects are developed on clear title land. We conduct thorough due diligence and provide clear title documents to all buyers."
        },
        {
          question: "What happens if there are legal issues?",
          answer: "We have a dedicated legal team that handles any legal matters. Our commitment includes resolving any legal issues that may arise during the development process."
        }
      ]
    },
    {
      title: "Payment Plans",
      faqs: [
        {
          question: "What payment plans do you offer?",
          answer: "We offer flexible payment plans including down payment with monthly installments, quarterly payments, and lump sum payments. Our team will help you choose the best option for your financial situation."
        },
        {
          question: "Can I get a bank loan for the apartment?",
          answer: "Yes, we work with several leading banks to facilitate home loans. Our team can help you with the loan application process and connect you with our banking partners."
        },
        {
          question: "What happens if I miss a payment?",
          answer: "We understand that circumstances can change. Contact our accounts team immediately if you anticipate any payment delays. We work with clients to find suitable solutions."
        }
      ]
    },
    {
      title: "Construction Standards",
      faqs: [
        {
          question: "What construction standards do you follow?",
          answer: "We follow international construction standards including ACI, ASTM, and BNBC codes. All our projects are designed to be earthquake and wind resistant as per BNBC requirements."
        },
        {
          question: "What quality control measures do you have?",
          answer: "We have strict quality control processes at every stage of construction. Our experienced engineering team conducts regular inspections and ensures all work meets our high standards."
        },
        {
          question: "Are your buildings earthquake resistant?",
          answer: "Yes, all our buildings are designed to be earthquake resistant according to BNBC standards. We use advanced structural engineering to ensure safety and durability."
        }
      ]
    },
    {
      title: "Handover Timelines",
      faqs: [
        {
          question: "When will my apartment be ready?",
          answer: "Construction timelines vary by project, but typically range from 24-30 months from groundbreaking. We provide regular progress updates and maintain transparency about timelines."
        },
        {
          question: "What happens during handover?",
          answer: "During handover, you'll receive your apartment keys, all relevant documents, warranty information, and a comprehensive walkthrough of your new home."
        },
        {
          question: "What if there are delays?",
          answer: "We are committed to on-time delivery. In the rare case of delays due to unforeseen circumstances, we maintain transparent communication and work to minimize any impact."
        }
      ]
    },
    {
      title: "After-sales Service",
      faqs: [
        {
          question: "What warranty do you provide?",
          answer: "We provide comprehensive warranty coverage for structural elements, electrical systems, and plumbing. Specific warranty terms are detailed in your purchase agreement."
        },
        {
          question: "How do I report maintenance issues?",
          answer: "Contact our customer service team through phone, email, or our online portal. We have a dedicated maintenance team that responds promptly to all service requests."
        },
        {
          question: "Do you provide property management services?",
          answer: "Yes, we offer property management services for our completed projects. This includes maintenance, security, and general upkeep of common areas."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const uniqueIndex = categoryIndex * 1000 + faqIndex;
    setOpenFAQ(openFAQ === uniqueIndex ? null : uniqueIndex);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800" style={{ marginTop: '64px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo Section */}
          <div className="flex justify-center mb-8">
            <img
              src="/assets/images/SB_Logo_white_background-removebg-preview copy.png"
              alt="Soldiers Builders Logo"
              className="w-full max-w-4xl h-auto object-contain"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{
              WebkitTextStroke: '0.8px #000',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            }}>
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our projects, processes, and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-8 border-b border-yellow-400 pb-4">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const uniqueIndex = categoryIndex * 1000 + faqIndex;
                  const isOpen = openFAQ === uniqueIndex;
                  
                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: faqIndex * 0.1 }}
                      className="bg-gray-800 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold text-white">
                          {faq.question}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-yellow-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-yellow-400" />
                        )}
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? "auto" : 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
                >
                  Contact Our Team
                </motion.button>
              </Link>
              <motion.a
                href="tel:+8801769100680"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200"
              >
                Schedule a Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+880 1769-100680</p>
              <p className="text-gray-400">+880 1711-164217</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">📧</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <a href="mailto:info@soldiersbuilders.com" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                info@soldiersbuilders.com
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400">Plot 16, Road 504H, Sector 16, Jolshiri Abashon, Dhaka</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;