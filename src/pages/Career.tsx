import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Shield } from 'lucide-react';
import AnimateOnce from '../components/AnimateOnce';

const Career = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Military-Inspired Culture",
      description: "Work in an environment that values discipline, precision, and excellence"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Opportunities for professional development and advancement"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance-based rewards and recognition programs"
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Collaborative workplace with experienced professionals"
    }
  ];

  const openings = [
    {
      title: "Senior Architect",
      department: "Design",
      type: "Full-time",
      location: "Dhaka",
      experience: "5+ years",
      description: "Lead architectural design projects and coordinate with engineering teams"
    },
    {
      title: "Construction Manager",
      department: "Operations",
      type: "Full-time",
      location: "Dhaka",
      experience: "7+ years",
      description: "Oversee construction projects and ensure quality standards"
    },
    {
      title: "Interior Designer",
      department: "Design",
      type: "Full-time",
      location: "Dhaka",
      experience: "3+ years",
      description: "Create beautiful and functional interior spaces for our projects"
    },
    {
      title: "Sales Executive",
      department: "Sales",
      type: "Full-time",
      location: "Dhaka",
      experience: "2+ years",
      description: "Drive sales and build relationships with potential clients"
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
              Join Our <span className="text-yellow-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build your career with a company that values excellence, precision, and growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join a team that's shaping the future of luxury real estate in Bangladesh
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimateOnce
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                delay={index * 0.1}
                whileHover={{ y: -5 }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-300"
              >
                <div className="bg-yellow-400 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </AnimateOnce>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Current Openings
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore exciting career opportunities with Soldiers Builders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-medium rounded-full">
                    {job.experience}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-yellow-400">Culture</span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  At Soldiers Builders, we foster a culture of excellence, precision, and continuous growth. 
                  Our military-inspired approach to work means we value discipline, teamwork, and the pursuit 
                  of perfection in everything we do.
                </p>
                <p>
                  We believe in investing in our people because our success depends on their success. 
                  Every team member is valued, heard, and given opportunities to contribute to our mission 
                  of creating exceptional real estate experiences.
                </p>
                <p>
                  Join us and be part of a team that's not just building properties, but crafting legacies 
                  and shaping the future of luxury living in Bangladesh.
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
                src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team Culture"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 to-transparent rounded-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Application Process
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our streamlined hiring process is designed to find the best talent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Apply Online",
                description: "Submit your application through our online portal"
              },
              {
                step: "02",
                title: "Initial Screening",
                description: "HR team reviews your application and experience"
              },
              {
                step: "03",
                title: "Interview",
                description: "Technical and cultural fit assessment"
              },
              {
                step: "04",
                title: "Welcome Aboard",
                description: "Onboarding and integration into our team"
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
                <p className="text-gray-400">{process.description}</p>
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
              Ready to Build Your Career?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Join our team and be part of building the future of luxury real estate
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                View All Openings
              </motion.button>
              <motion.a
                href="mailto:info@soldiersbuilders.com?subject=Job Application - Resume Submission"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200"
              >
                Send Your Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Career;