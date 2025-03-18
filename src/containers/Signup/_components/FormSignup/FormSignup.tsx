import { authApi } from "@/apis/auth.api";
import { CustomField } from "@/components/CustomField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { defaultValue } from "@/mocks/db";
import { IUser } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function FormSignup() {
  const [isShowHide, setIsShowHide] = React.useState<boolean>(false);
  const [isLoad, setIsLoad] = React.useState<boolean>(false);
  const router = useRouter();
  const userSchema = z.object({
    username: z.string().min(2, "Name is too short"),
    email: z.string().email("Email not valid"),
    birthDate: z.string().optional(),
    password: z.string().min(5, "Minimum 6 characters"),
  });

  // const userFields = [
  //   { name: "name", label: "Name", type: "text" },
  //   { name: "email", label: "Email", type: "email" },
  //   { name: "birthDate", label: "Birth Date", type: "date" },
  // ];
  const handleSubmit = async (values: z.infer<typeof userSchema>, e: Event) => {
    e.preventDefault();
    console.log("Data:", values);
    setIsLoad(true);
    console.log({ form: form.formState.isValid });
    try {
      const param: IUser = {
        email: values.email,
        username: values.username,
        password: values.password,
        birthDay: values.birthDate
          ? values.birthDate?.toString()
          : new Date().toString(),
        ...defaultValue,
      };
      await authApi.signUp(values.email, values.password, param);
      setIsLoad(false);
      form.reset();
      router.push("/home");
    } catch (error: any) {
      console.log({ error });
      setIsLoad(false);
    }
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
              placeholder="Username"
              field={"username"}
              form={form}
              showLabel={false}
              type="text"
              key={"username"}
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

            <p className="text-[15px] font-bold mb-2">Date of birth</p>
            <p className="text-[14px] text-icon-default leading-4">
              This will not be shown publicly. Confirm your age, even if the
              account is for a business, pet, or something else.
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
              disabled={isLoad || !form.formState.isValid}
              type="submit"
              className="w-full h-[50px] bg-gray-line hover:bg-hover-post-btn text-btn-text-post font-bold text-[17px] rounded-4xl"
            >
              Continue
              {isLoad && <Loader className="animate-spin" />}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default FormSignup;
