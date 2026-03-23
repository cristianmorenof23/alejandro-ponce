'use client'

import { useState, useEffect } from 'react'
import { obtenerVendedores, agregarVendedor, eliminarVendedor } from '@/app/actions/vendedorActions'
import { toast } from 'sonner'

type Vendedor = {
  id: number
  nombre: string
}

type Props = {
  onSeleccionar: (id: number) => void
}

export default function VendedoresSidebar({ onSeleccionar }: Props) {
  const [vendedores, setVendedores] = useState<Vendedor[]>([])
  const [loading, setLoading] = useState(true)
  const [nuevoNombre, setNuevoNombre] = useState('')
  const [agregando, setAgregando] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [vendedorAEliminar, setVendedorAEliminar] = useState<number | null>(null)

  useEffect(() => {
    async function cargar() {
      const data = await obtenerVendedores()
      setVendedores(data)
      setLoading(false)
    }
    cargar()
  }, [])

  const handleAgregar = async () => {
    if (!nuevoNombre.trim()) return
    setAgregando(true)
    try {
      const nuevoVendedor = await agregarVendedor(nuevoNombre.trim())
      setVendedores([...vendedores, nuevoVendedor])
      setNuevoNombre('')
      toast.success('Vendedor agregado')
    } catch (error) {
      console.error(error)
      toast.error('Error agregando vendedor')
    }
    setAgregando(false)
  }

  const confirmarEliminar = (id: number) => {
    setVendedorAEliminar(id)

    toast.custom((t) => (
      <div
        className="fixed bottom-8 right-8 z-50 flex items-center gap-4 bg-white rounded-xl shadow-lg px-6 py-4 max-w-xs"
        style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
      >
        <span className="flex-1 font-medium text-gray-700">¿Eliminar vendedor?</span>

        <button
          onClick={async () => {
            toast.dismiss(t)
            try {
              await eliminarVendedor(id)
              setVendedores((v) => v.filter((vendedor) => vendedor.id !== id))
              toast.success('Vendedor eliminado')
            } catch (error) {
              console.error(error)
              toast.error('Error eliminando vendedor')
            }
            setVendedorAEliminar(null)
          }}
          className="bg-red-600 px-4 py-2 rounded-md text-white font-semibold hover:bg-red-700 transition"
        >
          Confirmar
        </button>

        <button
          onClick={() => {
            toast.dismiss(t)
            setVendedorAEliminar(null)
          }}
          className="bg-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-400 transition"
        >
          Cancelar
        </button>
      </div>
    ))
  }

  if (loading) return <p>Cargando vendedores...</p>

  if (!loading && vendedores.length === 0) return <p>No hay vendedores cargados</p>

  return (
    <nav className="flex flex-col gap-3">
      {vendedores.map((v) => (
        <div key={v.id} className="flex justify-between items-center">
          <button
            onClick={() => onSeleccionar(v.id)}
            className="bg-cyan-600 hover:bg-cyan-500 transition-colors px-4 py-2 rounded text-left shadow-sm hover:shadow-md cursor-pointer flex-1"
          >
            {v.nombre}
          </button>
          <button
            onClick={() => confirmarEliminar(v.id)}
            className="ml-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded transition"
            title="Eliminar vendedor"
          >
            🗑️
          </button>
        </div>
      ))}

      <div className="mt-4">
        <input
          type="text"
          placeholder="Nuevo vendedor"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          className="w-full px-3 py-2 rounded border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          disabled={agregando}
        />
        <button
          onClick={handleAgregar}
          disabled={agregando}
          className="mt-2 w-full bg-cyan-700 hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 rounded transition"
        >
          {agregando ? 'Agregando...' : 'Agregar vendedor'}
        </button>
      </div>
    </nav>
  )
}
