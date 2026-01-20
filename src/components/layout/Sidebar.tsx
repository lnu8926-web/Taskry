"use client";

import React, { useState, useEffect } from "react";
import {
  Home,
  BarChart2,
  Calendar,
  CheckSquare,
  Users,
  Settings,
  Plus,
  Search,
  Menu,
  X,
} from "lucide-react";
import { MIST, COMPLEMENTARY } from "@/lib/constants";

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* 모바일 햄버거 메뉴 버튼 */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200 md:hidden"
          aria-label="메뉴 열기"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* 모바일 오버레이 */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* 사이드바 */}
      <div
        className={`
          ${
            isMobile
              ? `fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`
              : "relative"
          }
          w-64 h-full bg-white border-r border-gray-200 flex flex-col
          ${className || ""}
        `}
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

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <SidebarItem
            icon={<Home size={18} />}
            label="Dashboard"
            active
            onClick={closeSidebar}
          />
          <SidebarItem
            icon={<CheckSquare size={18} />}
            label="Tasks"
            onClick={closeSidebar}
          />
          <SidebarItem
            icon={<BarChart2 size={18} />}
            label="Projects"
            onClick={closeSidebar}
          />
          <SidebarItem
            icon={<Calendar size={18} />}
            label="Calendar"
            onClick={closeSidebar}
          />
          <SidebarItem
            icon={<Users size={18} />}
            label="Team"
            onClick={closeSidebar}
          />

          <div className="pt-4 mt-4 border-t border-gray-200">
            <h3
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: MIST.MEDIUM }}
            >
              Projects
            </h3>
            <div className="mt-3 space-y-1">
              <ProjectItem
                color={MIST.DEFAULT}
                name="Marketing Website"
                onClick={closeSidebar}
              />
              <ProjectItem
                color={COMPLEMENTARY.CORAL}
                name="Mobile App"
                onClick={closeSidebar}
              />
              <ProjectItem
                color={COMPLEMENTARY.CREAM}
                name="Q4 Planning"
                onClick={closeSidebar}
              />
              <button className="flex items-center w-full px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                <Plus
                  size={16}
                  className="mr-2"
                  style={{ color: MIST.MEDIUM }}
                />
                Add Project
              </button>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <SidebarItem
            icon={<Settings size={18} />}
            label="Settings"
            onClick={closeSidebar}
          />
        </div>
      </div>

      {/* 모바일 하단 네비게이션 */}
      {isMobile && (
        <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 px-2 py-2 safe-area-bottom">
          <div className="flex justify-around items-center">
            <MobileNavItem icon={<Home size={20} />} label="홈" active />
            <MobileNavItem icon={<CheckSquare size={20} />} label="태스크" />
            <MobileNavItem icon={<BarChart2 size={20} />} label="프로젝트" />
            <MobileNavItem icon={<Calendar size={20} />} label="캘린더" />
            <MobileNavItem icon={<Settings size={20} />} label="설정" />
          </div>
        </nav>
      )}
    </>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarItem({
  icon,
  label,
  active = false,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-2 py-2 text-sm rounded-md transition-colors ${
        active ? "font-medium" : "text-gray-600 hover:bg-gray-100"
      }`}
      style={
        active
          ? {
              backgroundColor: MIST.LIGHT,
              color: MIST.DARKEST,
            }
          : undefined
      }
    >
      <span className="mr-3">{icon}</span>
      {label}
    </button>
  );
}

interface ProjectItemProps {
  color: string;
  name: string;
  onClick?: () => void;
}

function ProjectItem({ color, name, onClick }: ProjectItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center w-full px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
    >
      <span
        className="h-2 w-2 rounded-full mr-3"
        style={{ backgroundColor: color }}
      />
      {name}
    </button>
  );
}

interface MobileNavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function MobileNavItem({ icon, label, active = false }: MobileNavItemProps) {
  return (
    <button
      className="flex flex-col items-center justify-center px-3 py-1 rounded-lg min-w-[60px] transition-colors"
      style={{ color: active ? MIST.DARKEST : "#6B7280" }}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}
