"use client"
import { Image } from "@/components/Image";

import React from "react";
import { ProfileInfo } from "../components/Profile/ProfileInfo";
import { ProfileTabs } from "../components/Profile/ProfileTabs";
import { HeaderProfile } from "../components/Profile/HeaderProfile";
import { useStore } from "@/stores";

function ProfileContainer() {
  const {user} = useStore()
  console.log({ProfileContainer:user})
  return (
    <section>
      <HeaderProfile currentUser={user} />
      <div className="w-full h-[200px]">
        {user && user.banner_url && <Image
          path={user.banner_url}
          alt="banner"
          w={0}
          h={0}
          className="w-full h-[200px]"
        />}
      </div>
      <ProfileInfo currentUser={user} />
      <ProfileTabs />
      
    </section>
  );
}

export default ProfileContainer;
