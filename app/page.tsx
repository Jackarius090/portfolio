import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { projects } from "./projects-data";

const imageDimensions = { width: 1200, height: 900 };

export default function Page() {
  return (
    <div className="space-y-8 pb-4">
      <section className="max-w-3xl space-y-3 px-1 py-1">
        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-stone-500">
          Portfolio
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-stone-50 md:text-5xl">
          Jack Dickinson
        </h1>
        <p className="max-w-2xl text-base leading-6 text-stone-300">
          Aspiring developer based in Copenhagen.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-stone-100">
              Selected Projects
            </h2>
            <p className="mt-1 text-sm text-stone-400">
              A small set of shipped projects with live demos.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.href}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <Card className="h-full overflow-hidden transition duration-200 group-hover:-translate-y-1 group-hover:border-amber-200/25 group-hover:bg-white/8">
                <div className="overflow-hidden border-b border-white/10">
                  <Image
                    className="aspect-[16/10] h-auto w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
                    src={project.image}
                    alt={project.imageAlt}
                    width={imageDimensions.width}
                    height={imageDimensions.height}
                    priority={project === projects[0]}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-px w-full bg-white/10" />
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-medium text-amber-100 transition group-hover:text-amber-200">
                    Visit project
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
