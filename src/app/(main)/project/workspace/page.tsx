// src/app/(main)/project/workspace/page.tsx - 프로젝트 워크스페이스 메인 페이지

"use client";

// React Hooks
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// 메인 기능 컴포넌트들
import CalendarView from "@/components/features/calendarView/CalendarView";
import KanbanBoard from "@/components/features/kanban/KanbanBoard";

// 타입 정의 및 유틸리티
import { Task } from "@/types/kanban";
import { showToast } from "@/lib/utils/toast";

// 로컬 서비스
import {
  getProjectById,
  getBoardsByProjectId,
  createBoard,
  getTasksByBoardId,
  createTask as createTaskLocal,
  updateTask as updateTaskLocal,
  deleteTask as deleteTaskLocal,
} from "@/lib/local";

// 메모 기능 컴포넌트
import MemoView from "@/components/features/kanban/MemoView";

// 프로젝트 정보 패널
import ProjectInfoPanel from "@/components/features/project/ProjectInfoPanel";

// 네비게이션 타입 정의
type NavItem = "calendar" | "kanban" | "memo" | "project";

/**
 * 프로젝트 워크스페이스 메인 페이지 (로컬 버전)
 */
export default function ProjectPage() {
  const router = useRouter();

  // === 핵심 상태 관리 ===
  const [projectId, setProjectId] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectStartDate, setProjectStartDate] = useState<string>("");
  const [projectEndDate, setProjectEndDate] = useState<string>("");
  const [kanbanBoardId, setKanbanBoardId] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  // === UI 상태 관리 ===
  const [currentView, setCurrentView] = useState<NavItem>("kanban");
  const [showMemoPanel, setShowMemoPanel] = useState(false);
  const [showProjectInfoPanel, setShowProjectInfoPanel] = useState(false);
  const [loading, setLoading] = useState(true);

  // 워크플로우 제어: sessionStorage 기반 접근 관리
  useEffect(() => {
    const storedProjectId = sessionStorage.getItem("current_Project_Id");

    if (!storedProjectId) {
      showToast("프로젝트를 먼저 선택해주세요", "error");
      router.push("/");
      return;
    }

    setProjectId(storedProjectId);
  }, [router]);

  // 프로젝트 데이터 로딩
  useEffect(() => {
    if (!projectId) return;

    const fetchData = () => {
      try {
        if (!projectId || projectId === "undefined" || projectId === "null") {
          console.warn("⚠️ Invalid projectId:", projectId);
          setLoading(false);
          return;
        }

        // 1. 프로젝트 정보 가져오기
        const project = getProjectById(projectId);
        if (project) {
          setProjectName(project.project_name || "이름 없는 프로젝트");
          setProjectStartDate(project.started_at || "");
          setProjectEndDate(project.ended_at || "");
        } else {
          setProjectName("알 수 없는 프로젝트");
          setProjectStartDate("");
          setProjectEndDate("");
        }

        // 2. 칸반보드 가져오기 (없으면 생성)
        const boards = getBoardsByProjectId(projectId);
        let boardId = boards[0]?.id;

        if (!boardId) {
          const newBoard = createBoard({
            name: "기본 보드",
            project_id: projectId,
            columns: "todo,inprogress,done",
          });
          boardId = newBoard.id;
        }

        setKanbanBoardId(boardId);

        // 3. 태스크 가져오기
        const taskList = getTasksByBoardId(boardId);
        setTasks(taskList);
      } catch (error) {
        console.error("데이터 로딩 중 오류:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId]);

  // Task 생성 핸들러
  const handleCreateTask = (
    taskData: Omit<Task, "id" | "created_at" | "updated_at">,
  ) => {
    const newTask = createTaskLocal(taskData);
    setTasks((prev) => [...prev, newTask]);
    showToast("작업이 생성되었습니다.", "success");
  };

  // Task 수정 핸들러
  const handleUpdateTask = (taskId: string, updates: Partial<Task>) => {
    const updated = updateTaskLocal(taskId, updates);
    if (updated) {
      setTasks((prev) =>
        prev.map((t) => (t.id === taskId ? { ...t, ...updates } : t)),
      );
    }
  };

  // Task 삭제 핸들러
  const handleDeleteTask = (taskId: string) => {
    const success = deleteTaskLocal(taskId);
    if (success) {
      setTasks((prev) => prev.filter((t) => t.id !== taskId));
      showToast("작업이 삭제되었습니다.", "success");
    }
  };

  // 데이터 새로고침
  const handleRefresh = () => {
    if (kanbanBoardId) {
      const taskList = getTasksByBoardId(kanbanBoardId);
      setTasks(taskList);
    }
  };

  // 뷰 전환 핸들러
  const handleViewChange = (view: NavItem) => {
    if (view === "memo") {
      setShowMemoPanel((prev) => !prev);
    } else if (view === "project") {
      sessionStorage.removeItem("current_Project_Id");
      window.location.href = "/";
    } else {
      setCurrentView(view);
      setShowMemoPanel(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-400 dark:text-gray-500 text-lg">
          불러오는 중...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 pt-14">
      <div className="flex-1 flex overflow-hidden gap-2 lg:gap-3 min-h-0 p-3 sm:p-4 lg:p-5 max-w-[1600px] mx-auto w-full">
        {/* 프로젝트 정보 패널 - 왼쪽 사이드바 */}
        <aside
          className={`flex flex-col transition-all duration-300 overflow-hidden min-h-0 shrink-0 ${
            showProjectInfoPanel
              ? `w-240px lg:w-280px ${
                  showMemoPanel ? "xl:w-[260px]" : "xl:w-[300px]"
                } opacity-100`
              : "w-0 opacity-0"
          }`}
        >
          <ProjectInfoPanel
            projectId={projectId}
            projectName={projectName}
            projectStartDate={projectStartDate}
            projectEndDate={projectEndDate}
            tasks={tasks}
            onClose={() => setShowProjectInfoPanel(false)}
          />
        </aside>

        {/* 메인 콘텐츠 영역 */}
        <main className="flex flex-col overflow-hidden transition-all duration-300 min-h-0 flex-1 min-w-0">
          <div className="flex-1 overflow-hidden min-h-0">
            {/* 칸반보드 뷰 */}
            {currentView === "kanban" && (
              <KanbanBoard
                boardId={kanbanBoardId}
                tasks={tasks}
                onCreateTask={handleCreateTask}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
                onProjectInfoClick={() =>
                  setShowProjectInfoPanel((prev) => !prev)
                }
                project={{
                  project_id: projectId,
                  project_name: projectName,
                  started_at: projectStartDate,
                  ended_at: projectEndDate,
                }}
              />
            )}

            {/* 캘린더 뷰 */}
            {currentView === "calendar" && (
              <CalendarView
                tasks={tasks}
                boardId={kanbanBoardId}
                project={{
                  project_id: projectId,
                  project_name: projectName,
                  started_at: projectStartDate,
                  ended_at: projectEndDate,
                }}
                onCreateTask={handleCreateTask}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
                onSelectTask={() => {}}
                onTaskCreated={handleRefresh}
                onProjectInfoClick={() =>
                  setShowProjectInfoPanel((prev) => !prev)
                }
              />
            )}
          </div>
        </main>

        {/* 메모 패널 - 오른쪽 사이드바 */}
        <aside
          className={`flex flex-col transition-all duration-300 overflow-hidden min-h-0 shrink-0 ${
            showMemoPanel
              ? `w-240px lg:w-280px ${
                  showProjectInfoPanel ? "xl:w-260px" : "xl:w-300px"
                } opacity-100`
              : "w-0 opacity-0"
          }`}
        >
          <MemoView projectId={projectId} />
        </aside>
      </div>
    </div>
  );
}
