import { CiChat1, CiMenuBurger, CiSearch, CiShoppingBasket } from 'react-icons/ci'
import Image from 'next/image'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function TopMenu() {

  const cookieStore = await cookies()
  const cart = JSON.parse(cookieStore.get('cart')?.value ?? '{}')

  const getTotalCount = () => {
    let items = 0;
    Object.values(cart).forEach((value) => {
      items += value as number;
    })
    return items
  }


  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4 h-full">

        {/* Título - solo visible en pantallas grandes */}
        <h5 className="hidden lg:block text-2xl text-gray-600 font-medium">
          Dashboard
        </h5>

        {/* Botón hamburguesa - solo visible en mobile */}
        <button className="w-12 h-16 -mr-2 border-r lg:hidden flex items-center justify-center">
          <CiMenuBurger size={30} />
        </button>

        <div className="flex items-center space-x-2">

          {/* Buscador - solo visible en desktop/tablet */}
          <div className="hidden md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>

          {/* Buscador en móvil */}
          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <CiSearch />
          </button>

          {/* Icono de chat */}
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <CiChat1 size={25} />
          </button>

          {/* Icono de notificación */}
          <Link
            href={'/dashboard/cart'}
            className="flex items-center p-2 justify-center text-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <span className='text-sm mr-2 font-bold text-blue-800'>{getTotalCount()}</span>
            <CiShoppingBasket size={25} />
          </Link>

          {/* Logo opcional (ejemplo con Vercel) */}
          <Image
            src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
            width={32}
            height={32}
            alt="Vercel Logo"
            className="rounded-xl"
          />

        </div>
      </div>
    </div>
  )
}
