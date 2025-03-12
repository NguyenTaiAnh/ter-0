import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AuthContainer() {
  return (
    <main className="grid grid-cols-2 relative  w-full h-screen justify-center auth-md:items-center p-4">
      <div className="  hidden justify-center items-center auth-md:flex">
        <Image
          src={"/icons/logo.svg"}
          alt="logo"
          width={0}
          height={0}
          className="w-[250px] h-[250px]"
        ></Image>
      </div>
      <div className="auth-md:grid-cols-1 p-5 max-[1015px]:w-[528px]">
        <div className="auth-md:hidden auth-sm:mb-[48px]">
          <Image
            src={"/icons/logo.svg"}
            alt="logo"
            width={0}
            height={0}
            className="w-[28px] h-[28px]"
          ></Image>
        </div>
        <h1 className=" text-[40px] xsm:text-[84px] font-extrabold max-[1015px]:my-[30px]">
          Happening now
        </h1>
        <h3 className=" text-[23px] xsm:text-[41px] font-extrabold mb-[32px]">
          Join today.
        </h3>
        <div className="max-w-[300px]">
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
          <Link
            href={"/signup"}
            className="rounded-4xl flex justify-center items-center w-[300px] h-[38px] transition duration-[0.2s] bg-btn-subscribe hover:bg-hover-btn hover:text-white font-bold mb-2 outline-none border-0"
          >
            Create account
          </Link>
          <p className="text-text-small text-[11px] mb-5">
            By signing up, you agree to the{" "}
            <span className="text-mark-share">Terms of Service</span> and{" "}
            <span className="text-mark-share">Privacy Policy</span>, including{" "}
            <span className="text-mark-share">Cookie Use</span>
          </p>

          <p className="mt-10 mb-5">Already have an account?</p>
          <Link
            href={"/login"}
            className="bg-white flex justify-center items-center w-[300px] h-[38px] rounded-4xl font-bold border-0 hover:bg-hover-opacity hover:text-mark-share text-mark-share mb-2 transition duration-[0.2s]"
          >
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}

export default AuthContainer;
