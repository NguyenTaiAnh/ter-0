import { Footer } from "@/components/Footer";
import { AuthContainer } from "@/containers/Auth";
import { AuthLayout } from "@/layouts/AuthLayout";
import React from "react";

interface AuthRootLayoutProps {
  children: React.ReactNode;
}
function AuthRootLayout({ children }: AuthRootLayoutProps) {
  return (
    <AuthLayout>
      {children}
      <AuthContainer />
      <Footer />
    </AuthLayout>
  );
}

export default AuthRootLayout;
