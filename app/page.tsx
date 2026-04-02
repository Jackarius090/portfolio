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
      <section className="max-w-2xl space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
          Portfolio
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
          Jack Dickinson
        </h1>
        <p className="text-base leading-7 text-slate-600">
          Aspiring developer based in Copenhagen. Here are a few projects I have
          built.
        </p>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Projects
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Simple cards with live links and previews.
          </p>
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
              <Card className="h-full overflow-hidden transition duration-200 group-hover:border-slate-300 group-hover:shadow-md">
                <div className="overflow-hidden border-b border-slate-200 bg-slate-100">
                  <Image
                    className="aspect-[16/10] h-auto w-full object-cover object-top"
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
                  <div className="h-px w-full bg-slate-200" />
                </CardContent>
                <CardFooter>
                  <span className="text-sm font-medium text-slate-700 transition group-hover:text-slate-950">
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
