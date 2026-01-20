"use client";

import Button from "@/components/ui/Button";
import { Calendar22 } from "@/components/features/project/Calendar";
import { StatusSelect } from "@/components/features/project/StatusSelect";
import { TypeSelect } from "@/components/features/project/TypeSelect";
import { Input } from "@/components/ui/shadcn/Input";
import { Label } from "@/components/ui/shadcn/Label";
import { Textarea } from "@/components/ui/shadcn/Textarea";
import { showToast } from "@/lib/utils/toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProjectDateCard from "./ProjectDateCard";
import Container from "@/components/shared/Container";
import {
  createProject,
  getProjectById,
  updateProject,
} from "@/lib/local";

interface ProjectProps {
  projectName: string;
  type: string;
  status: string;
  startedAt: Date | undefined;
  endedAt: Date | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  techStack: string;
  description: string;
}

export default function ProjectForm() {
  const router = useRouter();
  const [projectId, setProjectId] = useState<string>("");
  const [projectData, setProjectData] = useState<ProjectProps>({
    projectName: "",
    type: "",
    status: "",
    startedAt: new Date(),
    endedAt: new Date(),
    createdAt: undefined,
    updatedAt: undefined,
    techStack: "",
    description: "",
  });

  useEffect(() => {
    const storedProjectId = sessionStorage.getItem("current_Project_Id");

    if (storedProjectId) {
      setProjectId(storedProjectId);
    }
  }, [router]);

  useEffect(() => {
    const fetchData = () => {
      if (!projectId) {
        return;
      }

      // 로컬 스토리지에서 프로젝트 정보 조회
      const project = getProjectById(projectId);

      if (project) {
        setProjectData({
          projectName: project.project_name,
          type: project.type || "",
          status: project.status || "",
          startedAt: project.started_at ? new Date(project.started_at) : undefined,
          endedAt: project.ended_at ? new Date(project.ended_at) : undefined,
          createdAt: project.created_at ? new Date(project.created_at) : undefined,
          updatedAt: project.updated_at ? new Date(project.updated_at) : undefined,
          techStack: project.tech_stack || "",
          description: project.description || "",
        });
      }
    };
    fetchData();
  }, [projectId]);

  // 일반 Input과 Textarea를 위한 handleChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProjectData((prevProjectData) => ({
      ...prevProjectData,
      [name]: value,
    }));
  };

  // Select 컴포넌트를 위한 handleChange
  const handleSelectChange = (name: string, value: string) => {
    setProjectData((prevProjectData) => ({
      ...prevProjectData,
      [name]: value,
    }));
  };

  // Calendar를 위한 핸들러
  const handleDateChange = (name: string, date: Date | undefined) => {
    if (!date) {
      setProjectData((prevProjectData) => ({
        ...prevProjectData,
        [name]: undefined,
      }));
      return;
    }

    setProjectData((prevProjectData) => ({
      ...prevProjectData,
      [name]: date,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const projectPayload = {
        project_name: projectData.projectName,
        type: projectData.type,
        status: projectData.status,
        started_at: projectData.startedAt?.toISOString().split("T")[0],
        ended_at: projectData.endedAt?.toISOString().split("T")[0],
        tech_stack: projectData.techStack,
        description: projectData.description,
      };

      if (!projectId) {
        // 새 프로젝트 생성
        createProject(projectPayload);
      } else {
        // 기존 프로젝트 수정
        updateProject(projectId, projectPayload);
      }

      showToast("저장되었습니다.", "success");
      router.push("/");
    } catch (error) {
      console.error(error);
      showToast("저장에 실패했습니다.", "error");
    }
  };

  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="text-2xl font-bold mb-8">
          {projectId ? "프로젝트 수정" : "프로젝트 생성"}
        </div>
        <div className="py-3">
          <Label className="mb-4 font-bold text-lg">프로젝트 명</Label>
          <Input
            id="projectName"
            name="projectName"
            type="text"
            placeholder="프로젝트 명을 입력해주세요"
            value={projectData.projectName}
            onChange={handleChange}
          />
        </div>
        <div className="flex py-3 grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-4 font-bold text-lg">프로젝트 분류</Label>
            <TypeSelect
              value={projectData.type}
              onValueChange={(value) => {
                handleSelectChange("type", value);
              }}
            />
          </div>
          <div>
            <Label className="mb-4 font-bold text-lg">프로젝트 상태</Label>
            <StatusSelect
              value={projectData.status}
              onValueChange={(value) => {
                handleSelectChange("status", value);
              }}
            />
          </div>
        </div>
        <div className="flex py-3 grid grid-cols-2 gap-4">
          <div>
            <Label className="mb-4 font-bold text-lg">프로젝트 시작일</Label>
            <Calendar22
              value={projectData.startedAt}
              onValueChange={(value) => {
                handleDateChange("startedAt", value);
              }}
            />
          </div>
          <div>
            <Label className="mb-4 font-bold text-lg">프로젝트 종료일</Label>
            <Calendar22
              value={projectData.endedAt}
              onValueChange={(value) => {
                handleDateChange("endedAt", value);
              }}
            />
          </div>
        </div>

        {projectId && <ProjectDateCard projectData={projectData} />}

        <div className="py-3">
          <Label className="mb-4 font-bold text-lg">프로젝트 기술 스택</Label>
          <Input
            id="techStack"
            name="techStack"
            type="text"
            placeholder="쉼표(,)를 구분해 입력해주세요 예) React, TypeScript"
            value={projectData.techStack}
            onChange={handleChange}
          />
        </div>
        <div className="py-3">
          <Label className="mb-4 font-bold text-lg">프로젝트 설명</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="프로젝트 설명을 입력해주세요. (최대 300자)"
            value={projectData.description}
            onChange={handleChange}
          />
        </div>

        <div className="py-2 justify-self-center absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <Button
            icon="edit"
            variant="primary"
            size={16}
            className="hover:cursor-pointer mr-2 text-white"
            onClick={handleSubmit}
          >
            {projectId ? "수정 완료" : "프로젝트 생성"}
          </Button>
        </div>
      </div>
    </Container>
  );
}
