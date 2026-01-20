import Button from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/features/project/Card";
import { DeleteDialog } from "./DeleteDialog";
import { deleteProject } from "@/lib/local";
import { useRouter } from "next/navigation";
import { showToast } from "@/lib/utils/toast";
import { Project } from "@/types";

// ProjectBoardBody에서 전달되는 확장된 Project 타입
type ExtendedProject = Project & { projectId: string; projectName: string };

interface ProjectCardProps {
  project: ExtendedProject;
  setProjectList: React.Dispatch<React.SetStateAction<ExtendedProject[]>>;
}

export default function ProjectCard({
  project,
  setProjectList,
}: ProjectCardProps) {
  const router = useRouter();

  const handleSelectProject = (projectId: string) => {
    sessionStorage.setItem("current_Project_Id", projectId);
    router.push("/project/workspace");
  };

  const handleEditProject = (projectId: string) => {
    sessionStorage.setItem("current_Project_Id", projectId);
    router.push("/project/update/");
  };

  function handleDeleteProject(id: string) {
    // 로컬 서비스에서 삭제
    deleteProject(id);

    // UI에서 해당 프로젝트 제거
    setProjectList((prevList) =>
      prevList.filter((project) => project.project_id !== id),
    );

    showToast("삭제되었습니다.", "deleted");
  }

  return (
    <Card
      onClick={() => {
        handleSelectProject(project.project_id);
      }}
    >
      <div>
        <CardHeader className="flex w-full mb-2">
          <CardTitle>{project.projectName}</CardTitle>
        </CardHeader>
        <CardDescription className="flex">
          <div className="flex gap-2 text-sm text-dark-description">
            {project.description}
          </div>
        </CardDescription>
      </div>
      <CardContent className="flex justify-end">
        {/* 팀원 수 표시 제거 (1인 프로젝트) */}
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <Button
            btnType="icon"
            icon="edit"
            size={16}
            variant="primary"
            onClick={() => handleEditProject(project.project_id)}
          />
        </div>
        <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
          <DeleteDialog
            onClick={() => handleDeleteProject(project.project_id)}
          />
        </div>
      </CardFooter>
    </Card>
  );
}
