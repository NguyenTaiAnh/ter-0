import { PostContainer } from "@/containers/Post";
import { ModalLayout } from "@/layouts/ModalLayout";
import React from "react";

async function page() {
  return (
    <ModalLayout>
      <PostContainer />
    </ModalLayout>
  );
}

export default page;
