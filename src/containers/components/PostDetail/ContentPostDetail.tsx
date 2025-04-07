"use client";
import React from "react";
import { UseGetPostDetail } from "@/hooks";
import { useStore } from "@/stores";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";
import { PostInfo } from "@/components/Post/PostInfo";
const ContentPostDetail = () => {
  const param = useParams();
  const { user, setPost } = useStore();
  // useGetPostDetail
  const { data, isLoading } = UseGetPostDetail(param.postId?.toString() || "");
  
  React.useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data, setPost]);

  return isLoading ? (
    <Loader className="animate-spin" />
  ) : (
    <PostInfo currentUser={user} post={data} isDetail={true} />
  );
};

export default ContentPostDetail;
