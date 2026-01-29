// src/lib/supabase/services/userService.ts
// Supabase 사용자 서비스

import { getSupabaseClient } from "../client";
import type { Tables, TablesUpdate } from "../database.types";

export type User = Tables<"users">;
export type UpdateUser = TablesUpdate<"users">;

/**
 * 사용자 서비스 - Supabase 연동
 */
export const userService = {
  /**
   * 현재 로그인한 사용자 정보 조회
   */
  async getCurrentUser(): Promise<User | null> {
    const supabase = getSupabaseClient();

    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();
    if (!authUser) return null;

    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", authUser.id)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      throw error;
    }
    return data;
  },

  /**
   * 특정 사용자 조회
   */
  async getById(userId: string): Promise<User | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      throw error;
    }
    return data;
  },

  /**
   * 이메일로 사용자 조회
   */
  async getByEmail(email: string): Promise<User | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error) {
      if (error.code === "PGRST116") return null;
      throw error;
    }
    return data;
  },

  /**
   * 사용자 정보 수정
   */
  async update(userId: string, updates: UpdateUser): Promise<User> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("users")
      .update(updates)
      .eq("user_id", userId)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  /**
   * 사용자 검색 (팀원 초대용)
   */
  async search(query: string): Promise<User[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .or(`email.ilike.%${query}%,user_name.ilike.%${query}%`)
      .limit(10);

    if (error) throw error;
    return data || [];
  },

  /**
   * 프로젝트 멤버 목록 조회
   */
  async getProjectMembers(projectId: string): Promise<User[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("project_members")
      .select(
        `
        users (*)
      `,
      )
      .eq("project_id", projectId);

    if (error) throw error;
    return (data || [])
      .map((item: { users: User }) => item.users)
      .filter(Boolean) as User[];
  },
};
