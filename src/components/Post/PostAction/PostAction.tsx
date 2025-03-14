import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function PostAction() {
  return (
    <div className="flex justify-between pb-2 items-center mt-2">
      <div className=" flex gap-4">
        <Image
          src="/icons/image.svg"
          alt="image"
          width={0}
          height={0}
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/icons/emoji.svg"
          alt="emoji"
          width={0}
          height={0}
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/icons/emoji.svg"
          alt="emoji"
          width={0}
          height={0}
          className="w-[24px] h-[24px]"
        />
        <Image
          src="/icons/emoji.svg"
          alt="emoji"
          width={0}
          height={0}
          className="w-[24px] h-[24px]"
        />
      </div>

      <Button
        variant={"default"}
        className=" w-[67px] bg-gray-500 rounded-full font-bold p-3 !text-btn-text-post"
      >
        Post
      </Button>
    </div>
  );
}

export default PostAction;
