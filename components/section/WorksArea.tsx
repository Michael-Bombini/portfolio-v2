import Image from "next/image";

export default function WorksArea() {
  return (
    <section className="bg-customBlack">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center">
        Works
      </h2>
      <p className="my-4 text-white text-center max-w-xl mx-auto">
        Here, you can explore a selection of my developed side projects. For a
        more comprehensive list, feel free to visit my GitHub profile.
      </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        <article className="flex flex-col justify-center items-center md:block">
          <Image
            src={"/projects/QMix.jpg"}
            alt="QMix Project"
            width={300}
            height={300}
            className="w-auto rounded-md"
          />
          <h3 className="mt-2 text-2xl text-white font-semibold">QMix</h3>
          <div className="flex gap-6 mt-3 flex-wrap justify-center md:justify-start">
            <span className="bg-white px-2 py-1 font-semibold text-black rounded-md">
              React
            </span>
            <span className="bg-white px-2 py-1 font-semibold text-black rounded-md">
              TypeScript
            </span>
            <span className="bg-white px-2 py-1 font-semibold text-black rounded-md">
              Firebase
            </span>
          </div>
          <p className="text-white/50 mt-3 w-2/3 md:w-full text-center md:text-left">
            Test your knowledge with diverse quizzes, score points, and compete
            on the leaderboard for fun and engagement
          </p>
          <div className="my-4 flex gap-6">
          <button className="text-lg outline-none text-white border border-blue-700 rounded-lg px-4 py-2 font-medium hover:shadow-lg duration-1000 hover:shadow-blue-700 transition-all hover:transition-all">
              Live Preview
            </button>
            <button className="text-lg outline-none text-white border border-blue-700 rounded-lg px-4 py-2 font-medium hover:shadow-lg duration-1000 hover:shadow-blue-700 transition-all hover:transition-all">
              GitHub Code
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
