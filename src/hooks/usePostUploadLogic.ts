import React from "react";
import { EditorImageType } from "@/types/editor-image.type";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postsApi } from "@/apis/posts.api";
import { QueryKeys } from "@/constants/queryKeys.const";
import { IRequestPost } from "@/types/post.type";
import { defaultValuePost } from "@/mocks/db";
import { getLocalStorage } from "@/ultils";
import { uploadImage } from "@/components/Post/PostUpload/_actions";
import { useForm, useWatch } from "react-hook-form";

interface UsePostUploadLogicProps {
  onCallBack?: () => void;
}

export const usePostUploadLogic = ({ onCallBack }: UsePostUploadLogicProps = {}) => {
  const currentUser = getLocalStorage("currentUser");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [typeMedia, setTypeMedia] = React.useState<string>("");
  const [media, setMedia] = React.useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = React.useState<boolean>(false);
  const [isText, setIsText] = React.useState<boolean>(false);
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
      setTypeMedia(e.target.files[0].type);
      setMedia(e.target.files[0]);
    }
  };
  const { register, handleSubmit, control ,setValue, reset } = useForm();

  React.useEffect(() => {
    setValue("media_url", media);
  }, [media]);

  React.useEffect(() => {
    if(watchingDesc) {
      setIsText(true)
    }
    else {
      setIsText(false)
    }
  }, [isText,control._formValues.desc ]);

  const previewURL = media ? URL.createObjectURL(media) : null;
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (requestPost: IRequestPost) => postsApi.create(requestPost),
    onSuccess: (res) => {
      console.log({ dataPostCreate: res });
      queryClient.refetchQueries({
        queryKey: [QueryKeys.POSTS],
        type: "active",
      });
      if(onCallBack){
        onCallBack()
      }
    },
  });

  // const watchingDesc = watch("desc");
  // const watchingFile = watch("media_url");
  const watchingDesc = useWatch({control, name: "desc" });
  const watchingFile = useWatch({control, name: "media_url" });
  // console.log("test:", watchingFile);
  // console.log({ watchingDesc, watchingFile });
  const onSubmit = async (data: any) => {
    console.log({ data });

    setIsLoading(true);
    try {
      let media_url: any = "";
      if (media) {
        media_url = await uploadImage(media, settings);
      }
       const requestPost: IRequestPost = {
        content: data.desc,
        media_url: media_url?.toString() || "",
        user_id: currentUser.userId,
        media_type: typeMedia,
        shape: settings.type,
        ...defaultValuePost,
      };
      console.log({ requestPost });
      mutate(requestPost);
      console.log({ media_url });
      setIsLoading(false);
    } catch (error) {
      console.log({ error });
      setIsLoading(false);
    } finally {
      resetValue();
    }
  };
  const resetValue = () => {
    reset();
    setMedia(null);
    setTypeMedia("");
  };


  return React.useMemo(() => ({
    isLoading,
    typeMedia,
    media,
    isEditorOpen,
    settings,
    setSettings,
    handleMediaChange,
    previewURL,
    resetValue,
    setIsEditorOpen,
    setMedia,
    register,
    onSubmit,
    handleSubmit,
    watchingFile,
    watchingDesc
  }), [media,isText]);
};