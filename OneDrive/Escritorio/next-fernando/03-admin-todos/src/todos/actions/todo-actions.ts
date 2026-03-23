"use server"

import { prisma } from "@/lib/prisma"
import { todo } from "@prisma/client"
import { revalidatePath } from "next/cache"

export const toggleTodo = async (id: string, complete: boolean): Promise<todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } })

  if (!todo) {
    throw new Error('Todo not found')
  }

  const updateTodo = await prisma.todo.update({
    where: { id },
    data: { complete: complete }
  })

  revalidatePath('/dashboard/server-todos')

  return updateTodo
}


export const addTodo = async (descripcion: string) => {
  try {
    const todo = await prisma.todo.create({ data: { descripcion } })
    revalidatePath('/dashboard/server-todos')
    return todo
  } catch (error) {
    return {
      message: 'Error crando todo'
    }
    console.log(error);
  }
}

export const deleteCompleted = async () => {
    try {
    const result = await prisma.todo.deleteMany({
      where: { complete: true }
    })
    revalidatePath('/dashboard/server-todos')
    return result
  } catch (error) {
    console.error("Error al eliminar completados:", error)
  }
}