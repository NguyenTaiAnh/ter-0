import { Header } from "@/components/Header";
import React from "react";
import { ContentPostDetail } from "../components/PostDetail";
import CommnentPost from "../components/PostDetail/CommnentPost";

interface PostDetailCotainerProps {}
const PostDetailCotainer: React.FC<PostDetailCotainerProps> = () => {
  return (
    <section>
      <Header />
      <ContentPostDetail />
      <CommnentPost />
    </section>
  );
};

export default PostDetailCotainer;
