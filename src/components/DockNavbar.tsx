import React, { useRef, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

interface DockNavItemProps {
  item: NavItem;
  mouseX: any;
  spring: any;
  distance: number;
  magnification: number;
  baseItemSize: number;
  isActive: boolean;
}

function DockNavItem({
  item,
  mouseX,
  spring,
  distance,
  magnification,
  baseItemSize,
  isActive,
}: DockNavItemProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const mouseDistance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - rect.width / 2;
  });

  const targetScale = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [1, magnification, 1]
  );
  const scale = useSpring(targetScale, spring);

  const targetY = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [0, -4, 0]
  );
  const y = useSpring(targetY, spring);

  return (
    <motion.div
      style={{
        scale,
        y,
      }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        ref={ref}
        to={item.href}
        className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg block cursor-pointer ${
          isActive
            ? 'text-green-400 bg-green-400/15 shadow-lg shadow-green-400/20'
            : 'text-gray-300 hover:text-green-400 hover:bg-green-400/10 hover:shadow-md'
        }`}
      >
        {item.name}
        {isActive && (
          <motion.div
            layoutId="navbar-dock-indicator"
            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        )}
      </Link>
    </motion.div>
  );
}

interface DockNavbarProps {
  navigation: NavItem[];
  className?: string;
  spring?: any;
  magnification?: number;
  distance?: number;
  baseItemSize?: number;
}

export default function DockNavbar({
  navigation,
  className = "",
  spring = { mass: 0.1, stiffness: 200, damping: 15 },
  magnification = 1.1,
  distance = 80,
  baseItemSize = 40,
}: DockNavbarProps) {
  const mouseX = useMotionValue(Infinity);
  const location = useLocation();

  return (
    <div
      onMouseMove={({ pageX }) => {
        mouseX.set(pageX);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
      className={`flex items-center space-x-2 ${className}`}
      role="navigation"
      aria-label="Main navigation"
    >
      {navigation.map((item) => (
        <DockNavItem
          key={item.name}
          item={item}
          mouseX={mouseX}
          spring={spring}
          distance={distance}
          magnification={magnification}
          baseItemSize={baseItemSize}
          isActive={location.pathname === item.href}
        />
      ))}
    </div>
  );
}
