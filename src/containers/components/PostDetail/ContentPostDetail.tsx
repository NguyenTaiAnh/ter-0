"use client";
import React from "react";
import { UseGetPostDetail } from "@/hooks";
import { useStore } from "@/stores";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { PostInfo } from "@/components/Post/PostInfo";
const ContentPostDetail = () => {
  const param = useParams();
  console.log({ test: param.postId });
  const { user } = useStore();
  // useGetPostDetail
  const { data, isLoading } = UseGetPostDetail(param.postId?.toString() || "");
  console.log({ data, isLoading });
  console.log({ user });
  return isLoading ? (
    <Loader className="animate-spin" />
  ) : (
    <PostInfo currentUser={user} post={data} isDetail={true} />
  );
};

export default ContentPostDetail;
