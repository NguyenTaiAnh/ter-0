"use client";

import { Button } from "@/components/ui/button";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IUser } from "@/types/user";
import { Loader, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { z } from "zod";
import {
  Form,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/apis/auth.api";
import { uploadImage } from "@/components/Post/PostUpload/_actions";
import { QueryKeys } from "@/constants/queryKeys.const";
import { useStore } from "@/stores";
import { FormInput } from "../components/EditProfile/FormFields/FormInput";
import { EditAvatar, EditBanner } from "../components/EditProfile";
import { FormTextarea } from "../components/EditProfile/FormFields/FormTextarea";

export enum MEDIA {
  AVATAR = "avatar",
  BANNER = "banner",
}
interface EditProfileContainerProps {}
const EditProfileContainer: React.FC<EditProfileContainerProps> = ({}) => {
  const { user, setCurrentUser } = useStore();
  const currentUser = React.useMemo(() => user, [user]);
  console.log({ currentUser });
  const [mediaAvatar, setMediaAvatar] = React.useState<File | null>(null);
  const [mediaBanner, setMediaBanner] = React.useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false);
  const pathName = usePathname();
  const router = useRouter();
  const avatarFileInputRef = React.useRef<HTMLInputElement>(null!);
  const bannerFileInputRef = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (currentUser) {
      setValue("name", currentUser.name);
      setValue("bio", currentUser.bio || "");
      setValue("location", currentUser.location || "");
      setValue("birthDate", currentUser.birthDay || "");
      setValue("website", currentUser.website_url || "");
      fetch(
        process.env.NEXT_PUBLIC_URL_ENDPOINT + (currentUser.avatar_url || "")
      )
        .then((res) => res.blob())
        .then((myBlob) => {
          const avatar = new File(
            [myBlob],
            currentUser.avatar_url || "avatar.jpeg",
            {
              type: myBlob.type,
            }
          );
          setMediaAvatar(avatar);
        });
      fetch(
        process.env.NEXT_PUBLIC_URL_ENDPOINT + (currentUser.banner_url || "")
      )
        .then((res) => res.blob())
        .then((myBlob) => {
          const banner = new File(
            [myBlob],
            currentUser.banner_url || "banner.jpeg",
            {
              type: myBlob.type,
            }
          );
          setMediaBanner(banner);
        });
    }
  }, [currentUser]);

  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    bio: z.string(),
    location: z.string(),
    avatar: z.instanceof(File).optional(),
    banner: z.instanceof(File).optional(),
    birthDate: z.string(),
    website: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      bio: "",
      location: "",
      birthDate: "",
      website: "",
    },
  });
  const { handleSubmit, control, formState, reset, setValue } = form;
  const { isValid, isDirty } = formState;
  const queryClient = useQueryClient();
  console.log({ isValid, isDirty });
  const { mutateAsync } = useMutation({
    mutationFn: (request: IUser) =>
      authApi.updateUser(currentUser?.userId || "", request),
    onSuccess: async (res) => {
      console.log({ onsuc: res });
      reset();
      await queryClient.refetchQueries({
        queryKey: [QueryKeys.USER_ID, currentUser?.userId],
      });
      await queryClient.refetchQueries({
        queryKey: [QueryKeys.POST_USER_ID, currentUser?.userId],
      });

      // const user = await queryClient.refetchQueries({
      //   queryKey: [QueryKeys.USER_ID, currentUser.userId],
      // });

      // console.log({ user });
      // setCookie(
      //   null,
      //   "currentUser",
      //   JSON.stringify({ ...user }),{
      //     path:'/'
      //   }
      // );
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    console.log("Form submitted:", data, mediaAvatar, mediaBanner);
    try {
      let avatarUrl: any = currentUser?.avatar_url;
      let bannerUrl: any = currentUser?.banner_url;
      if (mediaAvatar && mediaAvatar?.name !== currentUser?.avatar_url) {
        console.log("update avatar");
        avatarUrl = await uploadImage(mediaAvatar);
      }
      if (mediaBanner && mediaBanner?.name !== currentUser?.banner_url) {
        console.log("update banner");
        bannerUrl = await uploadImage(mediaBanner);
      }

      const requestParam: any = {
        ...currentUser,
        name: data.name.trim(),
        bio: data.bio.trim(),
        website_url: data.website.trim(),
        avatar_url: avatarUrl,
        banner_url: bannerUrl,
      };
      console.log({ requestParam });
      await mutateAsync(requestParam);
      setCurrentUser(requestParam);
      router.back();
      // mutate(requestParam);
      // Simulate API call
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      // reset();
      // if (avatarFileInputRef.current) avatarFileInputRef.current.value = "";
    } finally {
      setIsSubmitting(false);
    }
  };
  // const handleMediaChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   type: string
  // ) => {
  //   console.log({ e: e.target.files });
  //   if (e.target.files && e.target.files[0]) {
  //     if (type === MEDIA.AVATAR) setMediaAvatar(e.target.files[0]);
  //     if (type === MEDIA.BANNER) setMediaBanner(e.target.files[0]);
  //   }
  // };
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setMediaAvatar(e.target.files[0]);
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setMediaBanner(e.target.files[0]);
  };
  // Kiểm tra điều kiện enable/disable button
  // const isFormValid = isValid && isDirty;
  // const isAnyFieldFilled = Object.values(form.getValues()).some(
  //   (value) => value !== "" && value !== undefined
  // );

  const previewAvatar = mediaAvatar ? URL.createObjectURL(mediaAvatar) : null;
  const previewBanner = mediaBanner ? URL.createObjectURL(mediaBanner) : null;
  if (!pathName.includes("settings/profile")) {
    return null;
  }
  return (
    currentUser && (
      <ModalLayout>
        <div className="relative flex flex-col z-10 bg-black text-white rounded-xl w-full  max-w-full h-full modal-md:max-w-[600px] modal-md:h-[650px] overflow-auto">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="relative">
              <div className="flex relative h-[53px] justify-between px-4 items-center">
                <div className="w-[56px]">
                  <X
                    className="text-white cursor-pointer"
                    size={20}
                    onClick={() => router.push(`/${currentUser?.username}`)}
                  />
                </div>
                <div className="w-full flex-1">
                  <p className="text-foreground text-[20px] font-bold">
                    Edit profile
                  </p>
                </div>
                <div>
                  <Button
                    type="submit"
                    className="px-5 py-2 bg-white font-bold text-black rounded-4xl hover:bg-gray-200"
                  >
                    Save{" "}
                    {isSubmitting && <Loader className="anime animate-spin" />}
                  </Button>
                </div>
              </div>

              <div className="relative ">
                {/* panner */}
                <EditBanner
                  previewBanner={previewBanner}
                  handleBannerChange={handleBannerChange}
                  isSubmitting={isSubmitting}
                  bannerFileInputRef={bannerFileInputRef}
                />
                {/* Avatar */}
                <EditAvatar
                  previewAvatar={previewAvatar}
                  handleAvatarChange={handleAvatarChange}
                  isSubmitting={isSubmitting}
                  avatarFileInputRef={avatarFileInputRef}
                />

                {/* form input */}
                <div className="py-4 px-4 flex flex-col gap-4">
                  <FormInput
                    control={control}
                    name="name"
                    label="Name"
                    isSubmitting={isSubmitting}
                  />
                  <FormTextarea
                    control={control}
                    name="bio"
                    label="Bio"
                    isSubmitting={isSubmitting}
                  />
                  <FormInput
                    control={control}
                    name="website"
                    label="Website"
                    isSubmitting={isSubmitting}
                  />
                </div>
                {/* <Input value={currentUser?.username || ''} name="username" required ></Input>
            <TextareaAutosize value={currentUser?.bio || ''} name="bio" />
            <Input value={currentUser?.website_url || ''} name="website_url" required ></Input> */}
              </div>
            </form>
          </Form>
          {/* content */}
          {/* {isNext ? <FormLogin email={email} /> : <MainLogin email={email} setEmail={setEmail} setIsNext={setIsNext} />} */}
        </div>
      </ModalLayout>
    )
  );
};

export default EditProfileContainer;
