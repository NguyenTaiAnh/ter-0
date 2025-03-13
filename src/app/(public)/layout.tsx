import { MainLayout } from "@/layouts/MainLayout";
import React from "react";

interface MainRootLayoutProps {
  children: React.ReactNode;
}
const MainRootLayout: React.FC<MainRootLayoutProps> = ({ children }) => {
  return (
    <MainLayout>
      <main className="border-x-[1px] flex-1 border-gray-border w-full min-w-0 max-w-[600px]">
        {children}
      </main>
    </MainLayout>
  );
};

export default MainRootLayout;
