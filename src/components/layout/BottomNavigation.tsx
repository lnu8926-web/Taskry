"use client";

import React from "react";
import { Home, FolderKanban, Calendar, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MIST } from "@/lib/constants";

const NAV_ITEMS = [
  { icon: Home, label: "홈", href: "/" },
  { icon: FolderKanban, label: "프로젝트", href: "/projects" },
  { icon: Calendar, label: "캘린더", href: "/calendar" },
  { icon: Settings, label: "설정", href: "/settings" },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 md:hidden safe-area-bottom">
      <div className="flex justify-around items-center h-16 px-2">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 py-2 rounded-lg active:bg-gray-100 transition-colors"
            >
              <item.icon
                size={24}
                strokeWidth={active ? 2.5 : 2}
                style={{ color: active ? MIST.DARKEST : "#9CA3AF" }}
              />
              <span
                className={`text-xs mt-1 ${active ? "font-semibold" : "font-normal"}`}
                style={{ color: active ? MIST.DARKEST : "#9CA3AF" }}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
