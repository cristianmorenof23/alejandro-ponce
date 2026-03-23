// middleware.ts (en la raíz del proyecto)

import { getToken } from "next-auth/jwt"
import { NextResponse, NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const { pathname } = req.nextUrl

  // Permitir acceso a páginas públicas
  if (pathname.startsWith("/login") || pathname.startsWith("/api/auth")) {
    return NextResponse.next()
  }

  // Si no hay token y no está en login, redirigir a login
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/"], // rutas protegidas
}
