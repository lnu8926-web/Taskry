"use client";

import React from "react";
import {
  Home,
  FolderKanban,
  Calendar,
  Settings,
  Plus,
  Search,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MIST, COMPLEMENTARY } from "@/lib/constants";

interface SidebarProps {
  className?: string;
}

const NAV_ITEMS = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: FolderKanban, label: "Projects", href: "/projects" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
];

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`hidden md:flex w-64 h-full bg-white border-r border-gray-200 flex-col ${className || ""}`}
    >
      {/* 로고 영역 */}
      <div
        className="p-4 border-b border-gray-200"
        style={{ backgroundColor: MIST.LIGHT }}
      >
        <h1 className="text-xl font-bold" style={{ color: MIST.DARKEST }}>
          Taskry
        </h1>
      </div>

      {/* 검색 영역 */}
      <div className="p-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-2.5 h-4 w-4"
            style={{ color: MIST.MEDIUM }}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:bg-white transition-colors"
            style={{
              ["--tw-ring-color" as string]: MIST.DEFAULT,
            }}
          />
        </div>
      </div>

      {/* 메인 네비게이션 */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center w-full px-3 py-2.5 text-sm rounded-lg transition-colors ${
                active ? "font-medium" : "text-gray-600 hover:bg-gray-100"
              }`}
              style={
                active
                  ? { backgroundColor: MIST.LIGHT, color: MIST.DARKEST }
                  : undefined
              }
            >
              <item.icon size={18} className="mr-3" />
              {item.label}
            </Link>
          );
        })}

        {/* 프로젝트 섹션 */}
        <div className="pt-4 mt-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h3
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: MIST.MEDIUM }}
            >
              Projects
            </h3>
            <button
              className="p-1 rounded hover:bg-gray-100 transition-colors"
              aria-label="프로젝트 추가"
            >
              <Plus size={14} style={{ color: MIST.MEDIUM }} />
            </button>
          </div>
          <div className="space-y-1">
            <ProjectItem color={MIST.DEFAULT} name="Marketing Website" />
            <ProjectItem color={COMPLEMENTARY.CORAL} name="Mobile App" />
            <ProjectItem color={COMPLEMENTARY.CREAM} name="Q4 Planning" />
          </div>
        </div>
      </nav>

      {/* 하단: 설정 */}
      <div className="p-4 border-t border-gray-200">
        <Link
          href="/settings"
          className={`flex items-center w-full px-3 py-2.5 text-sm rounded-lg transition-colors ${
            pathname === "/settings"
              ? "font-medium"
              : "text-gray-600 hover:bg-gray-100"
          }`}
          style={
            pathname === "/settings"
              ? { backgroundColor: MIST.LIGHT, color: MIST.DARKEST }
              : undefined
          }
        >
          <Settings size={18} className="mr-3" />
          Settings
        </Link>
      </div>
    </aside>
  );
}

interface ProjectItemProps {
  color: string;
  name: string;
}

function ProjectItem({ color, name }: ProjectItemProps) {
  return (
    <Link
      href={`/projects/${name.toLowerCase().replace(/\s/g, "-")}`}
      className="flex items-center w-full px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
    >
      <span
        className="w-2.5 h-2.5 rounded-full mr-3 flex-shrink-0"
        style={{ backgroundColor: color }}
      />
      <span className="truncate">{name}</span>
    </Link>
  );
}
