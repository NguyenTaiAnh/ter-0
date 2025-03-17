import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Check, ChevronDown, CirclePower } from "lucide-react";
import React from "react";

function PostChoose() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex mb-3 px-2 text-[14px] rounded-full text-cmt-blue font-bold border-[1px] border-gray-border">
        Everyone <ChevronDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black h-[480px] overflow-hidden border-0 outline-0 shadow-[0_0_10px] focus-visible:border-0 focus-visible:outline-0 text-white py-3 px-0">
        <h1 className="text-[20px] w-full font-bold px-3 py-1 sticky top-0 bg-black z-10">Choose audience</h1>
        <ScrollArea className="flex flex-col overflow-y-auto scroll-smooth h-full">
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>
          <h1 className="text-[15px] font-bold px-3 py-1">My Communities</h1>
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>
          
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-none hover:!text-white hover:!bg-hover-black-opacity h-[64px] py-3 px-4 text-[15px] font-bold flex flex-row gap-3">
            <div className="w-[40px] h-[40px] flex rounded-full justify-center items-center bg-mark-share">
              <CirclePower className="font-bold text-white w-[40px] h-[40px]" />
            </div>
            Everyone
            <div>
              <Check className="text-mark-share" />
            </div>
          </DropdownMenuItem>

        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default PostChoose;
