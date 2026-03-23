"use client"
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';
import { todo } from '../../generated/prisma/index';
import styles from './TodoItem.module.css';

interface Props {
  todo: todo
  updateTodo: (id: string, complete: boolean) => Promise<todo | void>
}

export default function TodoItem({ todo, updateTodo }: Props) {
  
  return (
    <>
      <div className={todo.complete ? styles.todoDone : styles.todoPending}>
        <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
          <div
            onClick={() => updateTodo(todo.id, !todo.complete)}
            className={`
              flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.complete ? 'bg-blue-100' : 'bg-red-100'}
            `}>
            {
              todo.complete ?
                <IoCheckboxOutline size={30} />
                : <IoSquareOutline size={30} />
            }

          </div>
          <div className='text-center sm:text-left'>
            {todo.descripcion}
          </div>
        </div>
      </div>
    </>
  )
}
