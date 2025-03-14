import { Footer } from "@/components/Footer";
import { AuthContainer } from "@/containers/Auth";
import HomeContainer from "@/containers/Home/HomeContainer";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { MainLayout } from "@/layouts/MainLayout";
import { cookies } from "next/headers";

export default async function page() {
  const cookieStore = await cookies();
  const isAuth = cookieStore.get("user")?.value != "" ? true : false;
  return isAuth ? (
    <MainLayout>
      <main className="border-x-[1px] flex-1 border-gray-border w-full min-w-0 max-w-[600px]">
        <HomeContainer />
      </main>
    </MainLayout>
  ) : (
    <AuthLayout>
      <AuthContainer />
      <Footer />
    </AuthLayout>
  );
}
