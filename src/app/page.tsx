import { Footer } from "@/components/Footer";
import { AuthContainer } from "@/containers/Auth";
import HomeContainer from "@/containers/Home/HomeContainer";
// import HomeContainer from "@/containers/Home/HomeContainer";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { MainLayout } from "@/layouts/MainLayout";
import { getLocalStorage } from "@/ultils";
// import { MainLayout } from "@/layouts/MainLayout";

export default function Home() {
  const isLogin = getLocalStorage("token");
  console.log(getLocalStorage("token"))
  console.log({isLogin})
  return isLogin ? (
    <MainLayout>
      <main className="border-x-[1px] relative min-w-0 border-gray-border smd:max-w-[600px]">
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
