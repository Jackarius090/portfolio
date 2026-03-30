export type Project = {
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  description: string;
};

export const projects: Project[] = [
  {
    title: "Language Learning App",
    href: "https://language-learning-next-js.vercel.app/",
    image: "/images/language-learning-nextjs-website.png",
    imageAlt: "Language learning website screenshot",
    description: "A Next.js app for structured language study and review.",
  },
  {
    title: "Taiwan Website",
    href: "https://taiwan-website.vercel.app/mapgame",
    image: "/images/taiwan-website.png",
    imageAlt: "Taiwan website screenshot",
    description: "A geography-focused site with an interactive map game.",
  },
  {
    title: "Daylength",
    href: "https://daylight-site-rho.vercel.app/",
    image: "/images/daylength-website.png",
    imageAlt: "Daylength website screenshot",
    description: "A small utility for checking daylight hours by location.",
  },
  {
    title: "Language Learning React App",
    href: "https://languagelearning.fly.dev/",
    image: "/images/language-learning-react-website.png",
    imageAlt: "React language learning website screenshot",
    description: "An earlier React version of the language learning project.",
  },
];
