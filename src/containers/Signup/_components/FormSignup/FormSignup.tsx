import { CustomField } from "@/components/CustomField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function FormSignup() {
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
    <div className="px-20 mx-auto flex flex-col  gap-6 w-full h-full">
      <h1 className="mt-4 text-[31px] font-bold w-full">Create your account</h1>

      <Form {...form}>
        <form
          onSubmit={(e: any) => handleSubmit(form.getValues(), e)}
          className=" flex flex-col justify-between h-full"
        >
          <div className="space-y-8">
            <CustomField
              placeholder="Name"
              field={"name"}
              form={form}
              showLabel={false}
              type="text"
              key={"name"}
              className="h-[56px] w-full px-2 border-[1px] border-gray-border rounded-sm"
            />
            <CustomField
              placeholder="Email"
              field={"email"}
              form={form}
              showLabel={false}
              type="email"
              key={"email"}
              className="h-[56px] w-full px-2 border-[1px] border-gray-border rounded-sm"
            />

            <p className="text-[15px] font-bold mb-2">Ngày sinh</p>
            <p className="text-[14px] text-icon-default leading-4">
              Điều này sẽ không được hiển thị công khai. Xác nhận tuổi của bạn,
              ngay cả khi tài khoản này dành cho doanh nghiệp, thú cưng hoặc thứ
              gì khác.
            </p>
            <CustomField
              placeholder="BirthDay"
              field={"birthDate"}
              form={form}
              showLabel={false}
              type="date"
              key={"birthDate"}
              className="h-[56px] w-full px-2 border-[1px] border-gray-border rounded-sm"
            />
          </div>
          <div className="h-[100px] justify-center items-center flex">
            <Button
              type="submit"
              className="w-full h-[50px] bg-gray-line hover:bg-hover-post-btn text-btn-text-post font-bold text-[17px] rounded-4xl"
            >
              Continue
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default FormSignup;
