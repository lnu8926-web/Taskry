"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/lib/supabase/services";
import { MIST } from "@/lib/constants";

export default function LoginPage() {
  const router = useRouter();
  const {
    user,
    authUser,
    isLoading: authLoading,
    signInWithGoogle,
    signInWithGithub,
  } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // 이미 로그인된 경우 홈으로 리다이렉트 (authUser로 체크)
  useEffect(() => {
    if (!authLoading && authUser) {
      router.push("/");
    }
  }, [authUser, authLoading, router]);

  const getErrorMessage = (error: string) => {
    const messages: Record<string, string> = {
      "Invalid login credentials": "이메일 또는 비밀번호가 올바르지 않습니다.",
      "User already registered": "이미 가입된 이메일입니다.",
      "Password should be at least 6 characters":
        "비밀번호는 최소 6자 이상이어야 합니다.",
      "Unable to validate email address: invalid format":
        "올바른 이메일 형식이 아닙니다.",
    };
    return messages[error] || error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      if (isLogin) {
        await authService.signIn(email, password);
        router.push("/");
      } else {
        await authService.signUp(email, password, userName);
        setMessage("인증 이메일을 확인해주세요!");
      }
    } catch (err: any) {
      setError(getErrorMessage(err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError("이메일을 입력해주세요.");
      return;
    }

    setLoading(true);
    try {
      await authService.resetPassword(email);
      setMessage("비밀번호 재설정 이메일을 발송했습니다.");
    } catch (err: any) {
      setError(err.message || "비밀번호 재설정 중 오류가 발생했습니다.");
    }
    setLoading(false);
  };

  // 로딩 중이면 빈 화면
  if (authLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: MIST.LIGHT }}
      >
        <div style={{ color: MIST.DARKEST }}>로딩 중...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: MIST.LIGHT }}
    >
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
        <h1
          className="text-2xl font-bold text-center mb-8"
          style={{ color: MIST.DARKEST }}
        >
          Taskry
        </h1>

        <div className="flex mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 transition-colors ${isLogin ? "border-b-2 font-medium" : "text-gray-500"}`}
            style={
              isLogin
                ? { borderColor: MIST.DARK, color: MIST.DARKEST }
                : undefined
            }
          >
            로그인
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 transition-colors ${!isLogin ? "border-b-2 font-medium" : "text-gray-500"}`}
            style={
              !isLogin
                ? { borderColor: MIST.DARK, color: MIST.DARKEST }
                : undefined
            }
          >
            회원가입
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-sm">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">이메일</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none"
              style={{ ["--tw-ring-color" as string]: MIST.DEFAULT }}
              placeholder="example@email.com"
              required
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">이름</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none"
                style={{ ["--tw-ring-color" as string]: MIST.DEFAULT }}
                placeholder="홍길동"
                required
              />
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none"
              style={{ ["--tw-ring-color" as string]: MIST.DEFAULT }}
              placeholder="최소 6자 이상"
              minLength={6}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-white rounded-lg disabled:opacity-50 font-medium transition-colors hover:opacity-90"
            style={{ backgroundColor: MIST.DARK }}
          >
            {loading ? "처리 중..." : isLogin ? "로그인" : "회원가입"}
          </button>
        </form>

        {isLogin && (
          <button
            onClick={handleResetPassword}
            className="mt-4 w-full text-sm text-gray-500 hover:underline"
          >
            비밀번호를 잊으셨나요?
          </button>
        )}

        <div className="mt-6 flex items-center">
          <div className="flex-1 border-t"></div>
          <span className="px-4 text-gray-500 text-sm">또는</span>
          <div className="flex-1 border-t"></div>
        </div>

        {/* 소셜 로그인 버튼 */}
        {/* google */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => signInWithGoogle()}
            className="w-full py-3 border rounded-lg flex items-center justify-center transition-colors"
            style={{ borderColor: MIST.DEFAULT }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = MIST.LIGHT)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Google로 계속하기
          </button>
        </div>
        {/* github */}
        <div className="mt-6 space-y-3">
          <button
            onClick={() => signInWithGithub()}
            className="w-full py-3 border rounded-lg flex items-center justify-center transition-colors"
            style={{ borderColor: MIST.DEFAULT }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = MIST.LIGHT)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "white")
            }
          >
            <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            GitHub로 계속하기
          </button>
        </div>
      </div>
    </div>
  );
}
