import React, { useState, memo, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaInstagram, FaTiktok, FaTimes } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

// Animation variants
const variants = {
  footer: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  modal: {
    overlay: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 }
    },
    content: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
      transition: { duration: 0.3 }
    },
    item: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 }
    }
  }
};

// Social media links
const socialLinks = [
  { icon: FaInstagram, url: 'https://www.instagram.com', label: 'Instagram' },
  { icon: FaTiktok, url: 'https://www.tiktok.com', label: 'TikTok' }
];

// Image credits data
const contributors = [
  {
    name: 'Xavier Cheng',
    link: 'https://unsplash.com/photos/a-bowl-filled-with-rice-and-meat-covered-in-sauce-hEeA50ZHo4o',
  },
  {
    name: 'Amar Preciado',
    link: 'https://www.pexels.com/photo/close-up-of-a-chicken-curry-katsu-dish-17593646/',
  },
  {
    name: 'Amar Preciado',
    link: 'https://www.pexels.com/photo/meat-and-rice-17593648/',
  },
  {
    name: 'Ryan Kwok',
    link: 'https://unsplash.com/photos/brown-pastry-on-stainless-steel-tray-d2RYC06lRV0',
  },
  {
    name: 'Kai-Chieh Chan',
    link: 'https://www.pexels.com/photo/a-close-up-shot-of-a-katsukare-5305438/',
  },
  {
    name: 'Yu',
    link: 'https://unsplash.com/photos/black-and-brown-ceramic-bowls-on-brown-wooden-table-gg-FsJHmEdw',
  },
  {
    name: 'Leo Sacchi',
    link: 'https://www.pexels.com/photo/photo-of-people-sitting-in-a-restaurant-taken-from-the-outside-18702888/',
  },
  {
    name: 'Mari',
    link: 'https://www.pexels.com/photo/black-and-white-photo-of-a-woman-looking-at-menu-12389151/',
  },
  {
    name: 'Ahmet ÇÖTÜR',
    link: 'https://www.pexels.com/photo/drinks-by-the-pool-26859058/',
  },
];

// Logo component
const Logo = memo(() => (
  <div className='text-2xl flex items-center gap-2 font-bold uppercase text-[#eae4d5]'>
    <p>KATSU</p>
    <p>SEIBA</p>
  </div>
));

// Social links component
const SocialLinks = memo(() => (
  <div className='text-2xl flex items-center gap-4 text-[#eae4d5]'>
    {socialLinks.map(({ icon: IconComponent, url, label }) => (
      <a
        key={label}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-[#eae4d5]/80 transition-colors'
        aria-label={label}
      >
        <IconComponent className='w-6 h-6' />
      </a>
    ))}
  </div>
));

// Contributor card component
const ContributorCard = memo(({ name, link, index }) => (
  <motion.div
    {...variants.modal.item}
    transition={{ delay: index * 0.05 }}
    className='flex flex-col items-center gap-2 p-3 rounded-md hover:bg-stone-900/5 transition-colors'
  >
    <span className='text-stone-900 text-sm font-medium'>{name}</span>
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      className='text-stone-900/70 hover:text-stone-900 flex items-center gap-1 transition-colors text-xs group'
    >
      View Image
      <FiExternalLink className='group-hover:translate-x-0.5 transition-transform' />
    </a>
  </motion.div>
));

// Credits modal component
const CreditsModal = memo(({ onClose }) => (
  <>
    <motion.div
      {...variants.modal.overlay}
      className='fixed inset-0 bg-black bg-opacity-50 z-50'
      onClick={onClose}
    />
    <motion.div
      {...variants.modal.content}
      className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#eae4d5] p-8 rounded-lg z-50 w-[90%] max-w-xl shadow-xl'
    >
      <div className='flex flex-col items-center mb-6'>
        <h2 className='text-2xl font-bold text-stone-900'>Image Credits</h2>
        <button
          onClick={onClose}
          className='text-stone-900 hover:text-stone-600 transition-colors absolute top-4 right-4'
          aria-label='Close credits'
        >
          <FaTimes size={20} />
        </button>
      </div>
      <div className='grid grid-cols-3 gap-4 max-w-xl mx-auto'>
        {contributors.map((contributor, index) => (
          <ContributorCard key={index} {...contributor} index={index} />
        ))}
      </div>
    </motion.div>
  </>
));

/**
 * Footer Component
 * Displays the website footer with logo, social media links, and image credits.
 * Features:
 * - Memoized components for better performance
 * - Optimized animations with variants
 * - Improved accessibility
 * - Responsive design
 */
const Footer = () => {
  const [showCredits, setShowCredits] = useState(false);

  const toggleCredits = useCallback(() => {
    setShowCredits(prev => !prev);
  }, []);

  return (
    <footer className='bg-stone-900 py-12 mt-12 rounded-t-2xl'>
      {/* Main footer container with fade-in animation */}
      <motion.div
        {...variants.footer}
        className='container flex justify-between items-center'
      >
        <Logo />
        <div className='flex items-center gap-8'>
          <SocialLinks />
          <div className='h-6 w-[1px] bg-[#eae4d5] opacity-30'></div>
          <button
            onClick={toggleCredits}
            className='text-sm text-[#eae4d5] border border-[#eae4d5] px-3 py-1 rounded-md transition-all duration-300 hover:bg-[#eae4d5] hover:text-stone-900 hover:border-[#eae4d5]'
          >
            Credits
          </button>

          <AnimatePresence mode='wait'>
            {showCredits && <CreditsModal onClose={toggleCredits} />}
          </AnimatePresence>
        </div>
      </motion.div>
    </footer>
  );
};

export default memo(Footer);

// <a href="https://www.freepik.com/icon/bun-bread_4852733#fromView=search&page=1&position=63&uuid=24a63b16-af6b-4288-b552-6705d60bb1c0">Icon by GeekClick</a>
