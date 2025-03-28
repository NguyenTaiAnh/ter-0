"use client";
import React from "react";
import NextImage from "next/image";
import { Loader } from "lucide-react";
import { AvatarCustom } from "@/components/Avatar";
import ImageEditor from "./ImageEditor";
import { Button } from "@/components/ui/button";
import { usePostUploadLogic } from "@/hooks/usePostUploadLogic";
import { PostAction } from "../PostAction";
import TextareaAutosize from "react-textarea-autosize";
import { IUser } from "@/types/user";
import { useParams } from "next/navigation";
import { UseGetPostDetail } from "@/hooks";

interface PostUploadModalProp {
  currentUser: IUser | null;
}
const PostUploadModal: React.FC<PostUploadModalProp> = ({ currentUser }) => {
  const param = useParams();
  const { data, isLoading: isLoadingPost } = UseGetPostDetail(
    param?.id?.toString() || ""
  );
  console.log({ data,isLoadingPost });
  // const postDetail: any = React.useMemo(
  //   () => ({ ...data, postId: param.id?.toString() || "" }),
  //   [data]
  // );
  let postDetail:any
  if(data){
    postDetail= { ...data, postId: param.id?.toString() || "" }
  }else postDetail = null
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
    setTypeMedia,
    setValue,
    watchingDesc,
  } = usePostUploadLogic(postDetail);

  React.useEffect(() => {
    if (data) {
      setTypeMedia(data?.media_type || '');
      setValue("desc", data.content);
      setSettings({ type: data?.shape, sensitive: false });
      fetch(process.env.NEXT_PUBLIC_URL_ENDPOINT + data.media_url)
        .then((res) => res.blob())
        .then((myBlob) => {
          const myFile = new File([myBlob], "image.jpeg", {
            type: myBlob.type,
          });
          setMedia(myFile);
        });
    }
  }, [data]);

  return (
    <form
      className="p-4 flex gap-4 max-h-[80vh]"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <AvatarCustom
          path={currentUser?.avatar_url || ""}
          username={currentUser?.username.slice(0, 2)||''}
          className="w-full h-full"
        />
      </div>
      {/* OTHERS */}
      <div className="flex-1 flex flex-col gap-4 max-h-[80vh]">
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
              type="button"
              disabled={isLoading}
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </Button>
            <Button
              type="button"
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
            <video src={previewURL} controls className="max-h-[50vh]" />
            <Button
              type="button"
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
            nameIdFIle="modal"
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
  );
};

export default React.memo(PostUploadModal);
