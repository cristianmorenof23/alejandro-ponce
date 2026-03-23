import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {

  await prisma.todo.deleteMany();
  await prisma.user.deleteMany()

  const user = await prisma.user.create({
    data: {
      email: 'test1@google.com',
      password: bcrypt.hashSync('12345678'),
      roles: ['admin'],
      todos: {
        create: [
          { descripcion: 'Piedra del Alma', complete: true },
          { descripcion: 'Piedra del Poder' },
          { descripcion: 'Piedra del Tiempo' },
          { descripcion: 'Piedra del Espacio' },
          { descripcion: 'Piedra de la Realidad' },
        ]
      }
    }

  })
  console.log(user);

  // await prisma.todo.createMany({
  //   data: [
  //     { descripcion: 'Piedra del Alma', complete: true },
  //     { descripcion: 'Piedra del Poder' },
  //     { descripcion: 'Piedra del Tiempo' },
  //     { descripcion: 'Piedra del Espacio' },
  //     { descripcion: 'Piedra de la Realidad' },
  //   ]
  // })



  return NextResponse.json({ message: 'Seed Executed' })
}