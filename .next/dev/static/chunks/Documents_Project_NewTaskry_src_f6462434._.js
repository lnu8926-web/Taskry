(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Project/NewTaskry/src/config/modalConfigs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "modalConfigs",
    ()=>modalConfigs
]);
const modalConfigs = {
    small: {
        width: "max-w-md"
    },
    medium: {
        width: "max-w-lg"
    },
    large: {
        width: "max-w-2xl"
    },
    delete: {
        title: "삭제 확인",
        description: "정말로 삭제하시겠습니까?",
        warning: null,
        icon: "trash",
        iconColor: "text-red-500",
        iconSize: 32,
        buttonCancelText: "취소",
        buttonConfirmText: "삭제",
        buttonDisabled: false,
        info: null
    },
    success: {
        title: "성공",
        description: "작업이 완료되었습니다.",
        icon: "circleCheck",
        iconColor: "text-green-500",
        iconSize: 32,
        buttonConfirmText: "확인",
        buttonDisabled: false,
        info: null
    },
    deleteSuccess: {
        title: "삭제 완료",
        description: "선택한 항목이 삭제되었습니다.",
        icon: "circleCheck",
        iconColor: "text-green-500",
        iconSize: 32,
        buttonConfirmText: "확인",
        buttonDisabled: false,
        info: "복원이 필요한 경우 관리자에게 문의해주세요.",
        infoColor: "text-blue-600 dark:text-blue-400"
    },
    error: {
        title: "오류 발생",
        description: "문제가 발생했습니다.",
        icon: "exclamationTriangle",
        iconColor: "text-red-500",
        iconSize: 32,
        buttonConfirmText: "확인",
        buttonDisabled: false,
        info: null
    },
    progress: {
        title: "처리 중...",
        description: "잠시만 기다려주세요.",
        icon: "loading",
        iconColor: "text-blue-500",
        iconSize: 32,
        buttonDisabled: true,
        info: null
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/hooks/useModal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useModal",
    ()=>useModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useModal = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [warning, setWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const openModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModal.useCallback[openModal]": (type, title, description, warning)=>{
            setType(type);
            setTitle(title);
            setDescription(description);
            setIsOpen(true);
            setWarning(warning);
        }
    }["useModal.useCallback[openModal]"], []);
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useModal.useCallback[closeModal]": ()=>{
            setIsOpen(false);
            setType(undefined);
            setTitle(undefined);
            setDescription(undefined);
            setWarning(undefined);
        }
    }["useModal.useCallback[closeModal]"], []);
    return {
        openModal,
        closeModal,
        modalProps: {
            type,
            isOpen,
            onClose: closeModal,
            title,
            description,
            warning
        }
    };
};
_s(useModal, "x93Gg2qzlv2Y+EjE8kwqxR8xilc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/hooks/calendar/useCalendarState.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 캘린더 상태 관리 hook
 *
 * 관리하는 상태:
 * - 현재 날짜 및 뷰
 * - 모달 상태 (TaskAdd, TaskDetail)
 * - 선택된 태스크 및 날짜
 * - 도움말 표시 여부
 * - 현재 시간 (1분마다 업데이트)
 */ __turbopack_context__.s([
    "useCalendarState",
    ()=>useCalendarState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useCalendarState(props) {
    _s();
    const { projectStartedAt, projectEndedAt } = props || {};
    // 모달 상태
    const [showTaskAddModal, setShowTaskAddModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTaskDetailModal, setShowTaskDetailModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 선택된 태스크 및 날짜
    const [selectedTask, setSelectedTask] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedDates, setSelectedDates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // UI 상태
    // 도움말 표시 여부
    const [showHelp, setShowHelp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 캘린더 뷰 상태
    const [currentDate, setCurrentDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useCalendarState.useState": ()=>{
            if (projectStartedAt && projectEndedAt) {
                const now = new Date();
                const startDate = new Date(projectStartedAt);
                const endDate = new Date(projectEndedAt);
                // 오늘이 프로젝트 기간 밖이면 프로젝트 시작일로
                if (now < startDate || now > endDate) {
                    return startDate;
                }
            }
            return new Date();
        }
    }["useCalendarState.useState"]);
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("month");
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    // 현재 시간 업데이트 (1분마다) - 캘린더 시간 라인 표시용
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCalendarState.useEffect": ()=>{
            const interval = setInterval({
                "useCalendarState.useEffect.interval": ()=>{
                    setCurrentTime(new Date());
                }
            }["useCalendarState.useEffect.interval"], 60000); // 1분 간격
            return ({
                "useCalendarState.useEffect": ()=>clearInterval(interval)
            })["useCalendarState.useEffect"];
        }
    }["useCalendarState.useEffect"], []);
    return {
        // 모달 상태
        showTaskAddModal,
        setShowTaskAddModal,
        showTaskDetailModal,
        setShowTaskDetailModal,
        // 선택된 태스크 및 날짜
        selectedTask,
        setSelectedTask,
        selectedDates,
        setSelectedDates,
        // UI 상태
        showHelp,
        setShowHelp,
        // 캘린더 뷰 상태
        currentDate,
        setCurrentDate,
        currentView,
        setCurrentView,
        currentTime
    };
}
_s(useCalendarState, "KEO8BNP0QWE706GK+9H5VdPrJ8g=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/hooks/calendar/useCalendarKeyboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 캘린더 키보드 단축키 hook
 *
 * 지원하는 단축키:
 * - ESC: 모달 닫기
 * - Ctrl/Cmd + N: 새 작업 추가
 * - Arrow Left/Right: 날짜 이동
 */ __turbopack_context__.s([
    "useCalendarKeyboard",
    ()=>useCalendarKeyboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/utils/dateUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$calendarView$2f$constants$2f$calendarConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/components/features/calendarView/constants/calendarConfig.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useCalendarKeyboard({ showTaskAddModal, showTaskDetailModal, currentDate, currentView, setShowTaskAddModal, setShowTaskDetailModal, setSelectedTask, setSelectedDates, setCurrentDate, setCurrentView }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCalendarKeyboard.useEffect": ()=>{
            // 키보드 단축키가 비활성화되어 있으면 실행 안 함
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$calendarView$2f$constants$2f$calendarConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CALENDAR_FEATURES"].enableKeyboardShortcuts) return;
            const handleKeyPress = {
                "useCalendarKeyboard.useEffect.handleKeyPress": (e)=>{
                    // ESC: 모달 닫기
                    if (e.key === "Escape") {
                        if (showTaskAddModal) {
                            setShowTaskAddModal(false);
                            setSelectedDates(null);
                        }
                        if (showTaskDetailModal) {
                            setShowTaskDetailModal(false);
                            setSelectedTask(null);
                        }
                        return;
                    }
                    // 모달이 열려있거나 input/textarea에 포커스가 있으면 무시
                    if (showTaskAddModal || showTaskDetailModal || document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
                        return;
                    }
                    // Ctrl/Cmd + N: 새 작업 추가
                    if (e.code === "KeyN" && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        const today = new Date();
                        setSelectedDates({
                            started_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(today, "yyyy-MM-dd"),
                            ended_at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(today, "yyyy-MM-dd")
                        });
                        setShowTaskAddModal(true);
                        return;
                    }
                    // Arrow Left/Right: 날짜 이동
                    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
                        e.preventDefault();
                        const direction = e.key === "ArrowLeft" ? -1 : 1;
                        const newDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigateDate"])(currentDate, direction, currentView);
                        setCurrentDate(newDate);
                    }
                }
            }["useCalendarKeyboard.useEffect.handleKeyPress"];
            window.addEventListener("keydown", handleKeyPress);
            return ({
                "useCalendarKeyboard.useEffect": ()=>window.removeEventListener("keydown", handleKeyPress)
            })["useCalendarKeyboard.useEffect"];
        }
    }["useCalendarKeyboard.useEffect"], [
        showTaskAddModal,
        showTaskDetailModal,
        currentDate,
        currentView,
        setShowTaskAddModal,
        setShowTaskDetailModal,
        setSelectedTask,
        setSelectedDates,
        setCurrentDate,
        setCurrentView
    ]);
}
_s(useCalendarKeyboard, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/hooks/kanban/useKanbanKeyboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 칸반 키보드 단축키 hook
 *
 * 지원하는 단축키:
 * - ESC: 모달 닫기
 * - Ctrl/Cmd + N: 새 작업 추가
 */ __turbopack_context__.s([
    "useKanbanKeyboard",
    ()=>useKanbanKeyboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useKanbanKeyboard({ showTaskAddModal, showTaskDetailModal, setShowTaskAddModal, setShowTaskDetailModal, setSelectedTask }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKanbanKeyboard.useEffect": ()=>{
            const handleKeyPress = {
                "useKanbanKeyboard.useEffect.handleKeyPress": (e)=>{
                    // ESC: 모달 닫기
                    if (e.key === "Escape") {
                        if (showTaskAddModal) {
                            setShowTaskAddModal(false);
                        }
                        if (showTaskDetailModal) {
                            setShowTaskDetailModal(false);
                            setSelectedTask(null);
                        }
                        return;
                    }
                    // 모달이 열려있거나 input/textarea에 포커스가 있으면 무시
                    if (showTaskAddModal || showTaskDetailModal || document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") {
                        return;
                    }
                    // Ctrl/Cmd + N: 새 작업 추가
                    if (e.code === "KeyN" && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        setShowTaskAddModal(true);
                        return;
                    }
                }
            }["useKanbanKeyboard.useEffect.handleKeyPress"];
            window.addEventListener("keydown", handleKeyPress);
            return ({
                "useKanbanKeyboard.useEffect": ()=>window.removeEventListener("keydown", handleKeyPress)
            })["useKanbanKeyboard.useEffect"];
        }
    }["useKanbanKeyboard.useEffect"], [
        showTaskAddModal,
        showTaskDetailModal,
        setShowTaskAddModal,
        setShowTaskDetailModal,
        setSelectedTask
    ]);
}
_s(useKanbanKeyboard, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/utils/toast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 토스트 메시지를 표시합니다.
 * @param message 표시할 메시지
 * @param type 토스트 타입 ("success" | "error")
 * @example
 * showToast("저장되었습니다.", "success")
 * showToast("에러가 발생했습니다.", "error")
 * showApiError('서버 연결 실패')
 * -> /sample/toast/page.tsx
 */ __turbopack_context__.s([
    "showApiError",
    ()=>showApiError,
    "showToast",
    ()=>showToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$toast$2d$style$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/utils/toast-style.tsx [app-client] (ecmascript)");
;
;
const showToast = (message, type = "success")=>{
    const toastColors = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$toast$2d$style$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOAST_COLORS"][type];
    const options = {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$toast$2d$style$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ICON_MAP"][type],
        duration: 3000,
        style: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$toast$2d$style$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_TOAST_STYLE"],
            background: toastColors.background
        }
    };
    if (type === "success") {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(message, options);
    } else if (type === "error" || type === "deleted") {
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(message, options);
    } else if (type === "warning") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(message, options);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(message, options);
    }
};
const showApiError = (message)=>{
    showToast(`${message}`, "alert");
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/constants/messages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TASK_MESSAGES",
    ()=>TASK_MESSAGES
]);
const TASK_MESSAGES = {
    CREATE_SUCCESS: '작업이 생성되었습니다.',
    UPDATE_SUCCESS: '작업이 수정되었습니다.',
    DELETE_SUCCESS: '작업이 삭제되었습니다.',
    DELETE_CONFIRM: '정말 삭제하시겠습니까?',
    ERROR: '오류가 발생했습니다.'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/utils/taskUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCalendarEventColor",
    ()=>getCalendarEventColor,
    "getPriorityIconColor",
    ()=>getPriorityIconColor,
    "getTaskDeadlineStatus",
    ()=>getTaskDeadlineStatus,
    "getTaskPriorityColor",
    ()=>getTaskPriorityColor,
    "getTaskPriorityLabel",
    ()=>getTaskPriorityLabel,
    "getTaskProgress",
    ()=>getTaskProgress,
    "getTaskStatusBarStyle",
    ()=>getTaskStatusBarStyle,
    "getTaskStatusBgColor",
    ()=>getTaskStatusBgColor,
    "getTaskStatusColor",
    ()=>getTaskStatusColor,
    "getTaskStatusDotColor",
    ()=>getTaskStatusDotColor,
    "getTaskStatusLabel",
    ()=>getTaskStatusLabel,
    "isTaskOverdue",
    ()=>isTaskOverdue
]);
const getTaskStatusColor = (status)=>{
    const colors = {
        todo: {
            bg: "bg-gray-400 dark:bg-gray-600",
            text: "text-gray-700 dark:text-gray-200",
            border: "border-gray-300 dark:border-gray-500"
        },
        inprogress: {
            bg: "bg-blue-400 dark:bg-blue-500",
            text: "text-blue-700 dark:text-blue-200",
            border: "border-blue-300 dark:border-blue-500"
        },
        done: {
            bg: "bg-green-400 dark:bg-green-600",
            text: "text-green-700 dark:text-green-300",
            border: "border-green-300 dark:border-green-500"
        }
    };
    return colors[status];
}; // Task 우선순위별 색상 정의
const getTaskPriorityColor = (priority, isDark = false)=>{
    const colors = {
        high: {
            bg: isDark ? "bg-red-600" : "bg-red-500",
            text: isDark ? "text-red-300" : "text-red-600",
            icon: isDark ? "text-red-400" : "text-red-500"
        },
        normal: {
            bg: isDark ? "bg-yellow-600" : "bg-yellow-500",
            text: isDark ? "text-yellow-300" : "text-yellow-600",
            icon: isDark ? "text-yellow-400" : "text-yellow-500"
        },
        low: {
            bg: isDark ? "bg-green-600" : "bg-green-500",
            text: isDark ? "text-green-300" : "text-green-600",
            icon: isDark ? "text-green-400" : "text-green-500"
        }
    };
    return colors[priority];
};
const getTaskStatusLabel = (status)=>{
    const labels = {
        todo: "할 일",
        inprogress: "진행중",
        done: "완료"
    };
    return labels[status];
};
const getTaskPriorityLabel = (priority)=>{
    const labels = {
        high: "높음",
        normal: "보통",
        low: "낮음"
    };
    return labels[priority];
};
const getPriorityIconColor = (priority)=>{
    const colors = {
        high: "text-red-500 dark:text-red-400",
        normal: "text-yellow-500 dark:text-yellow-400",
        low: "text-green-500 dark:text-green-400"
    };
    return colors[priority] || "";
};
const getCalendarEventColor = (status, isDark = false)=>{
    const colors = {
        todo: isDark ? "#4B5563" : "#9CA3AF",
        inprogress: isDark ? "#3B82F6" : "#60A5FA",
        done: isDark ? "#16a34acc" : "#57bc71cc"
    };
    return colors[status];
};
const getTaskStatusBarStyle = (status)=>{
    const styles = {
        todo: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-l-2 border-gray-400 dark:border-gray-500",
        inprogress: "bg-blue-100/50 dark:bg-blue-700/40 text-blue-700 dark:text-blue-200 border-l-2 border-blue-400 dark:border-blue-500",
        done: "bg-green-50 dark:bg-green-900/40 text-green-700 dark:text-green-200 border-l-2 border-green-400 dark:border-green-500"
    };
    return styles[status] || styles.todo;
};
const getTaskStatusDotColor = (status)=>{
    const colors = {
        todo: "bg-gray-400 dark:bg-gray-500",
        inprogress: "bg-blue-400 dark:bg-blue-500",
        done: "bg-green-400 dark:bg-green-500"
    };
    return colors[status] || colors.todo;
};
const getTaskStatusBgColor = (status)=>{
    const styles = {
        todo: "bg-gray-50/80 dark:bg-gray-700/50",
        inprogress: "bg-blue-50/50 dark:bg-blue-900/20",
        done: "bg-green-50/50 dark:bg-green-900/20"
    };
    return styles[status] || styles.todo;
};
const isTaskOverdue = (task)=>{
    if (!task.ended_at || task.status === "done") return false;
    const today = new Date().toISOString().split("T")[0];
    const endDate = task.ended_at.split("T")[0];
    return endDate < today;
};
const getTaskProgress = (subtasks)=>{
    if (!subtasks || subtasks.length === 0) return 0;
    const completedCount = subtasks.filter((subtask)=>subtask.completed).length;
    return Math.round(completedCount / subtasks.length * 100);
};
const getTaskDeadlineStatus = (endedAt)=>{
    if (!endedAt) return null;
    const today = new Date();
    const deadline = new Date(endedAt);
    const diffDays = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return "overdue"; // 지연
    if (diffDays <= 1) return "urgent"; // 급함
    if (diffDays <= 3) return "warning"; // 주의
    return "normal"; // 정상
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/utils/dateUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 날짜 관련 유틸리티 함수 모음
/**
 * 두 날짜가 같은 날인지 확인하는 함수
 */ __turbopack_context__.s([
    "getDaysDiff",
    ()=>getDaysDiff,
    "isBusinessTime",
    ()=>isBusinessTime,
    "isDifferentMonth",
    ()=>isDifferentMonth,
    "isLunchTime",
    ()=>isLunchTime,
    "isSameDay",
    ()=>isSameDay,
    "isToday",
    ()=>isToday,
    "isWeekend",
    ()=>isWeekend,
    "navigateDate",
    ()=>navigateDate,
    "setToEndOfDay",
    ()=>setToEndOfDay,
    "setToStartOfDay",
    ()=>setToStartOfDay
]);
const isSameDay = (date1, date2)=>{
    return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
};
const isToday = (date)=>{
    return isSameDay(date, new Date());
};
const isWeekend = (date)=>{
    const day = date.getDay();
    return day === 0 || day === 6; // 0: 일요일, 6: 토요일
};
const isDifferentMonth = (date, baseDate)=>{
    return date.getMonth() !== baseDate.getMonth() || date.getFullYear() !== baseDate.getFullYear();
};
const navigateDate = (currentDate, direction, viewType)=>{
    const newDate = new Date(currentDate);
    switch(viewType){
        case "month":
            newDate.setMonth(newDate.getMonth() + direction);
            break;
        case "week":
            newDate.setDate(newDate.getDate() + direction * 7);
            break;
        case "day":
        case "agenda":
            newDate.setDate(newDate.getDate() + direction);
            break;
    }
    return newDate;
};
const isBusinessTime = (date)=>{
    const hours = date.getHours();
    return hours >= 9 && hours < 18;
};
const isLunchTime = (date)=>{
    const hours = date.getHours();
    return hours >= 12 && hours < 13;
};
const getDaysDiff = (start, end)=>{
    const diffTime = end.getTime() - start.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};
const setToStartOfDay = (date)=>{
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    return startOfDay;
};
const setToEndOfDay = (date)=>{
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    return endOfDay;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KANBAN_COLUMNS",
    ()=>KANBAN_COLUMNS,
    "PRIORITY_COLORS",
    ()=>PRIORITY_COLORS
]);
const KANBAN_COLUMNS = [
    {
        id: "todo",
        title: "할 일",
        status: "todo"
    },
    {
        id: "inprogress",
        title: "진행 중",
        status: "inprogress"
    },
    {
        id: "done",
        title: "완료",
        status: "done"
    }
];
const PRIORITY_COLORS = {
    low: "bg-gray-200 text-gray-800",
    medium: "bg-yellow-200 text-yellow-800",
    high: "bg-red-200 text-red-800",
    normal: "bg-blue-200 text-blue-800"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/local/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/local/storage.ts
__turbopack_context__.s([
    "STORAGE_KEYS",
    ()=>STORAGE_KEYS,
    "getItem",
    ()=>getItem,
    "removeItem",
    ()=>removeItem,
    "setItem",
    ()=>setItem
]);
const STORAGE_KEYS = {
    PROJECTS: "taskry_projects",
    BOARDS: "taskry_boards",
    TASKS: "taskry_tasks"
};
function getItem(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const item = localStorage.getItem(key);
    if (!item) return null;
    try {
        return JSON.parse(item);
    } catch  {
        return null;
    }
}
function setItem(key, value) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.setItem(key, JSON.stringify(value));
}
function removeItem(key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    localStorage.removeItem(key);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/local/projectService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/local/projectService.ts
__turbopack_context__.s([
    "createProject",
    ()=>createProject,
    "deleteProject",
    ()=>deleteProject,
    "getProjectById",
    ()=>getProjectById,
    "getProjects",
    ()=>getProjects,
    "initProjects",
    ()=>initProjects,
    "updateProject",
    ()=>updateProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/storage.ts [app-client] (ecmascript)");
;
// 초기 Mock 데이터
const INITIAL_PROJECTS = [
    {
        project_id: "project-1",
        project_name: "샘플 프로젝트",
        description: "로컬 테스트용 프로젝트입니다.",
        type: "개인",
        status: "active",
        tech_stack: "Next.js, TypeScript",
        started_at: "2026-01-01",
        ended_at: "2026-12-31",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];
function initProjects() {
    const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].PROJECTS);
    if (!existing || existing.length === 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].PROJECTS, INITIAL_PROJECTS);
    }
}
function getProjects() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].PROJECTS) || [];
}
function getProjectById(id) {
    const projects = getProjects();
    return projects.find((p)=>p.project_id === id) || null;
}
function createProject(data) {
    const projects = getProjects();
    const newProject = {
        ...data,
        project_id: `project-${Date.now()}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
    projects.push(newProject);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].PROJECTS, projects);
    return newProject;
}
function updateProject(id, data) {
    const projects = getProjects();
    const index = projects.findIndex((p)=>p.project_id === id);
    if (index === -1) return null;
    projects[index] = {
        ...projects[index],
        ...data,
        updated_at: new Date().toISOString()
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].PROJECTS, projects);
    return projects[index];
}
function deleteProject(id) {
    const projects = getProjects();
    const filtered = projects.filter((p)=>p.project_id !== id);
    if (filtered.length === projects.length) return false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].PROJECTS, filtered);
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/local/boardService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/local/boardService.ts
__turbopack_context__.s([
    "createBoard",
    ()=>createBoard,
    "deleteBoard",
    ()=>deleteBoard,
    "getBoardById",
    ()=>getBoardById,
    "getBoards",
    ()=>getBoards,
    "getBoardsByProjectId",
    ()=>getBoardsByProjectId,
    "initBoards",
    ()=>initBoards,
    "updateBoard",
    ()=>updateBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/storage.ts [app-client] (ecmascript)");
;
// 초기 Mock 데이터
const INITIAL_BOARDS = [
    {
        id: "board-1",
        name: "기본 보드",
        description: "샘플 프로젝트의 기본 칸반보드",
        project_id: "project-1",
        columns: "todo,inprogress,done",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];
function initBoards() {
    const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].BOARDS);
    if (!existing || existing.length === 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].BOARDS, INITIAL_BOARDS);
    }
}
function getBoards() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].BOARDS) || [];
}
function getBoardsByProjectId(projectId) {
    const boards = getBoards();
    return boards.filter((b)=>b.project_id === projectId);
}
function getBoardById(id) {
    const boards = getBoards();
    return boards.find((b)=>b.id === id) || null;
}
function createBoard(data) {
    const boards = getBoards();
    const newBoard = {
        ...data,
        id: `board-${Date.now()}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
    boards.push(newBoard);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].BOARDS, boards);
    return newBoard;
}
function updateBoard(id, data) {
    const boards = getBoards();
    const index = boards.findIndex((b)=>b.id === id);
    if (index === -1) return null;
    boards[index] = {
        ...boards[index],
        ...data,
        updated_at: new Date().toISOString()
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].BOARDS, boards);
    return boards[index];
}
function deleteBoard(id) {
    const boards = getBoards();
    const filtered = boards.filter((b)=>b.id !== id);
    if (filtered.length === boards.length) return false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].BOARDS, filtered);
    return true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/local/taskService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/local/taskService.ts
__turbopack_context__.s([
    "createTask",
    ()=>createTask,
    "deleteTask",
    ()=>deleteTask,
    "deleteTasksByBoardId",
    ()=>deleteTasksByBoardId,
    "getTaskById",
    ()=>getTaskById,
    "getTasks",
    ()=>getTasks,
    "getTasksByBoardId",
    ()=>getTasksByBoardId,
    "getTasksByProjectId",
    ()=>getTasksByProjectId,
    "initTasks",
    ()=>initTasks,
    "updateTask",
    ()=>updateTask,
    "updateTaskStatus",
    ()=>updateTaskStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/storage.ts [app-client] (ecmascript)");
;
// 초기 Mock 데이터
const INITIAL_TASKS = [
    {
        id: "task-1",
        kanban_board_id: "board-1",
        project_id: "project-1",
        title: "샘플 태스크 1",
        description: "할 일 상태의 샘플 태스크입니다.",
        status: "todo",
        priority: "normal",
        assigned_user_id: null,
        subtasks: [],
        memo: null,
        started_at: null,
        ended_at: null,
        use_time: false,
        start_time: null,
        end_time: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: "task-2",
        kanban_board_id: "board-1",
        project_id: "project-1",
        title: "샘플 태스크 2",
        description: "진행 중 상태의 샘플 태스크입니다.",
        status: "inprogress",
        priority: "high",
        assigned_user_id: null,
        subtasks: [],
        memo: null,
        started_at: "2026-01-15",
        ended_at: "2026-01-20",
        use_time: false,
        start_time: null,
        end_time: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    },
    {
        id: "task-3",
        kanban_board_id: "board-1",
        project_id: "project-1",
        title: "샘플 태스크 3",
        description: "완료 상태의 샘플 태스크입니다.",
        status: "done",
        priority: "low",
        assigned_user_id: null,
        subtasks: [],
        memo: null,
        started_at: "2026-01-01",
        ended_at: "2026-01-10",
        use_time: false,
        start_time: null,
        end_time: null,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    }
];
function initTasks() {
    const existing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TASKS);
    if (!existing || existing.length === 0) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TASKS, INITIAL_TASKS);
    }
}
function getTasks() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TASKS) || [];
}
function getTasksByBoardId(boardId) {
    const tasks = getTasks();
    return tasks.filter((t)=>t.kanban_board_id === boardId);
}
function getTasksByProjectId(projectId) {
    const tasks = getTasks();
    return tasks.filter((t)=>t.project_id === projectId);
}
function getTaskById(id) {
    const tasks = getTasks();
    return tasks.find((t)=>t.id === id) || null;
}
function createTask(data) {
    const tasks = getTasks();
    const newTask = {
        ...data,
        id: `task-${Date.now()}`,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
    };
    tasks.push(newTask);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TASKS, tasks);
    return newTask;
}
function updateTask(id, data) {
    const tasks = getTasks();
    const index = tasks.findIndex((t)=>t.id === id);
    if (index === -1) return null;
    tasks[index] = {
        ...tasks[index],
        ...data,
        updated_at: new Date().toISOString()
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TASKS, tasks);
    return tasks[index];
}
function deleteTask(id) {
    const tasks = getTasks();
    const filtered = tasks.filter((t)=>t.id !== id);
    if (filtered.length === tasks.length) return false;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TASKS, filtered);
    return true;
}
function updateTaskStatus(id, status) {
    return updateTask(id, {
        status
    });
}
function deleteTasksByBoardId(boardId) {
    const tasks = getTasks();
    const filtered = tasks.filter((t)=>t.kanban_board_id !== boardId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setItem"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STORAGE_KEYS"].TASKS, filtered);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/lib/local/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// src/lib/local/index.ts
// Storage
__turbopack_context__.s([
    "initLocalStorage",
    ()=>initLocalStorage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/storage.ts [app-client] (ecmascript)");
// Services
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$projectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/projectService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$boardService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/boardService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$taskService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/taskService.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
function initLocalStorage() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$projectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initProjects"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$boardService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initBoards"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$taskService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initTasks"])();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/(main)/project/workspace/page.tsx - 프로젝트 워크스페이스 메인 페이지
__turbopack_context__.s([
    "default",
    ()=>ProjectPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// React Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/node_modules/next/navigation.js [app-client] (ecmascript)");
// 메인 기능 컴포넌트들
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$calendarView$2f$CalendarView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/components/features/calendarView/CalendarView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$kanban$2f$KanbanBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/components/features/kanban/KanbanBoard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$layout$2f$BottomNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/components/layout/BottomNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/utils/toast.tsx [app-client] (ecmascript)");
// 로컬 서비스
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$projectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/projectService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$boardService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/boardService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$taskService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/lib/local/taskService.ts [app-client] (ecmascript)");
// 메모 기능 컴포넌트
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$kanban$2f$MemoView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/components/features/kanban/MemoView.tsx [app-client] (ecmascript)");
// 프로젝트 정보 패널
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$project$2f$ProjectInfoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Project/NewTaskry/src/components/features/project/ProjectInfoPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function ProjectPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // === 핵심 상태 관리 ===
    const [projectId, setProjectId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectName, setProjectName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectStartDate, setProjectStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectEndDate, setProjectEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [kanbanBoardId, setKanbanBoardId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // === UI 상태 관리 ===
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("kanban");
    const [showMemoPanel, setShowMemoPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showProjectInfoPanel, setShowProjectInfoPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 워크플로우 제어: sessionStorage 기반 접근 관리
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            const storedProjectId = sessionStorage.getItem("current_Project_Id");
            if (!storedProjectId) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("프로젝트를 먼저 선택해주세요", "error");
                router.push("/");
                return;
            }
            setProjectId(storedProjectId);
        }
    }["ProjectPage.useEffect"], [
        router
    ]);
    // 프로젝트 데이터 로딩
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectPage.useEffect": ()=>{
            if (!projectId) return;
            const fetchData = {
                "ProjectPage.useEffect.fetchData": ()=>{
                    try {
                        if (!projectId || projectId === "undefined" || projectId === "null") {
                            console.warn("⚠️ Invalid projectId:", projectId);
                            setLoading(false);
                            return;
                        }
                        // 1. 프로젝트 정보 가져오기
                        const project = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$projectService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProjectById"])(projectId);
                        if (project) {
                            setProjectName(project.project_name || "이름 없는 프로젝트");
                            setProjectStartDate(project.started_at || "");
                            setProjectEndDate(project.ended_at || "");
                        } else {
                            setProjectName("알 수 없는 프로젝트");
                            setProjectStartDate("");
                            setProjectEndDate("");
                        }
                        // 2. 칸반보드 가져오기 (없으면 생성)
                        let boards = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$boardService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBoardsByProjectId"])(projectId);
                        let boardId = boards[0]?.id;
                        if (!boardId) {
                            console.log("⚠️ 칸반보드가 없어서 새로 생성합니다.");
                            const newBoard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$boardService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBoard"])({
                                name: "기본 보드",
                                project_id: projectId,
                                columns: "todo,inprogress,done"
                            });
                            boardId = newBoard.id;
                        }
                        setKanbanBoardId(boardId);
                        // 3. 태스크 가져오기
                        const taskList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$taskService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTasksByBoardId"])(boardId);
                        setTasks(taskList);
                    } catch (error) {
                        console.error("데이터 로딩 중 오류:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["ProjectPage.useEffect.fetchData"];
            fetchData();
        }
    }["ProjectPage.useEffect"], [
        projectId
    ]);
    // Task 생성 핸들러
    const handleCreateTask = (taskData)=>{
        const newTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$taskService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTask"])(taskData);
        setTasks((prev)=>[
                ...prev,
                newTask
            ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("작업이 생성되었습니다.", "success");
    };
    // Task 수정 핸들러
    const handleUpdateTask = (taskId, updates)=>{
        const updated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$taskService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateTask"])(taskId, updates);
        if (updated) {
            setTasks((prev)=>prev.map((t)=>t.id === taskId ? {
                        ...t,
                        ...updates
                    } : t));
        }
    };
    // Task 삭제 핸들러
    const handleDeleteTask = (taskId)=>{
        const success = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$taskService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTask"])(taskId);
        if (success) {
            setTasks((prev)=>prev.filter((t)=>t.id !== taskId));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$utils$2f$toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("작업이 삭제되었습니다.", "success");
        }
    };
    // 데이터 새로고침
    const handleRefresh = ()=>{
        if (kanbanBoardId) {
            const taskList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$lib$2f$local$2f$taskService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTasksByBoardId"])(kanbanBoardId);
            setTasks(taskList);
        }
    };
    // 뷰 전환 핸들러
    const handleViewChange = (view)=>{
        if (view === "memo") {
            setShowMemoPanel((prev)=>!prev);
        } else if (view === "project") {
            sessionStorage.removeItem("current_Project_Id");
            window.location.href = "/";
        } else {
            setCurrentView(view);
            setShowMemoPanel(false);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-400 dark:text-gray-500 text-lg",
                children: "불러오는 중..."
            }, void 0, false, {
                fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
            lineNumber: 175,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full bg-gray-50 dark:bg-gray-900 pt-14",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex overflow-hidden gap-2 lg:gap-3 min-h-0 p-3 sm:p-4 lg:p-5 max-w-[1600px] mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `flex flex-col transition-all duration-300 overflow-hidden min-h-0 shrink-0 ${showProjectInfoPanel ? `w-[240px] lg:w-[280px] ${showMemoPanel ? "xl:w-[260px]" : "xl:w-[300px]"} opacity-100` : "w-0 opacity-0"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$project$2f$ProjectInfoPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            projectId: projectId,
                            projectName: projectName,
                            projectStartDate: projectStartDate,
                            projectEndDate: projectEndDate,
                            tasks: tasks,
                            onClose: ()=>setShowProjectInfoPanel(false)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex flex-col overflow-hidden transition-all duration-300 min-h-0 flex-1 min-w-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-hidden min-h-0",
                            children: [
                                currentView === "kanban" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$kanban$2f$KanbanBoard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    boardId: kanbanBoardId,
                                    tasks: tasks,
                                    onCreateTask: handleCreateTask,
                                    onUpdateTask: handleUpdateTask,
                                    onDeleteTask: handleDeleteTask,
                                    onProjectInfoClick: ()=>setShowProjectInfoPanel((prev)=>!prev),
                                    project: {
                                        project_id: projectId,
                                        project_name: projectName,
                                        started_at: projectStartDate,
                                        ended_at: projectEndDate
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this),
                                currentView === "calendar" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$calendarView$2f$CalendarView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    tasks: tasks,
                                    boardId: kanbanBoardId,
                                    project: {
                                        project_id: projectId,
                                        project_name: projectName,
                                        started_at: projectStartDate,
                                        ended_at: projectEndDate
                                    },
                                    onCreateTask: handleCreateTask,
                                    onUpdateTask: handleUpdateTask,
                                    onDeleteTask: handleDeleteTask,
                                    onSelectTask: ()=>{},
                                    onTaskCreated: handleRefresh,
                                    onProjectInfoClick: ()=>setShowProjectInfoPanel((prev)=>!prev)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: `flex flex-col transition-all duration-300 overflow-hidden min-h-0 shrink-0 ${showMemoPanel ? `w-[240px] lg:w-[280px] ${showProjectInfoPanel ? "xl:w-[260px]" : "xl:w-[300px]"} opacity-100` : "w-0 opacity-0"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$features$2f$kanban$2f$MemoView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            projectId: projectId
                        }, void 0, false, {
                            fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$src$2f$components$2f$layout$2f$BottomNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    activeView: showMemoPanel ? "memo" : currentView,
                    onViewChange: handleViewChange
                }, void 0, false, {
                    fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                    lineNumber: 269,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
                lineNumber: 268,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Project/NewTaskry/src/app/(main)/project/workspace/page.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_s(ProjectPage, "5HutDxgK33ixnH0PdVj76hgBnCU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Project$2f$NewTaskry$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProjectPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Project_NewTaskry_src_f6462434._.js.map