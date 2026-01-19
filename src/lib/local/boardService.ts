// src/lib/local/boardService.ts

import { KanbanBoardType } from "@/types";
import { getItem, setItem, STORAGE_KEYS } from "./storage";

// 초기 Mock 데이터
const INITIAL_BOARDS: KanbanBoardType[] = [
  {
    id: "board-1",
    name: "기본 보드",
    description: "샘플 프로젝트의 기본 칸반보드",
    project_id: "project-1",
    columns: "todo,inprogress,done",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// 초기화
export function initBoards(): void {
  const existing = getItem<KanbanBoardType[]>(STORAGE_KEYS.BOARDS);
  if (!existing || existing.length === 0) {
    setItem(STORAGE_KEYS.BOARDS, INITIAL_BOARDS);
  }
}

// 전체 조회
export function getBoards(): KanbanBoardType[] {
  return getItem<KanbanBoardType[]>(STORAGE_KEYS.BOARDS) || [];
}

// 프로젝트별 보드 조회
export function getBoardsByProjectId(projectId: string): KanbanBoardType[] {
  const boards = getBoards();
  return boards.filter((b) => b.project_id === projectId);
}

// 단건 조회
export function getBoardById(id: string): KanbanBoardType | null {
  const boards = getBoards();
  return boards.find((b) => b.id === id) || null;
}

// 생성
export function createBoard(
  data: Omit<KanbanBoardType, "id" | "created_at" | "updated_at">,
): KanbanBoardType {
  const boards = getBoards();

  const newBoard: KanbanBoardType = {
    ...data,
    id: `board-${Date.now()}`,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  boards.push(newBoard);
  setItem(STORAGE_KEYS.BOARDS, boards);

  return newBoard;
}

// 수정
export function updateBoard(
  id: string,
  data: Partial<KanbanBoardType>,
): KanbanBoardType | null {
  const boards = getBoards();
  const index = boards.findIndex((b) => b.id === id);

  if (index === -1) return null;

  boards[index] = {
    ...boards[index],
    ...data,
    updated_at: new Date().toISOString(),
  };

  setItem(STORAGE_KEYS.BOARDS, boards);
  return boards[index];
}

// 삭제
export function deleteBoard(id: string): boolean {
  const boards = getBoards();
  const filtered = boards.filter((b) => b.id !== id);

  if (filtered.length === boards.length) return false;

  setItem(STORAGE_KEYS.BOARDS, filtered);
  return true;
}
