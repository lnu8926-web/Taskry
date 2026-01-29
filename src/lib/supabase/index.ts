// src/lib/supabase/index.ts
// Supabase 모듈 진입점

export { createClient, getSupabaseClient } from "./client";
export { createClient as createServerClient } from "./server";
export { updateSession } from "./middleware";
export type {
  Database,
  Tables,
  TablesInsert,
  TablesUpdate,
  Enums,
} from "./database.types";
