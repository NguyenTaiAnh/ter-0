"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const EditProfileHeader = ({
  router,
  isSubmitting,
}: {
  router: ReturnType<typeof useRouter>;
  isSubmitting: boolean;
}) => (
  <div className="flex relative h-[53px] justify-between px-4 items-center">
    <div className="w-[56px]">
      <X
        className="text-white cursor-pointer"
        size={20}
        onClick={() => router.back()}
      />
    </div>
    <div className="w-full flex-1">
      <p className="text-foreground text-[20px] font-bold">Edit profile</p>
    </div>
    <div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="px-5 py-2 bg-white font-bold text-black rounded-4xl hover:bg-gray-200"
      >
        Save
      </Button>
    </div>
  </div>
);
export default EditProfileHeader;
