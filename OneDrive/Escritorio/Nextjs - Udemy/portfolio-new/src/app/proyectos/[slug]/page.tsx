import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../../../data/projects";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProjectPage({ params }: any) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-white">

      <h1 className="text-4xl font-bold mb-6">
        {project.title}
      </h1>

      <Image
        width={500}
        height={300}
        alt={project.title}
        src={project.image}
        className="rounded-2xl mb-10"
      />

      <p className="text-gray-400 mb-10">
        {project.description}
      </p>

      <h2 className="text-2xl mb-3">El desafío</h2>
      <p className="text-gray-400 mb-8">
        {project.problem}
      </p>

      <h2 className="text-2xl mb-3">La solución</h2>
      <ul className="text-gray-400 mb-8 list-disc pl-5">
        {project.solution.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <h2 className="text-2xl mb-3">Resultados</h2>
      <ul className="text-gray-400 mb-8 list-disc pl-5">
        {project.results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <a
        href={project.url}
        target="_blank"
        className="px-6 py-3 bg-cyan-500 rounded-full text-black"
      >
        Ver sitio online
      </a>

    </section>
  );
}