export default function ContactArea() {
  return (
    <section className="text-center" id="contact">
      <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black">
        Contact Me
      </h2>
      <p className="my-3 text-lg">Got any questions?</p>
      <a
        href="mailto:bombini.michael@gmail.com"
        className="inline-block mt-4 px-6 py-3  bg-customBlack border-2 border-blue-700  text-white rounded-md shadow-2xl shadow-blue-500 hover:bg-white hover:text-black hover:font-semibold transition-all hover:transition-all duration-1000"
      >
        Get in touch
      </a>
    </section>
  );
}
