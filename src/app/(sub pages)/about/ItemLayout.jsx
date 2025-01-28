"use client";

import React from 'react';
//motion
import { motion } from 'framer-motion';
//clsx
import clsx from 'clsx';

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div 
      className={clsx(`custom-bg p-4 sm:p-8 rounded-xl flex items-center justify-center space-y-8`, className)}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default ItemLayout;