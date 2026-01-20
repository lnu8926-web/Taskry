/**
 * 사용자 정보 타입
 */
export interface UserInfoRow {
  email: string;
  user_name: string;
  global_role: "user" | "admin";
  user_id: string;
}
