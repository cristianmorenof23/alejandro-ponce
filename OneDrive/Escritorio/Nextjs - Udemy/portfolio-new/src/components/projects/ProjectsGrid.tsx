import Link from "next/link";
import Image from "next/image";
import { projects } from "../../../data/projects";

export default function ProjectsGrid() {
  return (
    <section className="px-6 py-20">
      <h1 className="text-4xl text-white text-center mb-16">
        Todos mis proyectos
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/proyectos/${p.slug}`}
            className="group rounded-2xl overflow-hidden"
          >
            <div className="relative h-56">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-110 transition"
              />
            </div>

            <div className="p-4 bg-black">
              <h3 className="text-white font-semibold">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {p.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}