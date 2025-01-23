"use client";
//images
import Image from "next/image";
import backgroundImage from "../../../public/background/background.jpg";
import mobileBackgroundImage from "../../../public/background/mobile-background.jpg";
//hooks
import { useScreenSize } from "@/hooks";

const RenderBackgroudImage = () => {
  const { isSmallScreen } = useScreenSize();

  return (
    <Image priority size="100vw" src={isSmallScreen ? mobileBackgroundImage : backgroundImage} alt="background-image" className="w-full h-full fixed top-0 left-0 object-cover object-center opacity-50 -z-50" />
  );
}

export default RenderBackgroudImage