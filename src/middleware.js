import { NextResponse } from "next/server";

export function middleware(request) {
  const accessToken = request.cookies.get("USER_SESSION")?.value;
  if (accessToken) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/signin", request.url));
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
