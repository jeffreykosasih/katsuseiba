import React from 'react';
import BannerPng from '../../assets/katsu-3.jpg';
import { motion } from 'framer-motion';
import { FadeUp } from '../../utility/animation';

/**
 * Banner3 Component
 * Displays a reservation section with a background image, heading,
 * and a comprehensive reservation form.
 * Features animated elements and responsive design for all screen sizes.
 * Includes form fields for name, email, date, time, and number of guests.
 */
const Banner3 = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='responsive-container responsive-py'>
        <div className='relative min-h-[600px] sm:min-h-[700px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-stone-800 rounded-2xl sm:rounded-3xl shadow-2xl'>
          {/* Background image with fade-in animation */}
          <motion.img
            src={BannerPng}
            alt='Restaurant Background'
            className='absolute inset-0 w-full h-full object-cover object-center z-0'
            style={{ opacity: 0.85 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 1 }}
          />

          {/* Overlay for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-r from-stone-900/70 via-stone-900/50 to-stone-900/70 z-5'></div>

          <div className='relative z-10 w-full responsive-flex items-stretch responsive-px responsive-py min-h-[550px] sm:min-h-[650px] md:min-h-[750px]'>
            {/* Left side content with animated heading and description */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8'>
              <div className='text-center lg:text-left'>
                <motion.h1
                  variants={FadeUp(0.5)}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  className='fluid-text-4xl lg:text-5xl xl:text-6xl font-bold text-[#eae4d5] mb-4 sm:mb-6 drop-shadow-lg leading-tight'
                >
                  Reserve your spot 🍽️
                </motion.h1>
                <motion.p
                  variants={FadeUp(0.9)}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                  className='fluid-text-lg lg:text-xl text-[#eae4d5] opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-md leading-relaxed'
                >
                  Book your table now and experience the finest Japanese dining
                  in Melbourne.
                </motion.p>
              </div>
            </div>

            {/* Right side with responsive reservation form */}
            <div className='w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0'>
              <motion.form
                variants={FadeUp(1.2)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='w-full max-w-md lg:max-w-lg bg-[#eae4d5]/95 backdrop-blur-sm responsive-card shadow-2xl'
              >
                {/* Form fields with consistent styling */}
                <div className='space-y-4 sm:space-y-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-stone-800 font-medium mb-2 fluid-text-sm'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      className='w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 fluid-text-base transition-all duration-300'
                      placeholder='Your Name'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-stone-800 font-medium mb-2 fluid-text-sm'
                    >
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      className='w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 fluid-text-base transition-all duration-300'
                      placeholder='+61 XXX XXX XXX'
                    />
                  </div>

                  <div className='responsive-grid-2'>
                    <div>
                      <label
                        htmlFor='date'
                        className='block text-stone-800 font-medium mb-2 fluid-text-sm'
                      >
                        Date
                      </label>
                      <input
                        type='date'
                        id='date'
                        className='w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 fluid-text-base transition-all duration-300'
                      />
                    </div>
                    <div>
                      <label
                        htmlFor='time'
                        className='block text-stone-800 font-medium mb-2 fluid-text-sm'
                      >
                        Time
                      </label>
                      <input
                        type='time'
                        id='time'
                        className='w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 fluid-text-base transition-all duration-300'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='guests'
                      className='block text-stone-800 font-medium mb-2 fluid-text-sm'
                    >
                      Number of Guests
                    </label>
                    <input
                      type='number'
                      id='guests'
                      min='1'
                      max='10'
                      className='w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-200 fluid-text-base transition-all duration-300'
                      placeholder='2'
                    />
                  </div>

                  <motion.button
                    type='submit'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className='bg-stone-800 text-[#eae4d5] w-full px-6 py-4 rounded-xl fluid-text-lg font-semibold hover:bg-stone-700 transition-all duration-300 shadow-lg hover:shadow-xl'
                  >
                    Reserve Table
                  </motion.button>

                  <div className='text-center text-stone-800 space-y-1'>
                    <p className='font-medium fluid-text-sm opacity-70'>OR</p>
                    <p className='fluid-text-base font-semibold'>
                      Call us at +61 961 961 961
                    </p>
                  </div>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
