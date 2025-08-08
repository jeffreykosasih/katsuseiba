import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import katsu1 from '../../assets/katsu-1.jpg';
import katsu2 from '../../assets/katsu-2.jpg';
import katsu3 from '../../assets/katsu-3.jpg';
import { FadeRight, FadeLeft } from '../../utility/animation';

// Animation variants
const variants = {
  background: {
    initial: { opacity: 0 },
    animate: { opacity: 0.9 },
    transition: { duration: 1 },
  },
  carousel: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.5, ease: 'easeInOut' },
  },
};

// Carousel images configuration
const carouselImages = [
  { src: katsu1, alt: 'Katsu Dish 1' },
  { src: katsu2, alt: 'Katsu Dish 2' },
  { src: katsu3, alt: 'Katsu Dish 3' },
];

/**
 * Hero Component
 * Main landing section featuring an image carousel and call-to-action.
 * Uses Framer Motion for smooth animations and transitions.
 *
 * Features:
 * - Auto-rotating image carousel
 * - Responsive design
 * - Smooth animations
 * - Call-to-action button
 */
const Hero = memo(() => {
  // State for managing image carousel
  const [currentImage, setCurrentImage] = useState(0);

  // Handle image transition with useCallback
  const transitionImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % carouselImages.length);
  }, []);

  // Setup auto-rotation interval
  useEffect(() => {
    const timer = setInterval(transitionImage, 5000);
    return () => clearInterval(timer);
  }, [transitionImage]);

  return (
    <section className='w-full responsive-container'>
      <div className='relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] max-h-screen flex items-center justify-center overflow-hidden bg-stone-800 rounded-2xl sm:rounded-3xl'>
        {/* Static background image with fade-in animation */}
        <motion.img
          src={katsu1}
          alt='Restaurant Background'
          className='absolute inset-0 w-full h-full object-cover object-center z-0'
          style={{ opacity: 0.85 }}
          {...variants.background}
        />

        {/* Overlay for better text readability */}
        <div className='absolute inset-0 bg-gradient-to-r from-stone-900/60 via-stone-900/40 to-stone-900/60 z-5'></div>

        <div className='relative z-10 w-full responsive-flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] responsive-px responsive-py'>
          {/* Left side with auto-rotating carousel */}
          <motion.div
            variants={FadeRight(0.4)}
            initial='hidden'
            animate='visible'
            className='w-full sm:w-1/2 flex justify-center items-center mb-8 sm:mb-0'
          >
            <div className='w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[480px]'>
              <AnimatePresence mode='wait'>
                <motion.img
                  key={currentImage}
                  src={carouselImages[currentImage].src}
                  alt={carouselImages[currentImage].alt}
                  className='w-full aspect-[3/2] object-cover rounded-xl sm:rounded-2xl shadow-2xl'
                  {...variants.carousel}
                />
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right side with animated heading and CTA button */}
          <motion.div
            variants={FadeLeft(0.4)}
            initial='hidden'
            animate='visible'
            className='w-full sm:w-1/2 flex flex-col justify-center text-center sm:text-left sm:pl-8 md:pl-12'
          >
            <h1 className='fluid-text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-[#eae4d5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight'>
              Discover Our <br className='hidden sm:block' />
              Japanese Cuisine
            </h1>
            <p className='fluid-text-lg md:text-xl lg:text-2xl text-[#eae4d5] opacity-90 mb-6 sm:mb-8 max-w-lg mx-auto sm:mx-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] leading-relaxed'>
              Experience the perfect blend of traditional flavors and modern
              culinary artistry.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start'>
              <motion.a
                href='#reservations'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-[#eae4d5] text-stone-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl fluid-text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 cursor-pointer no-underline inline-block shadow-lg hover:shadow-xl transform'
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('reservations')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Order Now
              </motion.a>
              <motion.a
                href='#menu'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='border-2 border-[#eae4d5] text-[#eae4d5] px-6 sm:px-8 py-3 sm:py-4 rounded-xl fluid-text-lg font-semibold hover:bg-[#eae4d5] hover:text-stone-900 transition-all duration-300 cursor-pointer no-underline inline-block'
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('menu')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Menu
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
