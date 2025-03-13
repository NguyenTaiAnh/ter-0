"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { setCookie } from "nookies";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { UserLogin } from "@/mocks/db";

const LoginContainer = () => {
  const router = useRouter();
   const pathname =usePathname();
    if (!pathname.includes("/login")) {
      return null;
    }
  const handleLogin = () => {
    router.push("/home");
    const expires = new Date(Date.now() + 1 + 1000 * 60 * 60 * 24 * 365); // 365 days
    setCookie(null, "user", JSON.stringify(UserLogin), {
      expires,
    });
  }
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="absolute inset-0 bg-[#242d35] opacity-[0.5] " />
      <div className="relative flex flex-col z-10 bg-black text-white rounded-xl w-full  max-w-full h-full modal-md:max-w-[600px] modal-md:h-[650px]">
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

        <div className="px-8 mx-auto pb-12 flex flex-col  gap-6 w-[364px] justify-center h-full">
          <h1 className="mt-4 text-[31px] font-bold w-full">Sign in to X</h1>
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
            <input
              type="text"
              placeholder="Phone, email, or usernames..."
              className="h-[56px] w-full px-2 border-[1px] rounded-md"
            />
          </div>
          <div className="flex flex-col gap-4 ">
            <Button
              onClick={() => handleLogin()}
              variant={"outline"}
              className="rounded-4xl transition duration-[0.2s] bg-white text-black"
            >
              Next
            </Button>
            <Button
              variant={"outline"}
              className="rounded-4xl  border-white transition duration-[0.2s] bg-black text-white"
            >
              Forgot password
            </Button>
          </div>

          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={"/signup?input_flow_data=requested_variant"}
              className="text-mark-share"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginContainer;
