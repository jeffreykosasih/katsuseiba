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
  <motion.li {...variants.link} className='relative'>
    <a
      href={link}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className='font-semibold text-stone-950 hover:text-stone-600 transition-all duration-300 relative py-2 px-3 rounded-lg hover:bg-stone-200/50 whitespace-nowrap'
    >
      {title}
    </a>
  </motion.li>
));

// Logo component
const Logo = memo(() => (
  <div className='flex items-center gap-1 sm:gap-2 font-bold uppercase'>
    <p className='text-lg sm:text-xl md:text-2xl text-primary tracking-wide'>
      KATSU SEIBA
    </p>
  </div>
));

// MenuButton component
const MenuButton = memo(({ onClick }) => (
  <button
    onClick={onClick}
    aria-label='Toggle menu'
    className='p-2 sm:p-3 hover:bg-stone-200/50 rounded-lg transition-all duration-300 active:scale-95'
  >
    <FaBars size={20} className='sm:w-6 sm:h-6 text-stone-900' />
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
    <nav className='w-full py-4 sm:py-6 safe-top'>
      {/* Main navbar container with fade-in animation */}
      <motion.div
        {...variants.navbar}
        className='responsive-container flex justify-between items-center min-h-[48px] sm:min-h-[56px] md:min-h-[64px]'
      >
        <Logo />

        {/* Desktop menu - hidden on mobile */}
        <div className='hidden md:flex items-center'>
          {/* Navigation links */}
          <ul className='flex items-center gap-4 lg:gap-8 fluid-text-base font-medium'>
            {menuItemsWithHandlers.map((item) => (
              <NavLink key={item.id} {...item} />
            ))}
          </ul>
        </div>

        {/* Mobile hamburger menu button */}
        <div className='md:hidden flex items-center'>
          <MenuButton onClick={toggleMenu} />
        </div>
      </motion.div>

      {/* Responsive mobile menu overlay with animation */}
      <AnimatePresence mode='wait'>
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
