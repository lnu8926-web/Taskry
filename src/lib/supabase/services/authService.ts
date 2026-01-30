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
    try {
      // 3초 타임아웃 추가
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("getSession timeout")), 3000)
      );
      const sessionPromise = supabase.auth.getSession();
      
      const { data, error } = await Promise.race([sessionPromise, timeoutPromise]) as any;
      
      if (error) {
        console.warn("getSession error:", error.message);
        return null;
      }
      return data.session;
    } catch (e) {
      console.warn("getSession 타임아웃 또는 에러:", e);
      return null;
    }
  },

  /**
   * 현재 사용자 조회
   */
  async getUser() {
    const supabase = getSupabaseClient();
    try {
      // 3초 타임아웃 추가
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("getUser timeout")), 3000)
      );
      const userPromise = supabase.auth.getUser();
      
      const { data, error } = await Promise.race([userPromise, timeoutPromise]) as any;
      
      if (error) {
        if (error.name === "AuthSessionMissingError") {
          return null;
        }
        console.warn("getUser error:", error.message);
        return null;
      }
      return data.user;
    } catch (e) {
      console.warn("getUser 타임아웃 또는 에러:", e);
      return null;
    }
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
