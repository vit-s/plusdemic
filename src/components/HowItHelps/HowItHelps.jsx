import React from 'react';
import Card from './CardComp.jsx';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import { motion } from 'framer-motion';
import { SlideLeft, SlideRight } from '../../utility/animation';

const HowItHelps = () => {
  return (
    <section>
      <div className='container py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div className='col-span-2'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
              <motion.div
                variants={SlideRight(0.2)}
                initial='initial'
                whileInView='animate'
              >
                <Card
                  icon={icon1}
                  heading={'Symptoms'}
                  text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, debitis! 10 times faster and better.'}
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.4)}
                initial='initial'
                whileInView='animate'
              >
                <Card
                  icon={icon2}
                  heading={'Recommendations'}
                  text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, debitis! New way to do the stuff.'}
                />
              </motion.div>
              <motion.div
                variants={SlideRight(0.5)}
                initial='initial'
                whileInView='animate'
              >
                <Card
                  icon={icon3}
                  heading={'Local information'}
                  text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, debitis!'}
                />
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.8)}
            initial='initial'
            whileInView='animate'
            className='flex flex-col justify-center xl:pr-14'
          >
            <h1 className='text-3xl font-bold text-darkBlue'>How it helps people</h1>
            <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vero quas reiciendis.</p>
            <p className='text-sm text-gray-400 mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
              <a
                href='#'
                className='text-primary'
              >
                Learn more
              </a>
            </p>
            <button className='w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300'>Get in Touch</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItHelps;
