import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const PostUpload = () => {
  return (
    <section className="h-[116px] w-full px-4 border-b-gray-border border-b flex">
      <div className="pt-3 mr-2">
        <Image
          src="/general/avatar.png"
          alt="avatar"
          width={0}
          height={0}
          className="w-[44px] h-[44px] rounded-full"
        />
      </div>
      <div className="pt-1 flex-1 flex flex-col gap-2">
        <input
          type="text"
          placeholder="What is happening?!"
          className="text-[20px] text-text-default py-3"
        />
        <div className="flex justify-between pb-2 items-center">
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
      </div>
    </section>
  );
};

export default PostUpload;
