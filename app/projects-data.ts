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
    description: "A Next.js app for language study and review.",
  },
  {
    title: "Taiwan Website",
    href: "https://taiwan-website.vercel.app/mapgame",
    image: "/images/taiwan-website.png",
    imageAlt: "Taiwan website screenshot",
    description: "An interactive map game of Taiwan.",
  },
  {
    title: "Daylength visualisation",
    href: "https://daylight-site-rho.vercel.app/",
    image: "/images/daylength-website.png",
    imageAlt: "Daylength website screenshot",
    description: "A visualisation of daylight hours by location.",
  },
  {
    title: "Language Learning React App",
    href: "https://languagelearning.fly.dev/",
    image: "/images/language-learning-react-website.png",
    imageAlt: "React language learning website screenshot",
    description: "An earlier React version of the language learning project.",
  },
];
