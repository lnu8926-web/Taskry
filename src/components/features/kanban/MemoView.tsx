"use client";

/**
 * MemoView 컴포넌트 (임시 비활성화)
 * 
 * 로컬 전환 완료 후 재구현 예정
 */

import { Icon } from "@/components/shared/Icon";

interface MemoFormProps {
  projectId: string;
}

const MemoView = ({ projectId }: MemoFormProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 p-8">
      <Icon type="document" size={48} className="mb-4 opacity-50" />
      <p className="text-lg font-medium mb-2">메모 기능</p>
      <p className="text-sm text-center">
        메모 기능은 추후 업데이트 예정입니다.
      </p>
    </div>
  );
};

export default MemoView;
