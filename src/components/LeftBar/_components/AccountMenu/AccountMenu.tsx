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

interface AccountMenuProps{
  currentUser:any
}
function AccountMenu({currentUser}:AccountMenuProps) {
  // console.log({currentUser})
  const { setUrlPrevious } = useStore();
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="focus-visible:border-0 focus-visible:outline-none" asChild>
        <div className="flex justify-center 3xl:justify-between w-full items-center p-3 hover:bg-hover-menu cursor-pointer rounded-full">
          <AvatarCustom  path={currentUser?.avatar_url} username={currentUser?.username.slice(0,2)} className="w-[40px] h-[40px]" />
          <div className="flex-1 text-[15px] text-center hidden 3xl:inline">
            <p className="font-bold">{currentUser?.username}</p>
            <p className="text-icon-default">@{currentUser?.username}</p>
          </div>
          <div className="flex-1 text-end hidden 3xl:inline">...</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[300px] py-3 flex flex-col text-white text-[15px] font-bold bg-black focus-visible:border-0 focus-visible:outline-none">
        <Link
          href={"/login"}
          onClick={() => {
            setIsOpen(false)
            setUrlPrevious("global")
          }}
          className="px-4 py-3 hover:bg-hover-menu"
        >
          Add an existing account
        </Link>
        <Link href={"/logout"} onClick={()=>setIsOpen(false)} className="px-4 py-3 hover:bg-hover-menu">
          Logout @username
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AccountMenu;
