import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Rahman",
      role: "Homeowner - Bondhu Bilash",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      content: "The level of quality and attention to detail in our home is exceptional. Soldiers Builders truly delivers on their promise of luxury living. The construction quality, finishing work, and timely delivery exceeded our expectations. We're proud to call this our home.",
      project: "Bondhu Bilash",
      date: "March 2024"
    },
    {
      name: "Sarah Khan",
      role: "Property Investor",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      content: "Working with Soldiers Builders was a seamless experience. Their military precision in execution is evident in every aspect of the project. The transparency in communication and adherence to timelines made this investment decision easy and rewarding.",
      project: "Chondrima Bilash",
      date: "February 2024"
    },
    {
      name: "Dr. Mohammad Ali",
      role: "Landowner Partner",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      content: "The transparency and professionalism shown throughout our joint venture exceeded our expectations. Soldiers Builders handled everything from design to completion with remarkable efficiency. The profit-sharing model is fair and transparent.",
      project: "Kashful",
      date: "January 2024"
    },
    {
      name: "Fatima Begum",
      role: "Homeowner - Harun's Nest",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      content: "From the initial consultation to the final handover, every step was handled with care and professionalism. The quality of materials used and the craftsmanship is outstanding. Our family is extremely happy with our new home.",
      project: "Harun's Nest",
      date: "December 2023"
    },
    {
      name: "Rashid Ahmed",
      role: "Business Owner",
      image: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      content: "I was impressed by the military-level discipline in their project management. Every deadline was met, every promise was kept. The architectural design and construction quality reflect their commitment to excellence.",
      project: "Tilottoma",
      date: "November 2023"
    },
    {
      name: "Nasreen Sultana",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      content: "The interior design and space utilization is exceptional. Every room feels spacious and well-planned. The premium features that come standard with Soldiers Builders projects make it excellent value for money.",
      project: "Mollick's Dream",
      date: "October 2023"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Families" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "100%", label: "Referral Rate" }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Client <span className="text-yellow-400">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our satisfied clients who have experienced the Soldiers Builders difference
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 relative"
              >
                <div className="absolute top-4 right-4">
                  <Quote className="h-8 w-8 text-yellow-400 opacity-20" />
                </div>
                
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{testimonial.project}</span>
                  <span>{testimonial.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch our clients share their experiences in their own words
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-xl p-8 text-center"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Client Stories</h3>
              <p className="text-gray-400 mb-6">
                Watch detailed interviews with our satisfied clients as they share their 
                experience working with Soldiers Builders.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200"
              >
                Watch Client Stories
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 rounded-xl p-8 text-center"
            >
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Handovers</h3>
              <p className="text-gray-400 mb-6">
                Experience the joy of our clients during key handover ceremonies and 
                see their reactions to their dream homes.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200"
              >
                Watch Handover Videos
              </motion.button>
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
              Real stories from real people who chose Soldiers Builders for their dreams
            </p>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                title: "From Dream to Reality",
                client: "The Rahman Family",
                story: "After years of planning and saving, the Rahman family found their perfect home with Soldiers Builders. The journey from initial consultation to key handover was seamless, and today they enjoy their dream home in Bondhu Bilash.",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "A Smart Investment Choice",
                client: "Dr. Mahmud",
                story: "As a busy professional, Dr. Mahmud needed a hassle-free investment opportunity. Soldiers Builders' transparent process and quality construction made the decision easy. His investment in Chondrima Bilash has exceeded expectations.",
                image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8"
              >
                <img
                  src={story.image}
                  alt={story.client}
                  className="w-48 h-48 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{story.title}</h3>
                  <p className="text-yellow-400 font-medium mb-4">{story.client}</p>
                  <p className="text-gray-300 leading-relaxed">{story.story}</p>
                </div>
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
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Experience the Soldiers Builders difference for yourself. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Start Your Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200"
              >
                Read More Reviews
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;