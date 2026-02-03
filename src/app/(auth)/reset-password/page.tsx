"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/lib/supabase/services";
import { MIST } from "@/lib/constants";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    // 비밀번호 확인
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    setLoading(true);

    try {
      await authService.updatePassword(password);
      setMessage("비밀번호가 성공적으로 변경되었습니다.");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "비밀번호 변경 중 오류가 발생했습니다.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

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
          비밀번호 재설정
        </h1>

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
            <label className="block text-sm font-medium mb-2">
              새 비밀번호
            </label>
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

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              비밀번호 확인
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none"
              style={{ ["--tw-ring-color" as string]: MIST.DEFAULT }}
              placeholder="비밀번호 재입력"
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
            {loading ? "처리 중..." : "비밀번호 변경"}
          </button>
        </form>

        <button
          onClick={() => router.push("/login")}
          className="mt-4 w-full text-sm text-gray-500 hover:underline"
        >
          로그인 페이지로 돌아가기
        </button>
      </div>
    </div>
  );
}
