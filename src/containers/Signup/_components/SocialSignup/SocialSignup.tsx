import { Button } from "@/components/ui/button";
import { setLocalStorage } from "@/ultils";
import Link from "next/link";
import React from "react";

function SocialSignup() {
  return (
    <div className=" mx-auto flex flex-col justify-center items-center gap-6 w-full h-full">
      <div className="flex flex-col gap-6 w-[364px] px-8">
        <h1 className="mt-4 text-[31px] font-bold w-full">Join X today</h1>

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
        <Button
          onClick={() => setLocalStorage("token", "abc")}
          variant={"outline"}
          className="bg-white transition duration-[0.2s] rounded-4xl font-bold text-black"
        >
          Create account
        </Button>

        <p className="text-[13px] text-icon-default">
          By registering, you agree to{" "}
          <Link className="text-mark-share" href={"#"}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="text-mark-share" href={"#"}>
            Privacy Policy
          </Link>
          , including{" "}
          <Link className="text-mark-share" href={"#"}>
            Use of Cookies
          </Link>
          .
        </p>
        <p className="text-[13px] text-icon-default">
          Already have an account?{" "}
          <Link className="text-mark-share" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SocialSignup;
