import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect PDF files
  if (!pathname.toLowerCase().endsWith(".pdf")) {
    return NextResponse.next();
  }

  const referer = request.headers.get("referer");
  const host = request.headers.get("host") ?? "";

  if (referer) {
    try {
      const refHost = new URL(referer).host;
      // Allow requests coming from the same domain or Vercel preview URLs
      if (refHost === host || refHost.endsWith(".vercel.app")) {
        return NextResponse.next();
      }
    } catch {
      // Invalid referer - block
    }
  }

  // No valid referer → redirect to homepage instead of serving the file
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    // Run on all paths except Next.js internals and static assets
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
