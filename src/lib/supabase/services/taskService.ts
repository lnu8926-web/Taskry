// src/lib/supabase/services/taskService.ts
// Supabase 태스크 서비스

import { getSupabaseClient } from "../client";
import type {
  Tables,
  TablesInsert,
  TablesUpdate,
  Enums,
} from "../database.types";

export type Task = Tables<"tasks">;
export type InsertTask = TablesInsert<"tasks">;
export type UpdateTask = TablesUpdate<"tasks">;
export type TaskStatus = Enums<"task_status">;

// 담당자 정보가 포함된 Task 타입
export interface TaskWithAssignee extends Task {
  assignee?: {
    user_id: string;
    user_name: string;
    email: string;
    profile_image: string | null;
  } | null;
}

/**
 * 태스크 서비스 - Supabase 연동
 */
export const taskService = {
  /**
   * 보드의 모든 태스크 조회 (담당자 정보 포함)
   */
  async getByBoardId(boardId: string): Promise<TaskWithAssignee[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("tasks")
      .select(
        `
        *,
        assignee:users!assigned_user_id (
          user_id,
          user_name,
          email,
          profile_image
        )
      `,
      )
      .eq("kanban_board_id", boardId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return (data || []) as TaskWithAssignee[];
  },

  /**
   * 프로젝트의 모든 태스크 조회
   */
  async getByProjectId(projectId: string): Promise<TaskWithAssignee[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("tasks")
      .select(
        `
        *,
        assignee:users!assigned_user_id (
          user_id,
          user_name,
          email,
          profile_image
        )
      `,
      )
      .eq("project_id", projectId)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return (data || []) as TaskWithAssignee[];
  },

  /**
   * 특정 태스크 조회
   */
  async getById(taskId: string): Promise<TaskWithAssignee | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("tasks")
      .select(
        `
        *,
        assignee:users!assigned_user_id (
          user_id,
          user_name,
          email,
          profile_image
        )
      `,
      )
      .eq("id", taskId)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      throw error;
    }
    return data as TaskWithAssignee;
  },

  /**
   * 태스크 생성
   */
  async create(task: InsertTask): Promise<Task> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("tasks")
      .insert(task)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * 태스크 수정
   */
  async update(taskId: string, updates: UpdateTask): Promise<Task> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("tasks")
      .update(updates)
      .eq("id", taskId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * 태스크 삭제
   */
  async delete(taskId: string): Promise<void> {
    const supabase = getSupabaseClient();
    const { error } = await supabase.from("tasks").delete().eq("id", taskId);

    if (error) throw error;
  },

  /**
   * 태스크 상태 변경 (드래그앤드롭용)
   */
  async updateStatus(taskId: string, status: TaskStatus): Promise<Task> {
    return this.update(taskId, { status });
  },

  /**
   * 사용자에게 할당된 태스크 조회
   */
  async getByAssignee(userId: string): Promise<TaskWithAssignee[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("tasks")
      .select(
        `
        *,
        assignee:users!assigned_user_id (
          user_id,
          user_name,
          email,
          profile_image
        )
      `,
      )
      .eq("assigned_user_id", userId)
      .order("ended_at", { ascending: true, nullsFirst: false });

    if (error) throw error;
    return (data || []) as TaskWithAssignee[];
  },

  /**
   * 날짜 범위로 태스크 조회 (캘린더용)
   */
  async getByDateRange(
    projectId: string,
    startDate: string,
    endDate: string,
  ): Promise<TaskWithAssignee[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("tasks")
      .select(
        `
        *,
        assignee:users!assigned_user_id (
          user_id,
          user_name,
          email,
          profile_image
        )
      `,
      )
      .eq("project_id", projectId)
      .or(`started_at.lte.${endDate},ended_at.gte.${startDate}`)
      .order("started_at", { ascending: true });

    if (error) throw error;
    return (data || []) as TaskWithAssignee[];
  },

  /**
   * 보드의 태스크 일괄 삭제
   */
  async deleteByBoardId(boardId: string): Promise<void> {
    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("kanban_board_id", boardId);

    if (error) throw error;
  },
};
