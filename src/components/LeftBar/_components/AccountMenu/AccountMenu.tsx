"use client";
import { AvatarCustom } from "@/components/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useStore } from "@/stores";
import Link from "next/link";
import React from "react";

function AccountMenu() {
  const { setUrlPrevious } = useStore();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:border-0 focus-visible:outline-none">
        <div className="flex justify-center 3xl:justify-between w-full items-center p-3 hover:bg-hover-menu cursor-pointer rounded-full">
          <AvatarCustom className="w-[40px] h-[40px]" />
          <div className="flex-1 text-[15px] text-center hidden 3xl:inline">
            <p className="font-bold">username</p>
            <p className="text-icon-default">@username</p>
          </div>
          <div className="flex-1 text-end hidden 3xl:inline">...</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] py-3 flex flex-col text-white text-[15px] font-bold bg-black focus-visible:border-0 focus-visible:outline-none">
        <Link
          href={"/login"}
          onClick={() => setUrlPrevious("global")}
          className="px-4 py-3 hover:bg-hover-menu"
        >
          Add an existing account
        </Link>
        <Link href={"/logout"} className="px-4 py-3 hover:bg-hover-menu">
          Logout @username
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountMenu;
