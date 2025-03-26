import { PostContainer } from "@/containers/Post";
import { ModalLayout } from "@/layouts/ModalLayout";
import { getUserSSR } from "@/lib/services/auth.service";
import React from "react";

async function page() {
  const res = await getUserSSR();
  const currentUser = await res.json();

  return (
    <ModalLayout>
      <PostContainer currentUser={currentUser}/>
    </ModalLayout>
  );
}

export default page;
