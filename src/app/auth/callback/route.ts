// src/app/auth/callback/route.ts
// OAuth 콜백 처리 (Google, GitHub 등)

import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

import { useAuth } from "@/hooks/useAuth";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  // google oauth 콜백 처리
  const { signInWithOAuth } = useAuth();

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // 에러 발생 시 로그인 페이지로 리다이렉트
  return NextResponse.redirect(`${origin}/login?error=auth_callback_error`);
}
