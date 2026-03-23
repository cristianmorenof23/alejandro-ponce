'use client'

import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import VendedoresSidebar from '../components/VendedoresSidebar'
import VendedorPanel from '../components/VendedorPanel'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const [vendedorSeleccionado, setVendedorSeleccionado] = useState<number | null>(null)

  if (status === 'loading') {
    return <p className="p-6">Cargando sesión...</p>
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-red-600 font-semibold">No estás autenticado</p>
        <a
          href="/api/auth/signin"
          className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
        >
          Iniciar sesión
        </a>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-cyan-700 text-white p-4 shadow-lg hidden md:flex flex-col">
        <h2 className="text-xl font-bold mb-6">Vendedores</h2>
        <VendedoresSidebar onSeleccionar={setVendedorSeleccionado} />
        <button
          onClick={() => signOut()}
          className="mt-auto bg-cyan-800 hover:bg-cyan-900 px-4 py-2 rounded text-sm"
        >
          Cerrar sesión
        </button>
      </aside>

      <main className="flex-1 p-6">
        {vendedorSeleccionado ? (
          <VendedorPanel vendedorId={vendedorSeleccionado} />
        ) : (
          <p className="text-gray-500">Seleccioná un vendedor para comenzar</p>
        )}
      </main>
    </div>
  )
}
