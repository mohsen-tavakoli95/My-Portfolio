//data
import { projectsData } from "@/app/data";
//components
import ProjectList from "./ProjectList";
import { RenderBackgroudImage } from "@/components";

export default function Projects() {
  return (
    <>
      <RenderBackgroudImage />

      <ProjectList projects={projectsData} />
    </>
  );
}
