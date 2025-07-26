import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Architectural Design', href: '/services' },
    { name: 'Construction', href: '/services' },
    { name: 'Interior Design', href: '/services' },
    { name: 'Real Estate Media', href: '/services' },
    { name: 'Land Development', href: '/services' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Downloads', href: '/downloads' },
  ];

  const { isDarkMode } = useTheme();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={isDarkMode ? "/assets/images/SB_Logo-removebg-preview.png" : "/assets/images/SB_Logo_white_background-removebg-preview copy.png"}
                alt="Soldiers Builders Logo"
                className="h-10 w-auto object-contain drop-shadow"
                style={{ maxWidth: 48 }}
              />
              <div>
                <h3 className="text-xl font-bold text-white">Soldiers Builders</h3>
                <p className="text-gray-400 mt-2">
                  We build your dreams. Synonymous with refined living,
                  architectural excellence, and uncompromising quality.
                </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/soldiersbuilders/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Plot 16, Road 504H, Sector 16, Jolshiri Abashon, Dhaka
                </span>
              </div>
              <a href="tel:+8801769100680" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-200">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400 hover:text-yellow-400">+880 1769-100680</span>
              </a>
              <a href="tel:+8801711164217" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-200">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400 hover:text-yellow-400">+880 1711-164217</span>
              </a>
              <a href="mailto:info@soldiersbuilders.com" className="flex items-center space-x-2 hover:text-yellow-400 transition-colors duration-200">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400 hover:text-yellow-400">info@soldiersbuilders.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for latest updates</p>
            </div>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 Soldiers Builders. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;