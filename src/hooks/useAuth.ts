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
  const [isLoading, setIsLoading] = useState(true);

  // 사용자 정보 새로고침
  const refreshUser = useCallback(async () => {
    try {
      const [currentSession, currentUser] = await Promise.all([
        authService.getSession(),
        authService.getUser(),
      ]);

      setSession(currentSession);
      setAuthUser(currentUser);

      if (currentUser) {
        const userData = await userService.getCurrentUser();
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to refresh user:", error);
      setUser(null);
      setAuthUser(null);
      setSession(null);
    }
  }, []);

  // 초기 로드 및 인증 상태 변경 감지
  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      await refreshUser();
      setIsLoading(false);
    };

    initAuth();

    // 인증 상태 변경 리스너
    const {
      data: { subscription },
    } = authService.onAuthStateChange(async (event, session) => {
      setSession(session as Session | null);

      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        await refreshUser();
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setAuthUser(null);
        setSession(null);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [refreshUser]);

  // Google 로그인
  const signInWithGoogle = async () => {
    await authService.signInWithOAuth("google");
  };

  // GitHub 로그인
  const signInWithGithub = async () => {
    await authService.signInWithOAuth("github");
  };

  // 이메일/비밀번호 로그인
  const signIn = async (email: string, password: string) => {
    await authService.signIn(email, password);
    await refreshUser();
  };

  // 회원가입
  const signUp = async (email: string, password: string, userName: string) => {
    await authService.signUp(email, password, userName);
  };

  // 로그아웃
  const signOut = async () => {
    await authService.signOut();
    setUser(null);
    setAuthUser(null);
    setSession(null);
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
