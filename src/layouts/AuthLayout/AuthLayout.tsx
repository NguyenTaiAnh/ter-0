import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="relative flex flex-col h-full">{children}</div>;
}

export default AuthLayout;
