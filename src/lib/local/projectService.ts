// src/lib/local/projectService.ts

import { Project } from "@/types";
import { getItem, setItem, STORAGE_KEYS } from "./storage";

// 초기 Mock 데이터
const INITIAL_PROJECTS: Project[] = [
  {
    project_id: "project-1",
    project_name: "샘플 프로젝트",
    description: "로컬 테스트용 프로젝트입니다.",
    type: "개인",
    status: "active",
    tech_stack: "Next.js, TypeScript",
    started_at: "2026-01-01",
    ended_at: "2026-12-31",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// 초기화 (최초 실행 시 Mock 데이터 삽입)
export function initProjects(): void {
  const existing = getItem<Project[]>(STORAGE_KEYS.PROJECTS);
  if (!existing || existing.length === 0) {
    setItem(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
  }
}

// 전체 조회
export function getProjects(): Project[] {
  return getItem<Project[]>(STORAGE_KEYS.PROJECTS) || [];
}

// 단건 조회
export function getProjectById(id: string): Project | null {
  const projects = getProjects();
  return projects.find((p) => p.project_id === id) || null;
}

// 생성
export function createProject(
  data: Omit<Project, "project_id" | "created_at" | "updated_at">,
): Project {
  const projects = getProjects();

  const newProject: Project = {
    ...data,
    project_id: `project-${Date.now()}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  projects.push(newProject);
  setItem(STORAGE_KEYS.PROJECTS, projects);

  return newProject;
}

// 수정
export function updateProject(
  id: string,
  data: Partial<Project>,
): Project | null {
  const projects = getProjects();
  const index = projects.findIndex((p) => p.project_id === id);

  if (index === -1) return null;

  projects[index] = {
    ...projects[index],
    ...data,
    updated_at: new Date().toISOString(),
  };

  setItem(STORAGE_KEYS.PROJECTS, projects);
  return projects[index];
}

// 삭제
export function deleteProject(id: string): boolean {
  const projects = getProjects();
  const filtered = projects.filter((p) => p.project_id !== id);

  if (filtered.length === projects.length) return false;

  setItem(STORAGE_KEYS.PROJECTS, filtered);
  return true;
}
