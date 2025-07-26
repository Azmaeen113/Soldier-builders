import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, Building, Download, Calendar, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import AnimateOnce from '../components/AnimateOnce';

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
      description: "We build your dreams",
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
      content: "The level of quality and attention to detail in our home is exceptional. Soldiers Builders truly delivers on their promise of luxury living."
    },
    {
      name: "Sarah Khan",
      role: "Property Investor",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with Soldiers Builders was a seamless experience. Their military precision in execution is evident in every aspect of the project."
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

  const heroSlides = [
    {
      id: 1,
      image: "/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg",
      title: "Making Dreams",
      subtitle: "Come to Life",
      tagline: "We build your dreams",
      description: "Military precision meets luxury living. At Soldiers Builders, we shape futures with architectural excellence and uncompromising quality."
    },
    {
      id: 2,
      image: "/assets/images/projects/haruns-nest/IMG-20250517-WA0015.jpg",
      title: "Luxury Living",
      subtitle: "Redefined",
      tagline: "Where elegance meets functionality",
      description: "Experience the perfect blend of modern design and timeless comfort in every detail of our premium developments."
    },
    {
      id: 3,
      image: "/assets/images/projects/tilottoma/m-01_1 - Photo.jpg",
      title: "Excellence in",
      subtitle: "Every Detail",
      tagline: "Crafting homes that inspire",
      description: "From concept to completion, we maintain the highest standards of quality and craftsmanship in every project."
    },
    {
      id: 4,
      image: "/assets/images/projects/tilottoma/m-01_3 - Photo.jpg",
      title: "Your Vision",
      subtitle: "Our Mission",
      tagline: "Building tomorrow's communities today",
      description: "Transform your dreams into reality with our comprehensive real estate solutions and unwavering commitment to excellence."
    },
    {
      id: 5,
      image: "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg",
      title: "Premium",
      subtitle: "Developments",
      tagline: "Setting new standards in luxury",
      description: "Discover exceptional living spaces designed for those who demand nothing but the best in quality and lifestyle."
    },
    {
      id: 6,
      image: "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.44.17_a52b477d.jpg",
      title: "Trusted by",
      subtitle: "Families",
      tagline: "Creating homes that last generations",
      description: "Join hundreds of satisfied families who have chosen Soldiers Builders for their dream homes and investments."
    },
    {
      id: 7,
      image: "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
      title: "Future",
      subtitle: "Ready",
      tagline: "Investing in tomorrow's lifestyle",
      description: "Secure your future with our strategic locations and premium developments that appreciate in value over time."
    }
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { isDarkMode } = useTheme();

  // Letter animation component
  const AnimatedText = ({ text, className, delay = 0, perLetterDelay = 0.05, isTitle = false }: { text: string; className: string; delay?: number; perLetterDelay?: number; isTitle?: boolean }) => {
    return (
      <div className={className}>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: delay + index * perLetterDelay,
              ease: "easeOut"
            }}
            className="inline-block"
            style={isTitle ? {
              WebkitTextStroke: '0.8px #000',
              textShadow: '0 1px 2px rgba(0,0,0,0.5)'
            } : {}}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    );
  };

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(index);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 1.1
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Slideshow */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlideIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
                scale: { duration: 0.8 }
              }}
              className="absolute inset-0"
            >
              <motion.img
                src={heroSlides[currentSlideIndex].image}
                alt="Hero Slide"
                className="w-full h-full object-cover"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 text-white p-3 rounded-full transition-all duration-300 hover:bg-white/10"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 text-white p-3 rounded-full transition-all duration-300 hover:bg-white/10"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlideIndex
                  ? 'bg-yellow-400 scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <AnimatedText 
                    text={heroSlides[currentSlideIndex].title} 
                    className="hero-text-white block"
                    delay={0.2}
                    perLetterDelay={0.05}
                    isTitle={true}
                  />
                  <AnimatedText 
                    text={heroSlides[currentSlideIndex].subtitle} 
                    className="text-green-700 block"
                    delay={0.4}
                    perLetterDelay={0.05}
                    isTitle={true}
                  />
                </h1>
                <AnimatedText 
                  text={heroSlides[currentSlideIndex].tagline} 
                  className="text-xl md:text-2xl text-black max-w-3xl mx-auto hero-tagline font-medium"
                  delay={0.6}
                  perLetterDelay={0.025}
                />
                <AnimatedText 
                  text={heroSlides[currentSlideIndex].description} 
                  className="text-lg text-black max-w-2xl mx-auto leading-relaxed"
                  delay={0.8}
                  perLetterDelay={0.02}
                />
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>
                </Link>
                <motion.a
                  href="tel:+8801769100680"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400/20 hover:text-yellow-300 transition-all duration-200 flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Schedule Visit</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimateOnce
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </AnimateOnce>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnce
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover our premium residential developments that redefine luxury living
            </p>
          </AnimateOnce>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimateOnce
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                delay={index * 0.1}
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
              </AnimateOnce>
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
          <AnimateOnce
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Hear from our satisfied clients who have experienced the Soldiers Builders difference
            </p>
          </AnimateOnce>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimateOnce
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                delay={index * 0.1}
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
              </AnimateOnce>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnce
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ready to Build Your Dream?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have trusted Soldiers Builders with their dreams
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
          </AnimateOnce>
        </div>
      </section>
    </div>
  );
};

export default Home;