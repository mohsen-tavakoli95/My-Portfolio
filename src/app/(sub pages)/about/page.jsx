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
      <Image src={backgroundImage} alt="background-image" className="w-full h-full fixed top-0 left-0 object-cover object-center opacity-25 -z-50" />

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-8xl text-accent">Mohsen Tavakoli</h1>
          <p className="font-light text-foreground text-ls whitespace-break-spaces">{`As a Senior Frontend Developer with over 6 years of experience, I specialize in designing and implementing scalable, user-centric web applications using React.js, JavaScript, and modern development tools. My expertise spans diverse industries, including financial services, government platforms, dashboards, and integration systems.\nI am passionate about crafting seamless user experiences and building robust, maintainable architectures. Dedicated to delivering high-quality code, I thrive in collaborative environments and enjoy mentoring teams to achieve project goals. With a proven track record of driving innovation and ensuring project success, I am always eager to contribute to impactful and forward-thinking solutions.`}
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
