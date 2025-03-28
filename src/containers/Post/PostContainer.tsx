"use client";
// import { PostChoose } from "@/components/Post/PostChoose";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
// import { CirclePower, Loader, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { PostUploadModal } from "@/components/Post/PostUpload";
import { useStore } from "@/stores";

interface PostContainerProps {
}
const PostContainer: React.FC<PostContainerProps> = ({ }) => {
  const {user} = useStore(state => state)
  // const {currentUser} = authStore((state)=>state.user)
  const currentUser = user
  console.log({currentUser})
  const router = useRouter();
  const pathName = usePathname();

  if (!pathName.includes("post")) {
    return null;
  }

  return (
    <section className="absolute top-0 px-4 flex flex-col z-10 bg-black text-white rounded-xl w-full h-full  max-w-full modal-md:max-w-[600px] modal-md:top-[6%] modal-md:h-fit">
      <div className="flex justify-between relative h-[53px]  items-center">
        <div className="">
          <Button
            onClick={() => router.back()}
            className=""
            variant={"link"}
          >
            <X className="text-white" />
          </Button>
        </div>
        <div className="">
          <p className="font-bold text-[14px] text-mark-share">Drafts</p>
        </div>
      </div>
      {/* <div className="relative flex">
            <div className="mr-2">
              <AvatarCustom
                className="w-[40px]  h-[40px]"
                path={currentUser?.avatar_url}
                username={currentUser?.username.slice(0, 2)}
              />
            </div>
            <div className="flex-1 h-[164px] ">
              <PostChoose />
              <div className="h-[120px] py-3">
                <Input
                  placeholder="What is Happening?!"
                  type="text"
                  className="px-0 border-0 outline-0 placeholder:text-text-small focus-visible:border-0 focus-visible:outline-0 text-[20px] text-text-default py-3 focus-visible:ring-0 bg-transparent"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex pb-3 border-b-[1px] border-gray-border items-center gap-2">
              <CirclePower className="font-bold text-[14px] text-mark-share" />
              <p className="font-bold text-[14px] text-mark-share">
                Everyone can reply
              </p>
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <PostAction
                handleMediaChange={handleMediaChange}
                isLoading={isLoading}
                nameIdFIle="file"
                register={register}
              />
              <button
                disabled={isLoading || (!watchingDesc && !media)}
                className="disabled:bg-gray-border flex bg-white text-black font-bold rounded-full py-2 px-4"
              >
                Post {isLoading && <Loader className="animate-spin" />}
              </button>
            </div>
          </div> */}

      <div className="relative">
        <PostUploadModal currentUser={currentUser} />
      </div>
    </section>
  );
};

export default PostContainer;
