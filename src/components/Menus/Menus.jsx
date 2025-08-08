import React, { memo } from 'react';
import katsu1 from '../../assets/katsu-1.jpg';
import katsu3 from '../../assets/katsu-3.jpg';
import katsu4 from '../../assets/katsu-4.jpg';
import water1 from '../../assets/water-1.jpg';
import { motion } from 'framer-motion';

// Animation variants
const variants = {
  heading: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  menuItem: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/**
 * Menu items data array
 * Each item contains:
 * - id: unique identifier
 * - title: name of the dish
 * - desc: price of the item
 * - img: imported image asset
 * - delay: animation delay timing
 */
// Menu items configuration
const menuItems = [
  {
    id: 1,
    title: 'Chicken Katsu',
    link: '/',
    desc: '$15.99',
    img: katsu1,
    delay: 0.6,
  },
  {
    id: 2,
    title: 'Gyukatsu Curry',
    link: '/',
    desc: '$17.99',
    img: katsu3,
    delay: 0.8,
  },
  {
    id: 3,
    title: 'Tonkatsu Curry',
    link: '/',
    desc: '$16.99',
    img: katsu4,
    delay: 1,
  },
  {
    id: 4,
    title: 'Water Bottle',
    link: '/',
    desc: '$2.99',
    img: water1,
    delay: 1.2,
  },
];

/**
 * Menus Component
 * Displays a grid of menu items with images, titles, and prices.
 * Features:
 * - Responsive grid layout
 * - Animated entrance for each menu item
 * - Hover animations
 * - Consistent styling with the restaurant theme
 */
// MenuItem component for better performance
const MenuItem = memo(({ title, desc, img, index }) => (
  <motion.div
    {...variants.menuItem}
    transition={{ ...variants.menuItem.transition, delay: 0.1 * index }}
    className='bg-stone-800 rounded-xl px-8 py-8 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-col items-center justify-center gap-4 min-h-[260px]'
  >
    <motion.img
      src={img}
      alt={title}
      loading='lazy'
      className='w-[180px] h-[100px] object-cover rounded-xl mx-auto mb-2 relative z-0'
      style={{ boxShadow: '40px 0 60px -30px #EAE4D5 inset' }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
    />
    <div className='text-center'>
      <h2 className='text-xl font-semibold text-[#EAE4D5]'>{title}</h2>
      <p className='text-lg font-semibold text-[#EAE4D5]'>{desc}</p>
    </div>
  </motion.div>
));

/**
 * Menus Component
 * Displays a grid of menu items with images, titles, and prices.
 * Features:
 * - Responsive grid layout
 * - Optimized animations with variants
 * - Lazy loading images
 * - Memoized menu items for better performance
 */
const Menus = memo(() => {
  return (
    <section id='menu'>
      <div className='container pt-12 pb-20'>
        {/* Animated section heading */}
        <motion.h1
          {...variants.heading}
          className='text-2xl font-bold text-left pb-10 uppercase text-primary'
        >
          Our menu
        </motion.h1>

        {/* Responsive grid layout for menu items */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {/* Map through menu items with animations */}
          {menuItems.map((item, index) => (
            <MenuItem key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Menus;
