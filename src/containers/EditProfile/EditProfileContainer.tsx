"use client"
import { Button } from "@/components/ui/button";
import { IUser } from "@/types/user";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface EditProfileContainerProps {
  currentUser: IUser;
}
const EditProfileContainer: React.FC<EditProfileContainerProps> = ({
  currentUser,
}) => {
    const router = useRouter();
  console.log(currentUser);
  return (
    <div className="relative flex flex-col z-10 bg-black text-white rounded-xl w-full  max-w-full h-full modal-md:max-w-[600px] modal-md:h-[650px]">
        <div className="flex relative h-[53px]">
          <div className="absolute inset-0">
            <Button className="" onClick={()=>router.back()} variant={"link"}>
              <X className="text-white" />
            </Button>
          </div>
          <div className="flex-1  flex justify-center items-center">
            <Image
              src={"icons/logo.svg"}
              alt=""
              width={0}
              height={0}
              className="w-[28px]  h-[28px]"
            />
          </div>
        </div>

        {/* content */}
        {/* {isNext ? <FormLogin email={email} /> : <MainLogin email={email} setEmail={setEmail} setIsNext={setIsNext} />} */}
      </div>
  );
};

export default EditProfileContainer;
