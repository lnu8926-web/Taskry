"use client";

import React from "react";

interface KanbanLayoutProps {
  children: React.ReactNode;
  projectId?: string;
}

/**
 * 칸반보드 레이아웃 래퍼
 * 칸반보드에 필요한 레이아웃 설정을 제공합니다
 */
export default function KanbanLayout({
  children,
  projectId,
}: KanbanLayoutProps) {
  return (
    <div className="h-full w-full flex flex-col" data-project-id={projectId}>
      {children}
    </div>
  );
}
