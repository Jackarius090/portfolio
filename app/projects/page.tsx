export const metadata = {
  title: "Projects",
  description: "Look at my projects.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        My Projects
      </h1>
      <ul>
        <li>
          <a href="https://language-learning-next-js.vercel.app/">
            Language Learning App
          </a>
        </li>
      </ul>
    </section>
  );
}
