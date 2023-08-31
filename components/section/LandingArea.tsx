import Image from "next/image";
import ButtonDiscoverMore from "../ui/ButtonDiscoverMore";

export default function LandingArea() {
  return (
    <section className="py-32 bg-customBlack">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/michael.jpg"}
          alt="michael"
          width={150}
          height={150}
          loading="lazy"
          className="w-52 rounded-full h-52 object-cover object-top block"
        />
        <h1 className="text-center text-4xl mt-4 md:text-6xl lg:text-8xl font-bold bg-gradient-to-br from-blue-700  to-cyan-500 bg-clip-text text-transparent">
          Michael Bombini
        </h1>
        <h2 className="text-md md:text-3xl font-bold text-white mt-2">
          FULLSTACK-DEVELOPER
        </h2>
        <p className="text-base max-w-md text-center my-4 text-white/50">
          I'm a FullStack Developer based in Italy, I have over 1 year of
          experience and I specialize in creating Web Apps.
        </p>
       <ButtonDiscoverMore/>
      </div>
    </section>
  );
}
