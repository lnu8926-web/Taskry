import React from "react";
import {
  Home,
  BarChart2,
  Calendar,
  CheckSquare,
  Users,
  Settings,
  Plus,
  Search,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-50 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blue-600">TeamSync</h1>
      </div>

      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <SidebarItem icon={<Home size={18} />} label="Dashboard" active />
        <SidebarItem icon={<CheckSquare size={18} />} label="Tasks" />
        <SidebarItem icon={<BarChart2 size={18} />} label="Projects" />
        <SidebarItem icon={<Calendar size={18} />} label="Calendar" />
        <SidebarItem icon={<Users size={18} />} label="Team" />

        <div className="pt-4 mt-4 border-t border-gray-200">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Projects
          </h3>
          <div className="mt-3 space-y-1">
            <ProjectItem color="bg-green-500" name="Marketing Website" />
            <ProjectItem color="bg-purple-500" name="Mobile App" />
            <ProjectItem color="bg-yellow-500" name="Q4 Planning" />
            <button className="flex items-center w-full px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
              <Plus size={16} className="mr-2 text-gray-400" />
              Add Project
            </button>
          </div>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
      </div>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active = false }: SidebarItemProps) {
  return (
    <button
      className={`flex items-center w-full px-2 py-2 text-sm rounded-md ${
        active
          ? "bg-blue-50 text-blue-700 font-medium"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {label}
    </button>
  );
}

interface ProjectItemProps {
  color: string;
  name: string;
}

function ProjectItem({ color, name }: ProjectItemProps) {
  return (
    <button className="flex items-center w-full px-2 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-md">
      <span className={`h-2 w-2 rounded-full ${color} mr-3`}></span>
      {name}
    </button>
  );
}
