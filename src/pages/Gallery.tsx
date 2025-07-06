import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ZoomIn } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (imageId: number) => {
    setLoadedImages(prev => new Set(prev).add(imageId));
  };

  const galleryImages = [
    // EXTERIOR PROJECTS - Building exteriors and facades
    {
      id: 1,
      category: 'exterior',
      title: "Harun's Nest - Modern Facade",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0013.jpg',
      description: 'Contemporary architectural design with premium materials'
    },
    {
      id: 2,
      category: 'exterior',
      title: "Harun's Nest - Building View",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0014.jpg',
      description: 'Modern building exterior with premium finishes'
    },
    {
      id: 3,
      category: 'exterior',
      title: "Harun's Nest - Architectural Detail",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0015.jpg',
      description: 'Detailed view of architectural elements'
    },
    {
      id: 4,
      category: 'exterior',
      title: "Harun's Nest - Front Elevation",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0016.jpg',
      description: 'Front elevation showcasing modern design'
    },
    {
      id: 5,
      category: 'exterior',
      title: "Harun's Nest - Side View",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0017.jpg',
      description: 'Side view of the building structure'
    },
    {
      id: 6,
      category: 'exterior',
      title: "Harun's Nest - Complete Structure",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0018.jpg',
      description: 'Complete building structure view'
    },
    {
      id: 7,
      category: 'exterior',
      title: "Harun's Nest - Corner View",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0019.jpg',
      description: 'Corner perspective of the building'
    },
    {
      id: 8,
      category: 'exterior',
      title: "Harun's Nest - Entrance",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0020.jpg',
      description: 'Main entrance design'
    },
    {
      id: 9,
      category: 'exterior',
      title: "Harun's Nest - Final View",
      image: '/assets/images/projects/haruns-nest/IMG-20250517-WA0021.jpg',
      description: 'Final architectural view'
    },
    {
      id: 10,
      category: 'exterior',
      title: "Habib's Utopia Night View",
      image: '/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.29 PM.jpeg',
      description: 'Beautiful night illumination'
    },
    {
      id: 11,
      category: 'exterior',
      title: "Habib's Utopia Evening",
      image: '/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.32 PM.jpeg',
      description: 'Evening view of the building'
    },
    {
      id: 12,
      category: 'exterior',
      title: "Habib's Utopia Facade",
      image: '/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.48 PM.jpeg',
      description: 'Modern facade design'
    },
    {
      id: 13,
      category: 'exterior',
      title: "Habib's Utopia Complete",
      image: '/assets/images/projects/habibs-utopia/WhatsApp Image 2025-06-23 at 3.14.55 PM.jpeg',
      description: 'Complete building view'
    },
    {
      id: 14,
      category: 'exterior',
      title: 'Bondhu Bilash Complex',
      image: '/assets/images/projects/bondhu-bilash/WhatsApp Image 2025-06-22 at 3.10.15 PM.jpeg',
      description: 'Complete residential complex exterior'
    },
    {
      id: 15,
      category: 'exterior',
      title: 'Chandrima Bilash',
      image: '/assets/images/projects/chandrima-bilash/WhatsApp Image 2025-06-22 at 3.21.45 PM.jpeg',
      description: 'Chandrima Bilash project exterior'
    },
    {
      id: 16,
      category: 'exterior',
      title: 'Kashful Project',
      image: '/assets/images/projects/kashful/WhatsApp Image 2025-06-22 at 3.12.25 PM (1).jpeg',
      description: 'Kashful project exterior view'
    },
    
    // INTERIOR DESIGNS - Room interiors and design concepts
    {
      id: 17,
      category: 'interior',
      title: 'Luxury Living Room',
      image: '/assets/images/interior/luxury-living-room-2.jpg',
      description: 'Elegant interior design with premium finishes'
    },
    {
      id: 18,
      category: 'interior',
      title: 'Contemporary Living Space',
      image: '/assets/images/interior/Quiet-luxury-in-a-contemporary-living-room-by-Decorilla-1024x574.jpg',
      description: 'Modern contemporary living room with quiet luxury design'
    },
    {
      id: 19,
      category: 'interior',
      title: 'Luxury Living Room Tables',
      image: '/assets/images/interior/luxury-living-room-tables.jpg',
      description: 'Premium living room with designer furniture'
    },
    {
      id: 20,
      category: 'interior',
      title: 'Family Room Design',
      image: '/assets/images/interior/Family-Room-1366x768.jpg',
      description: 'Modern family room interior design'
    },
    {
      id: 21,
      category: 'interior',
      title: 'Luxury Home Accessories',
      image: '/assets/images/interior/Luxury-home-accessories-Amelia-R.jpg',
      description: 'Luxury home accessories and decor'
    },
    {
      id: 22,
      category: 'interior',
      title: 'Luxury Hall Design',
      image: '/assets/images/interior/L_U_X_U_R_Y_H_A_L_L_1715956191481_1715956321541.jpg',
      description: 'Grand luxury hall with premium finishes'
    },
    {
      id: 23,
      category: 'interior',
      title: 'Premium Living Room',
      image: '/assets/images/interior/PG---Living-Room.jpg',
      description: 'Elegant premium living room design'
    },
    {
      id: 24,
      category: 'interior',
      title: 'Luxury Home Interior',
      image: '/assets/images/interior/NPP-luxury-home-interiors.png',
      description: 'Comprehensive luxury home interior design'
    },
    {
      id: 25,
      category: 'interior',
      title: 'Beige and Green Luxury',
      image: '/assets/images/interior/A-Slice-Of-Luxury-In-Beige-And-Green-Interiors-1.jpg',
      description: 'Luxury interior with beige and green color scheme'
    },
    {
      id: 26,
      category: 'interior',
      title: 'Contemporary Penthouse',
      image: '/assets/images/interior/Contemporary-interior-decorations-breathe-life-into-this-penthouse-living-rooms-design..jpg',
      description: 'Contemporary penthouse living room design'
    },
    {
      id: 27,
      category: 'interior',
      title: 'Luxury Interior Trends',
      image: '/assets/images/interior/2022 Interior Design Trends for Luxury Homes Featured.jpg',
      description: '2022 luxury home interior design trends'
    },
    {
      id: 28,
      category: 'interior',
      title: 'Luxury Apartment Interior',
      image: '/assets/images/interior/luxury-apartment-24-3d-model-9bc90307fe.jpg',
      description: 'Luxury apartment 3D interior model'
    },
    {
      id: 29,
      category: 'interior',
      title: 'Luxury Fitness Center',
      image: '/assets/images/interior/luxury-gym-interior-design-3-1024x768.jpg',
      description: 'Premium gym facility with modern equipment'
    },
    {
      id: 30,
      category: 'interior',
      title: 'Hotel-Style Gym',
      image: '/assets/images/interior/luxury-hotel-gym-design-45707-11618401.jpg',
      description: 'Luxury hotel-style fitness center design'
    },
    {
      id: 31,
      category: 'interior',
      title: 'Elegant Dining Room',
      image: '/assets/images/interior/LiV-Din_001_View02.jpg',
      description: 'Sophisticated dining area with modern furnishing'
    },
    {
      id: 32,
      category: 'interior',
      title: 'Custom Interior Design',
      image: '/assets/images/interior/Untitled design.jpg',
      description: 'Custom luxury interior design'
    },
    {
      id: 33,
      category: 'interior',
      title: 'Modern Interior Concept',
      image: '/assets/images/interior/1-1.png',
      description: 'Modern interior design concept'
    },
    
    // CONSTRUCTION PROJECTS - Building progress and development
    {
      id: 34,
      category: 'construction',
      title: 'Tilottoma Construction Phase 1',
      image: '/assets/images/projects/tilottoma/m-01_1 - Photo.jpg',
      description: 'Construction progress - Foundation phase'
    },
    {
      id: 35,
      category: 'construction',
      title: 'Tilottoma Construction Phase 2',
      image: '/assets/images/projects/tilottoma/m-01_2 - Photo.jpg',
      description: 'Construction progress - Structure development'
    },
    {
      id: 36,
      category: 'construction',
      title: 'Tilottoma Construction Phase 3',
      image: '/assets/images/projects/tilottoma/m-01_3 - Photo.jpg',
      description: 'Construction progress - Building framework'
    },
    {
      id: 37,
      category: 'construction',
      title: 'Tilottoma Construction Phase 4',
      image: '/assets/images/projects/tilottoma/m-01_4 - Photo.jpg',
      description: 'Construction progress - Advanced stage'
    },
    {
      id: 38,
      category: 'construction',
      title: 'Tilottoma Construction Phase 5',
      image: '/assets/images/projects/tilottoma/m-01_5 - Photo.jpg',
      description: 'Construction progress - Near completion'
    },
    {
      id: 39,
      category: 'construction',
      title: 'Mehnaz Project - Foundation',
      image: '/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.44.17_a52b477d.jpg',
      description: 'Foundation work in progress'
    },
    {
      id: 40,
      category: 'construction',
      title: 'Mehnaz Project - Structure',
      image: '/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.45.02_147aaa7c.jpg',
      description: 'Building structure development'
    },
    {
      id: 41,
      category: 'construction',
      title: 'Mehnaz Project - Progress',
      image: '/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.50.35_f605f9ea.jpg',
      description: 'Construction progress update'
    },
    {
      id: 42,
      category: 'construction',
      title: 'Mehnaz Project - Development',
      image: '/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.50.56_588fef0b.jpg',
      description: 'Ongoing development work'
    },
    {
      id: 43,
      category: 'construction',
      title: 'Mehnaz Project - Framework',
      image: '/assets/images/projects/mehnaz/WhatsApp Image 2025-05-28 at 15.51.23_94f4fba3.jpg',
      description: 'Building framework construction'
    },
    {
      id: 44,
      category: 'construction',
      title: 'Mehnaz Project - Latest Update',
      image: '/assets/images/projects/mehnaz/WhatsApp Image 2025-06-21 at 17.45.55_d1853486.jpg',
      description: 'Latest construction progress'
    }
  ];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === filter);

  const categories = [
    { key: 'all', label: 'All Images' },
    { key: 'exterior', label: 'Exterior' },
    { key: 'interior', label: 'Interior' },
    { key: 'construction', label: 'Construction' }
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
              Project <span className="text-yellow-400">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our completed projects and ongoing developments through our comprehensive gallery
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.key}
                onClick={() => setFilter(category.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  filter === category.key
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Loading Progress */}
          {filteredImages.length > 0 && loadedImages.size < filteredImages.length && (
            <div className="mb-8 text-center">
              <div className="inline-flex items-center space-x-2 text-gray-400">
                <motion.div
                  className="w-4 h-4 border-2 border-gray-400 border-t-green-600 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <span>Loading images... ({loadedImages.size}/{filteredImages.length})</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative">
                  <OptimizedImage
                    src={image.image}
                    alt={image.title}
                    className="w-full h-64 group-hover:scale-105 transition-transform duration-300"
                    width={350}
                    height={256}
                    quality={70}
                    priority={index < 9}
                    onLoad={() => handleImageLoad(image.id)}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-yellow-400 p-3 rounded-full"
                    >
                      <ZoomIn className="h-6 w-6 text-gray-900" />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-yellow-400 text-gray-900 text-sm font-medium rounded-full capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-gray-400">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your vision and let us bring your dream home to life
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
