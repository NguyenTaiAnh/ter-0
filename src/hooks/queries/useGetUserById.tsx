import { postsApi } from "@/apis/posts.api";
import { QueryKeys } from "@/constants/queryKeys.const";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseGetUserByIdProps = Omit<UseQueryOptions<any>, "queryKey" | "queryFn">;
const useGetUserById = (userId: string, options?: UseGetUserByIdProps) => {
  const queryResult = useQuery({
    queryKey: [QueryKeys.USER_ID, userId],
    queryFn: () => postsApi.getUser(userId),
    staleTime: 1000 * 60, // 1 phút
    ...options,
  });
  return queryResult;
};
export default useGetUserById;
