import { Header } from "@/components/Header";
import React from "react";
import { ContentPostDetail } from "../components/PostDetail";

interface PostDetailCotainerProps {}
const PostDetailCotainer: React.FC<PostDetailCotainerProps> = () => {
  return (
    <section>
      <Header />
      <ContentPostDetail />
    </section>
  );
};

export default PostDetailCotainer;
