import { create } from "zustand";
import backPreviousSlice from "./slices/back-previous.slice";
import { devtools } from 'zustand/middleware'

type StoreState = ReturnType<typeof backPreviousSlice>

export const useStore = create<StoreState>()(
    devtools((...options)=>({
        ...backPreviousSlice(...options)
    }))
)