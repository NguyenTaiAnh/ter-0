import { Button } from "@/components/ui/button";
import { useStore } from "@/stores";
import Link from "next/link";
import React from "react";

interface MainLoginProps{
  setIsNext: (next:boolean) =>void
}
function MainLogin({setIsNext}:MainLoginProps) {
  const { urlPrevious } = useStore();
  const isAuthPage = urlPrevious == "/" ? true : false;

  return (
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
          onClick={() => setIsNext(true)}
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
      {isAuthPage && (
        <p>
          Don&apos;t have an account?{" "}
          <Link
            href={"/signup?input_flow_data=requested_variant"}
            className="text-mark-share"
          >
            Sign up
          </Link>
        </p>
      )}
    </div>
  );
}

export default MainLogin;
