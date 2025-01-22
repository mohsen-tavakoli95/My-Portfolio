//images
import Image from "next/image";
import backgroundImage from "../../../../public/background/about-background.png";
//components
import { RenderModel } from "@/components";
import { HatModel } from "@/components/models";
import AboutDetails from "./AboutDetails";

export default function About() {
  return (
    <>
      <Image priority size="100vw" src={backgroundImage} alt="background-image" className="w-full h-full fixed top-0 left-0 object-cover object-center opacity-25 -z-50" />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/3 sm:top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-[60vh] sm:h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%]">
          <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-accent">Mohsen Tavakoli</h1>
          <p className="font-light text-foreground text-ls whitespace-break-spaces">
            Senior frontend developer
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
