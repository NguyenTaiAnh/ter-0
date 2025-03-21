"use client";
import { Navigation } from "@/components/Navigation";
import { tabsProfile } from "@/constants/tabs.const";
import { usePostByUserId } from "@/hooks";
import { getLocalStorage } from "@/ultils";
import React from "react";

function ProfileTabs() {
  const currentUser = getLocalStorage("currentUser");
  const {
    data: posts,
    isLoading,
    isFetching,
  } = usePostByUserId(currentUser?.userId);
  // console.log({ currentUser,posts });
  return (
    <div>
      <Navigation
        tabs={tabsProfile}
        posts={posts}
        isLoading={isLoading || isFetching}
      />
    </div>
  );
}

export default ProfileTabs;
