'use server'


import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { cookies } from 'next/headers'

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) return false

  const match = await bcrypt.compare(password, user.password)
  if (!match) return false

  ;(await cookies()).set('userId', String(user.id))
  return true
}
