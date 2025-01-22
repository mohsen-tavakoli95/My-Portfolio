//images
import Image from "next/image";
import backgroundImage from "../../../../public/background/projects-background.png";
//data
import { projectsData } from "@/app/data";
//components
import ProjectList from "./ProjectList";
import { RenderModel } from "@/components";
import { StaffModel } from "@/components/models";

export default function Projects() {
  return (
    <>
      <Image priority size="100vw" src={backgroundImage} alt="background-image" className="w-full h-full fixed top-0 left-0 object-cover object-center opacity-25 -z-50" />
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-16 lg:top-20 left-1/2 md:left-20 lg:-left-20 h-screen -translate-x-1/2 lg:translate-x-0 -z-10">
        <RenderModel>
          <StaffModel />
        </RenderModel>
      </div>
    </>
  );
}
