import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Home, 
  Zap, 
  Car, 
  Wrench, 
  Droplets,
  Eye,
  CheckCircle 
} from 'lucide-react';

const StandardFeatures = () => {
  const featureCategories = [
    {
      icon: Shield,
      title: "Structural & Engineering",
      color: "bg-red-500",
      features: [
        "Compliant with ACI, ASTM, and BNBC codes",
        "Wind & earthquake-resistant design per BNBC",
        "Professionally designed & cross-checked by structural consultants",
        "Experienced engineering & technical team"
      ]
    },
    {
      icon: Home,
      title: "Entrance & Building Facade",
      color: "bg-blue-500",
      features: [
        "16' high ground floor for grand, royal entry",
        "Decorative water body, garden, and secure gates",
        "Prestigious main gate with logo on polished marble/granite",
        "Fair-face brick finish with partial cladding",
        "CCTV surveillance & well-lit boundary wall"
      ]
    },
    {
      icon: Wrench,
      title: "Doors & Windows",
      color: "bg-green-500",
      features: [
        "Main door: Solid Segun frame (11\") + decorative shutter",
        "Internal doors: Partex veneer (Segun) flush doors",
        "Windows: 3mm-thick sliding aluminum + 2.5mm tinted glass",
        "MS security grille & mosquito net included"
      ]
    },
    {
      icon: Zap,
      title: "Electrical & Safety",
      color: "bg-yellow-500",
      features: [
        "Cummins/Perkins generator (low fuel consumption)",
        "24/7 CCTV surveillance (entrance, staircase, rooftop)",
        "Video monitor in each apartment linked to CCTV",
        "Individual digital meters per apartment"
      ]
    },
    {
      icon: Car,
      title: "Lift Specifications",
      color: "bg-purple-500",
      features: [
        "Hyundai/Mashiba (1000kg/10-person capacity)",
        "1.5 m/sec speed, emergency alarm, inverter",
        "WVF simulator for smooth operation",
        "Glass hatch door with SS mirror etching"
      ]
    },
    {
      icon: Droplets,
      title: "Kitchen & Bathroom Features",
      color: "bg-indigo-500",
      features: [
        "18mm imported granite worktop",
        "Stainless steel sink (Pyramis/COSO/HUIDA)",
        "Electric oven & kitchen hood provision (Bosch/TEKA/SMAB)",
        "Imported commode + cabinet basin (Kohler/ROCA/TOTO)",
        "Chrome fixtures (Grohe/Kohler), custom shower enclosure",
        "CPVC plumbing (RFL/Astral/Sajan)"
      ]
    },
    {
      icon: Eye,
      title: "Flooring & Finishes",
      color: "bg-pink-500",
      features: [
        "Living/dining/bedrooms: 24\"x24\" mirror-polished tiles",
        "Kitchen/bathrooms: 12\"x12\" floor tiles + 24\"x8\" wall tiles",
        "Staircase: 24\"x12\" non-slip tiles",
        "Premium wall finishes throughout"
      ]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      color: "bg-teal-500",
      features: [
        "All materials sourced from reputable manufacturers",
        "Regular quality inspections during construction",
        "Compliance with international building standards",
        "Comprehensive warranty on all installations"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="absolute inset-0">
          <img
            src="/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg"
            alt="Standard Features Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Standard <span className="text-yellow-400">Features</span>
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Premium features included in all our projects - no compromises, no hidden costs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-lg text-white max-w-4xl mx-auto leading-relaxed">
              At Soldiers Builders, we believe luxury should be standard, not optional. Every project
              includes our comprehensive suite of premium features, ensuring that your investment delivers
              exceptional value and enduring quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featureCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`${category.color} p-3 rounded-lg mr-4`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Quality <span className="text-yellow-400">Promise</span>
              </h2>
              <div className="space-y-6 text-white leading-relaxed">
                <p>
                  Every feature listed is not just a specification - it's a promise. We understand that 
                  your home is more than just a building; it's where memories are made, families grow, 
                  and dreams take shape.
                </p>
                <p>
                  That's why we've standardized excellence across all our projects. From the moment you 
                  walk through our grand entrance to the premium finishes in every room, you'll experience 
                  the difference that military precision and luxury standards make.
                </p>
                <p>
                  Our comprehensive warranty and after-sales service ensure that your investment is 
                  protected long after you've received your keys.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/assets/images/projects/tilottoma/m-01_3 - Photo.jpg"
                alt="SAL Tilottoma Project - Premium Features"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Compliance & Standards
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              All our projects meet or exceed international building codes and standards
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { standard: "ACI", description: "American Concrete Institute" },
              { standard: "ASTM", description: "American Society for Testing and Materials" },
              { standard: "BNBC", description: "Bangladesh National Building Code" },
              { standard: "ISO", description: "International Organization for Standardization" }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-xl text-center"
              >
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {standard.standard}
                </div>
                <p className="text-white text-sm">{standard.description}</p>
              </motion.div>
            ))}
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
              Experience the Difference
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              See these premium features in person. Schedule a visit to our model apartments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Schedule Model Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200"
              >
                Download Feature List
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StandardFeatures;