import { putSchema } from '@/app/schemas/validacion'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'


interface Segmento {
  params: {
    id: string
  }
}


export async function GET(request: Request, { params }: Segmento) {

  const id = params.id

  const todo = await prisma.todo.findFirst({
    where: { id }
  })


  if (!todo) {
    return NextResponse.json({ error: 'No se encontró el TODO' }, { status: 404 })
  }

  return NextResponse.json(todo)
}





export async function PUT(request: Request, { params }: Segmento) {
  const id = params.id;

  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) {
    return NextResponse.json({ error: 'No se encontró el TODO' }, { status: 404 });
  }

  try {
    const body = await request.json();
    const { complete, descripcion } = await putSchema.validate(body);

    const updateTodo = await prisma.todo.update({
      where: { id },
      data: { complete, descripcion },
    });

    return NextResponse.json(updateTodo);
  } catch (error) {
    console.error("Error en PUT /api/todos/[id]:", error);
    return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
  }
}
