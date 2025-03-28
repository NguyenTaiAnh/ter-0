import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const protectedRoutes = [
  "/home",
  "/explore",
  "/jobs",
  "/messages",
  "/notifications",
  "/profile",
  "/post",
];

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const currentUser = cookieStore.get("currentUser")
  console.log({token,currentUser})
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/login") || pathname.startsWith("/signup")) {
    return NextResponse.next();
  }

  if (request.nextUrl.pathname == "/" && token && currentUser) {
    // cookieStore.delete('user')
    const homeUrl = request.nextUrl.clone();
    homeUrl.pathname = "/home";
    return NextResponse.redirect(homeUrl);
  }

  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token || token.value == "" || !currentUser) {
      // console.log("vo day")
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/";

      return NextResponse.redirect(loginUrl);
    }
  }

  const url = request.nextUrl.pathname;
  console.log("url", url);
  return NextResponse.next();
}
