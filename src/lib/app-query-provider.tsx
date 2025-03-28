"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useStore } from "@/stores";
import { IUser } from "@/types/user";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 phút
      retry: 3,
    },
  },
});

export function QueryProvider({
  children,
  severUser,
}: {
  children: ReactNode;
  severUser?: IUser | null;
}) {
  const { setCurrentUser, user } = useStore();
  React.useEffect(() => {
    if (severUser && !user) setCurrentUser(severUser);
  }, [severUser]);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
