import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, Building, Download, Calendar, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      name: "Harun's Nest",
      slug: "haruns-nest",
      location: "Sector-16, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg",
      description: "Tranquil south-facing retreat near the lake",
      size: "2850 SFT",
      bedrooms: 4,
      status: "Ongoing"
    },
    {
      id: 2,
      name: "SAL Tilottoma",
      slug: "tilottoma",
      location: "Sector-11, Jolshiri Abashon",
      image: "/assets/images/projects/tilottoma/m-01_1 - Photo.jpg",
      description: "A tranquil residential haven, just a one-minute stroll from the lake",
      size: "2850 SFT",
      bedrooms: 4,
      status: "Ongoing"
    },
    {
      id: 3,
      name: "Mehnaz",
      slug: "mehnaz",
      location: "Sector-12, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.44.17_a52b477d.jpg",
      description: "Elegantly positioned right beside the Central Mosque",
      size: "2850 SFT",
      bedrooms: 4,
      status: "Ongoing"
    },
    {
      id: 4,
      name: "Bondhu Bilash",
      slug: "bondhu-bilash",
      location: "Chondrima Model Town, Mohammadpur, Dhaka",
      image: "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
      description: "Making Dreams Come to Life",
      size: "2850 SFT",
      bedrooms: 4,
      status: "Completed"
    }
  ];

  const testimonials = [
    {
      name: "Ahmed Rahman",
      role: "Homeowner",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The level of quality and attention to detail in our home is exceptional. Soldiers Builders BD truly delivers on their promise of luxury living."
    },
    {
      name: "Sarah Khan",
      role: "Property Investor",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with Soldiers Builders BD was a seamless experience. Their military precision in execution is evident in every aspect of the project."
    },
    {
      name: "Dr. Mohammad Ali",
      role: "Landowner Partner",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The transparency and professionalism shown throughout our joint venture exceeded our expectations. Highly recommended."
    }
  ];

  const stats = [
    { number: "50+", label: "Completed Projects" },
    { number: "500+", label: "Happy Families" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "On-Time Delivery" }
  ];

  const heroImages = [
    "/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg",
    "/assets/images/projects/haruns-nest/IMG-20250517-WA0015.jpg",
    "/assets/images/projects/tilottoma/m-01_1 - Photo.jpg",
    "/assets/images/projects/tilottoma/m-01_3 - Photo.jpg",
    "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg",
    "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.44.17_a52b477d.jpg",
    "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg"
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10"></div>
          {heroImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt="Project Slide"
              className={`w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 ${idx === currentHeroIndex ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: idx === currentHeroIndex ? 5 : 0 }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="hero-text-white">Making Dreams</span>
              <br />
              <span className="text-green-700">Come to Life</span>
            </h1>
            <p className="text-xl md:text-2xl hero-text-white max-w-3xl mx-auto hero-tagline">
              We don't just build properties — we craft legacies
            </p>
            <p className="text-lg hero-text-white max-w-2xl mx-auto">
              Military precision meets luxury living. At Soldiers Builders BD, we shape futures with
              architectural excellence and uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 flex items-center space-x-2"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="h-5 w-5" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Visit</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
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

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our premium residential developments that redefine luxury living
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed'
                        ? 'bg-green-600 text-white'
                        : 'bg-green-600 text-white'
                    }`}>
                      {project.status === 'Ongoing' ? 'Ongoing' : project.status}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.location}</p>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-yellow-400 font-semibold">{project.size}</div>
                        <div className="text-gray-400 text-sm">Size</div>
                      </div>
                      <div className="text-center">
                        <div className="text-yellow-400 font-semibold">{project.bedrooms}</div>
                        <div className="text-gray-400 text-sm">Bedrooms</div>
                      </div>
                    </div>
                  </div>
                  <Link to={`/projects/${project.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 flex items-center space-x-2 mx-auto"
              >
                <span>View All Projects</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Link to="/downloads">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-200 cursor-pointer"
              >
                <Download className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Download Brochure</h3>
                <p className="text-gray-400 text-sm">Get detailed information about our projects</p>
              </motion.div>
            </Link>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-200 cursor-pointer"
              >
                <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Book Now</h3>
                <p className="text-gray-400 text-sm">Schedule a visit to our projects</p>
              </motion.div>
            </Link>
            <Link to="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-200 cursor-pointer"
              >
                <Phone className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                <p className="text-gray-400 text-sm">Get in touch with our team</p>
              </motion.div>
            </Link>
            <Link to="/gallery">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-200 cursor-pointer"
              >
                <Building className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">View Gallery</h3>
                <p className="text-gray-400 text-sm">Explore our project galleries</p>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our satisfied clients who have experienced the Soldiers Builders BD difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
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
              Ready to Build Your Dream?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted Soldiers Builders BD with their dreams
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.a
                href="tel:+8801769100680"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </motion.a>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200 flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Visit</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;