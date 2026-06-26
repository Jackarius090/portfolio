import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { projects } from "../app/projects-data";

const imageDimensions = { width: 1200, height: 900 };

export default function ProjectCards() {
  return (
    <section id="projects" className="space-y-4">
      <h1 className="font-bold">Projects</h1>

      <p>Here are a few projects I have built.</p>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.href}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <Card className="h-full transition duration-200 group-hover:border-slate-300 group-hover:shadow-md">
              <Image
                className="aspect-16/10 h-auto w-full object-cover object-top overflow-hidden border rounded-t-xl border-b-slate-200"
                src={project.image}
                alt={project.imageAlt}
                width={imageDimensions.width}
                height={imageDimensions.height}
                priority={project === projects[0]}
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
}
