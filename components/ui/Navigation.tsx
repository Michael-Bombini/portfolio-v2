import Link from "next/link";
import Image from "next/image";
import NavigationMobile from "./NavigationMobile";
import { LINKS } from "@/shared/utilities/Links";


export default function Navigation() {
  return (
    <header className="px-4 md:px-9 py-4 text-white/80 flex justify-between items-center">
      <Link className="" href={"/"}>
        <Image
          src={"/logo.svg"}
          alt="Personal logo"
          width={80}
          height={80}
          loading="lazy"
          className="w-16"
        />
      </Link>

      <nav className="hidden md:block">
        <ul className="text-lg flex gap-8">
          {LINKS.map((link) => {
            return (
              <li key={link.text}>
                <Link
                  className="hover:text-blue-400 transition"
                  href={link.link}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="gap-6 hidden sm:flex">
        <li>
          <Link className="" href={"#skills"}>
            <Image
              src={"/github.svg"}
              alt="GitHub icon"
              width={30}
              loading="lazy"
              height={30}
              className="w-7"
            />
          </Link>
        </li>
        <li>
          <Link className="" href={"#skills"}>
            <Image
              src={"/linkedin.svg"}
              alt="Linkedin icon"
              width={30}
              height={30}
              loading="lazy"
              className="w-7"
            />
          </Link>
        </li>
      </ul>
      <NavigationMobile />
    </header>
  );
}
