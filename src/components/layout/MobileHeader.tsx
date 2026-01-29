"use client";

import React from "react";
import { Search, Bell, Menu } from "lucide-react";
import { MIST } from "@/lib/constants";

interface MobileHeaderProps {
  title?: string;
  onMenuClick?: () => void;
  showSearch?: boolean;
  showNotification?: boolean;
}

export default function MobileHeader({
  title = "Taskry",
  onMenuClick,
  showSearch = true,
  showNotification = true,
}: MobileHeaderProps) {
  return (
    <header
      className="sticky top-0 z-40 bg-white border-b border-gray-200 md:hidden safe-area-top"
      style={{ backgroundColor: MIST.LIGHT }}
    >
      <div className="flex items-center justify-between h-14 px-4">
        {/* 왼쪽: 메뉴 또는 로고 */}
        <div className="flex items-center">
          {onMenuClick ? (
            <button
              onClick={onMenuClick}
              className="p-2 -ml-2 rounded-lg active:bg-white/50 transition-colors"
              aria-label="메뉴 열기"
            >
              <Menu size={24} style={{ color: MIST.DARKEST }} />
            </button>
          ) : (
            <h1 className="text-lg font-bold" style={{ color: MIST.DARKEST }}>
              {title}
            </h1>
          )}
        </div>

        {/* 가운데: 타이틀 (메뉴 버튼이 있을 때만) */}
        {onMenuClick && (
          <h1
            className="text-lg font-bold absolute left-1/2 -translate-x-1/2"
            style={{ color: MIST.DARKEST }}
          >
            {title}
          </h1>
        )}

        {/* 오른쪽: 액션 버튼들 */}
        <div className="flex items-center gap-1">
          {showSearch && (
            <button
              className="p-2 rounded-lg active:bg-white/50 transition-colors"
              aria-label="검색"
            >
              <Search size={22} style={{ color: MIST.DARK }} />
            </button>
          )}
          {showNotification && (
            <button
              className="p-2 rounded-lg active:bg-white/50 transition-colors relative"
              aria-label="알림"
            >
              <Bell size={22} style={{ color: MIST.DARK }} />
              {/* 알림 뱃지 */}
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
