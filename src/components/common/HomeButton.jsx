"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home as HomeIcon } from 'lucide-react';
//motion
import { motion } from 'framer-motion';
//hooks
import { useScreenSize } from '@/hooks';

const itemMotion = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}

const MotionLink = motion.create(Link);

const HomeButton = () => {
  const { isSmallScreen } = useScreenSize();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderView = () => {
    if (isSmallScreen) {
      return renderMobileView();
    }

    return renderDefaultView();
  }

  const renderMobileView = () => {
    if (!showButton) {
      return <></>;
    }

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
        <span className='relative w-10 xs:w-14 h-10 xs:h-14 p-2 xs:p-4 hover:text-accent'>
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

  const renderDefaultView = () => {
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
        <span className='relative w-10 xs:w-14 h-10 xs:h-14 p-2 xs:p-4 hover:text-accent'>
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

  return renderView();
}

export default HomeButton;