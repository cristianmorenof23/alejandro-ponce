import { postSchema } from '@/app/schemas/validacion'
import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url)
  const take = +(searchParams.get('take') ?? '10')
  const skip = +(searchParams.get('skip') ?? '0')

  if (isNaN(take)) return NextResponse.json({ message: 'Take tiene que ser un numero' }, { status: 400 })
  if (isNaN(skip)) return NextResponse.json({ message: 'Skip tiene que ser un numero' }, { status: 400 })

  const todos = await prisma.todo.findMany({ take, skip })

  return NextResponse.json(todos)
}





export async function POST(request: Request) {
  try {
    const { complete, descripcion } = await postSchema.validate(await request.json())
    const todo = await prisma.todo.create({ data: { complete, descripcion } })
    return NextResponse.json(todo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}