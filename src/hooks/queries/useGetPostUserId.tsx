import { postsApi } from "@/apis/posts.api";
import { QueryKeys } from "@/constants/queryKeys.const";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UsePostByUserIdProps = Omit<UseQueryOptions<any>, "queryKey" | "queryFn">;
const usePostByUserId = (userId:string,options?: UsePostByUserIdProps) => {
  const queryResult = useQuery({
    queryKey: [QueryKeys.POST_USER_ID,userId],
    queryFn: () => postsApi.getPostByUserId(userId),
    staleTime: 1000 * 60, // 1 phút
    ...options,
  });
  return queryResult;
};
export default usePostByUserId;
