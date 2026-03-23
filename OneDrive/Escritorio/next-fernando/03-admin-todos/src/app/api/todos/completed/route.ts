// app/api/todos/completed/route.ts

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function DELETE() {
  try {
    const result = await prisma.todo.deleteMany({
      where: { complete: true }
    })

    return NextResponse.json({ deletedCount: result.count })
  } catch (error) {
    console.error("Error al eliminar completados:", error)
    return NextResponse.json({ error: "Error al eliminar completados" }, { status: 500 })
  }
}
