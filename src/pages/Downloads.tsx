import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Image, Video, Archive } from 'lucide-react';

const Downloads = () => {
  const handleDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const downloadCategories = [
    {
      icon: FileText,
      title: "Company Brochures",
      description: "Comprehensive information about our projects and services",
      files: [
        {
          name: "Soldiers Builders Main Profile",
          size: "2.5 MB",
          type: "PDF",
          url: "/assets/images/pdf/Soldiers builders main .pdf"
        },
        {
          name: "Harun's Nest Project Details",
          size: "1.8 MB",
          type: "PDF",
          url: "/assets/images/pdf/Harun nest.pdf"
        },
        {
          name: "SAL Tilottoma Project Details",
          size: "1.2 MB",
          type: "PDF",
          url: "/assets/images/pdf/SAL TILOTTOMA .pdf"
        },
        {
          name: "Mollick's Dream Presentation",
          size: "3.2 MB",
          type: "PPTX",
          url: "/assets/images/pdf/Mollicks dream.pptx"
        }
      ]
    },
    {
      icon: Image,
      title: "Floor Plans",
      description: "Detailed floor plans and layouts for all our projects",
      files: [
        { name: "Harun's Nest Floor Plans", size: "3.4 MB", type: "PDF" },
        { name: "Tilottoma Layout Design", size: "2.8 MB", type: "PDF" },
        { name: "Chandra Neer Floor Plans", size: "3.1 MB", type: "PDF" },
        { name: "All Projects Floor Plans", size: "12.5 MB", type: "ZIP" }
      ]
    },
    {
      icon: Archive,
      title: "Legal Documents",
      description: "Terms, conditions, and legal documentation",
      files: [
        { name: "Terms & Conditions", size: "850 KB", type: "PDF" },
        { name: "Purchase Agreement Template", size: "1.1 MB", type: "PDF" },
        { name: "Payment Schedule Template", size: "640 KB", type: "PDF" },
        { name: "Warranty Information", size: "920 KB", type: "PDF" }
      ]
    },
    {
      icon: Video,
      title: "Project Videos",
      description: "Virtual tours and project showcase videos",
      files: [
        { name: "Soldiers Builders Showcase", size: "45 MB", type: "MP4" },
        { name: "Virtual Project Tour", size: "38 MB", type: "MP4" },
        { name: "Client Testimonials", size: "22 MB", type: "MP4" },
        { name: "Construction Progress", size: "31 MB", type: "MP4" }
      ]
    }
  ];

  const quickDownloads = [
    {
      title: "Soldiers Builders Main Profile",
      description: "Everything you need to know about Soldiers Builders",
      size: "2.5 MB",
      downloads: "2,543",
      url: "/assets/images/pdf/Soldiers builders main .pdf"
    },
    {
      title: "Harun's Nest Project Details",
      description: "Comprehensive details about Harun's Nest project",
      size: "1.8 MB",
      downloads: "1,892",
      url: "/assets/images/pdf/Harun nest.pdf"
    },
    {
      title: "SAL Tilottoma Project Details",
      description: "Detailed information about SAL Tilottoma project",
      size: "1.2 MB",
      downloads: "3,156",
      url: "/assets/images/pdf/SAL TILOTTOMA .pdf"
    },
    {
      title: "Mollick's Dream Presentation",
      description: "Complete presentation for Mollick's Dream project",
      size: "3.2 MB",
      downloads: "1,456",
      url: "/assets/images/pdf/Mollicks dream.pptx"
    }
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
              <span className="text-yellow-400">Downloads</span> Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access brochures, floor plans, legal documents, and multimedia content
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Downloads */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Popular Downloads
            </h2>
            <p className="text-gray-400">
              Most requested documents and resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickDownloads.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <Download className="h-6 w-6 text-yellow-400" />
                </div>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.size}</span>
                  <span>{item.downloads} downloads</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDownload(item.url, item.title)}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Categories */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              All Downloads
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Browse our complete collection of resources organized by category
            </p>
          </motion.div>

          <div className="space-y-12">
            {downloadCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-gray-900 rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-yellow-400 p-3 rounded-lg mr-4">
                    <category.icon className="h-8 w-8 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.files.map((file, fileIndex) => (
                    <motion.div
                      key={fileIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: fileIndex * 0.1 }}
                      className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="text-white font-semibold mb-1">{file.name}</h4>
                          <div className="flex items-center space-x-3 text-sm text-gray-400">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              file.type === 'PDF' ? 'bg-red-600 text-white' :
                              file.type === 'ZIP' ? 'bg-purple-600 text-white' :
                              'bg-blue-600 text-white'
                            }`}>
                              {file.type}
                            </span>
                            <span>{file.size}</span>
                          </div>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => file.url && handleDownload(file.url, file.name)}
                          className="bg-yellow-400 text-gray-900 p-2 rounded-lg hover:bg-yellow-500 transition-colors duration-200"
                        >
                          <Download className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive notifications about new downloads and project updates
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
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
              Need More Information?
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Can't find what you're looking for? Contact our team for personalized assistance
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-900 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-yellow-400 transition-all duration-200"
              >
                Request Custom Document
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;