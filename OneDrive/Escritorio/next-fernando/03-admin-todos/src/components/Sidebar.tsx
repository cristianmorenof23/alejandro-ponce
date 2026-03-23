import Image from 'next/image'
import Link from 'next/link'
import { IoCalendar, IoCheckboxOutline, IoCodeWorkingSharp, IoListOutline, IoLogoReact, IoPerson, IoPlayForwardOutline } from 'react-icons/io5'
import SidebarItem from './SidebarItem'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import LogoutBotton from './LogoutBotton'


const menuItem = [
  {
    icon: <IoCalendar className="text-2xl" />,
    path: '/dashboard',
    title: 'Dashboard'
  },
  {
    icon: <IoCheckboxOutline className="text-2xl" />,
    path: '/dashboard/rest-todos',
    title: 'Rest TODOS'
  },
  {
    icon: <IoListOutline className="text-2xl" />,
    path: '/dashboard/server-todos',
    title: 'Server Actions'
  },
  {
    icon: <IoCodeWorkingSharp className="text-2xl" />,
    path: '/dashboard/cookies',
    title: 'Cookies'
  },
  {
    icon: <IoPlayForwardOutline className="text-2xl" />,
    path: '/dashboard/products',
    title: 'Productos'
  },
  {
    icon: <IoPerson className="text-2xl" />,
    path: '/dashboard/profile',
    title: 'Profile'
  },
]


export default async function Sidebar() {

  const session = await auth()
  if (!session) {
    redirect("/api/auth/signin");
  }

  const avatarUrl = (session.user?.image)
    ? session.user.image
    : 'https://tailus.io/sources/blocks/avatars/preview/images/avatar-1.png';

  const userRoles = session.user?.roles ?? ['no-roles'];

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link className="flex items-center" href="/dashboard" title="home">
            {/* Next/Image */}
            <IoLogoReact className="mr-2 text-3xl hover:scale-125 transition-all" />
            <span className="text-3xl">Dash</span>
          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          {session.user?.image && (
            <Image
              src={avatarUrl}
              width={120}
              height={120}
              alt="User avatar"
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              priority
            />
          )}
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{session.user?.name}</h5>
          <span className="hidden text-gray-400 lg:block">
            {userRoles.join(', ')}
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">

          {
            menuItem.map(item => (
              <SidebarItem key={item.path} {...item} />
            ))
          }

        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutBotton />
      </div>
    </aside>
  )
}
