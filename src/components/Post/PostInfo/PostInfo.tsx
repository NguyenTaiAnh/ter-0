import React from "react";
import { PostInteraction } from "../PostInteraction";
import { Image } from "@/components/Image";

const PostInfo = () => {
  return (
    <section className="pt-3 px-4 flex pb-3 border-b-gray-border border-b">
      <div className="mr-2">
        <Image
          path="/general/avatar.jpg"
          alt="avatar"
          w={0}
          h={0}
          className="w-[44px] h-[44px] rounded-full min-w-[44px]"
        />
      </div>
      <div className="flex-1 text-[15px] ">
        <div className="info flex gap-1 ">
          <p className=" text-text-default font-bold">User Name</p>
          <p className="text-icon-default ">@username</p>
          <p className="text-icon-default ">7h</p>
        </div>
        <div className="content">
          <p className=" text-text-default font-bold">Hello world</p>
          <div className="picture my-2">
            <Image
              path="/general/post.jpeg"
              alt="post"
              w={0}
              h={0}
              className="w-full"
              
            />
          </div>
        </div>
        <PostInteraction />
      </div>
    </section>
  );
};

export default PostInfo;
