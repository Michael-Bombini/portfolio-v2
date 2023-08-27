import Image from "next/image";

export default function LandingArea() {
  return (
    <section className="py-32 bg-customBlack">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/michael.jpg"}
          alt="michael"
          width={200}
          height={200}
          className="w-52 rounded-full h-52 object-cover object-top grayscale block"
          loading="lazy"
        />
        <h1 className="text-center text-4xl mt-4 md:text-6xl lg:text-8xl font-bold bg-gradient-to-br from-blue-700  to-cyan-500 bg-clip-text text-transparent">
          Michael Bombini
        </h1>
        <h2 className="text-md md:text-3xl font-bold text-white mt-2">
          FULLSTACK-DEVELOPER
        </h2>
        <p className="text-base max-w-md text-center my-4 text-white/50">
          I'm a FullStack Developer based in Italy, I have over 1 year of
          experience and i specialize in creating Web Apps.
        </p>
        <button className="relative inline-block text-lg group outline-none mt-4 shadow-2xl shadow-blue-500">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-black transition-colors duration-300 ease-out border-2 border-blue-700 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-customBlack group-hover:-rotate-180 ease"></span>
            <span className="relative">Discover More</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear  rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </button>
      </div>
    </section>
  );
}
