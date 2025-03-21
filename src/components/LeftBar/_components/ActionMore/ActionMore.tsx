import { Image } from "@/components/Image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

function ActionMore() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:outline-0 flex justify-center 3xl:justify-start gap-3 p-3 hover:bg-hover-menu w-fit rounded-full">
        <Image path={`icons/more.svg`} w={26} h={26} alt="more" />
        <p className="hidden 3xl:inline">More</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          Feature under construction for next release.
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ActionMore;
