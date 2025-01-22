"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
//icons
import { Volume2, VolumeX } from 'lucide-react';
//motion
import { motion } from 'framer-motion';
//hooks
import { useScreenSize } from '@/hooks';

const itemMotion = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

const MusicModal = ({ onClose, playSound }) => {
  return createPortal(
    <div className='fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center'>
      <div className='bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] py-8 px-6 xs:px-10 sm:px-16 shadow-glass-inset text-center space-y-8'>
        <p className='font-light'>Do you like to play background music?</p>
        <div className='flex items-center justify-center space-x-4'>
          <button onClick={playSound} className='px-4 py-2 border border-accent/30 border-solid hover: shadow-glass-sm rounded mr-2'>Yes</button>
          <button onClick={onClose} className='px-4 py-2 border border-accent/30 border-solid hover: shadow-glass-sm rounded'>no</button>
        </div>
      </div>
    </div>,

    document.getElementById('musicModal')
  );
}

const SoundButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const { isSmallScreen } = useScreenSize();
  const audioRef = useRef(null);

  const handleFirstUserInteraction = useCallback(() => {
    const musicPlaying = localStorage.getItem("musicPlaying");
    
    if (musicPlaying === "true" && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }

    ["click", "keydown", "touchstart"].forEach((event) =>
      document.removeEventListener(event, handleFirstUserInteraction)
    );
  }, [isPlaying]);

  useEffect(() => {
    const musicPlaying = localStorage.getItem("musicPlaying");

    if (!musicPlaying) {
      setShowModal(true);
    }

    if (musicPlaying && musicPlaying === "true" && audioRef && audioRef?.current) {
      setIsPlaying(true);
      ["click", "keydown", "touchstart"].forEach((event) =>
        document.addEventListener(event, handleFirstUserInteraction)
      );
    }
  }, [handleFirstUserInteraction]);
  
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

  const toggleSound = () => {
    const newState = !isPlaying;
    newState ? audioRef.current.play() : audioRef.current.pause();
    setIsPlaying(newState);

    localStorage.setItem("musicPlaying", newState + "");
  }

  const renderView = () => {
    if (isSmallScreen) {
      return renderMobileView();
    }

    return renderDefaultView();
  }

  const renderMobileView = () => {

    return (
      <div className='fixed top-4 right-2.5 xs:right-4 z-50 group'>
        {renderModal()}
        <audio ref={audioRef} loop>
          <source src='/audio/autumn.mp3' type='audio/mpeg' />
          Your broser does not support the audio element.
        </audio>
        {showButton &&(
          <motion.button 
            className='text-foreground rounded-full flex items-center justify-center custom-bg w-fit self-start z-50' 
            aria-label="Home"
            name="home"
            variants={itemMotion}
            initial='hidden'
            animate='show'
            transition={{ delay: 1 }}
            onClick={toggleSound}
          >
            {isPlaying ? 
              <Volume2 className='w-10 xs:w-14 h-10 xs:h-14 p-2 xs:p-4' strokeWidth={1.5} /> :
              <VolumeX className='w-10 xs:w-14 h-10 xs:h-14 p-2 xs:p-4' strokeWidth={1.5} />
            }
          </motion.button>
        )}
      </div>
    );
  }

  const renderDefaultView = () => {
    return (
      <div className='fixed top-4 right-2.5 xs:right-4 z-50 group'>
        {renderModal()}
        <audio ref={audioRef} loop>
          <source src='/audio/autumn.mp3' type='audio/mpeg' />
          Your broser does not support the audio element.
        </audio>
        <motion.button 
          className='text-foreground rounded-full flex items-center justify-center custom-bg w-fit self-start z-50' 
          aria-label="Home"
          name="home"
          variants={itemMotion}
          initial='hidden'
          animate='show'
          transition={{ delay: 1 }}
          onClick={toggleSound}
        >
          {isPlaying ? 
            <Volume2 className='w-10 xs:w-14 h-10 xs:h-14 p-2 xs:p-4' strokeWidth={1.5} /> :
            <VolumeX className='w-10 xs:w-14 h-10 xs:h-14 p-2 xs:p-4' strokeWidth={1.5} />
          }
        </motion.button>
      </div>
    );
  }

  const renderModal = () => {
    if (showModal) {
      return (
        <MusicModal 
          playSound={() => {
            toggleSound(); 
            setShowModal(false);
          }}
          onClose={() => {
            setShowModal(false);
            localStorage.setItem("musicPlaying", "false");
          }} 
        />
      );
    }
  }
  
  return renderView();
}

export default SoundButton;