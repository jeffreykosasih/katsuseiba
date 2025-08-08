import React from 'react';
import BannerPng from '../../assets/resto-1.jpg';
import { motion } from 'framer-motion';

// Animation variants
const variants = {
  background: {
    initial: { opacity: 0 },
    animate: { opacity: 0.9 },
    transition: { duration: 1 },
  },
  content: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 },
  },
};

// Location data
const locations = [
  {
    title: 'Maribyrnong',
    description: 'Highpoint Shopping Centre',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6943125727503!2d144.88479338710184!3d-37.773765299752746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65c568adda5ed%3A0x96a050f6dc82f3f8!2sHighpoint!5e0!3m2!1sen!2sau!4v1748059185107!5m2!1sen!2sau',
  },
  {
    title: 'Port Melbourne',
    description: '28 Rogers St, Port Melbourne VIC 3207',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.531950706774!2d144.93365047619724!3d-37.82443077197285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6678a54d7806b%3A0x9ee17d0d79a4c5c4!2s28%20Rogers%20St%2C%20Port%20Melbourne%20VIC%203207!5e0!3m2!1sen!2sau!4v1748059350543!5m2!1sen!2sau',
  },
  {
    title: 'Canterbury',
    description: '2A Ave Athol, Canterbury VIC 3126',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6303.332155493265!2d145.06534447619708!3d-37.82128977197365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6417242b6f295%3A0x98cae14b4d1fd498!2s2A%20Ave%20Athol%2C%20Canterbury%20VIC%203126!5e0!3m2!1sen!2sau!4v1748059405455!5m2!1sen!2sau',
  },
];

/**
 * Banner2 Component
 * Displays the locations section with a background image
 * and Google Maps embeds for each restaurant location
 */
const Banner2 = () => {
  return (
    <section className='w-full overflow-hidden'>
      <div className='responsive-container responsive-py'>
        <div className='relative min-h-[500px] sm:min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-stone-800 rounded-2xl sm:rounded-3xl shadow-2xl'>
          {/* Background Image with fade-in animation */}
          <motion.img
            src={BannerPng}
            alt='Restaurant Background'
            className='absolute inset-0 w-full h-full object-cover object-center z-0'
            style={{ opacity: 0.85 }}
            {...variants.background}
          />

          {/* Overlay for better text readability */}
          <div className='absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/70 z-5'></div>

          <div className='relative z-10 w-full responsive-flex items-stretch responsive-px responsive-py min-h-[450px] sm:min-h-[550px] md:min-h-[650px]'>
            {/* Left side content with animated heading and description */}
            <div className='w-full lg:w-1/2 flex flex-col justify-center space-y-6 sm:space-y-8'>
              <div className='text-center lg:text-left'>
                <motion.h1
                  {...variants.content}
                  className='fluid-text-4xl lg:text-5xl xl:text-6xl font-bold text-[#eae4d5] mb-4 sm:mb-6 drop-shadow-lg leading-tight'
                >
                  Our Locations 📍
                </motion.h1>
                <motion.p
                  {...variants.content}
                  transition={{ ...variants.content.transition, delay: 0.3 }}
                  className='fluid-text-lg lg:text-xl text-[#eae4d5] opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-md leading-relaxed'
                >
                  We are currently located in 3 locations. Between Maribyrnong,
                  Port Melbourne and Canterbury, we serve the best katsu in
                  town.
                </motion.p>
              </div>

              <div className='responsive-grid-3'>
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    {...variants.content}
                    transition={{
                      ...variants.content.transition,
                      delay: 0.4 + index * 0.1,
                    }}
                    className='text-center lg:text-left space-y-2'
                  >
                    <h3 className='fluid-text-xl font-bold text-[#eae4d5] drop-shadow-md'>
                      {location.title}
                    </h3>
                    <p className='fluid-text-base text-[#eae4d5] opacity-90 drop-shadow-sm leading-relaxed'>
                      {location.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right side with Google Maps */}
            <div className='w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0'>
              <div className='w-full max-w-md lg:max-w-lg bg-stone-800/90 backdrop-blur-sm responsive-card shadow-2xl'>
                <div className='space-y-4 sm:space-y-6'>
                  {locations.map((location, index) => (
                    <motion.div
                      key={index}
                      {...variants.content}
                      transition={{
                        ...variants.content.transition,
                        delay: 0.6 + index * 0.1,
                      }}
                    >
                      <iframe
                        src={location.mapUrl}
                        className='w-full h-[120px] sm:h-[140px] md:h-[160px] rounded-xl shadow-lg'
                        style={{ border: 0 }}
                        allowFullScreen=''
                        loading='lazy'
                        referrerPolicy='no-referrer-when-downgrade'
                        title={`${location.title} Map`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
