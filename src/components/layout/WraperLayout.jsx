"use client";

import React from 'react';
import { useScreenSize } from '@/hooks';

const WraperLayout = (props) => {
  const { children } = props;
  const { screenSize, isMediumScreen, isLargeScreen, isSmallScreen } = useScreenSize();

  return (
    <>{children({ screenSize, isMediumScreen, isLargeScreen, isSmallScreen })}</>
  )
}

export default WraperLayout