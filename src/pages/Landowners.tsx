import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Landowners = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Maximize Land Value",
      description: "Transform your land into a premium residential development with guaranteed returns"
    },
    {
      icon: Shield,
      title: "Risk-Free Partnership",
      description: "No upfront investment required from your side - we handle all development costs"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Work with our experienced team of architects, engineers, and construction professionals"
    },
    {
      icon: Handshake,
      title: "Transparent Process",
      description: "Clear agreements, regular updates, and fair profit sharing throughout the project"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Site Visit & Assessment",
      description: "Our team conducts a thorough evaluation of your land including location, size, accessibility, and development potential."
    },
    {
      step: "02",
      title: "Detailed Proposal & Terms",
      description: "We prepare a comprehensive proposal with project details, timelines, and profit-sharing arrangements."
    },
    {
      step: "03",
      title: "Joint Venture Agreement",
      description: "Legal documentation and agreement signing with transparent terms and conditions."
    },
    {
      step: "04",
      title: "Construction & Development",
      description: "We handle all aspects of construction, from design to completion, with regular progress updates."
    },
    {
      step: "05",
      title: "Handover & Profit Sharing",
      description: "Upon completion, you receive your share of apartments or equivalent value as agreed."
    }
  ];

  const requirements = [
    "Clear title and ownership documents",
    "Minimum 3 katha land size",
    "Accessible location with proper road connectivity",
    "Suitable for residential development",
    "Free from legal disputes",
    "Proper utility connections available"
  ];

  const testimonials = [
    {
      name: "Abdul Karim",
      location: "Jolshiri Abashon",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Partnering with Soldiers Builders was the best decision for my land. They handled everything professionally and delivered beyond expectations. The profit sharing was fair and transparent."
    },
    {
      name: "Fatima Begum",
      location: "Chondrima Model Town",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "I was impressed by their military precision and attention to detail. The project was completed on time and the quality exceeded my expectations. Highly recommended for land development."
    }
  ];

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
              Partner with <span className="text-yellow-400">Soldiers Builders</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your land into a premium residential development with guaranteed returns
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join successful landowners who have maximized their land value through our partnership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-300"
              >
                <div className="bg-yellow-400 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined process ensures a smooth partnership from start to finish
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 bg-gray-900 rounded-xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-yellow-400 text-gray-900 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <ArrowRight className="h-12 w-12 text-yellow-400 rotate-90 md:rotate-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Land Requirements
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                We work with landowners whose properties meet certain criteria for successful development
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Land Development"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from landowners who have successfully partnered with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-8 rounded-xl"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Financial Benefits
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Understanding the financial advantages of partnering with Soldiers Builders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-4">40-60%</div>
              <h3 className="text-xl font-semibold text-white mb-4">Profit Share</h3>
              <p className="text-gray-400">
                Landowners typically receive 40-60% of the developed units or equivalent value
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-4">0 TK</div>
              <h3 className="text-xl font-semibold text-white mb-4">Your Investment</h3>
              <p className="text-gray-400">
                No upfront investment required - we handle all development costs
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800 p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-4">300-500%</div>
              <h3 className="text-xl font-semibold text-white mb-4">Value Increase</h3>
              <p className="text-gray-400">
                Typical land value increase through premium development
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Let's discuss how we can transform your land into a profitable investment
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Schedule Site Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200"
              >
                Get Free Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landowners;