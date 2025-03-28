"use client"
import useChangeOverflow from "@/hooks/useChangeOverflow";
import React from "react";
interface ModalLayoutProps {
  children: React.ReactNode;
}
const ModalLayout = ({ children }: ModalLayoutProps) => {
  useChangeOverflow();
  return (
    <section className="absolute inset-0 z-50 flex items-center justify-center w-full h-screen">
      <div className="absolute inset-0 bg-[#242d35] opacity-[0.5] " />
      {/* <div className="absolute top-0 px-4 flex flex-col z-10 bg-black text-white rounded-xl w-full h-full  max-w-full modal-md:max-w-[600px] modal-md:top-[6%] modal-md:h-fit"> */}
        {children}
      {/* </div> */}
    </section>
  );
};

export default ModalLayout;
