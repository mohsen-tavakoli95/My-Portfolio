"use client";

import React from 'react';
//motion
import { motion } from 'framer-motion';

const motionContainer = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}

const ProjectItem = (props) => {
  const { name, description, date } = props;

  return (
    <motion.div 
      className='flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg text-sm md:text-base'
      variants={motionContainer}
    >
      <div className='flex items-center justify-center space-x-2'>
        <h2 className='text-foreground'>{name}</h2>
        <p className='text-muted'>{description}</p>
      </div>
      <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted' />
      <p className='text-foreground'>{new Date(date).toDateString()}</p>
    </motion.div>
  );
}

export default ProjectItem;