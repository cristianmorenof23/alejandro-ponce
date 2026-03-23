"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard") // Si está logueado, lo mando directo al dashboard
    }
  }, [status, router])

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-cyan-600 text-xl font-semibold">Cargando...</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-cyan-700 mb-6">Ventas Controller</h1>
      <p className="mb-8 text-center max-w-md text-gray-700">
        Bienvenido al sistema de control de ventas. Por favor inicia sesión para comenzar.
      </p>

      <a
        href="/login"
        className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded shadow transition"
      >
        Iniciar Sesión
      </a>
    </div>
  )
}
