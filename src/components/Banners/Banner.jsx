import React from 'react';
import RestoPng from '../../assets/resto-3p.jpg';
import { motion } from 'framer-motion';

/**
 * Banner Component
 * Displays a restaurant interior image alongside a quote section from Seiba San.
 * Features smooth animations using Framer Motion and responsive design.
 * The restaurant image is hidden on mobile devices for better layout.
 */
const Banner = () => {
  return (
    <section className='container mb-12'>
      <div className='flex justify-center items-center gap-8 md:gap-12'>
        {/* Restaurant image - hidden on mobile, animated slide-in from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='hidden md:block w-[300px] lg:w-[400px] flex-shrink-0'
        >
          <img
            src={RestoPng}
            alt='Restaurant Interior'
            className='w-full h-[550px] object-cover rounded-3xl shadow-xl'
          />
        </motion.div>

        {/* Chef quote section with animated text elements */}
        <div className='w-full max-w-xl h-[550px] rounded-3xl overflow-hidden bg-stone-900'>
          <div className='h-full p-10 md:p-12 flex flex-col justify-center'>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-3xl md:text-4xl font-bold text-[#eae4d5] mb-6 drop-shadow-lg'
            >
              Seiba San
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-base md:text-lg text-[#eae4d5]/90 space-y-6 drop-shadow-md'
            >
              <p>
                "Our mission is to make sure y'all enjoy Japanese cuisine in
                Melbourne, this is how we do it right."
              </p>
              <p>
                "Every katsu we serve is a way of our showing quality and our
                respect for Japanese culinary traditions."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
