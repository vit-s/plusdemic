import React from 'react';
import TrustIcon1 from '../../assets/trust1.png';
import TrustIcon2 from '../../assets/trust2.png';
import { motion } from 'framer-motion';
import { SlideUp } from '../../utility/animation';
const Trust = () => {
  return (
    <section className='bg-brandWhite py-16 mt-20'>
      <div className='container'>
        <motion.h1
          variants={SlideUp(0.2)}
          initial='initial'
          whileInView='animate'
          className='py-6 text-4xl font-bold text-darkBlue text-center'
        >
          Why you can trust this tools
        </motion.h1>
        <div className='grid grod-cols-1 md:grid-cols-2 gap-6'>
          <motion.div
            variants={SlideUp(0.4)}
            initial='initial'
            whileInView='animate'
            className='space-y-6 text-center md:text-left md:px-16 xl:px-32'
          >
            <img
              src={TrustIcon1}
              alt='trust-1-icon'
              className='mx-auto md:mx-0'
            />
            <p className='text-3xl font-semibold'>Bsed on reliable sources</p>
            <p className=''>We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.</p>
            <p className='text-sm text-gray-400'>
              Enchance your preliminary diagnosis and truage with pediatric content{' '}
              <a
                href='#'
                className='text-primary'
              >
                Learn more
              </a>
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial='initial'
            whileInView='animate'
            className='space-y-6 text-center md:text-left md:px-16 xl:px-32'
          >
            <img
              src={TrustIcon2}
              alt='trust-1-icon'
              className='mx-auto md:mx-0'
            />
            <p className='text-3xl font-semibold'>Bsed on reliable sources</p>
            <p className=''>We want our tool to be safe and reliable, so its logic is based on the official global information provided by the WHO.</p>
            <p className='text-sm text-gray-400'>
              Enchance your preliminary diagnosis and truage with pediatric content{' '}
              <a
                href='#'
                className='text-primary'
              >
                Learn more
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
