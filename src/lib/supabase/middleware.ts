// src/lib/supabase/middleware.ts
// 미들웨어에서 사용하는 Supabase 클라이언트

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // 세션 갱신 (중요: 이 코드를 제거하면 안 됩니다)
  // user 변수는 나중에 인증 보호 로직에서 사용됩니다
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 인증이 필요한 경로 보호 (선택적)
  const protectedRoutes = ["/project", "/"];
  const publicRoutes = ["/login", "/auth"];

  const isProtectedRoute = protectedRoutes.some(
    (route) =>
      request.nextUrl.pathname === route ||
      (route !== "/" && request.nextUrl.pathname.startsWith(route)),
  );

  const isPublicRoute = publicRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route),
  );

  // 보호된 경로에 비로그인 접근 시 로그인 페이지로 리다이렉트
  if (isProtectedRoute && !user && !isPublicRoute) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 로그인된 상태에서 로그인 페이지 접근 시 홈으로 리다이렉트
  if (user && request.nextUrl.pathname === "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
