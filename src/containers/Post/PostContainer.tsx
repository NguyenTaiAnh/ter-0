"use client";
import { PostAction } from "@/components/Post/PostAction";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, CirclePower, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const PostContainer = () => {
  const router = useRouter();
  const pathName = usePathname();
  if (pathName != "/post") {
    return null;
  }
  return (
    <section className="fixed inset-0 z-50 flex justify-center ">
      <div className="absolute inset-0 bg-[#242d35] opacity-[0.5] " />
      <div className="absolute top-[6%] px-4 flex flex-col z-10 bg-black text-white rounded-xl w-full  max-w-full h-full modal-md:max-w-[600px] modal-md:h-[314px]">
        <div className="flex justify-between relative h-[53px]  items-center">
          <div className="">
            <Button onClick={() => router.back()} className="" variant={"link"}>
              <X className="text-white" />
            </Button>
          </div>
          <div className="">
            <p className="font-bold text-[14px] text-mark-share">Drafts</p>
          </div>
        </div>
        <div className="relative flex">
          <div className="mr-2">
            <Image
              src={"icons/logo.svg"}
              alt=""
              width={0}
              height={0}
              className="w-[40px]  h-[40px]"
            />
          </div>
          <div className="flex-1 h-[164px] ">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex pb-3">
                Everyone
                <ChevronDown className="" />
              </DropdownMenuTrigger>
            </DropdownMenu>
            <div className="h-[120px] py-3">
              <Input
                placeholder="What is Happening?!"
                type="text"
                className="px-0 border-0 outline-0 text- focus-visible:border-0 focus-visible:outline-0 text-[20px] text-text-default py-3 outline-none bg-transparent placeholder:text-text-default"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="flex pb-3 border-b-[1px] border-gray-border">
            <CirclePower className="font-bold text-[14px] text-mark-share" />
            <p className="font-bold text-[14px] text-mark-share">
              Everyone can reply
            </p>
          </div>

          <PostAction />
        </div>
      </div>
    </section>
  );
};

export default PostContainer;
