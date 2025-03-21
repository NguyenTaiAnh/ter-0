import React from "react";
import { PostInteraction } from "../PostInteraction";
import { Image } from "@/components/Image";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { postsApi } from "@/apis/posts.api";
import { QueryKeys } from "@/constants/queryKeys.const";
import { useGetUserById } from "@/hooks";
import { AvatarCustom } from "@/components/Avatar";
// import { Video } from "@/components/Video";
import { urlEndpoint } from "@/app/api/config";

interface PostInfoProp {
  post: any;
  currentUser: any;
}
const PostInfo: React.FC<PostInfoProp> = ({ post, currentUser }) => {
  const { data: user } = useGetUserById(post?.user_id);
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: () => postsApi.delete(post.postId),
    onSuccess: async () => {
      console.log("succses");
      queryClient.refetchQueries({
        queryKey: [QueryKeys.POSTS],
        type: "active",
      });
    },
    onError: (error: any) => {
      console.log({ error });
    },
  });
  const handleDelete = async () => {
    console.log({ post });
    try {
      await mutateAsync();
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <section className="pt-3 px-4 flex pb-3 border-b-gray-border border-b">
      <div className="mr-2">
        <AvatarCustom className="w-[44px] h-[44px] rounded-full min-w-[44px]" path={currentUser?.avatar_url} username={currentUser.username.slice(0,2)}></AvatarCustom>
      </div>
      <div className="flex-1 text-[15px] ">
        <div className="info flex gap-1 justify-between ">
          <div className="flex gap-2">
            <p className=" text-text-default font-bold">{user?.username}</p>
            <p className="text-icon-default ">@{user?.username}</p>
            <p className="text-icon-default ">7h</p>
          </div>
          {currentUser.userId == post.user_id && (
            <DropdownMenu>
              <DropdownMenuTrigger>...</DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black overflow-hidden border-0 outline-0 shadow-[0_0_10px] focus-visible:border-0 focus-visible:outline-0 text-white py-3 px-0">
                <DropdownMenuItem
                  onClick={handleDelete}
                  className="rounded-none hover:!text-white hover:!bg-hover-black-opacity px-4 text-[15px] font-bold flex flex-row gap-3"
                >
                  delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <div className="content">
          <p className=" text-text-default font-bold">{post?.content}</p>
          <div className="picture my-2">
            {post?.media_type.includes("image") && (
              <Image
                path={post?.media_url}
                alt="media"
                w={0}
                h={0}
                // className="w-full"
                className={`w-full ${
                  post?.shape === "original"
                    ? "h-full object-contain"
                    : post?.shape === "square"
                    ? "aspect-square object-cover"
                    : "aspect-video object-cover"
                }`}
              />
            )}
            {post?.media_type.includes("video") && (
              <video src={urlEndpoint + post?.media_url} controls />
              // <Video path={ post?.media_url} />
            )}
          </div>
        </div>
        <PostInteraction />
      </div>
    </section>
  );
};

export default PostInfo;
