import { z } from 'zod'

export const numeroPositivoSchema = z.number().min(0, {
  message: 'Debe ser un número positivo',
})
