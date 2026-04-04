import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { projects } from "./projects-data";

const imageDimensions = { width: 1200, height: 900 };

export default function Page() {
  return (
    <div className="space-y-8 pb-4">
      <section className="max-w-2xl space-y-3">
        <div className="flex gap-20">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
            Jack Dickinson
          </h1>
          <a
            className="flex items-center hover:text-slate-950"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Jackarius090"
          >
            <Image
              src={"/images/GitHub_Invertocat_Black.svg"}
              alt="github logo"
              width={25}
              height={25}
            />
            <p className="ml-2 hover:text-slate-950">github</p>
          </a>
          <a
            className="flex items-center hover:text-slate-950"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jack-dickinson-b1a44a195/"
          >
            <Image
              src={"/images/linkedin-svg.svg"}
              alt="github logo"
              width={25}
              height={25}
            />
            <p className="ml-2 hover:text-slate-950">Linked in</p>
          </a>
        </div>
        <p className="text-base leading-7 text-slate-600">
          Aspiring developer based in Copenhagen. Here are a few projects I have
          built.
        </p>
      </section>

      <section className="space-y-4">
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
                <div className="overflow-hidden border-b border-slate-200 bg-slate-100">
                  <Image
                    className="aspect-16/10 h-auto w-full object-cover object-top rounded-t-xl"
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
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
