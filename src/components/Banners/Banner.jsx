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
    <section className='w-full overflow-hidden'>
      <div className='responsive-container responsive-py'>
        <div className='responsive-flex-reverse responsive-gap items-stretch'>
          {/* Restaurant image - responsive visibility */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-full sm:w-1/2 max-w-[500px] mx-auto sm:mx-0'
          >
            <img
              src={RestoPng}
              alt='Restaurant Interior'
              className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl'
            />
          </motion.div>

          {/* Chef quote section with animated text elements */}
          <div className='w-full sm:w-1/2 flex items-center'>
            <div className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-900 shadow-2xl'>
              <div className='h-full responsive-px responsive-py flex flex-col justify-center'>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className='fluid-text-3xl md:text-4xl lg:text-5xl font-bold text-[#eae4d5] mb-6 sm:mb-8 drop-shadow-lg'
                >
                  Seiba San
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className='fluid-text-base md:text-lg lg:text-xl text-[#eae4d5]/90 space-y-4 sm:space-y-6 drop-shadow-md leading-relaxed'
                >
                  <p>
                    "Our mission is to make sure y'all enjoy Japanese cuisine in
                    Melbourne, this is how we do it right."
                  </p>
                  <p>
                    "Every katsu we serve is a way of our showing quality and
                    our respect for Japanese culinary traditions."
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
