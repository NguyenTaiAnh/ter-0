import { Image } from "@/components/Image";
import React from "react";
import NextImage from "next/image";
import { uploadImage } from "./_actions";
import { EditorImageType } from "@/types/editor-image.type";
import { Loader } from "lucide-react";
// import { cmtApi } from "@/apis/cmt.api";
// import { IRequestComment, IRequestPost } from "@/types/post.type";
import {  defaultValuePost } from "@/mocks/db";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsApi } from "@/apis/posts.api";
import { QueryKeys } from "@/constants/queryKeys.const";
import { IRequestPost } from "@/types/post.type";

interface PostUploadProp{
  currentUser:any
}
const PostUpload:React.FC<PostUploadProp> = ({currentUser}) => {
  console.log({ currentUser });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [typeMedia,setTypeMedia] = React.useState<string>('');
  const [media, setMedia] = React.useState<File | null>(null);
  const [desc, setDesc] = React.useState<string>("");
  const [isEditorOpen, setIsEditorOpen] = React.useState<boolean>(false);
  const [settings, setSettings] = React.useState<{
    type: EditorImageType;
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });
  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log({ e: e.target.files });
    if (e.target.files && e.target.files[0]) {
      setTypeMedia(e.target.files[0].type)
      setMedia(e.target.files[0]);
    }
  };
  const previewURL = media ? URL.createObjectURL(media) : null;
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (requestPost:IRequestPost) => postsApi.create(requestPost),
    onSuccess:(res)=>{
      console.log({dataPostCreate:res})
      queryClient.refetchQueries({
        queryKey:[QueryKeys.POSTS],
        type:'active'
      })
    }
  });
  const handleUpload = async (formData: FormData) => {
    if (desc == "" && !media) return;
    setIsLoading(true)
    // for (const value of formData.values()) {
    //   console.log(value);
    // }
    // console.log({ formData: formData.values() });
    try {
      const media_url = await uploadImage(formData, settings);
      console.log({ media_url });

      const requestPost: IRequestPost = {
        content: desc,
        media_url: media_url?.toString() || '',
        user_id: currentUser.userId,
        media_type: typeMedia,
        ...defaultValuePost,
      };
      console.log({ requestPost });
      mutate(requestPost)
      // console.log({ postId });
      // const param: IRequestComment = {
      //   user_id: currentUser.userId,
      //   content: "test check 1 2",
      //   createdAt: createdAt.toString(),
      //   updateAt: updateAt.toString(),
      // };
      // const resCmt = await cmtApi.createCmt(postId?.toString() || "", param);
      // console.log({resCmt})
      setMedia(null);
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setMedia(null);
      setIsLoading(false);
    }finally{
      setIsLoading(false)
    }
  };
  return (
    <form
      className="p-4 flex gap-4 border-b-[1px] border-gray-border"
      action={(formData) => handleUpload(formData)}
    >
      {/* AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="general/avatar.jpg" alt="" w={100} h={100} tr={true} />
      </div>
      {/* OTHERS */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          onChange={(e) => setDesc(e.target.value)}
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        {/* PREVIEW IMAGE */}
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewURL}
              alt=""
              width={600}
              height={600}
              // className={`w-full ${
              //   settings.type === "original"
              //     ? "h-full object-contain"
              //     : settings.type === "square"
              //     ? "aspect-square object-cover"
              //     : "aspect-video object-cover"
              // }`}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {media?.type.includes("video") && previewURL && (
          <div className="relative">
            <video src={previewURL} controls />
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => setMedia(null)}
            >
              X
            </div>
          </div>
        )}
        {/* {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )} */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button
            disabled={ desc == "" && !media || isLoading}
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
