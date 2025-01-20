//images
import Image from "next/image";
import backgroundImage from "../../public/background/home-background.png";
//components
import { Navigation, RenderModel } from "@/components";
import { WizardModel } from "@/components/models";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={backgroundImage} alt="background-image" fill className="w-full h-full object-cover object-center opacity-25" />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <WizardModel />
        </RenderModel>
      </div>
    </main>
  );
}
