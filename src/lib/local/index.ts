// src/lib/local/index.ts

// Storage
export * from "./storage";

// Services
export * from "./projectService";
export * from "./boardService";
export * from "./taskService";

// 전체 초기화 함수
import { initProjects } from "./projectService";
import { initBoards } from "./boardService";
import { initTasks } from "./taskService";

export function initLocalStorage(): void {
  initProjects();
  initBoards();
  initTasks();
}
