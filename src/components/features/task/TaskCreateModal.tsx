"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Flag, Loader2 } from "lucide-react";
import { MIST } from "@/lib/constants";
import { createTask } from "@/lib/local";
import { showToast } from "@/lib/utils/toast";
import { Task, TaskStatus, TaskPriority } from "@/types/kanban";

// ============================================
// Props 타입 정의
// ============================================
interface TaskCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
  boardId: string;
  initialStatus?: TaskStatus; // 어느 컬럼에서 + 눌렀는지
  onSuccess?: (task: Task) => void; // 생성 성공 콜백
}

// ============================================
// 우선순위 설정
// ============================================
const PRIORITIES: {
  value: TaskPriority;
  label: string;
  color: string;
  bgColor: string;
}[] = [
  {
    value: "low",
    label: "낮음",
    color: "#10B981",
    bgColor: "#ECFDF5",
  },
  {
    value: "normal",
    label: "보통",
    color: "#3B82F6",
    bgColor: "#EFF6FF",
  },
  {
    value: "high",
    label: "높음",
    color: "#EF4444",
    bgColor: "#FEF2F2",
  },
];

// ============================================
// 메인 컴포넌트
// ============================================
export default function TaskCreateModal({
  isOpen,
  onClose,
  projectId,
  boardId,
  initialStatus = "todo",
  onSuccess,
}: TaskCreateModalProps) {
  // 폼 상태
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<TaskPriority>("normal");
  const [endDate, setEndDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 폼 초기화
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setPriority("normal");
    setEndDate("");
  };

  // 모달 닫기
  const handleClose = () => {
    resetForm();
    onClose();
  };

  // 제출 핸들러
  const handleSubmit = async () => {
    // 유효성 검사
    if (!title.trim()) {
      showToast("태스크 제목을 입력해주세요", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const newTask = createTask({
        kanban_board_id: boardId,
        project_id: projectId,
        title: title.trim(),
        description: description.trim() || null,
        status: initialStatus,
        priority: priority,
        assigned_user_id: null,
        subtasks: [],
        memo: null,
        started_at: null,
        ended_at: endDate || null,
        use_time: false,
        start_time: null,
        end_time: null,
      });

      showToast("태스크가 생성되었습니다 ✨", "success");
      resetForm();
      onSuccess?.(newTask);
      onClose();
    } catch (error) {
      console.error("태스크 생성 실패:", error);
      showToast("태스크 생성에 실패했습니다", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Enter 키로 제출
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && title.trim()) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 배경 오버레이 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* 모달 컨테이너 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="fixed inset-x-4 top-[10%] md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-md z-50"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* 헤더 */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">새 태스크</h2>
                <button
                  onClick={handleClose}
                  className="p-2 -m-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* 폼 내용 */}
              <div className="p-4 space-y-5">
                {/* 제목 입력 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="태스크 제목을 입력하세요"
                    autoFocus
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                    style={{ ["--tw-ring-color" as string]: MIST.DEFAULT }}
                  />
                </div>

                {/* 설명 입력 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    설명 <span className="text-gray-400">(선택)</span>
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="태스크에 대한 설명을 입력하세요"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent resize-none transition-shadow"
                    style={{ ["--tw-ring-color" as string]: MIST.DEFAULT }}
                  />
                </div>

                {/* 우선순위 선택 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Flag size={14} className="inline mr-1" />
                    우선순위
                  </label>
                  <div className="flex gap-2">
                    {PRIORITIES.map((p) => (
                      <button
                        key={p.value}
                        type="button"
                        onClick={() => setPriority(p.value)}
                        className={`flex-1 py-2.5 rounded-xl font-medium transition-all border-2 ${
                          priority === p.value
                            ? "border-current"
                            : "border-transparent"
                        }`}
                        style={{
                          backgroundColor:
                            priority === p.value ? p.bgColor : "#F3F4F6",
                          color: priority === p.value ? p.color : "#6B7280",
                          borderColor:
                            priority === p.value ? p.color : "transparent",
                        }}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 마감일 선택 */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar size={14} className="inline mr-1" />
                    마감일 <span className="text-gray-400">(선택)</span>
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-shadow"
                    style={{ ["--tw-ring-color" as string]: MIST.DEFAULT }}
                  />
                </div>
              </div>

              {/* 하단 버튼 */}
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting || !title.trim()}
                  className="w-full py-3 rounded-xl text-white font-semibold disabled:opacity-50 transition-all flex items-center justify-center gap-2"
                  style={{ backgroundColor: MIST.DARKEST }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      생성중...
                    </>
                  ) : (
                    "태스크 만들기"
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
