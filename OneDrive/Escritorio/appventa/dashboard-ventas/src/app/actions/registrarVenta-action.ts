// app/actions/registrarVenta.ts
'use server'

import { prisma } from '@/lib/prisma'
import { z } from 'zod'


const ventaSchema = z.object({
  userId: z.number(),
  categoria: z.enum(['CALZADOS', 'ACCESORIOS', 'NIÑO', 'INDUMENTARIA']),
  monto: z.number().positive()
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function registrarVenta(data: any) {
  const parsed = ventaSchema.safeParse(data)
  if (!parsed.success) throw new Error('Datos inválidos')

  const { userId, categoria, monto } = parsed.data

  const venta = await prisma.venta.create({
    data: { userId, categoria, monto }
  })

  return venta
}
