import { bool, object, string } from "yup";


export const postSchema = object({
  descripcion: string().required(),
  complete: bool().optional().default(false)
})


export const putSchema = object({
  complete: bool().optional(),
  descripcion: string().optional()
})