/**
 * 담당자 관련 상수 및 Mock 데이터
 */

export interface MockMember {
  user_id: string;
  user_name: string;
  email: string;
  profile_image?: string;
}

export const MOCK_TEAM_MEMBERS: MockMember[] = [
  { user_id: "user-1", user_name: "김철수", email: "kim@example.com" },
  { user_id: "user-2", user_name: "이영희", email: "lee@example.com" },
  { user_id: "user-3", user_name: "박민수", email: "park@example.com" },
  { user_id: "user-4", user_name: "최지원", email: "choi@example.com" },
  { user_id: "user-5", user_name: "정수현", email: "jung@example.com" },
  { user_id: "user-6", user_name: "강민지", email: "kang@example.com" },
  { user_id: "user-7", user_name: "윤대현", email: "yoon@example.com" },
  { user_id: "user-8", user_name: "송하늘", email: "song@example.com" },
  { user_id: "user-9", user_name: "임서연", email: "lim@example.com" },
];

/**
 * 프로젝트 멤버 조회 (Mock)
 * API 대체용 로컬 함수
 */
export function getProjectMembersForAssignment(
  _projectId: string,
): MockMember[] {
  // 실제 구현에서는 projectId로 필터링
  return MOCK_TEAM_MEMBERS;
}
