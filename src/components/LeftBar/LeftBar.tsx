import { menuList } from "@/constants/menuList";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { cn } from "@/lib/utils";

interface LeftBarProps {}
const LeftBar: React.FC<LeftBarProps> = ({}) => {
  return (
    <section className="sticky top-0 px-2 flex flex-col justify-between pt-2 pb-8 w-fit sm:w-[88px] 3xl:w-[259px] left-0">
      <div className="flex flex-col items-center 3xl:items-start">
        {/* logo */}
        <div className="p-3 hover:bg-hover-menu w-fit rounded-full">
          <Link className="" href={""}>
            <Image src='icons/logo.svg' alt="" width={0} height={0} className="w-8 h-8"></Image>
          </Link>
        </div>
        {/* menu */}
        <div className="flex flex-col text-[20px]">
          {menuList.map((item) => (
            <div key={item.id} >
              <Link
                href={item.link}
                className="flex justify-center 3xl:justify-start gap-3 p-3 hover:bg-hover-menu w-fit rounded-full"
              >
                <Image
                  src={`icons/${item.icon}`}
                  width={26}
                  height={26}
                  alt="item.image"
                ></Image>
                <p className={cn(item.id == 1&& 'font-bold' , 'hidden 3xl:inline') }>{item.name}</p>
              </Link>
            </div>
          ))}
        </div>
        <Link
          className="hidden 3xl:w-[233px] 3xl:my-4 hover:bg-hover-post-btn text-[17px] font-bold 3xl:flex justify-center items-center rounded-3xl h-[52px] px-8 bg-white text-black"
          href={"/"}
        >
          Post
        </Link>
        <Link href={'/'} className="3xl:hidden my-4 w-[50px] h-[50px] hover:bg-hover-post-btn bg-white rounded-full flex justify-center items-center">
          <Image src='icons/post.svg' alt="" width={24} height={24}/>
        </Link>
      </div>
      {/* profile */}
      <div className="flex justify-center 3xl:justify-between w-full items-center p-3 hover:bg-hover-menu cursor-pointer rounded-full">
        <Avatar className="w-[40px] h-[40px]">
          <AvatarFallback className="bg-gray-600">AN</AvatarFallback>
        </Avatar>
        <div className="flex-1 text-[15px] text-center hidden 3xl:inline">
          <p className="font-bold">username</p>
          <p className="text-icon-default">@username</p>
        </div>
        <div className="flex-1 text-end hidden 3xl:inline">...</div>
      </div>
    </section>
  );
};

export default LeftBar;
