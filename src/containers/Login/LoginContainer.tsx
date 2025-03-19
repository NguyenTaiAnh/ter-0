"use client";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { useStore } from "@/stores";
import { MainLogin } from "../components/Login/MainLogin";
import { FormLogin } from "../components/Login/FormLogin";

const LoginContainer = () => {
  const [email, setEmail] = React.useState<string>('anhtest@anh.com')
  const { urlPrevious } = useStore();
  const [isNext, setIsNext] = React.useState<boolean>(false);

  const isAuthPage = urlPrevious == "/" ? true : false;
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    return () => setIsNext(false);
  }, []);

  const handleClose = () => {
    if (isAuthPage) {
      router.push("/");
    } else {
      router.back();
    }
  };
  if (!pathname.includes("/login")) {
    return null;
  }
  // const handleLogin = () => {
  //   router.push("/home");
  //   const expires = new Date(Date.now() + 1 + 1000 * 60 * 60 * 24 * 365); // 365 days
  //   setCookie(null, "user", JSON.stringify(UserLogin), {
  //     expires,
  //   });
  // };
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="absolute inset-0 bg-[#242d35] opacity-[0.5] " />
      <div className="relative flex flex-col z-10 bg-black text-white rounded-xl w-full  max-w-full h-full modal-md:max-w-[600px] modal-md:h-[650px]">
        <div className="flex relative h-[53px]">
          <div className="absolute inset-0">
            <Button onClick={handleClose} className="" variant={"link"}>
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
        {isNext ? <FormLogin email={email} /> : <MainLogin email={email} setEmail={setEmail} setIsNext={setIsNext} />}
      </div>
    </section>
  );
};

export default LoginContainer;
