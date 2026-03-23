import { todo } from "@prisma/client";


export const obtenerTodo = async (id: string, complete: boolean): Promise<todo> => {
  const body = { complete }

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res => res.json()))
  console.log({ todo });

  return todo
}




export const crearTodo = async (descripcion: string): Promise<todo> => {
  const body = { descripcion }

  const todo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res => res.json()))
  console.log({ todo });
  return todo
}


export const eliminarCompletados = async (): Promise<{ deletedCount: number }> => {
  const res = await fetch(`/api/todos/completed`, {
    method: "DELETE"
  })

  if (!res.ok) throw new Error("No se pudieron eliminar los todos completados")

  return res.json()
}
