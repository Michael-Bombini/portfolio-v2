"use client";

import { LINKS, OTHER_LINKS } from "@/shared/utilities/Links";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavigationMobile() {
  const [showNavigation, setShowNavigation] = useState<boolean>(false);

  useEffect(() => {
    showNavigation
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [showNavigation]);

  return (
    <div className="block md:hidden">
      <button
        onClick={() => setShowNavigation(true)}
        className="md:hidden w-8 h-8 flex flex-col justify-between items-end cursor-pointer"
        aria-label="Open Navigation Menu"
      >
        <span className="bg-white h-0.5 w-2"></span>
        <span className="bg-white h-0.5 w-4"></span>
        <span className="bg-white h-0.5 w-7"></span>
      </button>

      <nav
        className={`block z-50 absolute bg-black transition-all duration-500 ease-in-out transform inset-0 h-full w-full ${
          showNavigation
            ? "-translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="text-right md:px-9 py-4">
          <button
            onClick={() => setShowNavigation(false)}
            className="md:hidden text-2xl font-semibold hover:text-blue-400 transition px-4"
          >
            X
          </button>
          <ul className="flex flex-col items-center justify-between gap-16 text-2xl py-12">
            {LINKS.map((link) => {
              return (
                <li
                  key={link.text}
                  className="w-full text-center relative after:w-0 
                  hover:after:w-full transition-all hover:transition-all  after:h-full after:absolute 
                  after:transition-all after:duration-500 hover:after:bg-gradient-to-r hover:after:from-blue-700/30 
                  hover:after:to-black after:left-0 after:top-0  duration-700 py-4 text-3xl "
                >
                  <Link
                    onClick={() => setShowNavigation(!showNavigation)}
                    className="relative z-50 text-white/70 hover:text-white transtion-all hover:transition-all"
                    href={link.link}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
            {OTHER_LINKS.map((link) => {
              return (
                <li
                  key={link.text}
                  className="block sm:hidden w-full text-center relative after:w-0 
                    hover:after:w-full transition-all hover:transition-all  after:h-full after:absolute 
                    after:transition-all after:duration-500 hover:after:bg-gradient-to-r hover:after:from-blue-700/30 
                    hover:after:to-black after:left-0 after:top-0  duration-700 py-4 text-3xl "
                >
                  <Link
                    onClick={() => setShowNavigation(!showNavigation)}
                    className="relative z-50 text-white/70 hover:text-white transtion-all hover:transition-all"
                    href={link.link}
                  >
                    {link.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
