import { Work } from "@/shared/utilities/Works";
import Image from "next/image";
import Link from "next/link";

export default function WorkCard({
  title,
  description,
  image,
  techstack,
  githubLink,
  previewLink,
  index,
  length,
}: Work) {
  return (
    <article className={`flex flex-col justify-center items-center md:block ${index === length ? 'md:col-span-2 lg:col-span-1' : ''}`}>
      <Image
        src={image}
        alt="QMix Project"
        width={400}
        height={400}
        loading="lazy"
        className={`md:h-52 w-full rounded-md ${index === length ? 'md:h-96 lg:h-52 object-cover' : ''}`}
      />
      <h3 className="mt-2 text-2xl text-white/90 font-semibold">{title}</h3>
      <div className="flex gap-6 mt-3 flex-wrap justify-center md:justify-start">
        {techstack.map((tech) => {
          return (
            <span className="bg-white px-2 py-1 font-semibold text-black rounded-md" key={tech}>
              {tech}
            </span>
          );
        })}
      </div>

      <p className="text-white/50 mt-3 w-full text-center md:text-left md:h-20">
        {description}
      </p>
      <div className="my-4 flex gap-4 flex-wrap justify-center md:justify-start">
        {previewLink && (
          <Link
            href={`${previewLink}`}
            className="text-lg outline-none text-white border border-white-700 rounded-lg px-4 py-2 font-medium hover:shadow-lg duration-1000 hover:shadow-white transition-all hover:transition-all flex gap-2 items-center"
          >
            <Image
              src={"eye.svg"}
              alt=""
              width={30}
              height={30}
              loading="lazy"
            />
            <span>Live Preview</span>
          </Link>
        )}

        <Link
          href={`${githubLink}`}
          className="text-lg outline-none text-white border border-blue-700 rounded-lg px-4 py-2 font-medium hover:shadow-lg duration-1000 hover:shadow-blue-700 transition-all hover:transition-all flex gap-2 items-center"
        >
          <Image
            src={"/github.svg"}
            alt="GitHub icon"
            width={30}
            loading="lazy"
            height={30}
          />
          <span>GitHub Code</span>
        </Link>
      </div>
    </article>
  );
}
