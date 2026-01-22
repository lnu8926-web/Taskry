"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { MIST } from "@/lib/constants";
import { Task } from "@/types/kanban";
import { Project } from "@/types/project";
import { showToast } from "@/lib/utils/toast";
import KanbanView from "@/components/features/kanban/KanbanView";
import {
  getProjectById,
  getBoardsByProjectId,
  createBoard,
  getTasksByBoardId,
  createTask as createTaskLocal,
  updateTask as updateTaskLocal,
  deleteTask as deleteTaskLocal,
} from "@/lib/local";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  // 상태 관리
  const [project, setProject] = useState<Project | null>(null);
  const [kanbanBoardId, setKanbanBoardId] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  // 프로젝트 데이터 로딩
  useEffect(() => {
    if (!projectId) return;

    const fetchData = () => {
      try {
        // 1. 프로젝트 정보 가져오기
        const projectData = getProjectById(projectId);
        if (!projectData) {
          showToast("프로젝트를 찾을 수 없습니다", "error");
          router.push("/projects");
          return;
        }

        setProject(projectData);

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
        showToast("데이터를 불러오는데 실패했습니다", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [projectId, router]);

  // Task 생성 핸들러
  const handleCreateTask = () => {
    // TODO: 태스크 생성 모달 열기
    console.log("Create task");
  };

  // Task 열기 핸들러
  const handleOpenTask = (task: Task) => {
    // TODO: 태스크 상세 모달 열기
    console.log("Open task:", task);
  };

  // Task 상태 변경 핸들러
  const handleUpdateTaskStatus = (taskId: string, newStatus: string) => {
    const updated = updateTaskLocal(taskId, {
      status: newStatus as Task["status"],
    });
    if (updated) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === taskId ? { ...t, status: newStatus as Task["status"] } : t,
        ),
      );
      showToast("태스크가 이동되었습니다", "success");
    }
  };

  // 뒤로가기
  const handleBack = () => {
    router.push("/projects");
  };

  // 로딩 상태
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin"
            style={{
              borderColor: `${MIST.DEFAULT} transparent ${MIST.LIGHT} ${MIST.LIGHT}`,
            }}
          />
          <p className="text-gray-500">불러오는 중...</p>
        </div>
      </div>
    );
  }

  // 프로젝트 없음
  if (!project) {
    return null;
  }

  return (
    <KanbanView
      project={project}
      tasks={tasks}
      onBack={handleBack}
      onCreateTask={handleCreateTask}
      onOpenTask={handleOpenTask}
      onUpdateTaskStatus={handleUpdateTaskStatus}
    />
  );
}
