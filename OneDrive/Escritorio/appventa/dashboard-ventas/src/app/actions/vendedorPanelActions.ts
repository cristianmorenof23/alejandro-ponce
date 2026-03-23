'use server'

import { prisma } from '@/lib/prisma'
import { Categoria } from '@prisma/client'

export async function obtenerVendedorPorId(id: number) {
  const vendedor = await prisma.user.findUnique({
    where: { id },
    include: {
      ventas: true,
      objetivos: true,
    }
  })

  if (!vendedor) throw new Error('No se encontró el vendedor')

  return vendedor
}

export async function actualizarObjetivo(userId: number, categoria: string, monto: number) {
  const existe = await prisma.objetivo.findFirst({
    where: { userId, categoria: categoria as Categoria },
  })

  if (existe) {
    await prisma.objetivo.update({
      where: { id: existe.id },
      data: { montoMeta: monto },
    })
  } else {
    await prisma.objetivo.create({
      data: {
        userId,
        categoria: categoria as Categoria,
        montoMeta: monto,
      },
    })
  }
}

export async function actualizarVenta(userId: number, categoria: string, monto: number) {
  // Simplificado: borra todas y crea una sola venta con el total (para demo)
  await prisma.venta.deleteMany({
    where: { userId, categoria: categoria as Categoria },
  })

  await prisma.venta.create({
    data: {
      userId,
      categoria: categoria as Categoria,
      monto,
    }
  })
}
