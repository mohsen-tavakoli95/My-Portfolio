import React from 'react';
import Link from 'next/link';
//icons
import { Github, Home, Linkedin, NotebookText, Palette, Phone, Twitter, User } from 'lucide-react';
//components 
import { WraperLayout } from '@/components';
//clsx
import clsx from 'clsx';
//motion
import { motion } from 'framer-motion';

const itemMotion = {
  hidden: { scale: 0 },
  show: { scale: 1 }
}

const MotionLink = motion.create(Link);

const renderIcon = (icon) => {
  switch (icon) {
    case "home": 
      return <Home className='w-full h-auto' strokeWidth={1.5} />

    case "home": 
      return <Home className='w-full h-auto' strokeWidth={1.5} />

    case "about": 
      return <User className='w-full h-auto' strokeWidth={1.5} />

    case "projects": 
      return <Palette className='w-full h-auto' strokeWidth={1.5} />

    case "contact": 
      return <Phone className='w-full h-auto' strokeWidth={1.5} />

    case "github": 
      return <Github className='w-full h-auto' strokeWidth={1.5} />

    case "linkedin": 
      return <Linkedin className='w-full h-auto' strokeWidth={1.5} />

    case "twitter": 
      return <Twitter className='w-full h-auto' strokeWidth={1.5} />

    case "resume": 
      return <NotebookText className='w-full h-auto' strokeWidth={1.5} />
  
    default: 
      return <Home className='w-full h-auto' strokeWidth={1.5} />
  }
}

const NavigationButton = (props) => {
  const { x, y, link, icon, newTab, label, isLeftDirection = false } = props;

  const renderView = () => {
    return (
      <WraperLayout>
        {({ isSmallScreen }) => {
          if (isSmallScreen)
            return renderSmallView();

          return renderDefaultView();
        }}
      </WraperLayout>
    );
  }

  const renderSmallView = () => {
    return (
      <div className='w-fit cursor-pointer z-50'>
        <MotionLink 
          href={link} 
          target={newTab ? "_blank" : "_self"} 
          className='text-foreground rounded-full flex items-center justify-center custom-bg' 
          aria-label={label}
          variants={itemMotion}
        >
          <span className='relative w-12 h-12 xs:w-14 xs:h-14 p-4 hover:text-accent'>
            {renderIcon(icon)}
  
            <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
            <span 
              

                className={clsx(
                            'absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap',
                            isLeftDirection ? "right-full left-auto" : ""
                )}
            >
              {label}
            </span>
          </span>
        </MotionLink>
      </div>
    );
  }
  
    const renderDefaultView = () => {
      return (
        <div 
          className='absolute cursor-pointer z-50'
          style={{
            transform: `translate(${x}, ${y})`
          }}
        >
          <MotionLink 
            href={link} 
            target={newTab ? "_blank" : "_self"} 
            className='text-foreground rounded-full flex items-center justify-center custom-bg' 
            aria-label={label}
            variants={itemMotion}
          >
            <span className='relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'>
              {renderIcon(icon)}
    
              <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
              <span 
                className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 
                  bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'
              >
                {label}
              </span>
            </span>
          </MotionLink>
        </div>
      );
    }

  return renderView();
}

export default NavigationButton;