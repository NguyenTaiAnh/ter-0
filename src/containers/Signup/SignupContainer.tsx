"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FormSignup } from "./_components/FormSignup";
import { SocialSignup } from "./_components/SocialSignup";

const SignupContainer = () => {
  const router = useRouter();
  const search = useSearchParams();
  const isSocial = search.get("input_flow_data") ? true : false;
  console.log({ isSocial });
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="absolute inset-0 bg-[#242d35] opacity-[0.5] " />
      <div className="relative flex flex-col z-10 bg-black text-white rounded-xl w-full max-w-full h-full modal-md:max-w-[600px] modal-md:h-[650px]">
        <div className="flex relative h-[53px]">
          <div className="absolute inset-0">
            <Button
              onClick={() => router.push("/")}
              className=""
              variant={"link"}
            >
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
        {isSocial ? <SocialSignup /> : <FormSignup />}
      </div>
    </section>
  );
};

export default SignupContainer;
