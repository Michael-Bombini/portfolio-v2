import Image from "next/image";
import Link from "next/link";

export default function FooterContactArea() {
  return (
    <footer className="bg-customBlack text-white mt-24 text-center py-12 px-10">
      <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center gap-6 flex-wrap text-lg">
        <div>
          &copy; <span className="ms-4">Michael Bombini - 2023</span>
        </div>
        <div className="flex gap-8">
          <div className="w-12 h-12 border border-blue-500 rounded-full flex items-center justify-center">
            <Link href="https://github.com/Michael-Bombini" className="p-2">
              <Image
                src="/github.svg"
                alt="GitHub icon"
                width={30}
                height={30}
                loading="lazy"
              />
            </Link>
          </div>
          <div className="w-12 h-12 border border-blue-500 rounded-full flex items-center justify-center">
            <Link href="https://github.com/Michael-Bombini" className="p-2">
              <Image
                src="/linkedin.svg"
                alt="GitHub icon"
                width={30}
                height={30}
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
