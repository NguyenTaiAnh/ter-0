import { setLocalStorage } from "@/ultils";
import { setCookie } from "nookies";
import { create } from "zustand";

interface AuthStore {
    user: any;
    setUser: (user: any) => void;
    isPremium: boolean;
    setIsPremium: (isPremium: boolean) => void;
    logout: () => void;
}

export const authStore = create<AuthStore>((set) => ({
    user: null,
    setUser: (user) => {
        setLocalStorage("currentUser", user);
        setCookie(null, "currentUser", JSON.stringify({ ...user }), {
                path: "/",
              });
        set({ user });
    },
    isPremium: false,
    setIsPremium: (isPremium) => set({ isPremium }),
    logout: () => set({ user: null }),
}));