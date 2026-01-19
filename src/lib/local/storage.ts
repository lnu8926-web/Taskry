// src/lib/local/storage.ts

const STORAGE_KEYS = {
  PROJECTS: "taskry_projects",
  BOARDS: "taskry_boards",
  TASKS: "taskry_tasks",
} as const;

export function getItem<T>(key: string): T | null {
  if (typeof window === "undefined") return null;

  const item = localStorage.getItem(key);
  if (!item) return null;

  try {
    return JSON.parse(item) as T;
  } catch {
    return null;
  }
}

export function setItem<T>(key: string, value: T): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key: string): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
}

export { STORAGE_KEYS };
