"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { authService } from "@/lib/supabase/services";
import { MIST } from "@/lib/constants";

export default function LoginPage() {
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  // 이미 로그인된 경우 홈으로 리다이렉트
  useEffect(() => {
    if (!authLoading && user) {
      router.push("/");
    }
  }, [user, authLoading, router]);

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
            style={isLogin ? { borderColor: MIST.DARK, color: MIST.DARKEST } : undefined}
          >
            로그인
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 transition-colors ${!isLogin ? "border-b-2 font-medium" : "text-gray-500"}`}
            style={!isLogin ? { borderColor: MIST.DARK, color: MIST.DARKEST } : undefined}
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
            className="w-full py-3 text-white rounded-lg disabled:opacity-50 font-medium transition-colors"
            style={{ backgroundColor: MIST.DARK }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = MIST.DARKEST)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = MIST.DARK)}
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

        {/* 소셜 로그인 버튼 (다음 단계) */}
        <div className="mt-6 space-y-3">
          {/* Google, GitHub 버튼 추가 예정 */}
        </div>
      </div>
    </div>
  );
}
