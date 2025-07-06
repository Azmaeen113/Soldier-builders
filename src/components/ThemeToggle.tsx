import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-lg bg-gray-800 dark:bg-gray-800 light:bg-gray-200 border border-gray-700 dark:border-gray-700 light:border-gray-300 transition-all duration-300 hover:bg-accent hover:border-accent"
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: isDarkMode ? 1 : 0,
            opacity: isDarkMode ? 1 : 0,
            rotate: isDarkMode ? 0 : 180,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            scale: isDarkMode ? 0 : 1,
            opacity: isDarkMode ? 0 : 1,
            rotate: isDarkMode ? -180 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeToggle;