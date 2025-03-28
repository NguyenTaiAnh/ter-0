import { IUser } from "@/types/user";
import { setLocalStorage } from "@/ultils";
import { setCookie } from "nookies";
import { StateCreator } from "zustand";

type AuthState = {
  user: IUser | null;
  isPremium: boolean;
};
type AuthAction = {
  setCurrentUser: (user: IUser) => void;
  setIsPremium: (isPremium: boolean) => void;
};

export type AuthStore = AuthState & AuthAction;

const initialState: AuthState = {
  user: null,
  isPremium: false,
};
const authSlice: StateCreator<AuthStore> = (set) => {
  return {
    ...initialState,
    setCurrentUser: (user) => {
      // set(()=>({user}))
      set({ user });
      setLocalStorage("currentUser", user);
      setCookie(null, "currentUser", JSON.stringify({ ...user }), {
        path: "/",
      });
    },
    setIsPremium: (isPremium) => set({ isPremium }),
  };
};

export default authSlice;
