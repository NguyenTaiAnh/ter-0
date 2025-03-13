"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LogoutContainer = () => {
  const router = useRouter();
  const pathname = usePathname();
  if (!pathname.includes("/logout")) {
    return null;
  }
  const handleLogout = () => {
    router.push("/");
    // const expires = new Date(Date.now() + 1 + 1000 * 60 * 60 * 24 * 365); // 365 days
    // setCookie(null, "user", JSON.stringify(UserLogin), {
    //   expires,
    // });
  };
  return (
    <section className="fixed inset-0 z-50 flex items-center bg-[#242d35] justify-center ">
      {/* <div className="absolute inset-0 bg-modal-bg " /> */}
      <div className="relative flex flex-col z-10 bg-black text-white rounded-xl w-full p-8 max-w-[320px] h-[376px]">
        <div className="flex justify-center  relative h-[40px] mb-4">
          <Image
            src={"icons/logo.svg"}
            alt=""
            width={0}
            height={0}
            className="w-auto  h-full"
          />
        </div>

        <div className=" mx-auto flex flex-col   h-full">
          <h1 className=" text-[20px] font-bold w-full">Sign out of X</h1>
          <p className="text-[15px] text-icon-default">
            You can always log back in at any time. If you just want to switch
            accounts, you can do so by adding an existing account.
          </p>
          <div className="flex flex-col gap-3 mt-6">
            <Button
              onClick={handleLogout}
              variant={"outline"}
              className="rounded-4xl hover:bg-hover-post-btn h-[42px] font-bold transition duration-[0.2s] bg-white text-black"
            >
              Logout
            </Button>
            <Button
              onClick={() => router.back()}
              variant={"outline"}
              className="bg-black h-[42px] hover:bg-hover-btn-black hover:text-white font-bold border-[1px] border-icon-default transition duration-[0.2s] rounded-4xl text-white"
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoutContainer;
