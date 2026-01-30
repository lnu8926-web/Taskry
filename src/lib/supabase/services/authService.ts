// src/lib/supabase/services/authService.ts
// Supabase 인증 서비스

import { getSupabaseClient } from "../client";
import type { Provider } from "@supabase/supabase-js";

/**
 * 인증 서비스 - Supabase Auth 연동
 */
export const authService = {
  /**
   * 소셜 로그인 (Google, GitHub 등)
   */
  async signInWithOAuth(provider: Provider) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) throw error;
    return data;
  },

  /**
   * 이메일/비밀번호 회원가입
   */
  async signUp(email: string, password: string, userName: string) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: userName,
        },
      },
    });

    if (error) throw error;
    return data;
  },

  /**
   * 이메일/비밀번호 로그인
   */
  async signIn(email: string, password: string) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  /**
   * 로그아웃
   */
  async signOut() {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  /**
   * 현재 세션 조회
   */
  async getSession() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.getSession();
    // 세션이 없는 경우는 정상적인 상황이므로 null 반환
    if (error) {
      console.warn("getSession error:", error.message);
      return null;
    }
    return data.session;
  },

  /**
   * 현재 사용자 조회
   */
  async getUser() {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.getUser();
    // AuthSessionMissingError는 로그아웃 상태에서 정상적인 상황
    if (error) {
      // 세션 없음 에러는 무시하고 null 반환
      if (error.name === "AuthSessionMissingError") {
        return null;
      }
      console.warn("getUser error:", error.message);
      return null;
    }
    return data.user;
  },

  /**
   * 비밀번호 재설정 이메일 전송
   */
  async resetPassword(email: string) {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    });
    if (error) throw error;
  },

  /**
   * 비밀번호 업데이트
   */
  async updatePassword(newPassword: string) {
    const supabase = getSupabaseClient();
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    if (error) throw error;
  },

  /**
   * 인증 상태 변경 리스너
   */
  onAuthStateChange(callback: (event: string, session: unknown) => void) {
    const supabase = getSupabaseClient();
    return supabase.auth.onAuthStateChange(callback);
  },
};
