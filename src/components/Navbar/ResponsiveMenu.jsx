import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

/**
 * ResponsiveMenu Component
 * Mobile navigation menu that slides in from the right with a backdrop.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls menu visibility
 * @param {Function} props.setOpen - Function to update menu state
 * @param {Array} props.menu - Array of menu items with id, title, link, and onClick
 */
const ResponsiveMenu = ({ isOpen, setOpen, menu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className='fixed inset-0 bg-stone-900/50 backdrop-blur-md z-50 safe-top'
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, x: '100%', scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: '100%', scale: 0.95 }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200,
              duration: 0.3,
            }}
            className='absolute right-4 top-4 bottom-4 w-[min(320px,calc(100vw-2rem))] bg-stone-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with close button */}
            <div className='flex justify-between items-center p-4 sm:p-6 border-b border-[#eae4d5]/10'>
              <div className='text-lg font-bold text-[#eae4d5] uppercase tracking-wide'>
                Menu
              </div>
              <button
                onClick={() => setOpen(false)}
                className='p-2 text-[#eae4d5] hover:bg-[#eae4d5]/10 rounded-lg transition-all duration-200 active:scale-95'
                aria-label='Close menu'
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className='flex-1 overflow-y-auto py-6'>
              <ul className='flex flex-col gap-2 px-4'>
                {menu.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <a
                      href={item.link}
                      onClick={(e) => {
                        e.preventDefault();
                        item.onClick();
                        setOpen(false);
                      }}
                      className='block w-full text-left font-semibold text-[#eae4d5] hover:text-stone-900 hover:bg-[#eae4d5] px-4 py-3 rounded-xl transition-all duration-300 text-lg uppercase tracking-wide'
                    >
                      {item.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer with contact info */}
            <div className='p-4 border-t border-[#eae4d5]/10 bg-stone-900/50'>
              <div className='text-center text-[#eae4d5]/70 text-sm'>
                <p className='mb-1'>KATSU SEIBA</p>
                <p>Japanese Cuisine</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
