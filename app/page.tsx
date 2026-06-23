import Image from "next/image";
import ViewContentBox from "@/components/ViewContentBox";

export default function Page() {
  return (
    <div className="space-y-8 pb-4 p-4">
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
            <p className="ml-2 hover:text-slate-950">LinkedIn</p>
          </a>
        </div>
        <p className="text-base leading-7 text-slate-600">
          Aspiring developer based in Copenhagen.
        </p>
      </section>
      <section>
        <ViewContentBox />
      </section>
    </div>
  );
}
