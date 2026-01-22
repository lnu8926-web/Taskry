"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Filter,
  ArrowUpDown,
  Info,
  CheckCircle,
  Clock,
  AlertCircle,
  Calendar,
  Grid,
  ChevronRight,
  Menu,
  ArrowLeft,
} from "lucide-react";
import { MIST, COMPLEMENTARY } from "@/lib/constants";
import { Task as TaskType } from "@/types/kanban";
import { Project } from "@/types/project";

// 칸반 뷰 Props
interface KanbanViewProps {
  project: Project;
  tasks: TaskType[];
  onBack?: () => void;
  onCreateTask?: () => void;
  onOpenTask?: (task: TaskType) => void;
  onUpdateTaskStatus?: (taskId: string, newStatus: string) => void;
}

// 컬럼 타입
type ColumnStatus = "todo" | "inprogress" | "done";

// 컬럼 설정
const COLUMNS: { id: ColumnStatus; title: string; icon: React.ReactNode }[] = [
  {
    id: "todo",
    title: "할 일",
    icon: <Clock size={16} className="text-yellow-500" />,
  },
  {
    id: "inprogress",
    title: "진행중",
    icon: <AlertCircle size={16} className="text-blue-500" />,
  },
  {
    id: "done",
    title: "완료",
    icon: <CheckCircle size={16} className="text-green-500" />,
  },
];

export default function KanbanView({
  project,
  tasks,
  onBack,
  onCreateTask,
  onOpenTask,
  onUpdateTaskStatus,
}: KanbanViewProps) {
  const [view, setView] = useState<"kanban" | "calendar">("kanban");
  const [isInfoPanelOpen, setIsInfoPanelOpen] = useState(false);
  const [draggingTask, setDraggingTask] = useState<TaskType | null>(null);
  const [draggingFrom, setDraggingFrom] = useState<string | null>(null);

  // 태스크 상태별 그룹화
  const tasksByStatus = {
    todo: tasks.filter((task) => task.status === "todo"),
    inprogress: tasks.filter((task) => task.status === "inprogress"),
    done: tasks.filter((task) => task.status === "done"),
  };

  // 통계
  const totalTasks = tasks.length;
  const completedTasks = tasksByStatus.done.length;
  const progressPercent =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // 드래그 시작
  const handleDragStart = (task: TaskType, status: string) => {
    setDraggingTask(task);
    setDraggingFrom(status);
  };

  // 드래그 오버
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // 드롭
  const handleDrop = (e: React.DragEvent, targetStatus: ColumnStatus) => {
    e.preventDefault();

    if (draggingTask && draggingFrom && draggingFrom !== targetStatus) {
      onUpdateTaskStatus?.(draggingTask.id, targetStatus);
    }

    setDraggingTask(null);
    setDraggingFrom(null);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* 모바일 헤더 */}
      <div className="md:hidden bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={onBack}
            className="p-2 -ml-2 rounded-lg active:bg-gray-100"
          >
            <ArrowLeft size={20} style={{ color: MIST.DARKEST }} />
          </button>

          <div className="flex items-center">
            <div
              className="h-3 w-3 rounded-full mr-2"
              style={{ backgroundColor: MIST.DEFAULT }}
            />
            <h1 className="text-lg font-bold" style={{ color: MIST.DARKEST }}>
              {project.project_name}
            </h1>
          </div>

          <button
            onClick={() => setIsInfoPanelOpen(!isInfoPanelOpen)}
            className="p-2 rounded-lg active:bg-gray-100"
          >
            <Info size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* 데스크탑 헤더 */}
      <div className="hidden md:flex bg-white border-b border-gray-200 px-6 py-4 items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center">
            <div
              className="h-4 w-4 rounded-full mr-3"
              style={{ backgroundColor: MIST.DEFAULT }}
            />
            <div>
              <h1 className="text-xl font-bold" style={{ color: MIST.DARKEST }}>
                {project.project_name}
              </h1>
              {project.description && (
                <p className="text-sm text-gray-500">{project.description}</p>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* 뷰 전환 */}
          <div className="bg-gray-100 rounded-lg p-0.5 flex">
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                view === "kanban"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setView("kanban")}
            >
              <Grid size={16} className="inline mr-1.5" />
              칸반
            </button>
            <button
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                view === "calendar"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-600 hover:text-gray-800"
              }`}
              onClick={() => setView("calendar")}
            >
              <Calendar size={16} className="inline mr-1.5" />
              캘린더
            </button>
          </div>

          <button
            onClick={() => setIsInfoPanelOpen(!isInfoPanelOpen)}
            className="p-1.5 rounded-lg hover:bg-gray-100"
          >
            <Info size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* 서브 헤더 (툴바) */}
      <div className="bg-white border-b border-gray-200 px-4 md:px-6 py-2 flex items-center justify-between">
        <button className="flex items-center text-sm text-gray-600 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-100">
          <Filter size={16} className="mr-1.5" />
          필터
        </button>

        <div className="text-sm text-gray-600">
          {totalTasks}개 태스크 · {completedTasks}개 완료
        </div>

        <button className="flex items-center text-sm text-gray-600 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-100">
          <ArrowUpDown size={16} className="mr-1.5" />
          정렬
        </button>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 flex overflow-hidden">
        {/* 칸반 보드 */}
        {view === "kanban" && (
          <div className="flex-1 overflow-x-auto">
            {/* 모바일: 가로 스크롤 */}
            <div className="flex h-full p-4 gap-4 md:gap-4 min-w-max md:min-w-0">
              {COLUMNS.map((column) => (
                <div
                  key={column.id}
                  className="w-72 md:flex-1 md:min-w-[280px] md:max-w-[400px] bg-gray-100 rounded-xl flex flex-col h-full"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, column.id)}
                >
                  {/* 컬럼 헤더 */}
                  <div className="p-3 bg-white border-b border-gray-200 rounded-t-xl">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        {column.icon}
                        <h3 className="font-medium text-gray-800">
                          {column.title}
                        </h3>
                        <span className="bg-gray-200 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full">
                          {tasksByStatus[column.id].length}
                        </span>
                      </div>
                      <button
                        onClick={onCreateTask}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <Plus size={16} className="text-gray-500" />
                      </button>
                    </div>
                  </div>

                  {/* 태스크 목록 */}
                  <div className="p-2 flex-1 overflow-y-auto">
                    {tasksByStatus[column.id].map((task) => (
                      <TaskCard
                        key={task.id}
                        task={task}
                        onDragStart={() => handleDragStart(task, column.id)}
                        onClick={() => onOpenTask?.(task)}
                      />
                    ))}

                    {tasksByStatus[column.id].length === 0 && (
                      <div className="p-6 text-center text-gray-400 text-sm">
                        태스크 없음
                      </div>
                    )}
                  </div>

                  {/* 컬럼 푸터 */}
                  <div className="p-2 border-t border-gray-200">
                    <button
                      onClick={onCreateTask}
                      className="w-full p-2 flex items-center justify-center text-gray-500 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                    >
                      <Plus size={16} className="mr-1" /> 태스크 추가
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 캘린더 뷰 (개발 중) */}
        {view === "calendar" && (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            캘린더 뷰는 개발 중입니다.
          </div>
        )}

        {/* 프로젝트 정보 패널 */}
        {isInfoPanelOpen && (
          <div className="hidden md:block w-72 border-l border-gray-200 bg-white overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-800">프로젝트 정보</h3>
                <button
                  onClick={() => setIsInfoPanelOpen(false)}
                  className="p-1 hover:bg-gray-100 rounded-full"
                >
                  <ChevronRight size={16} className="text-gray-500" />
                </button>
              </div>
            </div>

            <div className="p-4 space-y-5">
              {/* 설명 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  설명
                </h4>
                <p className="text-sm text-gray-700">
                  {project.description || "설명이 없습니다."}
                </p>
              </div>

              {/* 진행률 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  진행 상황
                </h4>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all"
                    style={{
                      width: `${progressPercent}%`,
                      backgroundColor: MIST.DEFAULT,
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1.5 text-xs text-gray-500">
                  <span>{progressPercent}% 완료</span>
                  <span>
                    {completedTasks}/{totalTasks} 태스크
                  </span>
                </div>
              </div>

              {/* 태스크 요약 */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  태스크 요약
                </h4>
                <div className="space-y-2">
                  {COLUMNS.map((column) => (
                    <div
                      key={column.id}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-2">
                        {column.icon}
                        <span className="text-sm text-gray-700">
                          {column.title}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {tasksByStatus[column.id].length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 기간 */}
              {(project.started_at || project.ended_at) && (
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    기간
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <Calendar size={14} className="text-gray-400" />
                    <span>
                      {project.started_at || "시작일 미정"} ~{" "}
                      {project.ended_at || "종료일 미정"}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 모바일 정보 패널 (바텀 시트) */}
      {isInfoPanelOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsInfoPanelOpen(false)}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[70vh] overflow-y-auto"
          >
            <div className="p-4 border-b border-gray-200">
              <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3" />
              <h3 className="font-medium text-gray-800 text-center">
                프로젝트 정보
              </h3>
            </div>

            <div className="p-4 space-y-4">
              {/* 진행률 */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">진행률</span>
                  <span className="text-sm font-medium">
                    {progressPercent}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{
                      width: `${progressPercent}%`,
                      backgroundColor: MIST.DEFAULT,
                    }}
                  />
                </div>
              </div>

              {/* 태스크 현황 */}
              <div className="grid grid-cols-3 gap-3">
                {COLUMNS.map((column) => (
                  <div
                    key={column.id}
                    className="bg-gray-50 rounded-xl p-3 text-center"
                  >
                    <div className="flex justify-center mb-1">
                      {column.icon}
                    </div>
                    <div className="text-xl font-bold text-gray-800">
                      {tasksByStatus[column.id].length}
                    </div>
                    <div className="text-xs text-gray-500">{column.title}</div>
                  </div>
                ))}
              </div>

              {/* 설명 */}
              {project.description && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">
                    설명
                  </h4>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}

// 태스크 카드 컴포넌트
interface TaskCardProps {
  task: TaskType;
  onDragStart: () => void;
  onClick: () => void;
}

function TaskCard({ task, onDragStart, onClick }: TaskCardProps) {
  const priorityStyles: Record<
    string,
    { bg: string; text: string; label: string }
  > = {
    low: { bg: "bg-green-100", text: "text-green-800", label: "낮음" },
    normal: { bg: "bg-yellow-100", text: "text-yellow-800", label: "보통" },
    medium: { bg: "bg-yellow-100", text: "text-yellow-800", label: "보통" },
    high: { bg: "bg-red-100", text: "text-red-800", label: "높음" },
  };

  const priority = priorityStyles[task.priority || "medium"];

  return (
    <motion.div
      className="bg-white p-3 mb-2 rounded-xl shadow-sm border border-gray-100 cursor-grab active:cursor-grabbing"
      draggable
      onDragStart={onDragStart}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.1 }}
    >
      {/* 태스크 제목 */}
      <h4 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">
        {task.title}
      </h4>

      {/* 우선순위 & 마감일 */}
      <div className="flex items-center justify-between text-xs mb-2">
        <span
          className={`px-2 py-0.5 rounded-full ${priority.bg} ${priority.text}`}
        >
          {priority.label}
        </span>

        {task.ended_at && (
          <div className="flex items-center text-gray-500">
            <Calendar size={12} className="mr-1" />
            <span>{task.ended_at.split("-").slice(1).join("/")}</span>
          </div>
        )}
      </div>

      {/* 담당자 */}
      {task.assigned_user_id && (
        <div className="flex items-center mt-2">
          <div
            className="h-5 w-5 rounded-full flex items-center justify-center text-white text-xs"
            style={{ backgroundColor: MIST.DEFAULT }}
          >
            {task.assigned_user_id.charAt(0).toUpperCase()}
          </div>
          <span className="ml-1.5 text-xs text-gray-600">
            {task.assigned_user_id}
          </span>
        </div>
      )}
    </motion.div>
  );
}
