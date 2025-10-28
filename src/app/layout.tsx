import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import FloatingButtons from "../components/FloatingButtons";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Alejandro Ponce - Asesor Comercial de Autos",
  description: "Encontrá tu próximo auto con asesoramiento personalizado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} bg-white text-vwBlue overflow-x-hidden`}>
        <Navbar />
        <PageTransition>
          <main className="mt-0">{children}</main>
        </PageTransition>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
