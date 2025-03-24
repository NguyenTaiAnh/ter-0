import { Image } from "@/components/Image";
import React from "react";
interface PostActionProps {
  isLoading: boolean;
  handleMediaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameIdFIle: string;
  register: any;
}
function PostAction({
  isLoading,
  handleMediaChange,
  nameIdFIle,
  register,
}: PostActionProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      <input
        disabled={isLoading}
        {...register("media_url")}
        type="file"
        name="file"
        onChange={handleMediaChange}
        className="hidden"
        id={nameIdFIle}
        accept="image/*,video/*"
      />
      <label htmlFor={nameIdFIle}>
        <Image
          path="icons/image.svg"
          alt=""
          w={20}
          h={20}
          className="cursor-pointer"
        />
      </label>
      <Image
        path="icons/gif.svg"
        alt=""
        w={20}
        h={20}
        className="cursor-pointer"
      />
      <Image
        path="icons/poll.svg"
        alt=""
        w={20}
        h={20}
        className="cursor-pointer"
      />
      <Image
        path="icons/emoji.svg"
        alt=""
        w={20}
        h={20}
        className="cursor-pointer"
      />
      <Image
        path="icons/schedule.svg"
        alt=""
        w={20}
        h={20}
        className="cursor-pointer"
      />
      <Image
        path="icons/location.svg"
        alt=""
        w={20}
        h={20}
        className="cursor-pointer"
      />
    </div>
  );
}

export default PostAction;
