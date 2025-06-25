import React, { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import ResponsiveMenu from './ResponsiveMenu';

// Animation variants
const variants = {
  navbar: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  link: {
    initial: { opacity: 0.8 },
    whileHover: { opacity: 1, scale: 1.05 },
    transition: { duration: 0.2 },
  },
};

/**
 * Navigation menu configuration
 * Each item contains:
 * - id: unique identifier
 * - title: display text
 * - link: URL or anchor link
 * - onClick: scroll behavior function
 */
// Navigation menu items
const menuItems = [
  {
    id: 1,
    title: 'Home',
    link: '#home',
  },
  {
    id: 2,
    title: 'Menu',
    link: '#menu',
  },
  {
    id: 3,
    title: 'Locations',
    link: '#locations',
  },
  {
    id: 4,
    title: 'Reservations',
    link: '#reservations',
  },
];

/**
 * Navbar Component
 * Displays the main navigation bar with responsive design.
 * Features:
 * - Animated entrance
 * - Desktop and mobile layouts
 * - Smooth scroll navigation
 * - Hamburger menu for mobile
 */
// NavLink component for better performance
const NavLink = memo(({ title, link, onClick }) => (
  <motion.li {...variants.link}>
    <a
      href={link}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className='font-semibold text-stone-950 hover:text-stone-500 transition-colors duration-300'
    >
      {title}
    </a>
  </motion.li>
));

// Logo component
const Logo = memo(() => (
  <div className='text-2xl flex items-center gap-2 font-bold uppercase justify-center'>
    <p className='text-primary'>KATSU SEIBA</p>
  </div>
));

// MenuButton component
const MenuButton = memo(({ onClick }) => (
  <button
    onClick={onClick}
    aria-label='Toggle menu'
    className='p-2 hover:opacity-80 transition-opacity'
  >
    <FaBars size={24} className='text-stone-900' />
  </button>
));

/**
 * Navbar Component
 * Displays the main navigation bar with responsive design.
 * Features:
 * - Optimized with React.memo
 * - Smooth animations
 * - Responsive design
 * - Performance optimized sub-components
 */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const menuItemsWithHandlers = menuItems.map((item) => ({
    ...item,
    onClick:
      item.link === '/'
        ? () => window.scrollTo({ top: 0, behavior: 'smooth' })
        : () => scrollToSection(item.link.slice(1)),
  }));

  return (
    <nav className='py-6 mb-6 rounded-b-2xl'>
      {/* Main navbar container with fade-in animation */}
      <motion.div
        {...variants.navbar}
        className='container flex justify-between items-center min-h-[48px]'
      >
        <Logo />
        {/* Desktop menu - hidden on mobile */}
        <div className='hidden md:block'>
          {/* Navigation links */}
          <ul className='flex items-center gap-8 text-lg'>
            {menuItemsWithHandlers.map((item) => (
              <NavLink key={item.id} {...item} />
            ))}
          </ul>
        </div>

        {/* Mobile hamburger menu button */}
        <div className='md:hidden'>
          <MenuButton onClick={toggleMenu} />
        </div>
      </motion.div>

      {/* Responsive mobile menu overlay with animation */}
      <AnimatePresence>
        {open && (
          <ResponsiveMenu
            isOpen={open}
            setOpen={setOpen}
            menu={menuItemsWithHandlers}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default memo(Navbar);
