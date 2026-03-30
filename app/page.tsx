import Image from "next/image";
import { projects } from "./projects-data";

const imageDimensions = { width: 1200, height: 900 };

export default function Page() {
  return (
    <div className="space-y-16">
      <section className="max-w-2xl space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-neutral-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950">
          Jack Dickinson
        </h1>
        <p className="text-lg leading-8 text-neutral-700">Aspiring developer</p>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-950">
            Projects
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            Selected work with live demos.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                className="aspect-[4/3] h-auto w-full object-cover"
                src={project.image}
                alt={project.imageAlt}
                width={imageDimensions.width}
                height={imageDimensions.height}
                priority={project === projects[0]}
              />
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold text-neutral-950">
                  {project.title}
                </h3>
                <p className="text-sm leading-6 text-neutral-600">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
