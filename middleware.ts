import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req: Request) {
  const res = await fetch(req.url);
  const resJson = await res.json();

  return NextResponse.json({
    author: { name: "Luis", lastName: "Nazarit" },
    ...resJson,
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/:path*",
};
