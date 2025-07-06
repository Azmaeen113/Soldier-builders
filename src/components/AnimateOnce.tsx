import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimateOnceProps {
  children: React.ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  transition?: any;
  delay?: number;
  threshold?: number;
  margin?: string;
  [key: string]: any; // For any other motion props
}

const AnimateOnce: React.FC<AnimateOnceProps> = ({
  children,
  className = '',
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6 },
  delay = 0,
  threshold = 0.1,
  margin = "-50px 0px -50px 0px",
  ...motionProps
}) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const isInView = useInView(ref, {
    once: false, // We handle the "once" logic ourselves
    threshold,
    margin
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={hasAnimated ? animate : initial}
      transition={{
        ...transition,
        delay: hasAnimated ? delay : 0
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimateOnce;
