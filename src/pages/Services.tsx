import React from 'react';
import { motion } from 'framer-motion';
import { 
  PenTool, 
  Hammer, 
  Palette, 
  Camera, 
  TreePine, 
  Home, 
  ClipboardCheck,
  TestTube 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: "Architectural, Structural Engineering, Electrical, and Plumbing Design",
      description: "Tailored for performance and aesthetics with specialized design services that bring your vision to life through intelligent design.",
      features: ["Custom Architectural Design", "Structural Engineering", "MEP Design", "3D Visualization"]
    },
    {
      icon: TestTube,
      title: "Soil Testing & Site Analysis",
      description: "Ensuring structural safety through accurate ground insights and comprehensive site evaluation for optimal foundation planning.",
      features: ["Soil Bearing Capacity", "Site Survey", "Geological Analysis", "Foundation Recommendations"]
    },
    {
      icon: Hammer,
      title: "Construction & Supervision",
      description: "High-precision construction with strict quality control and expert site management ensuring every detail meets our standards.",
      features: ["Project Management", "Quality Control", "Site Supervision", "Timeline Management"]
    },
    {
      icon: Palette,
      title: "Interior Design",
      description: "Personalized, luxurious interiors that elevate daily living and reflect refined taste with attention to every detail.",
      features: ["Space Planning", "Furniture Selection", "Color Coordination", "Lighting Design"]
    },
    {
      icon: Camera,
      title: "Real Estate Media",
      description: "Expert guidance in land and apartment transactions with transparency, strategy, and professionalism at every step.",
      features: ["Property Photography", "Marketing Materials", "Virtual Tours", "Promotional Videos"]
    },
    {
      icon: TreePine,
      title: "Land Development & Landscaping",
      description: "Enhancing land value through intelligent development and exquisite outdoor design that complements the architecture.",
      features: ["Site Development", "Landscape Design", "Garden Planning", "Outdoor Lighting"]
    },
    {
      icon: Home,
      title: "Apartment Buy/Sale",
      description: "End-to-end oversight that guarantees timely delivery, budget alignment, and complete peace of mind for our clients.",
      features: ["Property Valuation", "Legal Documentation", "Transaction Management", "After-sales Support"]
    },
    {
      icon: ClipboardCheck,
      title: "Project Management",
      description: "Comprehensive project oversight from conception to completion with military precision and attention to detail.",
      features: ["Timeline Planning", "Budget Management", "Quality Assurance", "Risk Management"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800" style={{ marginTop: '64px' }}>
        <div className="absolute inset-0">
          <img
            src="/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.44.17_a52b477d.jpg"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Comprehensive real estate solutions with military precision and luxury standards
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-3 rounded-lg group-hover:bg-yellow-500 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              From initial consultation to final handover, we ensure excellence at every step
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your vision and requirements"
              },
              {
                step: "02",
                title: "Design & Planning",
                description: "Creating detailed architectural and structural plans"
              },
              {
                step: "03",
                title: "Construction",
                description: "Executing with precision and quality control"
              },
              {
                step: "04",
                title: "Handover",
                description: "Delivering your dream with complete satisfaction"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-yellow-400 text-gray-900 text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-white">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="text-yellow-400">Soldiers Builders</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg flex-shrink-0">
                    <ClipboardCheck className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Military Precision</h3>
                    <p className="text-white">Every project executed with the discipline and attention to detail of military operations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg flex-shrink-0">
                    <ClipboardCheck className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-white">50+ completed projects with 100% on-time delivery and satisfied clients.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-400 p-2 rounded-lg flex-shrink-0">
                    <ClipboardCheck className="h-6 w-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Quality Assurance</h3>
                    <p className="text-white">Rigorous quality control processes ensure every detail meets our high standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/assets/images/projects/haruns-nest/IMG-20250517-WA0015.jpg"
                alt="Harun's Nest Project - Quality Construction"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-xl"></div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our comprehensive services
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Get Free Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;