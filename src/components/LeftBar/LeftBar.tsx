"use client";
import { menuList } from "@/constants/menuList.const";
import Link from "next/link";
import React from "react";
import { AccountMenu } from "./_components/AccountMenu";
import { Image } from "../Image";
import { usePathname } from "next/navigation";
import { ActionMore } from "./_components/ActionMore";
import { MenuList } from "./_components/MenuList";
import { useStore } from "@/stores";

interface LeftBarProps {
}
const LeftBar: React.FC<LeftBarProps> = ({}) => {
  const [active, setActive] = React.useState<string>("/home");
  const { user } = useStore();
  const pathName = usePathname();
  React.useEffect(() => {
    setActive(pathName);
  }, [pathName]);
  return (
    <section className="sticky top-0 px-2 h-screen flex flex-col justify-between pt-2 pb-8 w-fit sm:w-[88px] 3xl:w-[259px] left-0">
      <div className="flex flex-col items-center 3xl:items-start">
        {/* logo */}
        <div className="p-3 hover:bg-hover-menu w-fit rounded-full">
          <Link className="" href={"/home"}>
            <Image
              path="icons/logo.svg"
              alt=""
              w={0}
              h={0}
              className="w-8 h-8"
            ></Image>
          </Link>
        </div>
        {/* menu */}
        <div className="flex flex-col text-[20px]">
          {menuList.map((item) => (
            <div key={item.id}>
              <MenuList item={item} active={active} currentUser={user}/>
            </div>
          ))}
          <ActionMore/>
        </div>
        <Link
          className="hidden 3xl:w-[233px] 3xl:my-4 hover:bg-hover-post-btn text-[17px] font-bold 3xl:flex justify-center items-center rounded-3xl h-[52px] px-8 bg-white text-black"
          href={"/post"}
        >
          Post
        </Link>
        <Link
          href={"/post"}
          className="3xl:hidden my-4 w-[50px] h-[50px] hover:bg-hover-post-btn bg-white rounded-full flex justify-center items-center"
        >
          <Image path="icons/post.svg" alt="" w={24} h={24} />
        </Link>
      </div>
      {/* profile */}
      <AccountMenu currentUser={user} />
    </section>
  );
};

export default LeftBar;
