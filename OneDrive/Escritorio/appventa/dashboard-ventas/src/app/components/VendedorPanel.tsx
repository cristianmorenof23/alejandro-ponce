'use client'

import { useEffect, useState } from 'react'
import { Categoria } from '@prisma/client'
import CircleProgress from './CircleProgress'
import {
  obtenerVendedorPorId,
  actualizarObjetivo,
  actualizarVenta,
} from '@/app/actions/vendedorPanelActions'
import { toast } from 'sonner'

type Props = {
  vendedorId: number
}

const categorias: Categoria[] = ['CALZADOS', 'INDUMENTARIA', 'ACCESORIOS', 'NIÑO']

export default function VendedorPanel({ vendedorId }: Props) {
  const [objetivos, setObjetivos] = useState<Record<string, number>>({})
  const [ventas, setVentas] = useState<Record<string, number>>({})
  const [vendedorNombre, setVendedorNombre] = useState<string | null>(null)

  useEffect(() => {
    async function cargarDatos() {
      const datos = await obtenerVendedorPorId(vendedorId)

      const ventasPorCategoria: Record<string, number> = {}
      const objetivosPorCategoria: Record<string, number> = {}

      categorias.forEach(cat => {
        const objetivo = datos.objetivos.find(o => o.categoria === cat)
        const ventasCat = datos.ventas.filter(v => v.categoria === cat)
        const suma = ventasCat.reduce((acc, v) => acc + v.monto, 0)

        ventasPorCategoria[cat] = suma
        objetivosPorCategoria[cat] = objetivo?.montoMeta || 0
      })

      setVentas(ventasPorCategoria)
      setObjetivos(objetivosPorCategoria)
      setVendedorNombre(datos.nombre) // 👈 esto ahora lo mostramos
    }

    cargarDatos()
  }, [vendedorId])

  const handleObjetivoChange = async (cat: string, valor: number) => {
    setObjetivos(prev => ({ ...prev, [cat]: valor }))
    try {
      await actualizarObjetivo(vendedorId, cat, valor)
      toast.success(`Objetivo de ${cat} actualizado`)
    } catch (error) {
      console.log(error)
      toast.error('Error actualizando objetivo')
    }
  }

  const handleVentaChange = async (cat: string, valor: number) => {
    setVentas(prev => ({ ...prev, [cat]: valor }))
    try {
      await actualizarVenta(vendedorId, cat, valor)
      toast.success(`Venta de ${cat} actualizada`)
    } catch (error) {
      console.log(error)
      toast.error('Error actualizando venta')
    }
  }

  if (
    Object.keys(objetivos).length === 0 ||
    Object.keys(ventas).length === 0 ||
    !vendedorNombre
  ) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg animate-pulse">Cargando datos del vendedor...</p>
      </div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-cyan-700 mb-6">
        Panel de {vendedorNombre}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categorias.map(cat => {
          const objetivo = objetivos[cat] > 0 ? objetivos[cat] : 1
          const vendido = ventas[cat] || 0
          const porcentaje = Math.min(Math.round((vendido / objetivo) * 100), 100)

          return (
            <div
              key={cat}
              className="p-6 bg-white rounded-2xl shadow-lg transition hover:scale-[1.01] hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-cyan-600 mb-4">{cat}</h3>
              <div className="flex items-center gap-6">
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Objetivo</label>
                    <input
                      type="number"
                      value={objetivos[cat]}
                      onChange={(e) =>
                        handleObjetivoChange(cat, parseFloat(e.target.value))
                      }
                      className="w-full border border-cyan-300 focus:border-cyan-500 focus:ring-cyan-500 rounded-lg px-3 py-2 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Vendidos</label>
                    <input
                      type="number"
                      value={ventas[cat]}
                      onChange={(e) =>
                        handleVentaChange(cat, parseFloat(e.target.value))
                      }
                      className="w-full border border-cyan-300 focus:border-cyan-500 focus:ring-cyan-500 rounded-lg px-3 py-2 outline-none transition"
                    />
                  </div>
                </div>

                <CircleProgress porcentaje={porcentaje} categoria={cat} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
