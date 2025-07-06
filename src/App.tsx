import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Services from './pages/Services';
import StandardFeatures from './pages/StandardFeatures';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Career from './pages/Career';
import FAQs from './pages/FAQs';
import Downloads from './pages/Downloads';
import Landowners from './pages/Landowners';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/services" element={<Services />} />
              <Route path="/standard-features" element={<StandardFeatures />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/career" element={<Career />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/landowners" element={<Landowners />} />
            </Routes>
          </motion.main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;