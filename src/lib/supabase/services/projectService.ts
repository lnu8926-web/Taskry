// src/lib/supabase/services/projectService.ts
// Supabase 프로젝트 서비스

import { getSupabaseClient } from "../client";
import type { Tables, TablesInsert, TablesUpdate } from "../database.types";

export type Project = Tables<"projects">;
export type InsertProject = TablesInsert<"projects">;
export type UpdateProject = TablesUpdate<"projects">;

/**
 * 프로젝트 서비스 - Supabase 연동
 */
export const projectService = {
  /**
   * 모든 프로젝트 조회
   */
  async getAll(): Promise<Project[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },

  /**
   * 특정 프로젝트 조회
   */
  async getById(projectId: string): Promise<Project | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("project_id", projectId)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null; // Not found
      throw error;
    }
    return data;
  },

  /**
   * 프로젝트 생성
   */
  async create(project: InsertProject): Promise<Project> {
    const supabase = getSupabaseClient();

    // 현재 로그인한 사용자 ID 가져오기
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("projects")
      .insert({
        ...project,
        user_id: user?.id || project.user_id,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * 프로젝트 수정
   */
  async update(projectId: string, updates: UpdateProject): Promise<Project> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("projects")
      .update(updates)
      .eq("project_id", projectId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * 프로젝트 삭제
   */
  async delete(projectId: string): Promise<void> {
    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from("projects")
      .delete()
      .eq("project_id", projectId);

    if (error) throw error;
  },

  /**
   * 프로젝트 상태별 조회
   */
  async getByStatus(status: NonNullable<Project["status"]>): Promise<Project[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("status", status)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  },
};
