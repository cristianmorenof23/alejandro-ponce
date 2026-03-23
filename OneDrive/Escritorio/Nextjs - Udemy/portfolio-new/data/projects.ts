// 1. Definimos el contrato (Interface)
export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  url: string;
  problem: string;
  solution: string[];
  results: string[];
  tags: string[]; // <--- Agregamos esto
}

export const projects: Project[] = [
  {
    slug: "velas",
    title: "Ecommerce de Velas Artesanales",
    description: "Tienda online optimizada para convertir visitas en ventas.",
    image: "/velas_1.jpg",
    url: "https://www.velasluzserena.com/",
    problem: "El cliente vendía solo por Instagram y no lograba escalar sus ventas.",
    solution: [
      "Diseño moderno alineado a la marca",
      "Optimización mobile",
      "Integración con WhatsApp",
    ],
    results: [
      "Más consultas diarias",
      "Ventas automatizadas 24/7",
    ],
    tags: ["Next.js", "E-commerce", "Tailwind"], // <--- Datos reales
  },
  {
    slug: "trainer",
    title: "Web para Entrenador Personal",
    description: "Landing enfocada en captar nuevos clientes.",
    image: "/trainer_1.jpg",
    url: "https://www.trainersantiriccio.com/home/inicio",
    problem: "El cliente no tenía una web profesional y perdía oportunidades.",
    solution: [
      "Landing clara y directa",
      "Sección de servicios optimizada",
    ],
    results: [
      "Más leads desde la web",
      "Mejor imagen profesional",
    ],
    tags: ["React", "Fitness", "Marketing"], // <--- Datos reales
  },
];