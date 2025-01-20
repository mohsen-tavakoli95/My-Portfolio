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
      <Image src={backgroundImage} alt="background-image" className="w-full h-full fixed top-0 left-0 object-cover object-center opacity-25 -z-50" />
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed top-20 -left-24 h-screen">
        <RenderModel>
          <StaffModel />
        </RenderModel>
      </div>
    </>
  );
}
