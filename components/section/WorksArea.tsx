import { WORKS } from "@/shared/utilities/Works";
import Image from "next/image";
import WorkCard from "../work/WorkCard";

export default function WorksArea() {
  return (
    <section className="bg-customBlack" id="projects">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center">
        Works
      </h2>
      <p className="my-3 text-lg text-white text-center max-w-xl mx-auto">
        Here, you can explore a selection of my developed side projects. For a
        more comprehensive list, feel free to visit my GitHub profile.
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-4">
        {WORKS.map((work,index) => {
          return (
            <WorkCard
              key={work.title}
              title={work.title}
              description={work.description}
              image={work.image}
              techstack={work.techstack}
              githubLink={work.githubLink}
              previewLink={work.previewLink}
              index={index}
              length={WORKS.length-1}
            />
          );
        })}
      </div>
    </section>
  );
}
