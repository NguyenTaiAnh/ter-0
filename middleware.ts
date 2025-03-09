import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Mảng các route cần bảo vệ (có thể là prefix)
const protectedRoutes = ['/', '/explore', '/jobs', '/messages', '/notifications', '/profile'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Nếu truy cập trang đăng nhập hoặc API, cho phép
  if (pathname.startsWith('/login') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Nếu đường dẫn thuộc các trang cần bảo vệ
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    // Kiểm tra token session của NextAuth (NextAuth sử dụng cookie tên là __Secure-next-auth.session-token hoặc next-auth.session-token)
    const token = request.cookies.get('__Secure-next-auth.session-token') || request.cookies.get('next-auth.session-token');

    // Nếu không có token, chuyển hướng tới trang login
    if (!token) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = '/login';
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}
