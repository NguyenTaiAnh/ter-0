import { Footer } from "@/components/Footer";
import { AuthContainer } from "@/containers/Auth";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";

export default function Home() {
  return (
    <AuthLayout>
      <AuthContainer />
      <Footer />
    </AuthLayout>
  );
}
