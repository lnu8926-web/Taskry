"use client";

import { useState } from "react";
import { Icon } from "@/components/shared/Icon";
import { UserAvatar } from "@/components/shared/UserAvatar";
import { NoMembersState } from "@/components/shared/EmptyState";

// ============================================
// Types & Constants
// ============================================

interface AssigneeFieldProps {
  value: string | null | undefined;
  disabled?: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
  // 편집 모드 props (TaskDetail용)
  isEditing?: boolean;
  isLoading?: boolean;
  members?: Array<{
    user_id: string;
    role: string;
    users: {
      id?: string;
      name?: string;
      user_name?: string;
      email: string;
      avatar_url?: string;
      profile_image?: string;
    };
  }> | null;
  onEdit?: () => void;
  onBlur?: () => void;
  onCancel?: () => void;
}

// ============================================
// Component
// 담당자 입력/선택 컴포넌트
// - 검색 필터링 및 드롭다운 선택
// - 보기/편집 모드 전환 (선택적)
// - Enter/Escape 키 처리
//
// 사용 사례:
// 1. TaskAdd: 기본 모드 (항상 입력 가능)
// 2. TaskDetail: 편집 모드 (보기/편집 토글)
// ============================================
export function AssigneeField({
  value,
  disabled = false,
  onChange,
  placeholder = "담당자 이름을 입력하세요",
  isEditing = false,
  isLoading = false,
  members,
  onEdit,
  onBlur,
  onCancel,
}: AssigneeFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 유틸리티: 멤버 이름 가져오기 (name 또는 user_name 지원)
  const getMemberName = (member: NonNullable<typeof members>[number]) => {
    return member.users?.name || member.users?.user_name || "";
  };

  // 유틸리티: 멤버 프로필 이미지 가져오기
  const getMemberImage = (member: NonNullable<typeof members>[number]) => {
    return member.users?.avatar_url || member.users?.profile_image;
  };

  // 선택된 멤버 처리
  const selectedMember = members?.find((m) => m.user_id === value);

  // 입력값에 따른 멤버 필터링
  const filteredMembers = (members || []).filter((member) => {
    if (!searchTerm) return true; // 검색어가 없으면 전체 표시

    const searchLower = searchTerm.toLowerCase();
    const userName = getMemberName(member).toLowerCase();
    const email = member.users?.email?.toLowerCase() || "";
    const userId = member.user_id?.toLowerCase() || "";

    return (
      userName.includes(searchLower) ||
      email.includes(searchLower) ||
      userId.includes(searchLower)
    );
  });

  const handleSelectMember = (userId: string, userName: string) => {
    onChange(userId);
    setSearchTerm(userName);
    setIsOpen(false);
    onBlur?.();
  };

  const handleImageError = () => {
    // 이미지 로드 실패시 처리 (옵션)
  };

  // 편집 모드 렌더링 (TaskDetail용)
  if (isEditing !== undefined && isEditing !== true && onEdit) {
    return (
      <div>
        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <Icon
            type="userCircle"
            size={16}
            className="text-gray-500 dark:text-gray-400"
          />
          담당자
        </h3>
        {isLoading ? (
          <div className="p-2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Icon type="loading" size={16} className="animate-spin" />
            <span className="text-sm">담당자 정보를 불러오는 중...</span>
          </div>
        ) : value ? (
          <div
            onClick={onEdit}
            className="cursor-pointer rounded transition-colors hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <div className="flex items-center gap-3 p-2">
              <UserAvatar
                userName={selectedMember ? getMemberName(selectedMember) : ""}
                profileImage={
                  selectedMember ? getMemberImage(selectedMember) : undefined
                }
                size={32}
              />
              <div className="flex-1">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {selectedMember ? getMemberName(selectedMember) : ""}
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    ({selectedMember?.role})
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {selectedMember?.users?.email}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {(members || []).length === 0 ? (
              <NoMembersState iconSize={16} />
            ) : (
              <p
                onClick={onEdit}
                className="p-2 rounded transition-colors cursor-pointer text-gray-400 dark:text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                클릭하여 담당자 추가
              </p>
            )}
          </div>
        )}
      </div>
    );
  }

  // 입력 모드 렌더링 (편집 중 또는 TaskAdd용)
  return (
    <div>
      <h3 className="text-sm font-semibold  mb-2 flex items-center gap-2 text-gray-600 dark:text-gray-400">
        <Icon
          type="userCircle"
          size={16}
          className="text-gray-500 dark:text-gray-400"
        />
        담당자
      </h3>
      <div className="relative">
        <div className="relative">
          <Icon
            type="search"
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 dark:text-gray-500"
          />
          <input
            type="text"
            value={searchTerm || ""}
            onChange={(e) => {
              const inputValue = e.target.value;
              setSearchTerm(inputValue);
              setIsOpen(true);
            }}
            onFocus={() => {
              setIsOpen(true);
              // 포커스 시 현재 선택된 멤버 이름을 searchTerm에 설정
              if (selectedMember) {
                setSearchTerm(getMemberName(selectedMember));
              }
            }}
            onBlur={() => {
              // 자동 닫기 지연 처리
              setTimeout(() => setIsOpen(false), 200);
              onBlur?.();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && filteredMembers.length > 0) {
                handleSelectMember(
                  filteredMembers[0].user_id,
                  getMemberName(filteredMembers[0]),
                );
              }
              if (e.key === "Escape") {
                onCancel?.();
                setIsOpen(false);
                setSearchTerm("");
              }
            }}
            autoFocus={isEditing}
            className="w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg input-focus-style bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
            placeholder={isLoading ? "불러오는 중..." : placeholder}
            disabled={disabled || isLoading}
          />
        </div>

        {/* 드롭다운 목록 - 절대 위치로 모달 크기에 영향 없음 */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 z-50">
            {/* 로딩 */}
            {isLoading && (
              <div className="p-2 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
                불러오는 중...
              </div>
            )}

            {/* 멤버가 없는 경우 */}
            {!isLoading && (members || []).length === 0 && (
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg p-3">
                <NoMembersState iconSize={16} />
              </div>
            )}

            {/* 드롭다운 목록 - 3명부터 스크롤 */}
            {!isLoading && filteredMembers.length > 0 && (
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg max-h-[120px] overflow-y-auto bg-white dark:bg-gray-800 shadow-lg">
                {filteredMembers.map((member) => (
                  <div
                    key={member.user_id}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSelectMember(member.user_id, getMemberName(member));
                    }}
                    className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <UserAvatar
                      userName={getMemberName(member)}
                      profileImage={getMemberImage(member)}
                      size={32}
                    />
                    <div className="flex-1">
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        {getMemberName(member)}
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                          ({member.role})
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {member.users?.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 검색 결과 없음 */}
            {!isLoading && filteredMembers.length === 0 && searchTerm && (
              <div className="p-2 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
                &quot;{searchTerm}&quot;와 일치하는 팀원이 없어요
              </div>
            )}
          </div>
        )}

        {/* 선택된 담당자 표시 */}
        {selectedMember && !isOpen && (
          <div className="mt-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800">
            <div className="flex items-center gap-3 px-3 py-2">
              <UserAvatar
                userName={getMemberName(selectedMember)}
                profileImage={getMemberImage(selectedMember)}
                size={32}
                onImageError={handleImageError}
              />
              <div className="flex-1">
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  {getMemberName(selectedMember)}
                  <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                    ({selectedMember.role})
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {selectedMember.users?.email}
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  onChange("");
                  setSearchTerm("");
                }}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <Icon type="x" size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
