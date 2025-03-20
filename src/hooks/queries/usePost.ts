import { postsApi } from "@/apis/posts.api";
import { QueryKeys } from "@/constants/queryKeys.const";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UsePostProps = Omit<UseQueryOptions<any>, "queryKey" | "queryFn">;
const usePost = (options?: UsePostProps) => {
  const queryResult = useQuery({
    queryKey: [QueryKeys.POSTS],
    queryFn: () => postsApi.getAllPost(),
    staleTime: 1000 * 60, // 1 phút
    ...options,
  });
  return queryResult;
};
export default usePost;
