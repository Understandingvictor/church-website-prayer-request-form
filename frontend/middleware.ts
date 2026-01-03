import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("admin_session");
  const { pathname } = request.nextUrl;

  // Define your paths clearly
  const isLoginPage = pathname === "/prayer/admin";
  const isAdminPath = pathname.startsWith("/prayer/admin");

  // LOCK 1: If they ARE logged in, don't let them see the Login Page
  // This is what stops the "Back" button from working
  if (isLoginPage && session) {
    return NextResponse.redirect(new URL("/prayer/admin/prayers", request.url));
  }

  // LOCK 2: If they are NOT logged in, don't let them see Admin Pages
  if (isAdminPath && !isLoginPage && !session) {
    return NextResponse.redirect(new URL("/prayer/admin/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/prayer/admin/:path*"],
};
