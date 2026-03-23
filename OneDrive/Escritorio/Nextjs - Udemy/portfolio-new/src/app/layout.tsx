// app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Particles from "@/components/Particles";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorCustom from "@/components/ProjectSection";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---------- SEO y Metadata ----------
export const metadata: Metadata = {
  title: "Cristian Moreno | Desarrollador Full Stack & Analista de Sistemas",
  description:
    "Portafolio de Cristian Moreno: Proyectos innovadores en Next.js, NestJS, Prisma y más. Full Stack Developer con pasión por la tecnología y creatividad.",
  applicationName: "Portafolio Cristian Moreno",
  authors: [{ name: "Cristian Moreno", url: "https://cristianmoreno.site" }],
  generator: "Next.js",
  keywords: [
    "Cristian Moreno",
    "Full Stack Developer",
    "Next.js",
    "React",
    "NestJS",
    "Prisma",
    "Portafolio",
    "Programador",
    "Analista de Sistemas",
  ],
  creator: "Cristian Moreno",
  publisher: "Cristian Moreno",
  metadataBase: new URL("https://cristianmoreno.site"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://cristianmoreno.site",
    title: "Cristian Moreno | Desarrollador Full Stack",
    description:
      "Portafolio de Cristian Moreno: Full Stack Developer y Analista de Sistemas, mostrando proyectos innovadores en tecnología.",
    siteName: "Cristian Moreno Portfolio",
    images: [
      {
        url: "/logo_cris.png",
        width: 1200,
        height: 630,
        alt: "Cristian Moreno - Portafolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cristian Moreno | Desarrollador Full Stack",
    description:
      "Portafolio de Cristian Moreno mostrando proyectos en Next.js, NestJS y más. Full Stack Developer creativo.",
    site: "@TuTwitter",
    creator: "@TuTwitter",
    images: ["/logo_cris.png"],
  },
  icons: {
    icon: "/logo_cris.svg",
    shortcut: "/logo_cris.svg",
    apple: "/logo_cris.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-[#050510] text-white`}
      >
        {/* CURSOR: Renderizado al inicio para que no lo tape nada */}
        <CursorCustom />
        <ScrollToTop />
        {/* NAVBAR */}
        <Navbar />

        {/* FONDO */}
        <Particles />

        {/* CONTENIDO */}
        <main className="relative z-10 min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </main>

        <Analytics />

        {/* SEO JSON */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Cristian Moreno",
              url: "https://cristianmoreno.site",
              sameAs: [
                "https://github.com/tu-usuario",
                "https://www.linkedin.com/in/tu-usuario",
              ],
              jobTitle: "Desarrollador Full Stack",
            }),
          }}
        />
      </body>
    </html>
  );
}
