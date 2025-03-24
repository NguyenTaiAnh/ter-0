"use client";
import { AvatarCustom } from "@/components/Avatar";
import { PostAction } from "@/components/Post/PostAction";
// import { PostChoose } from "@/components/Post/PostChoose";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { usePostUploadLogic } from "@/hooks/usePostUploadLogic";
import { cn, isClient } from "@/lib/utils";
import { getLocalStorage } from "@/ultils";
import {  Loader, X } from "lucide-react";
// import { CirclePower, Loader, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import NextImage from "next/image";
import ImageEditor from "@/components/Post/PostUpload/ImageEditor";

const PostContainer = () => {
  const [render, setRender] = React.useState<boolean>(false);
  const router = useRouter();
  const onSuccessCallback = () => {
    router.back();
  }
  const {
    isLoading,
    media,
    isEditorOpen,
    settings,
    handleMediaChange,
    previewURL,
    setIsEditorOpen,
    setSettings,
    setMedia,
    handleSubmit,
    onSubmit,
    register,
    watchingDesc,
  } = usePostUploadLogic({ onCallBack:onSuccessCallback });
  React.useEffect(() => {
    if (isClient()) setRender(true);
  }, [render]);
  const currentUser = getLocalStorage("currentUser");

  const pathName = usePathname();
  if (pathName != "/post") {
    return null;
  }
  return (
    render && (
      <section className="fixed inset-0 z-50 flex justify-center ">
        <div className="absolute inset-0 bg-[#242d35] opacity-[0.5] " />
        <div className="absolute top-0 px-4 flex flex-col z-10 bg-black text-white rounded-xl w-full  max-w-full modal-md:max-w-[600px] modal-md:top-[6%]">
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
            <form
              className="p-4 flex gap-4 border-b-[1px] border-gray-border"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* AVATAR */}
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <AvatarCustom
                  path={currentUser?.avatar_url}
                  username={currentUser?.username.slice(0, 2)}
                  className="w-full h-full"
                />
              </div>
              {/* OTHERS */}
              <div className="flex-1 flex flex-col gap-4">
                <TextareaAutosize
                  disabled={isLoading}
                  {...register("desc")}
                  placeholder="What is happening?!"
                  name="desc"
                  className={cn('bg-transparent outline-none placeholder-text-textGray text-xl max-h-[60vh]', media && 'max-h-[20vh]')}
                />

                {/* PREVIEW IMAGE */}
                {media?.type.includes("image") && previewURL && (
                  <div className="relative rounded-xl overflow-hidden">
                    <NextImage
                      src={previewURL}
                      alt=""
                      width={600}
                      height={600}
                      className={`w-full ${
                        settings.type === "original"
                          ? "h-full object-contain"
                          : settings.type === "square"
                          ? "aspect-square object-cover"
                          : "aspect-video object-cover"
                      }`}
                    />
                    <Button
                      disabled={isLoading}
                      className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
                      onClick={() => setIsEditorOpen(true)}
                    >
                      Edit
                    </Button>
                    <Button
                      disabled={isLoading}
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                      onClick={() => setMedia(null)}
                    >
                      X
                    </Button>
                  </div>
                )}
                {media?.type.includes("video") && previewURL && (
                  <div className="relative">
                    <video src={previewURL} controls />
                    <Button
                      disabled={isLoading}
                      className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                      onClick={() => setMedia(null)}
                    >
                      X
                    </Button>
                  </div>
                )}
                {isEditorOpen && previewURL && (
                  <ImageEditor
                    onClose={() => setIsEditorOpen(false)}
                    previewURL={previewURL}
                    settings={settings}
                    setSettings={setSettings}
                  />
                )}
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <PostAction
                    handleMediaChange={handleMediaChange}
                    isLoading={isLoading}
                    nameIdFIle="fileModal"
                    register={register}
                  />
                  <button
                    disabled={isLoading || (!watchingDesc && !media)}
                    className="disabled:bg-gray-border flex bg-white text-black font-bold rounded-full py-2 px-4"
                  >
                    Post {isLoading && <Loader className="animate-spin" />}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  );
};

export default PostContainer;
