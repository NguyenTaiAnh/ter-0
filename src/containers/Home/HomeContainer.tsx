"use client";
import Navigation from "@/components/Navigation/Navigation";
import { tabsHome } from "@/constants/tabs.const";
import React from "react";
// import {GET } from '@/app/api/posts/route'
import { usePost } from "@/hooks";
import { FlashScreen } from "@/components/FlashScreen";
// export async function GET_POSTS() {
//   try {
//     const url = new URL('/api/posts', process.env.NEXT_PUBLIC_URL_API);

//     const response = await GET(new Request(url.toString()));
//     const posts = await response.json();

//     return Response.json(
//       posts.map((post:any) => ({
//         ...post,
//         formattedDate: new Date(post.createdAt).toLocaleDateString('vi-VN')
//       }))
//     );
//   } catch (error) {
//     console.log({error})
//     return new Response(
//       JSON.stringify({ error: 'Lỗi khi lấy dữ liệu' }),
//       { status: 500 }
//     );
//   }
// }
const HomeContainer = () => {
  // const response = await GET_POSTS();
  // const posts = await response.json();
  const { data: posts, isLoading, isFetching } = usePost();
  if(isLoading) return <FlashScreen/>
  return (
    <section>
      <Navigation
        tabs={tabsHome}
        posts={posts}
        isLoading={isFetching || isLoading}
      />
    </section>
  );
};

export default HomeContainer;
