// src/lib/local/storage.ts

/**
 * Local Storage 키 상수
 */
const STORAGE_KEYS = {
  PROJECTS: "taskry_projects",
  BOARDS: "taskry_boards",
  TASKS: "taskry_tasks",
} as const;

type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];

/**
 * Local Storage에서 데이터 조회
 * @param key - 스토리지 키
 * @returns 파싱된 데이터 또는 null
 */
export function getItem<T>(key: StorageKey | string): T | null {
  if (typeof window === "undefined") return null;

  try {
    const item = localStorage.getItem(key);
    if (!item) return null;

    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`[Storage] Failed to get item "${key}":`, error);
    return null;
  }
}

/**
 * Local Storage에 데이터 저장
 * @param key - 스토리지 키
 * @param value - 저장할 데이터
 */
export function setItem<T>(key: StorageKey | string, value: T): boolean {
  if (typeof window === "undefined") return false;

  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`[Storage] Failed to set item "${key}":`, error);
    return false;
  }
}

/**
 * Local Storage에서 데이터 삭제
 * @param key - 스토리지 키
 */
export function removeItem(key: StorageKey | string): boolean {
  if (typeof window === "undefined") return false;

  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`[Storage] Failed to remove item "${key}":`, error);
    return false;
  }
}

/**
 * Local Storage 전체 초기화 (앱 데이터만)
 */
export function clearAppData(): boolean {
  if (typeof window === "undefined") return false;

  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
    return true;
  } catch (error) {
    console.error("[Storage] Failed to clear app data:", error);
    return false;
  }
}

export { STORAGE_KEYS };
export type { StorageKey };
