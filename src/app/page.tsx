"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  ChevronRight,
  Calendar,
  Folder,
} from "lucide-react";
import { MIST } from "@/lib/constants";
import { initLocalStorage, getProjects, getTasks } from "@/lib/local";
import { Project, Task } from "@/types";

// 상태별 컬러
const STATUS_COLORS = {
  todo: "#FBBF24", // yellow
  inprogress: "#3B82F6", // blue
  done: "#10B981", // green
};

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    initLocalStorage();
  }, []);

  // 데이터 로드
  const projects = useMemo<Project[]>(() => getProjects(), []);
  const tasks = useMemo<Task[]>(() => getTasks(), []);

  // 태스크 상태별 카운트
  const taskStats = useMemo(() => {
    const todo = tasks.filter((t) => t.status === "todo").length;
    const inprogress = tasks.filter((t) => t.status === "inprogress").length;
    const done = tasks.filter((t) => t.status === "done").length;
    return { todo, inprogress, done, total: tasks.length };
  }, [tasks]);

  // 도넛 차트 데이터
  const donutData = [
    { name: "할 일", value: taskStats.todo, color: STATUS_COLORS.todo },
    { name: "진행중", value: taskStats.inprogress, color: STATUS_COLORS.inprogress },
    { name: "완료", value: taskStats.done, color: STATUS_COLORS.done },
  ];

  // 주간 완료 데이터 (Mock - 실제로는 날짜별 필터링 필요)
  const weeklyData = useMemo(() => {
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    return days.map((day, i) => ({
      name: day,
      완료: Math.floor(Math.random() * 5) + (i === 3 ? 3 : 0), // Mock
    }));
  }, []);

  // 오늘 할 일 (todo + inprogress)
  const todayTasks = useMemo(() => {
    return tasks
      .filter((t) => t.status === "todo" || t.status === "inprogress")
      .slice(0, 5);
  }, [tasks]);

  // 최근 프로젝트
  const recentProjects = useMemo(() => {
    return projects.slice(0, 3);
  }, [projects]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 px-4 py-5 md:px-8">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">
          대시보드
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          오늘 할 일을 확인하고 진행 상황을 파악하세요
        </p>
      </header>

      <main className="p-4 md:p-8 pb-24 space-y-6">
        {/* 상단 통계 카드 */}
        <div className="grid grid-cols-3 gap-3 md:gap-4">
          <StatCard
            icon={<Clock className="text-yellow-500" size={20} />}
            label="할 일"
            value={taskStats.todo}
            color="#FEF3C7"
          />
          <StatCard
            icon={<AlertCircle className="text-blue-500" size={20} />}
            label="진행중"
            value={taskStats.inprogress}
            color="#DBEAFE"
          />
          <StatCard
            icon={<CheckCircle className="text-green-500" size={20} />}
            label="완료"
            value={taskStats.done}
            color="#D1FAE5"
          />
        </div>

        {/* 차트 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 도넛 차트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >
            <h3 className="font-semibold text-gray-800 mb-4">태스크 상태</h3>
            {taskStats.total > 0 ? (
              <div className="flex items-center justify-center">
                <ResponsiveContainer width={180} height={180}>
                  <PieChart>
                    <Pie
                      data={donutData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {donutData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="ml-4 space-y-2">
                  {donutData.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-[180px] flex items-center justify-center text-gray-400">
                태스크가 없습니다
              </div>
            )}
          </motion.div>

          {/* 바 차트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-5 shadow-sm"
          >
            <h3 className="font-semibold text-gray-800 mb-4">주간 완료 현황</h3>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={weeklyData}>
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip />
                <Bar
                  dataKey="완료"
                  fill={MIST.DEFAULT}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* 오늘 할 일 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Calendar size={18} className="text-gray-500" />
              오늘 할 일
            </h3>
            <span className="text-sm text-gray-500">{todayTasks.length}개</span>
          </div>

          {todayTasks.length > 0 ? (
            <div className="space-y-2">
              {todayTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => router.push(`/projects/${task.project_id}`)}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor:
                        STATUS_COLORS[task.status as keyof typeof STATUS_COLORS],
                    }}
                  />
                  <span className="flex-1 text-gray-800">{task.title}</span>
                  {task.priority === "high" && (
                    <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full">
                      높음
                    </span>
                  )}
                  <ChevronRight size={16} className="text-gray-400" />
                </div>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-gray-400">
              오늘 할 일이 없습니다 🎉
            </div>
          )}
        </motion.div>

        {/* 최근 프로젝트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-5 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-800 flex items-center gap-2">
              <Folder size={18} className="text-gray-500" />
              최근 프로젝트
            </h3>
            <button
              onClick={() => router.push("/projects")}
              className="text-sm font-medium hover:underline"
              style={{ color: MIST.DARKEST }}
            >
              전체 보기
            </button>
          </div>

          {recentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {recentProjects.map((project) => {
                const projectTasks = tasks.filter(
                  (t) => t.project_id === project.project_id
                );
                const doneTasks = projectTasks.filter(
                  (t) => t.status === "done"
                ).length;
                const progress =
                  projectTasks.length > 0
                    ? Math.round((doneTasks / projectTasks.length) * 100)
                    : 0;

                return (
                  <div
                    key={project.project_id}
                    onClick={() => router.push(`/projects/${project.project_id}`)}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: MIST.DEFAULT }}
                      />
                      <span className="font-medium text-gray-800 truncate">
                        {project.project_name}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${progress}%`,
                          backgroundColor: MIST.DARK,
                        }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{progress}% 완료</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-8 text-center text-gray-400">
              프로젝트가 없습니다
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

// 통계 카드 컴포넌트
function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-4 rounded-2xl"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-sm text-gray-600">{label}</span>
      </div>
      <span className="text-2xl font-bold text-gray-800">{value}</span>
    </motion.div>
  );
}

export default Home;
