"use client";

import NextImage from "next/image";
import { Camera } from "lucide-react";

const EditAvatar = ({
  previewAvatar,
  handleAvatarChange,
  isSubmitting,
  avatarFileInputRef,
}: {
  previewAvatar: string | null;
  handleAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
  avatarFileInputRef: React.RefObject<HTMLInputElement> | null;
}) => (
  <div className="px-4 ">
    <div className="relative h-[68px] w-full">
      <div className="absolute z-10 inset-0 bg-[#242d35] opacity-[0.5] w-[133px] h-[133px] rounded-full -top-full" />
      <div className="absolute z-20 left-1/11 -top-1/6">
        <input
          disabled={isSubmitting}
          type="file"
          name="file"
          onChange={handleAvatarChange}
          className="hidden"
          id="idAvatar"
          accept="image/*"
          ref={avatarFileInputRef}
        />
        <label htmlFor="idAvatar" className="cursor-pointer">
          <Camera />
        </label>
      </div>
      {previewAvatar && (
        <NextImage
          src={previewAvatar}
          alt=""
          width={0}
          height={0}
          className="w-[133px] h-[133px] absolute inset-0 rounded-full -top-full"
        />
      )}
    </div>
  </div>
);

export default EditAvatar;
