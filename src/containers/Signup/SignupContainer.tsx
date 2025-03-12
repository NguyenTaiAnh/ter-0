"use client";

import { CustomField } from "@/components/CustomField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SignupContainer = () => {
  const router = useRouter();
  const userSchema = z.object({
    name: z.string().min(2, "Tên quá ngắn"),
    email: z.string().email("Email không hợp lệ"),
    birthDate: z.string().optional(),
  });

  // const userFields = [
  //   { name: "name", label: "Name", type: "text" },
  //   { name: "email", label: "Email", type: "email" },
  //   { name: "birthDate", label: "Birth Date", type: "date" },
  // ];
  const handleSubmit = (values: z.infer<typeof userSchema>, e: Event) => {
    e.preventDefault();
    console.log("Data:", values);
  };
  const form = useForm<z.infer<typeof userSchema>>({
    resolver: zodResolver(userSchema),
  });
  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="absolute inset-0 bg-[#242d35] opacity-[0.5] " />
      <div className="relative flex flex-col z-10 bg-black text-white rounded-xl w-full max-w-[600px] h-[650px]">
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

        <div className="px-8 mx-auto pb-12 flex flex-col  gap-6 w-[364px]">
          <h1 className="mt-4 text-[31px] font-bold w-full">
            Create your account
          </h1>

          <Form {...form}>
            <form
              onSubmit={(e: any) => handleSubmit(form.getValues(), e)}
              className="space-y-4 bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <CustomField
                placeholder="Name"
                field={"name"}
                form={form}
                showLabel={false}
                type="text"
                key={"name"}
              />
              <CustomField
                placeholder="Email"
                field={"email"}
                form={form}
                showLabel={false}
                type="email"
                key={"email"}
              />

              <p>Ngày sinh</p>
              <p>
                Điều này sẽ không được hiển thị công khai. Xác nhận tuổi của
                bạn, ngay cả khi tài khoản này dành cho doanh nghiệp, thú cưng
                hoặc thứ gì khác.
              </p>
              <CustomField
                placeholder="BirthDay"
                field={"name"}
                form={form}
                showLabel={false}
                type="date"
                key={"date"}
              />

              <Button type="submit" className="w-full">
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignupContainer;
