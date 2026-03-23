import ClientShell from "@/components/ClientShell";
import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import ProjectsPreview from "@/components/projects/ProjectsPreview";

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
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo_cris.svg",
    shortcut: "/logo_cris.svg",
    apple: "/logo_cris.svg",
  },
};

export default function Home() {
  return (
    <ClientShell>
      <main className="w-full mt-16 flex flex-col">
        {/* HERO */}
        <div id="inicio" className="w-full min-h-screen">
          <HeroSection />
        </div>

        {/* SERVICIOS */}
        <div id="servicios" className="w-full min-h-screen">
          <ServicesSection />
        </div>

        {/* PROYECTOS */}
        <div id="proyectos" className="w-full">
          <ProjectsPreview />
        </div>
      </main>
    </ClientShell>
  );
}