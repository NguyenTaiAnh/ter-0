"use client"
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const LoginContainer = () => {
  const router = useRouter()

  return (
    <section className="absolute top-0 left-0 w-full h-full bg-[##80808080]  backdrop-blur-[5px] ">
      <div className="shadow-2xl p-5 flex flex-col justify-center items-center  rounded-3xl absolute top-1/2 left-1/2 bottom-0 right-0  bg-black  -translate-x-1/2 -translate-y-1/2">
        <div className="">
          <Button onClick={()=>router.back()}>
            <X />
          </Button>
          <Image
            src={"icons/logo.svg"}
            alt=""
            width={0}
            height={0}
            className="w-[28px] h-[28px]"
          />
        </div>
        <h1>Sign in to X</h1>
        <div className="flex flex-col gap-2.5 w-full">
          <Button
            variant={"outline"}
            className="rounded-4xl transition duration-[0.2s] bg-white text-black"
          >
            Sign up with Google
          </Button>
          <Button
            variant={"outline"}
            className="bg-white transition duration-[0.2s] rounded-4xl font-bold text-black"
          >
            Sign up with Apple
          </Button>
        </div>
        <div className="my-1">
          <p
            className=" relative text-center before:content-[''] before:w-[45%] before:h-[1px] before:absolute before:top-[50%] before:left-0 before:bg-gray-line 
             after:content-[''] after:w-[45%] after:h-[1px] after:absolute after:top-[50%] after:right-0 after:bg-gray-line
            "
          >
            or
          </p>
        </div>
        <div>
          <input type="text" placeholder="Phone, email, or usernames" />
        </div>
        <div className="flex flex-col gap-4 ">
          <Button
            variant={"outline"}
            className="rounded-4xl transition duration-[0.2s] bg-white text-black"
          >
            Next
          </Button>
          <Button
            variant={"outline"}
            className="rounded-4xl border-0 transition duration-[0.2s] bg-black text-white"
          >
            Forgot password
          </Button>
        </div>

        <p>
          Don&apos;t have an account?{" "}
          <span className="text-mark-share">Sign up</span>
        </p>
      </div>
    </section>
  );
};

export default LoginContainer;
