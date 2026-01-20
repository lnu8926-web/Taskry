// src/lib/local/taskService.ts

import { Task, TaskStatus } from "@/types";
import { getItem, setItem, STORAGE_KEYS } from "./storage";

// 초기 Mock 데이터
const INITIAL_TASKS: Task[] = [
  {
    id: "task-1",
    kanban_board_id: "board-1",
    project_id: "project-1",
    title: "샘플 태스크 1",
    description: "할 일 상태의 샘플 태스크입니다.",
    status: "todo",
    priority: "normal",
    assigned_user_id: null,
    subtasks: [],
    memo: null,
    started_at: null,
    ended_at: null,
    use_time: false,
    start_time: null,
    end_time: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "task-2",
    kanban_board_id: "board-1",
    project_id: "project-1",
    title: "샘플 태스크 2",
    description: "진행 중 상태의 샘플 태스크입니다.",
    status: "inprogress",
    priority: "high",
    assigned_user_id: null,
    subtasks: [],
    memo: null,
    started_at: "2026-01-15",
    ended_at: "2026-01-20",
    use_time: false,
    start_time: null,
    end_time: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "task-3",
    kanban_board_id: "board-1",
    project_id: "project-1",
    title: "샘플 태스크 3",
    description: "완료 상태의 샘플 태스크입니다.",
    status: "done",
    priority: "low",
    assigned_user_id: null,
    subtasks: [],
    memo: null,
    started_at: "2026-01-01",
    ended_at: "2026-01-10",
    use_time: false,
    start_time: null,
    end_time: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// 초기화
export function initTasks(): void {
  const existing = getItem<Task[]>(STORAGE_KEYS.TASKS);
  if (!existing || existing.length === 0) {
    setItem(STORAGE_KEYS.TASKS, INITIAL_TASKS);
  }
}

// 전체 조회
export function getTasks(): Task[] {
  return getItem<Task[]>(STORAGE_KEYS.TASKS) || [];
}

// 보드별 태스크 조회
export function getTasksByBoardId(boardId: string): Task[] {
  const tasks = getTasks();
  return tasks.filter((t) => t.kanban_board_id === boardId);
}

// 프로젝트별 태스크 조회
export function getTasksByProjectId(projectId: string): Task[] {
  const tasks = getTasks();
  return tasks.filter((t) => t.project_id === projectId);
}

// 단건 조회
export function getTaskById(id: string): Task | null {
  const tasks = getTasks();
  return tasks.find((t) => t.id === id) || null;
}

// 생성
export function createTask(
  data: Omit<Task, "id" | "created_at" | "updated_at">,
): Task {
  const tasks = getTasks();

  const newTask: Task = {
    ...data,
    id: `task-${Date.now()}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  tasks.push(newTask);
  setItem(STORAGE_KEYS.TASKS, tasks);

  return newTask;
}

// 수정
export function updateTask(id: string, data: Partial<Task>): Task | null {
  const tasks = getTasks();
  const index = tasks.findIndex((t) => t.id === id);

  if (index === -1) return null;

  tasks[index] = {
    ...tasks[index],
    ...data,
    updated_at: new Date().toISOString(),
  };

  setItem(STORAGE_KEYS.TASKS, tasks);
  return tasks[index];
}

// 삭제
export function deleteTask(id: string): boolean {
  const tasks = getTasks();
  const filtered = tasks.filter((t) => t.id !== id);

  if (filtered.length === tasks.length) return false;

  setItem(STORAGE_KEYS.TASKS, filtered);
  return true;
}

// 상태 변경 (드래그앤드롭용)
export function updateTaskStatus(id: string, status: TaskStatus): Task | null {
  return updateTask(id, { status });
}

// 보드 내 태스크 전체 삭제
export function deleteTasksByBoardId(boardId: string): void {
  const tasks = getTasks();
  const filtered = tasks.filter((t) => t.kanban_board_id !== boardId);
  setItem(STORAGE_KEYS.TASKS, filtered);
}
