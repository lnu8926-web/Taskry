interface BadgeType {
  type: keyof typeof badgeConfigs;
}

export const badgeConfigs = {
  dueSoon: {
    title: "계획 진행중",
    className: "bg-blue-500 text-white dark:text-white/80",
    category: "status",
  },
  overDue: {
    title: "계획에서 벗어남",
    className: "bg-red-500 text-white dark:text-white/80",
    category: "status",
  },
  todo: {
    title: "TODO",
    className: "bg-[#9CA3AF] text-gray-800 dark:text-gray-200",
    category: "status",
  },
  inProgress: {
    title: "진행중",
    className: "bg-amber-500 text-white dark:text-white/80",
    category: "status",
  },
  done: {
    title: "완료",
    className: "bg-green-500 text-white dark:text-white/80",
    category: "status",
  },
  high: {
    title: "높음",
    className: "bg-red-100 text-red-700 dark:text-red-300",
    category: "priority",
    dotColor: "bg-red-500",
  },
  normal: {
    title: "보통",
    className: "bg-yellow-100 text-yellow-700 dark:text-yellow-300",
    category: "priority",
    dotColor: "bg-yellow-500",
  },
  low: {
    title: "낮음",
    className: "bg-green-100 text-green-700 dark:text-green-300",
    category: "priority",
    dotColor: "bg-green-500",
  },
};

const PriorityDot = ({ color }: { color: string }) => {
  return (
    <span
      className={`w-2 h-2 inline-block mr-1 rounded-full ${color}`}
      aria-hidden="true"
    ></span>
  );
};

export default function Badge({ type }: BadgeType) {
  const badgeConfig = badgeConfigs[type];
  if (!badgeConfig) return null;

  return (
    <span
      data-type={type}
      className={`py-1.5 px-2 rounded-sm text-xs font-medium ${badgeConfig.className}`}
    >
      {(badgeConfig.category === "priority" ||
        (badgeConfig as any).dotColor) && (
        <PriorityDot color={(badgeConfig as any).dotColor} />
      )}
      {badgeConfig.title}
    </span>
  );
}
