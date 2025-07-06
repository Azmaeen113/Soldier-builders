import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import DockNavbar from './DockNavbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Standard Features', href: '/standard-features' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-2"
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-2 rounded-lg shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Shield className="h-6 w-6 text-gray-900" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-white">Soldiers Builders BD</h1>
                <p className="text-xs text-white">Making Dreams Come to Life</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation with Dock Effect */}
          <div className="hidden md:flex items-center space-x-6">
            <DockNavbar
              navigation={navigation}
              spring={{ mass: 0.1, stiffness: 200, damping: 15 }}
              magnification={1.1}
              distance={80}
              baseItemSize={40}
            />

            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <ThemeToggle />
            </motion.div>

            <Link to="/downloads">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-xl ml-4"
              >
                Downloads
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/50 backdrop-blur-sm">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-all duration-200 rounded-lg ${
                      location.pathname === item.href
                        ? 'text-yellow-400 bg-yellow-400/10 border-l-2 border-yellow-400'
                        : 'text-gray-300 hover:text-yellow-400 hover:bg-gray-700/50 hover:translate-x-1'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="px-3 py-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navigation.length * 0.05 }}
              >
                <Link to="/downloads" className="w-full">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-medium hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 shadow-lg"
                  >
                    Downloads
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;