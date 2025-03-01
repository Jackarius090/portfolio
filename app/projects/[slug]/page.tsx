import { notFound } from "next/navigation";
import { baseUrl } from "app/sitemap";

export default function Projects({ params }) {
  // let post = getBlogPosts().find((post) => post.slug === params.slug);

  // if (!post) {
  //   notFound();
  // }

  return (
    <section>
      <h1 className="title font-semibold text-2xl tracking-tighter">
        Project 1
      </h1>
    </section>
  );
}
