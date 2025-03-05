import Image from "next/image";
import React from "react";

const PostInfo = () => {
  return (
    <section className="pt-3 px-4 flex">
      <div className="mr-2">
        <Image
          src="/general/avatar.png"
          alt="avatar"
          width={0}
          height={0}
          className="w-[44px] h-[44px] rounded-full"
        />
      </div>
      <div className="flex-1 text-[15px]">
          <div className="info flex gap-1 ">
            <p className=" text-text-default font-bold">User Name</p>
            <p className="text-icon-default ">@username</p>
            <p className="text-icon-default ">7h</p>
          </div>
          <div className="content">
            <p  className=" text-text-default font-bold">Hello world</p>
          </div>
      </div>
    </section>
  );
};

export default PostInfo;
