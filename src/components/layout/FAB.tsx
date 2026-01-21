"use client";

import { useState } from "react";
import { Plus, X, FolderPlus, CheckSquare } from "lucide-react";
import { MIST } from "@/lib/constants";

interface FABProps {
  onAddTask?: () => void;
  onAddProject?: () => void;
}

export default function FAB({ onAddTask, onAddProject }: FABProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleAddTask = () => {
    closeMenu();
    onAddTask?.();
  };

  const handleAddProject = () => {
    closeMenu();
    onAddProject?.();
  };

  return (
    <>
      {/* 오버레이 */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* FAB 컨테이너 */}
      <div className="fixed right-4 bottom-20 z-50 flex flex-col-reverse items-center gap-3 md:hidden safe-area-bottom">
        {/* 서브 메뉴 */}
        {isOpen && (
          <>
            {/* 프로젝트 추가 */}
            <button
              onClick={handleAddProject}
              className="flex items-center gap-3 pl-4 pr-5 py-3 bg-white rounded-full shadow-lg active:scale-95 transition-transform"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: MIST.LIGHT }}
              >
                <FolderPlus size={20} style={{ color: MIST.DARKEST }} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                새 프로젝트
              </span>
            </button>

            {/* 태스크 추가 */}
            <button
              onClick={handleAddTask}
              className="flex items-center gap-3 pl-4 pr-5 py-3 bg-white rounded-full shadow-lg active:scale-95 transition-transform"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: MIST.LIGHT }}
              >
                <CheckSquare size={20} style={{ color: MIST.DARKEST }} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                새 태스크
              </span>
            </button>
          </>
        )}

        {/* 메인 FAB 버튼 */}
        <button
          onClick={toggleMenu}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all duration-200"
          style={{
            backgroundColor: MIST.DARKEST,
            boxShadow: "0 4px 20px rgba(74, 92, 94, 0.4)",
          }}
          aria-label={isOpen ? "메뉴 닫기" : "추가하기"}
        >
          <div
            className="transition-transform duration-200"
            style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            {isOpen ? (
              <X size={28} color="white" />
            ) : (
              <Plus size={28} color="white" />
            )}
          </div>
        </button>
      </div>
    </>
  );
}
