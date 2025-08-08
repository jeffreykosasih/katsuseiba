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
          className='fixed inset-0 bg-stone-800/40 backdrop-blur-sm z-50'
        >
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='relative bg-stone-800 text-white m-6 rounded-3xl overflow-hidden'
          >
            <div className='flex justify-end p-4 border-b border-[#eae4d5]/10'>
              <button
                onClick={() => setOpen(false)}
                className='p-4 text-[#eae4d5] hover:opacity-80 transition-opacity'
                aria-label='Close menu'
              >
                <FaTimes size={24} />
              </button>
            </div>
            <ul className='flex flex-col items-center gap-10 text-xl font-semibold uppercase py-10'>
              {menu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={(e) => {
                      e.preventDefault();
                      item.onClick();
                      setOpen(false);
                    }}
                    className='font-semibold text-[#eae4d5] hover:text-[#eae4d5]/50 transition-colors duration-200'
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
