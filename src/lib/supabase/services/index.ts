// src/lib/supabase/services/index.ts
// Supabase 서비스 모듈 진입점

export { authService } from "./authService";
export { userService, type User, type UpdateUser } from "./userService";
export {
  projectService,
  type Project,
  type InsertProject,
  type UpdateProject,
} from "./projectService";
export {
  boardService,
  type KanbanBoard,
  type InsertKanbanBoard,
  type UpdateKanbanBoard,
} from "./boardService";
export {
  taskService,
  type Task,
  type InsertTask,
  type UpdateTask,
  type TaskWithAssignee,
  type TaskStatus,
} from "./taskService";
