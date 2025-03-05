import { LeftBar } from "@/components/LeftBar";
import RightBar from "@/components/RightBar/RightBar";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}
function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex justify-center max-w-xsm sm:max-w-sm smd:max-w-smd md:max-w-md xl:max-w-xl 3xl:max-w-3xl bg-black mx-auto h-screen text-white">
      <LeftBar />
      {children}
      <RightBar />
    </div>
  );
}

export default MainLayout;
