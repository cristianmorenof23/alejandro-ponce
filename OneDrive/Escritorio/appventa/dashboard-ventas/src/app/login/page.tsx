"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {
  const router = useRouter() 
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    const res = await signIn("credentials", {
      redirect: false,
      username: user,
      password,
    })
    if (res?.error) {
      setError("Usuario o contraseña incorrectos")
    } else {
      router.push("/dashboard") // redirige al dashboard
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h1 className="mb-6 text-2xl font-bold text-center">Iniciar Sesión</h1>
        {error && (
          <p className="mb-4 text-red-600 text-center">{error}</p>
        )}
        <input
          type="text"
          placeholder="Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded"
          autoFocus
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-3 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}
