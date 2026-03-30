import Image from "next/image";

export default function Page() {
  const imageDimensions = { width: 500, height: 400 };
  return (
    <>
      <section className="mx-auto">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Jack Dickinson
        </h1>
        <p className="mb-4">{`Aspiring developer`}</p>
        <div className="my-8"></div>
      </section>
      <section>
        <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
          My Projects
        </h1>
        <section className="mx-auto">
          <div className="grid grid-cols-2 gap-10 place-content-around">
            <a href="https://language-learning-next-js.vercel.app/">
              <Image
                className="border border-amber-400"
                src="/images/language-learning-nextjs-website.png"
                alt="Language learning website screenshot"
                width={imageDimensions.width}
                height={imageDimensions.height}
              />
            </a>
            <a href="https://taiwan-website.vercel.app/mapgame">
              <Image
                className="border border-amber-400"
                src="/images/taiwan-website.png"
                alt="Taiwan website screenshot"
                width={imageDimensions.width}
                height={imageDimensions.height}
              />
            </a>
            <a href="https://daylight-site-rho.vercel.app/">
              <Image
                className="border border-amber-400"
                src="/images/daylength-website.png"
                alt="Daylength website screenshot"
                width={imageDimensions.width}
                height={imageDimensions.height}
              />
            </a>
            <a href="https://languagelearning.fly.dev/">
              <Image
                className="border border-amber-400"
                src="/images/language-learning-react-website.png"
                alt="React language learning website screenshot"
                width={imageDimensions.width}
                height={imageDimensions.height}
              />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
