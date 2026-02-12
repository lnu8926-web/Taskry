// src/lib/supabase/middleware.ts
// 미들웨어에서 사용하는 Supabase 클라이언트

import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  // 로그인 페이지 접근 시 바로 홈(대시보드)으로 리다이렉트
  if (request.nextUrl.pathname === "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // 다른 요청은 그대로 통과
  return NextResponse.next({
    request,
  });
}
