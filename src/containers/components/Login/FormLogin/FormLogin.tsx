import { authApi } from "@/apis/auth.api";
import { CustomField } from "@/components/CustomField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function FormLogin() {
  const [isShowHide, setIsShowHide] = React.useState<boolean>(false);
  const router= useRouter()
  const formSchema = z.object({
    email: z.string().min(2, "Tên quá ngắn"),
    password: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const user: any = await authApi.signIn(values.email, values.password);
      // Lấy idToken từ người dùng đã đăng nhập
      console.log({ user });

    
      router.push('/home')
    } catch (error: any) {
      console.log("Login failed:", error?.message);
      // Hiển thị lỗi cụ thể
      if (error.code === "auth/invalid-credential") {
        alert("Sai email hoặc mật khẩu");
      }
    }
  }
  return (
    <section className="px-20">
      <h1 className="my-5 text-[31px]">Enter your password</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomField
            placeholder="Email"
            field={"email"}
            form={form}
            showLabel={false}
            type="text"
            key={"email"}
            className="h-[56px] w-full px-2 border-[1px] border-gray-border rounded-sm"
          />
          <div className="relative">
            <CustomField
              placeholder="Password"
              field={"password"}
              form={form}
              showLabel={false}
              type={isShowHide ? "text" : "password"}
              key={"password"}
              className="h-[56px] w-full px-2 border-[1px] border-gray-border rounded-sm"
            />
            <Button
              type="button"
              onClick={() => setIsShowHide(!isShowHide)}
              className="hover:bg-transparent bg-transparent absolute top-[20%] right-0"
            >
              {isShowHide ? <Eye /> : <EyeOff />}
            </Button>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}

export default FormLogin;
