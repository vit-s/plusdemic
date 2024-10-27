import React from 'react';
import Logo from '../../assets/logo-lusdemic.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className='container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10'>
        {/* Brand info */}
        <div className='space-y-4'>
          <img
            src={Logo}
            alt='Logo'
            className='w-40'
          />
          <p className='text-gray-400 md:max-w-[400px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio labore enim aut.</p>
        </div>
        {/* Social icons */}
        <div className='flex space-x-6 text-3xl'>
          <FaFacebook className='hover:text-primary' />
          <FaInstagram className='hover:text-primary' />
          <FaLinkedin className='hover:text-primary' />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
