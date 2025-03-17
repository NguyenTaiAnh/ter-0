import { Image } from "@/components/Image";

import React from "react";
import { ProfileInfo } from "../components/Profile/ProfileInfo";
import { ProfileTabs } from "../components/Profile/ProfileTabs";
import { HeaderProfile } from "../components/Profile/HeaderProfile";

function ProfileContainer() {
  return (
    <section>
      <HeaderProfile />
      <div className="w-full h-[200px]">
        <Image
          path="general/banner.jpg"
          alt="banner"
          w={0}
          h={0}
          className="w-full h-[200px]"
        />
      </div>
      <ProfileInfo />
      <ProfileTabs />
      
    </section>
  );
}

export default ProfileContainer;
