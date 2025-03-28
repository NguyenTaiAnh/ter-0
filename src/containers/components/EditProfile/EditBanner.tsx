"use client";

import NextImage from "next/image";
import { Camera } from "lucide-react";

 const EditBanner = ({
  previewBanner,
  handleBannerChange,
  isSubmitting,
  bannerFileInputRef
}: {
  previewBanner: string | null;
  handleBannerChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSubmitting: boolean;
  bannerFileInputRef: React.RefObject<HTMLInputElement> | null;
}) => (
  <div className="w-full h-[200px] relative">
    <div className="absolute z-10 inset-0 bg-[#242d35] opacity-[0.5] w-[133px] h-[133px] rounded-full -top-full" />
    <div className="absolute z-20 left-1/2 top-1/2">
      <input
        disabled={isSubmitting}
        type="file"
        name="file"
        onChange={handleBannerChange}
        className="hidden"
        id="idBanner"
        accept="image/*"
        ref={bannerFileInputRef}
      />
      <label htmlFor="idBanner" className="cursor-pointer">
        <Camera />
      </label>
    </div>
    {previewBanner && (
      <NextImage
        src={previewBanner}
        alt="Banner preview"
        fill
        className="object-cover"
      />
    )}
  </div>
);

export default EditBanner;