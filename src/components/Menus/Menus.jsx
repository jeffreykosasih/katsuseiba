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
    className='responsive-card bg-stone-800 flex flex-col items-center justify-center responsive-gap min-h-[240px] sm:min-h-[260px] md:min-h-[280px] hover:shadow-2xl hover:-translate-y-2 group'
  >
    <div className='w-full max-w-[200px] sm:max-w-[180px] md:max-w-[200px] overflow-hidden rounded-xl'>
      <motion.img
        src={img}
        alt={title}
        loading='lazy'
        className='w-full aspect-[16/9] object-cover transition-transform duration-300 group-hover:scale-110'
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      />
    </div>
    <div className='text-center space-y-2'>
      <h2 className='fluid-text-xl font-semibold text-[#EAE4D5] leading-tight'>
        {title}
      </h2>
      <p className='fluid-text-lg font-bold text-[#EAE4D5] opacity-90'>
        {desc}
      </p>
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
    <section id='menu' className='w-full overflow-hidden'>
      <div className='responsive-container responsive-py'>
        {/* Animated section heading */}
        <motion.div
          {...variants.heading}
          className='text-center sm:text-left mb-8 sm:mb-12 md:mb-16'
        >
          <h1 className='fluid-text-3xl font-bold uppercase text-primary mb-2 tracking-wide'>
            Our Menu
          </h1>
          <p className='fluid-text-lg text-stone-600 max-w-2xl mx-auto sm:mx-0'>
            Discover our carefully crafted selection of authentic Japanese
            dishes
          </p>
        </motion.div>

        {/* Responsive grid layout for menu items */}
        <div className='responsive-grid-4 xl:grid-cols-4'>
          {/* Map through menu items with animations */}
          {menuItems.map((item, index) => (
            <MenuItem key={item.id} {...item} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className='text-center mt-12 sm:mt-16'
        >
          <motion.a
            href='#reservations'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='inline-block bg-stone-800 text-[#eae4d5] px-6 sm:px-8 py-3 sm:py-4 rounded-xl fluid-text-lg font-semibold hover:bg-stone-700 transition-all duration-300 shadow-lg hover:shadow-xl'
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById('reservations')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Order Your Favorites
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});

export default Menus;
