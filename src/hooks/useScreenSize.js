"use client";
import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState();

  const isLargeScreen = screenSize >= 1024;
  const isMediumScreen = screenSize >= 768 && screenSize < 1024;
  const isSmallScreen = screenSize <= 480;

  useEffect(() => {
    const getScreenSize = () => {
      return window.innerWidth;
    }
    
    const handleResize = () => {
      setScreenSize(getScreenSize());
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screenSize,
    isLargeScreen,
    isMediumScreen,
    isSmallScreen
  }
}