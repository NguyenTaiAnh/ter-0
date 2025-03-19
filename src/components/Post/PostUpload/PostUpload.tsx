import { Image } from "@/components/Image";
import React from "react";
import NextImage from "next/image";
import { uploadPost } from "./_actions";
import { EditorImageType } from "@/types/editor-image.type";

const PostUpload = () => {
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
      setMedia(e.target.files[0]);
    }
  };
  const previewURL = media ? URL.createObjectURL(media) : null;

  const handleUpload = async (formData: FormData) => {
    if (desc == "" && !media) return;
    for (const value of formData.values()) {
      console.log(value);
    }
    console.log({ formData: formData.values() });
    try {
      uploadPost(formData, settings);
      setMedia(null);
    } catch (error) {
      console.log({ error });
      setMedia(null);
    }
  };
  return (
    <form
      className="p-4 flex gap-4"
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
            disabled={desc == "" && !media}
            className="disabled:bg-gray-border bg-white text-black font-bold rounded-full py-2 px-4"
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostUpload;
