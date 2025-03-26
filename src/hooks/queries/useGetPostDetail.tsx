import { postsApi } from "@/apis/posts.api";
import { QueryKeys } from "@/constants/queryKeys.const";
import { IPost } from "@/types/post.type";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseGetPostDetail = Omit<UseQueryOptions<IPost>, "queryKey" | "queryFn">;
const useGetPostDetail = (postId: string, options?: UseGetPostDetail) => {
  const queryResult = useQuery({
    queryKey: [QueryKeys.POST_DETAIL,postId],
    queryFn: () => postsApi.getPost(postId),
    staleTime: 1000 * 60, // 1 phút,
    enabled:!!postId,
    ...options,
  });
  return queryResult;
};
export default useGetPostDetail;
