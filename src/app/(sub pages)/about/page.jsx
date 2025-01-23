//components
import { RenderBackgroudImage } from "@/components";
import AboutDetails from "./AboutDetails";

export default function About() {
  return (
    <>
      <RenderBackgroudImage />

      <div className="relative w-full flex flex-col items-center justify-center py-20">
        <div className="absolute flex flex-col items-center text-center">
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
