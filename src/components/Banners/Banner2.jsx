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
    <section id='locations' className='container max-w-7xl mx-auto mb-12'>
      <div className='relative min-h-[350px] flex items-center justify-center overflow-hidden bg-stone-800 rounded-3xl'>
        {/* Background Image with fade-in animation */}
        <motion.img
          src={BannerPng}
          alt='Restaurant Background'
          className='absolute inset-0 w-full h-full object-cover object-center z-0 opacity-90'
          {...variants.background}
        />
        <div className='container relative z-10 flex flex-col md:flex-row items-center justify-between min-h-[350px] px-6 py-5 md:py-8'>
          {/* Left side content with animated heading and description */}
          <div className='md:w-1/3 flex flex-col justify-center mb-8 md:mb-0 md:ml-auto md:mr-12'>
            <div className='text-center md:text-left space-y-6'>
              <motion.h1
                {...variants.content}
                className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#eae4d5] mb-3 drop-shadow-lg'
              >
                Our Locations 📍
              </motion.h1>
              <motion.p
                {...variants.content}
                transition={{ ...variants.content.transition, delay: 0.3 }}
                className='text-base md:text-lg text-[#eae4d5] opacity-90 mb-6 max-w-lg drop-shadow-md'
              >
                We are currently located in 3 locations. Between Maribyrnong,
                Port Melbourne and Canterbury, we serve the best katsu in town.
              </motion.p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    {...variants.content}
                    transition={{
                      ...variants.content.transition,
                      delay: 0.2 + index * 0.1,
                    }}
                    className='text-left'
                  >
                    <h3 className='text-xl font-bold text-[#eae4d5] mb-2 drop-shadow-md'>
                      {location.title}
                    </h3>
                    <p className='text-[#eae4d5] opacity-90 drop-shadow-sm'>
                      {location.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side with Google Maps */}
          <div className='md:w-1/2'>
            <div className='bg-stone-800 p-6 rounded-3xl shadow-lg max-w-md mx-auto'>
              <div className='space-y-4'>
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    {...variants.content}
                    transition={{
                      ...variants.content.transition,
                      delay: 0.2 + index * 0.1,
                    }}
                  >
                    <iframe
                      src={location.mapUrl}
                      className='w-full h-[150px] rounded-lg shadow-md'
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
    </section>
  );
};

export default Banner2;
