"use client"
import { todo } from "@prisma/client"
import TodoItem from "./TodoItem"

import { toggleTodo } from "../actions/todo-actions"


interface Props {
  todos?: todo[]
}


export default function TodosGrid({ todos = [] }: Props) {

  // const router = useRouter()
  // const toggleTodo = async (id: string, complete: boolean) => {
  //   const actualizarTodo = await api.obtenerTodo(id, complete)
  //   console.log(actualizarTodo);
  //   router.refresh()
  // }


  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} updateTodo={toggleTodo} />
        ))}
      </div>
    </>
  )
}
