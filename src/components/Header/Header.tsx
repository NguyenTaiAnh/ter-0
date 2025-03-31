"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <header className="flex flex-grow h-[53px] px-4">
      <div
        className="w-[56px] items-center flex cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft />
      </div>
      <div className="flex items-center">
        <p className="text-[20px] text-text-default font-bold">Post</p>
      </div>
    </header>
  );
};

export default Header;
