import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Home, Car, Users, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const ongoingProjects = [
    {
      id: 1,
      name: "Harun's Nest",
      slug: "haruns-nest",
      location: "Road: 502/e, Plot No-003, Sector-16, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg",
      description: "Tranquil south-facing retreat near the lake. A serene, residential enclave of quiet sophistication.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 9,
      facing: "South-West Corner Plot",
      status: "ongoing",
      features: ["Gym", "Office", "Meeting Space", "Rooftop Party Place"]
    },
    {
      id: 2,
      name: "SAL Tilottoma",
      slug: "tilottoma",
      location: "Plot No- 069, Road No- 304, Sector-11, Jolshiri Abashon",
      image: "/assets/images/projects/tilottoma/m-01_1 - Photo.jpg",
      description: "A tranquil residential haven, just a one-minute stroll from the lake. Nature and comfort, side by side.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      facing: "South East Facing Corner Plot",
      status: "ongoing",
      features: ["Double Unit", "Lake Proximity", "Corner Plot"]
    },
    {
      id: 3,
      name: "Jolshiri",
      slug: "jolshiri",
      location: "Sector-16, Road# 502/E, Plot# 003, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/haruns-nest/IMG-20250517-WA0017.jpg",
      description: "Elegant south-facing single-row plot with dual access. Beside 140 ft boulevard, steps from a five-star hotel and top university.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      facing: "South East Facing Corner Plot",
      status: "ongoing",
      features: ["Single Unit", "Corner Plot", "Premium Location"]
    },
    {
      id: 4,
      name: "Mollick's Dream",
      slug: "mollicks-dream",
      location: "Sector-08, Road# 412A, Plot# 014, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/mollicks-dream/mollicks dream  text.jpg",
      description: "A tranquil residential haven, just a one-minute stroll from the lake. Nature and comfort, side by side.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 9,
      facing: "South West Facing Plot",
      status: "ongoing",
      features: ["Single Unit", "Lake Proximity", "Premium Location"]
    },
    {
      id: 5,
      name: "Mehnaz",
      slug: "mehnaz",
      location: "Sector-12, Road# 404, Plot# 011, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.44.17_a52b477d.jpg",
      description: "Elegantly positioned right beside the Central Mosque - a home in the heart of spiritual serenity.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      facing: "South West Facing Corner Plot",
      status: "ongoing",
      features: ["Single Unit", "Mosque Adjacent", "Corner Plot"]
    },
    {
      id: 6,
      name: "Habib's Utopia",
      slug: "habibs-utopia",
      location: "Sector-12, Road# 501, Plot# 017, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg",
      description: "Grand north-east corner plot with triple road frontage. Direct access to 140 ft main road. Airy, open & full of light.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 9,
      facing: "North East Corner Plot",
      status: "ongoing",
      features: ["Single Unit", "Triple Road Frontage", "Corner Plot"]
    },
    {
      id: 7,
      name: "Chandra Neer",
      slug: "chandra-neer",
      location: "Sector-06, Road# 406, Plot# 106, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/mehnaz/WhatsApp Image 2025-05-29 at 14.56.13_eb9014f6.jpg",
      description: "Distinguished north-east frontage on 140 ft road — where elegance meets easy access.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      facing: "North East Facing Plot",
      status: "ongoing",
      features: ["Single Unit", "140 ft Road", "Premium Location"]
    },
    {
      id: 8,
      name: "Kashful",
      slug: "kashful",
      location: "Plot 16, Road 504H, Sector 16, Jolshiri Abashon, Dhaka",
      image: "/assets/images/projects/kashful/WhatsApp Image 2025-06-22 at 3.12.25 PM (1).jpeg",
      description: "Experience luxury living at Jolshiri Dhaka — where every day feels like a private retreat. It's not just a home, it's a statement.",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+M+8",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      facing: "Premium Plot",
      status: "ongoing",
      features: ["Single Unit", "Premium Location", "Luxury Living"]
    }
  ];

  const completedProjects = [
    {
      id: 9,
      name: "Lutfor's Uttorayon",
      slug: "lutfors-uttorayon",
      location: "BLDGN # 15, Road # Avenue 2, Block # C, Chondrima Model Town, Mohammadpur, Dhaka",
      image: "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
      description: "Making Dreams Come to Life",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+9",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 10,
      facing: "South Facing Corner Plot",
      status: "completed",
      features: ["Single Unit", "Dual Lift", "Completed"]
    },
    {
      id: 10,
      name: "Bondhu Bilash",
      slug: "bondhu-bilash",
      location: "BLDG # 11, Road # 4, Block # C, Chondrima Model Town, Mohammadpur, Dhaka",
      image: "/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg",
      description: "Making Dreams Come to Life",
      landSize: "5 Katha (3600 SFT)",
      buildingType: "G+9",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 9,
      facing: "South Facing Plot",
      status: "completed",
      features: ["Single Unit", "Dual Lift", "Completed"]
    },
    {
      id: 11,
      name: "Chondrima Bilash",
      slug: "chondrima-bilash",
      location: "BLDG # 10, Road # 9, Block # B, Chondrima Model Town, Mohammadpur, Dhaka",
      image: "/assets/images/projects/chandrima-bilash/WhatsApp Image 2025-06-22 at 3.21.45 PM.jpeg",
      description: "Making Dreams Come to Life",
      landSize: "6 Katha (4320 SFT)",
      buildingType: "B+G+9",
      apartments: 8,
      apartmentSize: "2850 SFT",
      bedrooms: 4,
      parking: 20,
      facing: "Southwest Facing Corner Plot",
      status: "completed",
      features: ["Single Unit", "Dual Lift", "Completed"]
    }
  ];

  const allProjects = [...ongoingProjects, ...completedProjects];

  const filteredProjects = filter === 'all' 
    ? allProjects 
    : allProjects.filter(project => project.status === filter);

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
              Our <span className="text-yellow-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our premium residential developments that redefine luxury living
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <Filter className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium">Filter Projects:</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'all'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('ongoing')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'ongoing'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Ongoing
              </button>
              <button
                onClick={() => setFilter('completed')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'completed'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
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
                      project.status === 'completed'
                        ? 'bg-green-600 text-white'
                        : 'bg-green-600 text-white'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                  <div className="flex items-start space-x-2 mb-4">
                    <MapPin className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">{project.location}</p>
                  </div>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  
                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Home className="h-4 w-4 text-yellow-400" />
                      <div>
                        <div className="text-white font-medium">{project.apartmentSize}</div>
                        <div className="text-gray-400 text-sm">Apartment Size</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-yellow-400" />
                      <div>
                        <div className="text-white font-medium">{project.bedrooms}</div>
                        <div className="text-gray-400 text-sm">Bedrooms</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="h-4 w-4 text-yellow-400" />
                      <div>
                        <div className="text-white font-medium">{project.parking}</div>
                        <div className="text-gray-400 text-sm">Parking</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Home className="h-4 w-4 text-yellow-400" />
                      <div>
                        <div className="text-white font-medium">{project.apartments}</div>
                        <div className="text-gray-400 text-sm">Units</div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Facing */}
                  <div className="mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">Facing:</span>
                      <span className="text-yellow-400 font-medium">{project.facing}</span>
                    </div>
                  </div>

                  <Link to={`/projects/${project.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </Link>
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
              Ready to Invest in Your Future?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Join our family of satisfied clients and secure your dream home today
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
                Download Brochure
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;