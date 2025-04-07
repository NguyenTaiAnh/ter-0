import PageNotFound from "@/app/_not-found";
import { LeftBar } from "@/components/LeftBar";
import RightBar from "@/components/RightBar/RightBar";
import { cookies } from "next/headers";
import React from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}
async function MainLayout({ children }: MainLayoutProps) {
  const cookieStore = await cookies()
  if (!cookieStore.get('currentUser')?.value) {
    return <PageNotFound />
  }
    
  return (
    <div className="flex flex-row justify-center w-full sm:max-w-sm smd:max-w-smd md:max-w-md xl:max-w-xl 3xl:max-w-3xl bg-black sm:mx-auto text-white">
      <LeftBar/>
      {children}
      <RightBar />
    </div>
  );
}

export default MainLayout;
