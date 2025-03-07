import HomeContainer from "@/containers/Home/HomeContainer";
import { MainLayout } from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main className="border-x-[1px] relative min-w-0 border-gray-border smd:max-w-[600px]">
        <HomeContainer/>
      </main>
    </MainLayout>
  );
}
