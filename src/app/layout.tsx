import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
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

export const metadata: Metadata = {
  title: "Taskry",
  description: "칸반보드 기반 프로젝트 관리 도구",
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
            <Header />
            <div className="flex-1 overflow-auto">{children}</div>
            <Toaster />
          </div>
        </Provider>
      </body>
    </html>
  );
}
