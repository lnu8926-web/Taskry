// src/hooks/useAuth.ts
// 인증 상태 관리 커스텀 훅

"use client";

import { useEffect, useState, useCallback } from "react";
import { authService, userService, type User } from "@/lib/supabase/services";
import type { User as AuthUser, Session } from "@supabase/supabase-js";

interface UseAuthReturn {
  user: User | null;
  authUser: AuthUser | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userName: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null);
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 사용자 정보 새로고침 (스킵됨)
  const refreshUser = useCallback(async () => {
    // Supabase 통신 스킵 - 개발 환경
    return;
  }, []);

  // 초기 로드 (스킵됨)
  useEffect(() => {
    setIsLoading(false);
  }, [refreshUser]);

  // Google 로그인 (스킵됨)
  const signInWithGoogle = async () => {
    // 스킵
  };

  // GitHub 로그인 (스킵됨)
  const signInWithGithub = async () => {
    // 스킵
  };

  // 이메일/비밀번호 로그인 (스킵됨)
  const signIn = async (email: string, password: string) => {
    // 스킵
  };

  // 회원가입 (스킵됨)
  const signUp = async (email: string, password: string, userName: string) => {
    // 스킵
  };

  // 로그아웃 (스킵됨)
  const signOut = async () => {
    // 스킵
  };

  return {
    user,
    authUser,
    session,
    isLoading,
    isAuthenticated: !!authUser,
    signInWithGoogle,
    signInWithGithub,
    signIn,
    signUp,
    signOut,
    refreshUser,
  };
}
