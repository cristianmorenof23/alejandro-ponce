import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
import TodosGrid from "@/todos/components/TodosGrid";


export const metadata = {
  title: 'Listado de tareas',
  description: 'Listado de tareas'
};


export default async function ServerTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { descripcion: 'asc' } })


  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div>
        <div className="w-full px-3 mx-5 mb-5 mt-3">
          <NewTodo />
        </div>
        <TodosGrid todos={todos} />
      </div>
    </>
  )
}
