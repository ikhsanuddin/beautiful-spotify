import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export const middleware = async (req: NextRequest) => {
  // Token will exist if user is logged in
  const token = await getToken({
    req: req as unknown as NextApiRequest,
    secret: process.env.JWT_SECRET!,
  });
  const { pathname } = req.nextUrl;

  // Redirect them to login if they don't have token AND are requesting a protected route
  if (!token && pathname !== "/login") {
    console.log(!token && pathname !== "/login", "xxxxxxx");
    //   return NextResponse.rewrite(new URL('/login', req.url))
  }
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
  ],
};
