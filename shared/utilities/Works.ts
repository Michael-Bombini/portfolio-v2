export interface Work {
  image: string;
  title: string;
  description: string;
  techstack: string[];
  previewLink?: string;
  githubLink?: string;
  index?: number;
  length?: number;
}

export const WORKS: Work[] = [
  {
    image: "/projects/shoply.png",
    title: "Shoply",
    description: `
    Shoply is your go-to e-commerce web app for diverse product categories. Shop conveniently, and enjoy a fantastic experience.`,
    techstack: ["React", "TypeScript", "Redux", "Tailwind"],
    previewLink: "https://shoply-project.vercel.app/",
    githubLink: "https://github.com/Michael-Bombini/Shoply",
  },
  {
    image: "/projects/QMix.jpg",
    title: "QMix",
    description:
      "Test your knowledge with diverse quizzes, score points, and compete on the leaderboard for fun and engagement.",
    techstack: ["React", "TypeScript", "Firebase"],
    previewLink: "https://qmix.vercel.app/",
    githubLink: "https://github.com/Michael-Bombini/QMix",
  },
  {
    image: "/projects/countries.jpg",
    title: "Countries Data",
    description:
      "This is a challenge that i've completed from frontendmentor, i had to integrate a REST Api of countries.",
    techstack: ["Vue", "Tailwind"],
    previewLink: "https://michael-bombini-countriesdata.netlify.app/",
    githubLink: "https://github.com/Michael-Bombini/countries-data",
  },
];
