"use client";
import { PostUpload } from "@/components/Post/PostUpload";
import { useGetPostComments, useGetUserById } from "@/hooks";
import { useStore } from "@/stores";
import { useParams } from "next/navigation";
import React from "react";
import { PostInfo } from "@/components/Post/PostInfo";

const CommnentPost = () => {
  const { user, post } = useStore();
  const param = useParams();

  const { data: creator } = useGetUserById(post?.user_id || "");
  const { data: comments, isLoading } = useGetPostComments(
    param?.postId?.toString() || ""
  );
  console.log({ comments, isLoading });
  console.log({ test: param.postId });
  console.log({ user, post });
  return (
    <section>
      {user && (
        <PostUpload
          currentUser={user}
          isComment={true}
          postId={param.postId}
          post={post}
          creator={creator}
        />
      )}
      {/* <ListComment comments={comments}/> */}
      {comments &&
        comments.length > 0 &&
        comments.map((comment: any) => (
          <PostInfo key={comment.id} currentUser={user} post={comment} isComment={true} />
        ))}
    </section>
  );
};

export default CommnentPost;
