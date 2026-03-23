'use client';

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
// import * as api from '@/todos/helpers/todos'
import { addTodo, deleteCompleted } from "../actions/todo-actions";



export const NewTodo = () => {

  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (descripcion.trim().length === 0) return;

    await addTodo(descripcion);
    setDescripcion('');
  }



  return (
    <form onSubmit={handleSubmit}  className='flex w-full'>
      <input type="text" onChange={(e) => setDescripcion(e.target.value)} value={descripcion}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all hover:cursor-pointer">
        Crear
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={deleteCompleted}
        type='button' className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all hover:cursor-pointer">
        <IoTrashOutline />
        Borrar completados
      </button>


    </form>
  )
}