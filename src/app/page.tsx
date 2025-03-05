import HomeContainer from "@/containers/Home/HomeContainer";
import { MainLayout } from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main className="border-x-[1px] flex-1 border-gray-border smd:max-w-[600px] min-w-0">
        <HomeContainer/>
      </main>
    </MainLayout>
  );
}
