import { IPost } from "@/types/post.type";
import { StateCreator } from "zustand";

type PostDetailState = {
  post: IPost | null;
  isLoading: boolean;
  isError: boolean;
};

type PostDetailActionState = {
  setPost: (post: any) => void;
  setIsLoading: (isLoading: boolean) => void;
  setIsError: (isError: boolean) => void;
};

type PostDetailStore = PostDetailState & PostDetailActionState;

const initialState: PostDetailState = {
  post: null,
  isLoading: false,
  isError: false,
};

const postDetailSlice: StateCreator<PostDetailStore> = (set) => ({
  ...initialState,
  setPost: (post) => set(() => ({ post })),
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
  setIsError: (isError) => set(() => ({ isError })),
});

export default postDetailSlice;
