import { LeftBar } from "@/components/LeftBar";
import RightBar from "@/components/RightBar/RightBar";
import { cookies } from "next/headers";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}
async function MainLayout({ children }: MainLayoutProps) {
  const cookieStore = await cookies()
  const data= JSON.parse(cookieStore.get('currentUser')?.value || '')
  return (
    <div className="flex flex-row justify-center w-full sm:max-w-sm smd:max-w-smd md:max-w-md xl:max-w-xl 3xl:max-w-3xl bg-black sm:mx-auto text-white">
      <LeftBar currentUser={data} />
      {children}
      <RightBar />
    </div>
  );
}

export default MainLayout;
