// src/hooks/useSupabaseTasks.ts
// Supabase 연동 Task 관리 훅

"use client";

import { useState, useEffect, useCallback } from "react";
import {
  taskService,
  type Task,
  type InsertTask,
  type UpdateTask,
  type TaskWithAssignee,
  type TaskStatus,
} from "@/lib/supabase/services";

interface UseSupabaseTasksProps {
  boardId: string;
  projectId: string;
}

interface UseSupabaseTasksReturn {
  tasks: TaskWithAssignee[];
  isLoading: boolean;
  error: string | null;
  createTask: (
    task: Omit<InsertTask, "kanban_board_id" | "project_id">,
  ) => Promise<Task>;
  updateTask: (taskId: string, updates: UpdateTask) => Promise<Task>;
  deleteTask: (taskId: string) => Promise<void>;
  updateTaskStatus: (taskId: string, status: TaskStatus) => Promise<Task>;
  refreshTasks: () => Promise<void>;
}

/**
 * Supabase 연동 Task CRUD 훅
 */
export function useSupabaseTasks({
  boardId,
  projectId,
}: UseSupabaseTasksProps): UseSupabaseTasksReturn {
  const [tasks, setTasks] = useState<TaskWithAssignee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 태스크 목록 조회
  const fetchTasks = useCallback(async () => {
    if (!boardId) return;

    try {
      setIsLoading(true);
      setError(null);
      const data = await taskService.getByBoardId(boardId);
      setTasks(data);
    } catch (err) {
      console.error("Task 조회 실패:", err);
      setError(err instanceof Error ? err.message : "알 수 없는 오류");
    } finally {
      setIsLoading(false);
    }
  }, [boardId]);

  // 초기 로드
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  // 태스크 생성
  const createTask = async (
    task: Omit<InsertTask, "kanban_board_id" | "project_id">,
  ): Promise<Task> => {
    const newTask = await taskService.create({
      ...task,
      kanban_board_id: boardId,
      project_id: projectId,
    });

    // 로컬 상태 업데이트 (담당자 정보 없이)
    setTasks((prev) => [{ ...newTask, assignee: null }, ...prev]);

    return newTask;
  };

  // 태스크 수정
  const updateTask = async (
    taskId: string,
    updates: UpdateTask,
  ): Promise<Task> => {
    const updated = await taskService.update(taskId, updates);

    // 로컬 상태 업데이트
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, ...updated } : task)),
    );

    return updated;
  };

  // 태스크 삭제
  const deleteTask = async (taskId: string): Promise<void> => {
    await taskService.delete(taskId);

    // 로컬 상태 업데이트
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // 태스크 상태 변경
  const updateTaskStatus = async (
    taskId: string,
    status: TaskStatus,
  ): Promise<Task> => {
    const updated = await taskService.updateStatus(taskId, status);

    // 로컬 상태 업데이트
    setTasks((prev) =>
      prev.map((task) => (task.id === taskId ? { ...task, status } : task)),
    );

    return updated;
  };

  return {
    tasks,
    isLoading,
    error,
    createTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
    refreshTasks: fetchTasks,
  };
}
