import { cmtApi } from "@/apis/cmt.api";
import { QueryKeys } from "@/constants/queryKeys.const";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";

type UseGetPostCommentsType = Omit<
  UseQueryOptions<any>,
  "queryKey" | "queryFn"
>;
const useGetPostComments = (
  postId: string,
  options?: UseGetPostCommentsType
) => {
  const queryResult = useQuery({
    queryKey: [QueryKeys.POST_LIST_COMMENT, postId],
    queryFn: () => cmtApi.getCmtPost(postId),
    staleTime: 1000 * 60, // 1 phút,
    ...options,
    enabled: !!postId,
  });

  return queryResult;
};

export default useGetPostComments;
