// src/lib/supabase/services/boardService.ts
// Supabase 칸반보드 서비스

import { getSupabaseClient } from "../client";
import type { Tables, TablesInsert, TablesUpdate } from "../database.types";

export type KanbanBoard = Tables<"kanban_boards">;
export type InsertKanbanBoard = TablesInsert<"kanban_boards">;
export type UpdateKanbanBoard = TablesUpdate<"kanban_boards">;

/**
 * 칸반보드 서비스 - Supabase 연동
 */
export const boardService = {
  /**
   * 프로젝트의 모든 보드 조회
   */
  async getByProjectId(projectId: string): Promise<KanbanBoard[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("kanban_boards")
      .select("*")
      .eq("project_id", projectId)
      .order("created_at", { ascending: true });

    if (error) throw error;
    return data || [];
  },

  /**
   * 특정 보드 조회
   */
  async getById(boardId: string): Promise<KanbanBoard | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("kanban_boards")
      .select("*")
      .eq("id", boardId)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      throw error;
    }
    return data;
  },

  /**
   * 보드 생성
   */
  async create(board: InsertKanbanBoard): Promise<KanbanBoard> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("kanban_boards")
      .insert(board)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * 보드 수정
   */
  async update(
    boardId: string,
    updates: UpdateKanbanBoard,
  ): Promise<KanbanBoard> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("kanban_boards")
      .update(updates)
      .eq("id", boardId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * 보드 삭제
   */
  async delete(boardId: string): Promise<void> {
    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from("kanban_boards")
      .delete()
      .eq("id", boardId);

    if (error) throw error;
  },

  /**
   * 프로젝트 생성 시 기본 보드 자동 생성
   */
  async createDefaultBoard(projectId: string): Promise<KanbanBoard> {
    return this.create({
      project_id: projectId,
      name: "기본 보드",
      description: "프로젝트 기본 칸반보드",
      columns: "todo,inprogress,done",
    });
  },
};
