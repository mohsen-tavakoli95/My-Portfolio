"use client";

import React from 'react';
import ProjectItem from './ProjectItem';
//motion
import { motion } from 'framer-motion';


const motionContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 1 } }
}

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <motion.div 
      variants={motionContainer}
      initial='hidden'
      animate='show'
      className='w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'
    >
      {projects.map((project, index) => <ProjectItem key={index} {...project} />)}
    </motion.div>
  );
}

export default ProjectList;