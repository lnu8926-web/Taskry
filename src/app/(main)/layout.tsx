import Sidebar from "@/components/layout/Sidebar";
import BottomNavigation from "@/components/layout/BottomNavigation";
import FAB from "@/components/layout/FAB";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto pb-20 md:pb-0 bg-gray-50">
          {children}
        </main>
      </div>
      <BottomNavigation />
      <FAB />
    </div>
  );
}
