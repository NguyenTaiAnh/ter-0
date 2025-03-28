import { Image } from "@/components/Image";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

interface MenuListProps {
  item: any;
  active: string;
  currentUser: any;
}
const MenuList: React.FC<MenuListProps> = ({ item, active, currentUser }) => {
  return (
    <Link
      href={item.id == 9 ? '/'+currentUser.username : item.link}
      className={cn(
        "flex justify-center 3xl:justify-start gap-3 p-3 hover:bg-hover-menu w-fit rounded-full"
      )}
    >
      <div
        className={cn(
          active == item.link && "border-b-2 border-gray-border",
          "flex justify-center gap-3"
        )}
      >
        <Image
          path={`icons/${item.icon}`}
          w={26}
          h={26}
          alt="item.image"
        ></Image>
        <p
          className={cn(
            active == item.link && "font-bold",
            "hidden 3xl:inline"
          )}
        >
          {item.name}
        </p>
      </div>
    </Link>
  );
};

export default MenuList;
