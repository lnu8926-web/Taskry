/**
 * Mist 색상 팔레트
 * Taskry 프로젝트 관리 플랫폼 색상 시스템
 */

// ============================================
// 기본 Mist 색상
// ============================================
export const MIST = {
  DEFAULT: "#C3D1D3", // 메인 브랜드 컬러, 버튼, 아바타, 프로그레스 바
  LIGHT: "#EDF1F2", // 배경, 활성 상태 배경, 경미한 강조
  MEDIUM: "#879DA0", // 텍스트, 아이콘, 강조
  DARK: "#687E81", // 호버 상태, 강한 강조
  DARKEST: "#4A5C5E", // 텍스트 대비, 헤더
} as const;

// ============================================
// 보조 색상
// ============================================
export const COMPLEMENTARY = {
  SAGE: "#C3D3C2", // 부드러운 세이지 - 보조 컬러, 성공 상태
  ROSE: "#D3C2C3", // 더스티 로즈 - 보조 컬러, 경고 상태
  SKY: "#C2C3D3", // 페일 스카이 - 보조 컬러, 정보 상태
  SAND: "#D3CEC2", // 웜 샌드 - 보조 컬러, 대기 상태
  CORAL: "#E8B8B0", // 연한 코랄 - 따뜻한 붉은 계열
  CREAM: "#E8D9A8", // 크림색 - 따뜻한 노란 계열
} as const;

// ============================================
// 중립 색상
// ============================================
export const NEUTRAL = {
  WHITE: "#FFFFFF", // 배경, 카드
  GRAY_50: "#F9FAFB", // 배경, 구분선
  GRAY_100: "#F3F4F6", // 배경, 비활성 상태
  GRAY_200: "#E5E7EB", // 구분선, 테두리
  GRAY_300: "#D1D5DB", // 비활성 텍스트, 아이콘
  GRAY_500: "#6B7280", // 보조 텍스트
  GRAY_700: "#374151", // 주요 텍스트
  GRAY_900: "#111827", // 헤더, 강조 텍스트
} as const;

// ============================================
// 상태 표시 색상
// ============================================
export const STATUS = {
  SUCCESS: "#10B981", // 완료, 성공
  WARNING: "#F59E0B", // 경고, 대기 중
  ERROR: "#EF4444", // 오류, 중요, 마감일 지남
  INFO: "#3B82F6", // 정보, 진행 중
} as const;

// ============================================
// 시맨틱 색상 (용도별)
// ============================================
export const SEMANTIC = {
  // 브랜드
  brand: {
    primary: MIST.DEFAULT,
    primaryHover: MIST.DARK,
    primaryActive: MIST.DARKEST,
  },

  // 배경
  background: {
    primary: NEUTRAL.WHITE,
    secondary: NEUTRAL.GRAY_50,
    tertiary: NEUTRAL.GRAY_100,
    accent: MIST.LIGHT,
  },

  // 텍스트
  text: {
    primary: NEUTRAL.GRAY_900,
    secondary: NEUTRAL.GRAY_700,
    tertiary: NEUTRAL.GRAY_500,
    muted: NEUTRAL.GRAY_300,
    accent: MIST.DARKEST,
    accentMedium: MIST.MEDIUM,
  },

  // 테두리
  border: {
    primary: NEUTRAL.GRAY_200,
    secondary: NEUTRAL.GRAY_300,
    accent: MIST.DEFAULT,
  },

  // 상태
  status: {
    success: STATUS.SUCCESS,
    warning: STATUS.WARNING,
    error: STATUS.ERROR,
    info: STATUS.INFO,
  },
} as const;

// ============================================
// 프로젝트 색상 (프로젝트 구분용)
// ============================================
export const PROJECT_COLORS = [
  { name: "Mist", value: MIST.DEFAULT },
  { name: "Coral", value: COMPLEMENTARY.CORAL },
  { name: "Cream", value: COMPLEMENTARY.CREAM },
  { name: "Sage", value: COMPLEMENTARY.SAGE },
  { name: "Sky", value: COMPLEMENTARY.SKY },
  { name: "Rose", value: COMPLEMENTARY.ROSE },
  { name: "Sand", value: COMPLEMENTARY.SAND },
] as const;

// ============================================
// Tailwind CSS 변수 매핑 (참고용)
// ============================================
export const TAILWIND_MAPPING = {
  // globals.css의 CSS 변수와 매핑
  "--mist": MIST.DEFAULT,
  "--mist-light": MIST.LIGHT,
  "--mist-medium": MIST.MEDIUM,
  "--mist-dark": MIST.DARK,
  "--mist-darkest": MIST.DARKEST,
} as const;

// ============================================
// 타입 정의
// ============================================
export type MistColor = (typeof MIST)[keyof typeof MIST];
export type ComplementaryColor =
  (typeof COMPLEMENTARY)[keyof typeof COMPLEMENTARY];
export type NeutralColor = (typeof NEUTRAL)[keyof typeof NEUTRAL];
export type StatusColor = (typeof STATUS)[keyof typeof STATUS];
export type ProjectColor = (typeof PROJECT_COLORS)[number]["value"];
