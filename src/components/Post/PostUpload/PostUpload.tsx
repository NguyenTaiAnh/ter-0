"use client";
import React from "react";
import NextImage from "next/image";
import { Loader } from "lucide-react";
import { AvatarCustom } from "@/components/Avatar";
import { getLocalStorage } from "@/ultils";
import ImageEditor from "./ImageEditor";
import { Button } from "@/components/ui/button";
import { usePostUploadLogic } from "@/hooks/usePostUploadLogic";
import { PostAction } from "../PostAction";
import TextareaAutosize from 'react-textarea-autosize';

interface PostUploadProp {}
const PostUpload: React.FC<PostUploadProp> = ({}) => {
  const currentUser = getLocalStorage("currentUser");
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
  } = usePostUploadLogic();

  return (
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
        {/* <input
          disabled={isLoading}
          // value={desc}
          // onChange={(e) => setDesc(e.target.value)}
          {...register("desc")}
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        /> */}

        <TextareaAutosize
          disabled={isLoading}
          {...register("desc")}
          placeholder="What is happening?!"
          name="desc"
          className="bg-transparent outline-none placeholder-text-textGray text-xl max-h-[60vh]"
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
          <PostAction handleMediaChange={handleMediaChange} isLoading={isLoading} nameIdFIle="file" register={register} />
          <button
            disabled={isLoading || (!watchingDesc && !media)}
            className="disabled:bg-gray-border flex bg-white text-black font-bold rounded-full py-2 px-4"
          >
            Post {isLoading && <Loader className="animate-spin" />}
          </button>
        </div>
      </div>
    </form>
  );
};

export default React.memo(PostUpload);
