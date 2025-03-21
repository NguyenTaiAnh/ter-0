import { authApi } from "@/apis/auth.api";
import { CustomField } from "@/components/CustomField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { authStore } from "@/stores/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCookie } from "nookies";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface FormLoginProps {
  email: string;
}
function FormLogin({ email }: FormLoginProps) {
    const {setUser} = authStore()
  const [isShowHide, setIsShowHide] = React.useState<boolean>(false);
  const [isLoad, setIsLoad] = React.useState<boolean>(false);
  const router = useRouter();
  const formSchema = z.object({
    email: z.string().min(2, "Tên quá ngắn"),
    password: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange", 
    defaultValues: {
      email: email,
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsLoad(true);
    try {
      const res: any = await authApi.signIn(values.email, values.password);
      console.log({res})
      const user = await authApi.getCurrentUser(res);
      // Lấy idToken từ người dùng đã đăng nhập
      console.log({ user });
      setUser({...user,userId:res.uid})
      setCookie({res:{key:'abc'}},"currentUser", JSON.stringify({...user,userId:res.uid}))
      setIsLoad(false);
      router.push("/home");
    } catch (error: any) {
      setIsLoad(false);

      console.log("Login failed:", error?.message);
      // Hiển thị lỗi cụ thể
      if (error.code === "auth/invalid-credential") {
        alert("Sai email hoặc mật khẩu");
      }
    }
  }
  return (
    <section className="px-20 h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-between"
        >
          <div className="space-y-8 h-[453px]">
            <h1 className="my-5 text-[31px]">Enter your password</h1>

            <CustomField
              disabled={true}
              placeholder="Email"
              field={"email"}
              form={form}
              showLabel={false}
              type="text"
              key={"email"}
              className="h-[56px] w-full px-2 bg-disable-input text-gray-border rounded-sm"
            />
            <div>
              <div className="relative">
                <CustomField
                  placeholder="Password"
                  field={"password"}
                  form={form}
                  showLabel={false}
                  type={isShowHide ? "text" : "password"}
                  key={"password"}
                  className="h-[56px] w-full px-2 border-[1px] focus:placeholder:text-mark-share focus:!border-mark-share focus-visible:outline-0 border-gray-border rounded-sm"
                />
                <Button
                  type="button"
                  onClick={() => setIsShowHide(!isShowHide)}
                  className="hover:bg-transparent bg-transparent absolute top-[20%] right-0"
                >
                  {isShowHide ? <Eye /> : <EyeOff />}
                </Button>
              </div>
              <span className="text-[13px] text-mark-share">
                Forgot password
              </span>
            </div>
          </div>
          <div className="w-full h-[144px]">
            <Button
              disabled={form.getValues().password == '' ? true : false}
              type="submit"
              className="w-[440px] px-[32px] h-[52px] my-[24px] bg-[#787a7a] hover:bg-[#787a7a] text-black font-bold text-[17px] rounded-4xl"
            >
              Submit
              {isLoad && <Loader className="animate-spin" />}
            </Button>
            <p className="text-[15px] text-icon-default">
              No account?{" "}
              <Link href={"/signup"} className="text-mark-share">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </section>
  );
}

export default FormLogin;
