'use server'

import { prisma } from '@/lib/prisma'

export async function obtenerVendedores() {
  const vendedores = await prisma.user.findMany({
    where: { rol: 'VENDEDOR' },
    orderBy: { nombre: 'asc' }
  })
  return vendedores
}

export async function agregarVendedor(nombre: string) {
  const nuevo = await prisma.user.create({
    data: {
      nombre,
      email: `${nombre.toLowerCase().replace(/\s/g, '')}@local.com`,
      password: '123456', // simulado
      rol: 'VENDEDOR'
    }
  })
  return nuevo
}


export async function eliminarVendedor(id: number) {
  // Borra ventas u otros datos que dependan del vendedor
  await prisma.venta.deleteMany({
    where: { userId: id }
  })

  await prisma.objetivo.deleteMany({
    where: { userId: id } // Cambia 'userId' por el campo correcto si es diferente
  })

  // Finalmente borrar el usuario
  await prisma.user.delete({
    where: { id }
  })

  return { id }
}
