import { Image } from "@/components/Image";
import { HeaderProfile } from "@/components/Profile/HeaderProfile";
import React from "react";

function ProfileContainer() {
  return (
    <section>
      <HeaderProfile />
      <div className="w-full h-[200px]">
        <Image
          path="general/cover.jpg"
          alt="banner"
          w={0}
          h={0}
          className="w-full h-[200px]"
        />
      </div>
    </section>
  );
}

export default ProfileContainer;
