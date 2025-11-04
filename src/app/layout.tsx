import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import FloatingButtons from "../components/FloatingButtons";
import ChatBot from "../components/ChatBot"; // ✅ AGREGADO
import "./globals.css";
import { Poppins } from "next/font/google";

// Fuente
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

// 🧠 SEO GLOBAL (para todo el sitio)
export const metadata = {
  title: "Alejandro Ponce | Asesor Volkswagen Córdoba",
  description:
    "Encontrá tu próximo Volkswagen con asesoramiento personalizado. Alejandro Ponce, asesor comercial oficial en AutoHaus Córdoba. Modelos, precios y financiación.",
  keywords: [
    "Volkswagen Córdoba",
    "Asesor Volkswagen",
    "AutoHaus",
    "Alejandro Ponce",
    "T-Cross",
    "Nivus",
    "Taos",
    "Amarok",
    "Tiguan",
    "Virtus",
    "Polo",
    "autos VW Argentina",
    "compra tu 0km",
  ],
  authors: [{ name: "Alejandro Ponce", url: "https://alejandroponce.vercel.app" }],
  creator: "Cristian Moreno",
  publisher: "AutoHaus Volkswagen",
  openGraph: {
    title: "Alejandro Ponce | Asesor Volkswagen Córdoba",
    description:
      "Descubrí la gama Volkswagen con atención personalizada. Cotizá tu 0km hoy con Alejandro Ponce en AutoHaus Córdoba.",
    url: "https://alejandroponce.vercel.app",
    siteName: "Alejandro Ponce - Volkswagen Córdoba",
    images: [
      {
        url: "/alejandro_perfil.jpg",
        width: 1200,
        height: 630,
        alt: "Asesor Volkswagen Alejandro Ponce - AutoHaus Córdoba",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  icons: {
    icon: "/logo_web.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${poppins.className} bg-white text-vwBlue overflow-x-hidden antialiased`}
      >
        <Navbar />

        <PageTransition>
          <main className="mt-0">{children}</main>
        </PageTransition>

        <Footer />

        {/* ✅ Chat bot separado */}
        <ChatBot />

        {/* ✅ Botones flotantes separados */}
        <FloatingButtons />
      </body>
    </html>
  );
}
