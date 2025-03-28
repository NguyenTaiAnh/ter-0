import { create } from "zustand";
import backPreviousSlice from "./slices/back-previous.slice";
import { devtools } from 'zustand/middleware'
import authSlice from "./slices/auth.slice";

type StoreState = ReturnType<typeof backPreviousSlice> &
ReturnType<typeof authSlice>

export const useStore = create<StoreState>()(
    devtools((...options)=>({
        ...backPreviousSlice(...options),
        ...authSlice(...options)
    }))
)