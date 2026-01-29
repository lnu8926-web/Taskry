// src/hooks/useSupabaseProjects.ts
// Supabase 연동 Project 관리 훅

"use client";

import { useState, useEffect, useCallback } from "react";
import {
  projectService,
  boardService,
  type Project,
  type InsertProject,
  type UpdateProject,
} from "@/lib/supabase/services";

interface UseSupabaseProjectsReturn {
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  createProject: (project: InsertProject) => Promise<Project>;
  updateProject: (
    projectId: string,
    updates: UpdateProject,
  ) => Promise<Project>;
  deleteProject: (projectId: string) => Promise<void>;
  refreshProjects: () => Promise<void>;
}

/**
 * Supabase 연동 Project CRUD 훅
 */
export function useSupabaseProjects(): UseSupabaseProjectsReturn {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 프로젝트 목록 조회
  const fetchProjects = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await projectService.getAll();
      setProjects(data);
    } catch (err) {
      console.error("프로젝트 조회 실패:", err);
      setError(err instanceof Error ? err.message : "알 수 없는 오류");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 초기 로드
  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // 프로젝트 생성 (기본 보드도 함께 생성)
  const createProject = async (project: InsertProject): Promise<Project> => {
    // 프로젝트 생성
    const newProject = await projectService.create(project);

    // 기본 칸반보드 생성
    await boardService.createDefaultBoard(newProject.project_id);

    // 로컬 상태 업데이트
    setProjects((prev) => [newProject, ...prev]);

    return newProject;
  };

  // 프로젝트 수정
  const updateProject = async (
    projectId: string,
    updates: UpdateProject,
  ): Promise<Project> => {
    const updated = await projectService.update(projectId, updates);

    // 로컬 상태 업데이트
    setProjects((prev) =>
      prev.map((project) =>
        project.project_id === projectId ? { ...project, ...updated } : project,
      ),
    );

    return updated;
  };

  // 프로젝트 삭제
  const deleteProject = async (projectId: string): Promise<void> => {
    await projectService.delete(projectId);

    // 로컬 상태 업데이트
    setProjects((prev) =>
      prev.filter((project) => project.project_id !== projectId),
    );
  };

  return {
    projects,
    isLoading,
    error,
    createProject,
    updateProject,
    deleteProject,
    refreshProjects: fetchProjects,
  };
}
