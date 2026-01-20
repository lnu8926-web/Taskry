import ProjectBoardHeader from "@/components/features/project/ProjectBoardHeader";
import ProjectBoardFilter from "./ProjectBoardFilter";
import ProjectBoardBody from "@/components/features/project/ProjectBoardBody";
import { ProjectBoardProvider } from "@/providers/ProjectBoardProvider";

export default function ProjectBoard() {
  return (
    <ProjectBoardProvider>
      <ProjectBoardHeader />
      <ProjectBoardFilter />
      <ProjectBoardBody />
    </ProjectBoardProvider>
  );
}
