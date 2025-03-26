import { cookies, headers } from "next/headers";

export const getCurrentUser = async () => {
  const cookieStore = await cookies();
  const headersList = await headers();

  return {
    currentUser: cookieStore.get("currentUser")?.value,
    referer: headersList.get("referer") || "",
  };
};

export const getUserSSR = async () => {
  const { currentUser, referer } = await getCurrentUser();

  return new Response(currentUser, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      referer,
    },
  });
};
