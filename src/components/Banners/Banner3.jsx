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
    <section id='reservations' className='container max-w-7xl mx-auto mb-12'>
      <div className='relative min-h-[500px] flex items-center justify-center overflow-hidden bg-stone-800 rounded-3xl'>
        {/* Background image with fade-in animation */}
        <motion.img
          src={BannerPng}
          alt='Restaurant Background'
          className='absolute inset-0 w-full h-full object-cover object-center z-0 opacity-90'
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1 }}
        />
        <div className='container relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[300px] px-6 py-5 md:py-8'>
          {/* Left side content with animated heading and description */}
          <div className='md:w-1/3 flex flex-col justify-center mb-8 md:mb-0 md:ml-auto md:mr-12'>
            <div className='text-center md:text-left space-y-3'>
              <motion.h1
                variants={FadeUp(0.5)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#eae4d5] mb-3 drop-shadow-lg'
              >
                Reserve your spot 🍽️
              </motion.h1>
              <motion.p
                variants={FadeUp(0.9)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                className='text-base md:text-lg text-[#eae4d5] opacity-90 mb-6 max-w-lg drop-shadow-md'
              >
                Book your table now and experience the finest Japanese dining in
                Melbourne.
              </motion.p>
            </div>
          </div>

          {/* Right side with responsive reservation form */}
          <div className='md:w-1/2'>
            <form className='bg-[#eae4d5] p-6 rounded-3xl shadow-lg max-w-md mx-auto'>
              {/* Form fields with consistent styling */}
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-stone-800 font-medium mb-1.5 text-sm'
                >
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-3 py-1.5 rounded-lg border border-stone-300 focus:outline-none focus:border-stone-500 text-sm'
                  placeholder='Your Name'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='phone'
                  className='block text-stone-800 font-medium mb-1.5 text-sm'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  className='w-full px-3 py-1.5 rounded-lg border border-stone-300 focus:outline-none focus:border-stone-500 text-sm'
                  placeholder='+61 XXX XXX XXX'
                />
              </div>
              <div className='flex gap-4 mb-4'>
                <div className='flex-1'>
                  <label
                    htmlFor='date'
                    className='block text-stone-800 font-medium mb-1.5 text-sm'
                  >
                    Date
                  </label>
                  <input
                    type='date'
                    id='date'
                    className='w-full px-3 py-1.5 rounded-lg border border-stone-300 focus:outline-none focus:border-stone-500 text-sm'
                  />
                </div>
                <div className='flex-1'>
                  <label
                    htmlFor='time'
                    className='block text-stone-800 font-medium mb-1.5 text-sm'
                  >
                    Time
                  </label>
                  <input
                    type='time'
                    id='time'
                    className='w-full px-3 py-1.5 rounded-lg border border-stone-300 focus:outline-none focus:border-stone-500 text-sm'
                  />
                </div>
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='guests'
                  className='block text-stone-800 font-medium mb-1.5 text-sm'
                >
                  Number of Guests
                </label>
                <input
                  type='number'
                  id='guests'
                  min='1'
                  max='10'
                  className='w-full px-3 py-1.5 rounded-lg border border-stone-300 focus:outline-none focus:border-stone-500 text-sm'
                  placeholder='2'
                />
              </div>
              <button
                type='submit'
                className='bg-stone-800 text-[#eae4d5] w-full px-6 py-2.5 rounded-lg text-base font-semibold hover:bg-opacity-90 transition-colors'
              >
                Reserve Table
              </button>
              <div className='text-center mt-4 text-stone-800'>
                <p className='font-medium text-sm'>OR</p>
                <p className='text-base'>Call us at +61 961 961 961</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
