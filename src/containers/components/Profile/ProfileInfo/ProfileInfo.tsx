import { AvatarCustom } from "@/components/Avatar";
import { IUser } from "@/types/user";
import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import Link from "next/link";
import React from "react";

interface PostInfoProps{
  currentUser:IUser | null
}
 function ProfileInfo({currentUser}: PostInfoProps) {
   
  const inerText =
    "<p>🌈 Empowering engagement and earnings on web3 Solana</p></br> <p>Enhance your experience interaction and turn your creative ideas to sweet rewards</p>";
  const renderText = () => {
    return {
      __html: currentUser?.bio || inerText,
    };
  };
  return (
    <div className="h-full w-full px-4 pt-3 mb-4 flex flex-col gap-3">
      {/* avatar & edit profile */}
      <div className="h-[68px] flex justify-between  relative">
        <div className="">
          <AvatarCustom path={currentUser?.avatar_url || ''} username={currentUser?.username.slice(0,2) || ''} className="w-[133px] h-[133px] absolute inset-0 -top-full"/>
        </div>
        {/* <Button className="bg-black border-gray-border border-[1px] font-bold text-[15px] text-text-default">
          Edit profile
        </Button> */}
        <Link href={'/settings/profile'} className="bg-black cursor-pointer h-fit px-4 py-2 hover:bg-hover-btn-black rounded-4xl border-gray-border border-[1px] font-bold text-[15px] text-text-default">
          Edit profile
        </Link>
      </div>

      {/* username */}
      <div className="username mt-1">
        <p className="text-[20px] text-text-default font-bold">{currentUser?.name|| currentUser?.username}</p>
        <p className="text-[15px] text-icon-default">@{currentUser?.username}</p>
      </div>

      {/* description */}
      <div dangerouslySetInnerHTML={renderText()}></div>

      {/* info user */}
      <div className="flex text-icon-default text-[15px]">
        <p className="flex mr-3">
          <BriefcaseBusiness className="mr-1" />
          Entertainment & Recreation{" "}
        </p>
        <p className="flex">
          <CalendarDays className="mr-1" />
          Joined July 2017{" "}
        </p>
      </div>

      {/* interaction */}
      <div className="flex flex-row gap-5">
        <p className="text-foreground font-bold text-[14px]">
          9 <span className="text-icon-default font-normal">Following</span>
        </p>
        <p className="text-foreground font-bold text-[14px]">
          999.999{" "}
          <span className="text-icon-default font-normal">Followers</span>
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
