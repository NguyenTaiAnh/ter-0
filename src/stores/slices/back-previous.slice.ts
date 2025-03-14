import { StateCreator } from "zustand";

type BackPreviousState = {
  urlPrevious: string;
};
type BackPreviousAction = {
  setUrlPrevious: (urlPrevious: string) => void;
};

export type BackPreviousStore = BackPreviousState & BackPreviousAction;

const initialState: BackPreviousState = {
  urlPrevious: "",
};

const backPreviousSlice: StateCreator<BackPreviousStore> = (set) => {
  return {
    ...initialState,
    setUrlPrevious:(urlPrevious) =>set(() => ({ urlPrevious }))
  };
};
export default backPreviousSlice;
