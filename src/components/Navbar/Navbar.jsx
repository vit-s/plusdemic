import React from 'react';
import Logo from '../../assets/logo-lusdemic.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className='container py-5 flex items-center justify-between'>
        {/* Logo section */}
        <a href='/'>
          <img
            src={Logo}
            alt='logo'
            className='w-40'
          />
        </a>
        {/* Navlinks section */}
        <ul className='hidden md:flex items-center gap-5'>
          <li>
            <a
              href='#'
              className='hover:text-primary duration-300'
            >
              Products
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-primary duration-300'
            >
              Customer Stories
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-primary duration-300'
            >
              About
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-primary duration-300'
            >
              Blogs
            </a>
          </li>
        </ul>
        {/* Button section */}
        <div>
          <button className='border border-gray-400 px-4 py-2 rounded-lg hover:text-white hover:bg-primary transform duration-300'>Get in Touch</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
