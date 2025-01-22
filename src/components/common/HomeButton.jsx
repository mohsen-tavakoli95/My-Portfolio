"use client";

import React from 'react';
import Link from 'next/link';
import { Home as HomeIcon } from 'lucide-react';
//motion
import { motion } from 'framer-motion';

const itemMotion = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}

const MotionLink = motion(Link);

const HomeButton = () => {
  return (
    <MotionLink 
      href={"/"} 
      target='_self'
      className='text-foreground rounded-full flex items-center justify-center custom-bg fixed left-4 top-4 w-fit self-start z-50' 
      aria-label="Home"
      name="home"
      variants={itemMotion}
      initial='hidden'
      animate='show'
      transition={{ delay: 1 }}
    >
      <span className='relative w-14 h-14 p-4 hover:text-accent'>
        <HomeIcon className='w-full h-auto' strokeWidth={1.5} />

        <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
        <span 
          className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 
            bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'
        >
          Home
        </span>
      </span>
    </MotionLink>
  );
}

export default HomeButton;