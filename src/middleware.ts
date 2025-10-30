import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/api/") &&
    !request.nextUrl.pathname.startsWith("/api/v1/generate")
  ) {
    const apiUrl = process.env.API_URL || "http://localhost:8000/api";
    // Remove trailing slash if presents
    const baseUrl = apiUrl.endsWith("/") ? apiUrl.slice(0, -1) : apiUrl;

    // Get the path after /api/
    const path = request.nextUrl.pathname.replace("/api/", "");

    // Construct the new URL
    const url = new URL(`${baseUrl}/${path}${request.nextUrl.search}`);

    return NextResponse.rewrite(url);
  }
}

export const config = {
  matcher: "/api/:path*",
};
