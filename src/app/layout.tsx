import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import FAB from "@/components/layout/FAB";
import Provider from "@/providers/providers";
import Toaster from "@/components/ui/Toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#EDF1F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Taskry",
  description: "칸반보드 기반 프로젝트 관리 도구",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Taskry",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased h-full overflow-hidden`}
        suppressHydrationWarning={true}
      >
        <Provider>
          <div className="h-full flex flex-col">
            <div className="flex-1 flex overflow-hidden">
              {/* 데스크탑: 사이드바 */}
              <Sidebar />

              {/* 메인 콘텐츠 */}
              <main className="flex-1 overflow-auto pb-20 md:pb-0 bg-gray-50">
                {children}
              </main>
            </div>

            {/* 모바일: 하단 네비게이션 */}
            <BottomNavigation />

            {/* 모바일: FAB */}
            <FAB />

            <Toaster />
          </div>
        </Provider>
      </body>
    </html>
  );
}
