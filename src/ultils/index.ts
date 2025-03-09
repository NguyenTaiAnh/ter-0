import { isClient } from "@/lib/utils";

export const setLocalStorage = <T = any>(key: string, value: T) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  isClient() && localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = <T = any>(key: string): T | null => {
  if (!isClient()) return null;
  const value = localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

export const removeLocalStorage = (key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  !isClient() && localStorage.removeItem(key);
};
