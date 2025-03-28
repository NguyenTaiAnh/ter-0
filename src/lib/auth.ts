// lib/auth.ts
import { cookies } from "next/headers";

export async function getServerAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return { user: null };

  try {
    const user = JSON.parse(cookieStore.get("currentUser")?.value || "");
    return { user };
  } catch (error) {
    console.log({ errorCallSeverAuth: error });
    return { user: null };
  }
}
