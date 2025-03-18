import { SignupContainer } from "@/containers/Signup";
import React, { Suspense } from "react";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignupContainer />
    </Suspense>
  );
}

export default page;
