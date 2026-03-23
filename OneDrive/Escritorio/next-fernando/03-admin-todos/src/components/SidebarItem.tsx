"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItemProps {
  icon: React.ReactNode,
  path: string,
  title: string
}

export default function SidebarItem({ icon, path, title }: SidebarItemProps) {
  const pathName = usePathname()
  const isActive = path === pathName

  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl transition-colors duration-200
          ${isActive
            ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400'
            : 'text-gray-600 hover:bg-gray-100'}
        `}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  )
}
