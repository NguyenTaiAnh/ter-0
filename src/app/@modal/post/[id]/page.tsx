import { PostContainer } from "@/containers/Post";
import { ModalLayout } from "@/layouts/ModalLayout";
import React from "react";

function page() {
  return (
    <ModalLayout>
      <PostContainer />
    </ModalLayout>
  );
}

export default page;
