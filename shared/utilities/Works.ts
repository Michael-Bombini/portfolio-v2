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
    image: "/projects/QMix.jpg",
    title: "QMix",
    description:
      "Test your knowledge with diverse quizzes, score points, and compete on the leaderboard for fun and engagement",
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
  {
    image: "/projects/deliveboo.jpg",
    title: "Deliveboo",
    description: `
    This web app is inspired by Deliveroo and was collaboratively developed by our team of five members.`,
    techstack: ["Vue", "Laravel", "Bootstrap", "SQL"],
    githubLink: "https://github.com/proj-65-team4/DeliverBoo4/tree/dev",
  },
];
