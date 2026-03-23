import type { Metadata } from "next"
import "./globals.css"
import { Sidebar } from "lucide-react"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Ventas Controller",
  description: "Página dedicada al seguimiento de ventas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <Providers>
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
