"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { BiLogOut } from "react-icons/bi";
import { CiLogin } from "react-icons/ci";
import { IoShield } from "react-icons/io5";


export default function LogoutBotton() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession();


  if (status === 'loading') {
    return (
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:cursor-pointer hover:bg-gray-100 transition-all">
        <IoShield />
        <span className="group-hover:text-gray-700">Espere....</span>
      </button>
    )
  }

  if (status === 'unauthenticated') {
    return (
      <button
        onClick={() => signIn()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:cursor-pointer hover:bg-gray-100 transition-all">
        <CiLogin />
        <span className="group-hover:text-gray-700">Ingresar a la Aplicacion</span>
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => signOut()}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:cursor-pointer hover:bg-gray-100 transition-all">
        <BiLogOut />
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    </>
  )
}
