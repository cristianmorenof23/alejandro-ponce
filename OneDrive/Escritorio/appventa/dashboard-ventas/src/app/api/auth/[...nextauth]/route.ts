import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Encargada", username: "admin", password: "local20" } // hardcodeado para ejemplo
        
        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return { id: user.id, name: user.name }
        }
        return null
      },
    }),
  ],
  session: {
    strategy: "jwt" as const, // <-- la clave está aquí
  },
  pages: {
    signIn: "/login",
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
