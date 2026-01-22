"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Plus, FolderOpen } from "lucide-react";
import { MIST, COMPLEMENTARY } from "@/lib/constants";
import { getProjects } from "@/lib/local";
import { Project } from "@/types";

export default function ProjectsPage() {
  const router = useRouter();
  const projects = useMemo<Project[]>(() => getProjects(), []);

  const handleSelectProject = (projectId: string) => {
    router.push(`/projects/${projectId}`);
  };

  const handleCreateProject = () => {
    router.push("/projects/create");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 pb-24 md:p-8">
      {/* 헤더 */}
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          내 프로젝트
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {projects.length}개의 프로젝트
        </p>
      </div>

      {/* 프로젝트 목록 */}
      {projects.length === 0 ? (
        <EmptyState onCreateProject={handleCreateProject} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.project_id}
              project={project}
              index={index}
              onClick={() => handleSelectProject(project.project_id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// 빈 상태 컴포넌트
function EmptyState({ onCreateProject }: { onCreateProject: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: MIST.LIGHT }}
      >
        <FolderOpen className="w-10 h-10" style={{ color: MIST.DARK }} />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        프로젝트가 없습니다
      </h3>
      <p className="text-sm text-gray-500 mb-6 text-center">
        새 프로젝트를 만들어 태스크를 관리해보세요
      </p>
      <button
        onClick={onCreateProject}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-colors"
        style={{ backgroundColor: MIST.DEFAULT }}
      >
        <Plus className="w-5 h-5" />새 프로젝트 만들기
      </button>
    </motion.div>
  );
}

// 프로젝트 카드 컴포넌트
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const colors = [
    COMPLEMENTARY.SAGE,
    COMPLEMENTARY.ROSE,
    COMPLEMENTARY.SKY,
    COMPLEMENTARY.SAND,
    COMPLEMENTARY.CORAL,
    COMPLEMENTARY.CREAM,
  ];
  const accentColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 cursor-pointer"
    >
      {/* 색상 바 */}
      <div
        className="h-2 rounded-full mb-3"
        style={{ backgroundColor: accentColor }}
      />

      {/* 프로젝트 정보 */}
      <h3 className="font-semibold text-gray-900 mb-1">
        {project.project_name}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
        {project.description || "설명 없음"}
      </p>

      {/* 메타 정보 */}
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{new Date(project.created_at).toLocaleDateString("ko-KR")}</span>
        <span
          className="px-2 py-1 rounded-full"
          style={{ backgroundColor: MIST.LIGHT, color: MIST.DARKEST }}
        >
          {project.status === "active" ? "진행중" : "완료"}
        </span>
      </div>
    </motion.div>
  );
}
