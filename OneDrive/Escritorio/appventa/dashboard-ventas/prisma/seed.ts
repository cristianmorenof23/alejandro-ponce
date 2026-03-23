import { PrismaClient, Rol, Categoria } from '@prisma/client'
import bcrypt from "bcryptjs";


const prisma = new PrismaClient()

async function main() {
  await prisma.venta.deleteMany()
  await prisma.objetivo.deleteMany()
  await prisma.user.deleteMany()

  const passEncargada = await bcrypt.hash('encargada123', 10)
  const passVendedor = await bcrypt.hash('vendedor123', 10)

  const juana = await prisma.user.create({
    data: {
      nombre: 'Juana Encargada',
      email: 'encargada@local.com',
      password: passEncargada,
      rol: Rol.ENCARGADA,
    },
  })

  const vendedor = await prisma.user.create({
    data: {
      nombre: 'Carlos Vendedor',
      email: 'vendedor@local.com',
      password: passVendedor,
      rol: Rol.VENDEDOR,
    },
  })

  for (const user of [juana, vendedor]) {
    for (const categoria of Object.values(Categoria)) {
      await prisma.objetivo.create({
        data: {
          userId: user.id,
          categoria,
          montoMeta: 30,
        },
      })

      await prisma.venta.create({
        data: {
          userId: user.id,
          categoria,
          monto: Math.floor(Math.random() * 10) + 1,
        },
      })
    }
  }

  console.log('✅ Seed listo: usuarios creados')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
