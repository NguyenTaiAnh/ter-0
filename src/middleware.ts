import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'

const protectedRoutes = ['/home', '/explore', '/jobs', '/messages', '/notifications', '/profile'];

export async function middleware(request: NextRequest) {
  const cookieStore = await cookies()

  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/login')) {
    return NextResponse.next();
  }

  if(request.nextUrl.pathname == '/'){
    cookieStore.delete('user')
  }


  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    // Kiểm tra token session của NextAuth (NextAuth sử dụng cookie tên là __Secure-next-auth.session-token hoặc next-auth.session-token)
    // const token = request.cookies.get('__Secure-next-auth.session-token') || request.cookies.get('next-auth.session-token');
    const cookies =  cookieStore.get('user')
    
    console.log("cookies 123: ", cookies)
    // Nếu không có token, chuyển hướng tới trang login
    if (!cookies || cookies.value =='') {
      console.log("vo day")
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/';
      return NextResponse.redirect(loginUrl);
    }
  }
  console.log("cookies", cookieStore.get("user"));
  // console.log({cookies})
  // how to use zustand in middleware

  const url = request.nextUrl.pathname;
  console.log("url", url);
  return NextResponse.next();
}