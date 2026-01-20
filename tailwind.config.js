/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ 다크모드 활성화
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",

        // Ice Melt 기본 색상 팔레트
        ice: {
          DEFAULT: "#C3D1D3",
          light: "#EDF1F2",
          medium: "#879DA0",
          dark: "#687E81",
          darkest: "#4A5C5E",
        },
        // 보조 색상
        sage: "#C3D3C2",
        rose: "#D3C2C3",
        sky: "#C2C3D3",
        sand: "#D3CEC2",
        // 상태 표시 색상
        status: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
        },
        // 기존 main 색상 (호환성 유지)
        main: {
          100: "#B3E0E0",
          200: "#80CCCC",
          300: "#4DB8B8",
          400: "#26A3A3",
          500: "#008F8F",
          600: "#007373",
          700: "#005959",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#999999",
          500: "#6B7280",
          600: "#333333",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
    },
  },
  plugins: [],
};
