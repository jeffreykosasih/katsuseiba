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
    transition: { duration: 1 }
  },
  carousel: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.5, ease: 'easeInOut' }
  }
};

// Carousel images configuration
const carouselImages = [
  { src: katsu1, alt: 'Katsu Dish 1' },
  { src: katsu2, alt: 'Katsu Dish 2' },
  { src: katsu3, alt: 'Katsu Dish 3' }
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
    setCurrentImage(prev => (prev + 1) % carouselImages.length);
  }, []);

  // Setup auto-rotation interval
  useEffect(() => {
    const timer = setInterval(transitionImage, 3000);
    return () => clearInterval(timer);
  }, [transitionImage]);

  return (
    <section className='container mx-auto max-w-7xl mb-12'>
      <div className='relative min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-800 rounded-3xl'>
        {/* Static background image with fade-in animation */}
        <motion.img
          src={katsu1}
          alt='Restaurant Background'
          className='absolute inset-0 w-full h-full object-cover object-center z-0 opacity-90'
          {...variants.background}
        />
        <div className='container relative z-10 flex flex-col md:flex-row items-center justify-center min-h-[650px] px-6 py-14 md:py-24'>
          {/* Left side with auto-rotating carousel */}
          <motion.div
            variants={FadeRight(0.4)}
            initial='hidden'
            animate='visible'
            className='flex-1 flex justify-center items-center mb-8 md:mb-0 md:mr-8'
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={carouselImages[currentImage].src}
                alt={carouselImages[currentImage].alt}
                className='w-[480px] h-[320px] object-cover rounded-xl drop-shadow-lg'
                style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
                {...variants.carousel}
              />
            </AnimatePresence>
          </motion.div>

          {/* Right side with animated heading and CTA button */}
          <motion.div
            variants={FadeLeft(0.4)}
            initial='hidden'
            animate='visible'
            className='flex-1 text-center md:text-left'
          >
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#eae4d5] drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]'>
              Discover Our <br /> Japanese Cuisine
            </h1>
            <p className='text-lg md:text-xl text-[#eae4d5] opacity-90 mb-8 max-w-lg drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]'>
              Experience the perfect blend of traditional flavors and modern
              culinary artistry.
            </p>
            <motion.a
              href='#reservations'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-[#eae4d5] text-stone-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors cursor-pointer no-underline inline-block drop-shadow-md hover:drop-shadow-lg'
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById('reservations')
                  .scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Order Now
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
