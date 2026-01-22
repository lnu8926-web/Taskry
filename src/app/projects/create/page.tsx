"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Loader2,
  Folder,
  Code,
  Palette,
  Zap,
  Check,
  Sparkles,
} from "lucide-react";
import { MIST } from "@/lib/constants";
import { createProject } from "@/lib/local";
import { showToast } from "@/lib/utils/toast";

// 템플릿 정의
const TEMPLATES = [
  {
    id: "blank",
    icon: Folder,
    name: "빈 프로젝트",
    description: "처음부터 자유롭게",
    color: "#6B7280",
    defaultColumns: ["할 일", "진행중", "완료"],
  },
  {
    id: "dev",
    icon: Code,
    name: "개발 프로젝트",
    description: "백로그, 개발, 테스트, 배포",
    color: "#3B82F6",
    defaultColumns: ["백로그", "개발중", "코드리뷰", "완료"],
    techStack: "React, TypeScript",
  },
  {
    id: "design",
    icon: Palette,
    name: "디자인 프로젝트",
    description: "리서치부터 핸드오프까지",
    color: "#EC4899",
    defaultColumns: ["리서치", "디자인", "피드백", "완료"],
  },
  {
    id: "sprint",
    icon: Zap,
    name: "스프린트",
    description: "2주 단위 애자일 스프린트",
    color: "#F59E0B",
    defaultColumns: ["이번 스프린트", "진행중", "리뷰", "완료"],
  },
];

export default function CreateProjectPage() {
  const router = useRouter();

  const [projectName, setProjectName] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 제출 핸들러
  const handleSubmit = async () => {
    if (!projectName.trim()) {
      showToast("프로젝트 이름을 입력해주세요", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const template = TEMPLATES.find((t) => t.id === selectedTemplate);

      const newProject = createProject({
        project_name: projectName,
        description: "",
        type: "개인",
        status: "active",
        tech_stack: template?.techStack || "",
        started_at: new Date().toISOString().split("T")[0],
        ended_at: "",
      });

      showToast("프로젝트가 생성되었습니다! 🎉", "success");
      router.push(`/projects/${newProject.project_id}`);
    } catch (error) {
      console.error("프로젝트 생성 실패:", error);
      showToast("프로젝트 생성에 실패했습니다", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  const canSubmit = projectName.trim().length > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* 헤더 */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-100">
        <div className="flex items-center justify-between h-14 px-4 max-w-2xl mx-auto">
          <button
            onClick={handleBack}
            className="p-2 -ml-2 rounded-xl hover:bg-gray-100 active:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={22} className="text-gray-600" />
          </button>

          <motion.button
            onClick={handleSubmit}
            disabled={isSubmitting || !canSubmit}
            whileHover={{ scale: canSubmit ? 1.02 : 1 }}
            whileTap={{ scale: canSubmit ? 0.98 : 1 }}
            className="px-5 py-2 rounded-xl text-white font-medium disabled:opacity-40 transition-all flex items-center gap-2"
            style={{ backgroundColor: canSubmit ? MIST.DARKEST : "#9CA3AF" }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                생성중...
              </>
            ) : (
              <>
                <Sparkles size={16} />
                시작하기
              </>
            )}
          </motion.button>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="px-4 py-8 max-w-2xl mx-auto pb-32">
        {/* 타이틀 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            새 프로젝트 만들기
          </h1>
          <p className="text-gray-500">이름만 정하면 바로 시작할 수 있어요</p>
        </motion.div>

        {/* 프로젝트 이름 입력 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10"
        >
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="프로젝트 이름"
            autoFocus
            className="w-full text-center text-2xl font-semibold py-4 bg-transparent border-b-2 border-gray-200 focus:border-[#4A5C5E] focus:outline-none transition-colors placeholder:text-gray-300"
            onKeyDown={(e) => {
              if (e.key === "Enter" && canSubmit) {
                handleSubmit();
              }
            }}
          />
          <AnimatePresence>
            {projectName && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-center text-sm text-gray-400 mt-2"
              >
                Enter로 바로 생성
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 템플릿 선택 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm font-medium text-gray-500 mb-4 text-center">
            템플릿 선택 <span className="text-gray-400">(선택사항)</span>
          </p>

          <div className="grid grid-cols-2 gap-3">
            {TEMPLATES.map((template, index) => {
              const Icon = template.icon;
              const isSelected = selectedTemplate === template.id;

              return (
                <motion.button
                  key={template.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.25 + index * 0.05 }}
                  onClick={() =>
                    setSelectedTemplate(isSelected ? null : template.id)
                  }
                  className={`relative p-4 rounded-2xl border-2 text-left transition-all ${
                    isSelected
                      ? "border-[#4A5C5E] bg-[#EDF1F2] shadow-sm"
                      : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
                  }`}
                >
                  {/* 선택 체크마크 */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: MIST.DARKEST }}
                      >
                        <Check size={12} className="text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* 아이콘 */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${template.color}15` }}
                  >
                    <Icon size={20} style={{ color: template.color }} />
                  </div>

                  {/* 텍스트 */}
                  <h3 className="font-semibold text-gray-900 mb-0.5">
                    {template.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {template.description}
                  </p>
                </motion.button>
              );
            })}
          </div>

          {/* 선택된 템플릿 정보 */}
          <AnimatePresence>
            {selectedTemplate && (
              <motion.div
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                className="mt-4 p-4 bg-gray-50 rounded-xl"
              >
                <p className="text-xs text-gray-500 mb-2">기본 컬럼</p>
                <div className="flex flex-wrap gap-2">
                  {TEMPLATES.find(
                    (t) => t.id === selectedTemplate,
                  )?.defaultColumns.map((col) => (
                    <span
                      key={col}
                      className="px-3 py-1 bg-white rounded-lg text-sm text-gray-700 border border-gray-200"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* 모바일 하단 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-lg border-t border-gray-100 md:hidden">
        <motion.button
          onClick={handleSubmit}
          disabled={isSubmitting || !canSubmit}
          whileTap={{ scale: canSubmit ? 0.98 : 1 }}
          className="w-full py-4 rounded-2xl text-white font-semibold disabled:opacity-40 transition-all flex items-center justify-center gap-2"
          style={{ backgroundColor: canSubmit ? MIST.DARKEST : "#9CA3AF" }}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              생성중...
            </>
          ) : (
            <>
              <Sparkles size={20} />
              프로젝트 시작하기
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
