"use client";
export default function ButtonDiscoverMore() {
  return (
    <button
      onClick={() => {
        window.scroll(0, 600);
      }}
      className="relative inline-block text-lg group outline-none mt-4 shadow-2xl shadow-blue-500"
      aria-label="Discover More"
    >
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
  );
}
