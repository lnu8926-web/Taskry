"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { getProjects } from "@/lib/local";
import { useProjectBoard } from "@/providers/ProjectBoardProvider";
import Container from "@/components/shared/Container";
import ProjectBoardEmpty from "./ProjectBoardEmpty";
import ProjectCard from "./ProjectCard";
import CommonPagination from "@/components/ui/CommonPagination";
import { Project } from "@/types";

export default function ProjectBoard() {
  const { filter } = useProjectBoard();

  const [isLoading, setIsLoading] = useState(true);
  const [projectList, setProjectList] = useState<
    (Project & { projectId: string; projectName: string })[]
  >([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  const fetchAllData = useCallback(() => {
    try {
      setIsLoading(true);

      // 로컬 서비스에서 프로젝트 조회
      const projects = getProjects();

      const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE) || 1;
      setTotalPage(totalPages);

      // 페이지네이션 적용
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const paginatedProjects = projects.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE,
      );

      // 프로젝트 목록 가공
      const formattedProjects = paginatedProjects.map((project) => ({
        ...project,
        projectId: project.project_id,
        projectName: project.project_name,
      }));

      setProjectList(formattedProjects);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filter.view]);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  const sortedProjectList = useMemo(() => {
    if (projectList.length === 0) return [];

    const dateFieldMap = {
      createdAt: "created_at",
      startedAt: "started_at",
      updatedAt: "updated_at",
      endedAt: "ended_at",
    };

    const filterKey = filter.date as keyof typeof dateFieldMap;
    const targetKey = dateFieldMap[filterKey] || "created_at";
    const isAsc = filter.sort === "asc";

    return [...projectList].sort((a, b) => {
      const timeA = new Date(
        a[targetKey as keyof typeof a] as string,
      ).getTime();
      const timeB = new Date(
        b[targetKey as keyof typeof b] as string,
      ).getTime();
      return isAsc ? timeA - timeB : timeB - timeA;
    });
  }, [projectList, filter.date, filter.sort]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-400px)]">
        <span className="text-lg text-gray-500">
          프로젝트를 불러오는 중입니다...
        </span>
      </div>
    );
  }

  if (sortedProjectList.length === 0) {
    return (
      <Container className="pt-0">
        <ProjectBoardEmpty />
      </Container>
    );
  }

  return (
    <div className="pb-10">
      <div className="h-[calc(100vh-400px)] overflow-y-auto">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-4"
        >
          {sortedProjectList.map((project) => (
            <ProjectCard
              key={project.projectId}
              project={project}
              setProjectList={setProjectList}
            />
          ))}
        </div>
      </div>
      <div>
        <CommonPagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={handlePageChange}
          buttonStyle="arrow"
        />
      </div>
    </div>
  );
}
