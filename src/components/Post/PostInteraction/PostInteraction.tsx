import {
  BookmarkIcon,
  CommentIcon,
  LikeIcon,
  ReTweetIcon,
  ShareIcon,
  ViewIcon,
} from "@/assets/interactions";
import { Button } from "@/components/ui/button";
import React from "react";

const PostInteraction = () => {
  return (
    <div className="flex justify-between h-[32px] mt-3">
      <Button
        className="group !p-0 hover:no-underline text-icon-default hover:text-cmt-blue"
        variant={"link"}
      >
        <CommentIcon
          size={16}
          className=" text-icon-default relative z-10 group-hover:text-cmt-blue"
        />
        <span>1</span>
      </Button>
      <Button className="group !p-0 hover:no-underline " variant={"link"}>
        <ReTweetIcon className="text-icon-default group-hover:text-repost-blue" />
      </Button>
      <Button className="group !p-0 hover:no-underline text-icon-default hover:text-like-pink" variant={"link"}>
        <LikeIcon className="text-icon-default group-hover:text-like-pink" />
        <span>1</span>
      </Button>
      <Button className="group !p-0 hover:no-underline text-icon-default hover:text-analysis" variant={"link"}>
        <ViewIcon className="text-icon-default group-hover:text-analysis" />
        <span>999</span>
      </Button>
      <div className="flex gap-4">
        <Button className="group !p-0" variant={"link"}>
          <BookmarkIcon className="text-icon-default group-hover:text-mark-share" />
        </Button>
        <Button className="group !p-0" variant={"link"}>
          <ShareIcon className="text-icon-default relative w-full group-hover:text-mark-share" />
        </Button>
      </div>
    </div>
  );
};

export default React.memo(PostInteraction);
