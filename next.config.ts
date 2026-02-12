import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  // 개발 중 Fast Refresh 개선
  reactStrictMode: false, // 성능 개선: Strict Mode 비활성화 (프로덕션)

  // 모바일 로컬 테스트용 - 외부 접속 허용
  allowedDevOrigins: ["172.30.1.94"],

  typescript: {
    ignoreBuildErrors: true,
  },

  // 성능 최적화
  compress: true, // gzip 압축
  productionBrowserSourceMaps: false, // 소스맵 비활성화 (프로덕션)

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
    // 이미지 최적화 설정
    formats: ["image/avif", "image/webp"],
  },

  // Turbopack 설정 (Next.js 16+)
  turbopack: {},
  
  // Webpack 최적화
  webpack: (config: any) => {
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          default: false,
          vendors: false,
          // 차트 라이브러리 분리
          recharts: {
            test: /[\\/]node_modules[\\/]recharts[\\/]/,
            name: "recharts",
            priority: 20,
          },
          framer: {
            test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
            name: "framer",
            priority: 19,
          },
        },
      },
    };
    return config;
  },
};

const pwaConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // 개발 모드에서 비활성화 (테스트시 false로 변경)
});

export default pwaConfig(nextConfig);
