import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInView } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      // Also scroll the document element and body for better browser compatibility
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Execute immediately
    scrollToTop();

    // Also execute after a small delay to ensure content is loaded
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

// Custom hook for one-time scroll animations
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(ref, {
    once: false, // We'll handle the "once" logic ourselves
    margin: "-100px 0px -100px 0px",
    ...options
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return {
    ref,
    shouldAnimate: hasAnimated,
    isInView
  };
};

export default ScrollToTop;
