function Hero() {
  const scrollToBlogs = () => {
    document.getElementById("latest-blogs")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gray-100 py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Welcome to{" "}
          <span className="text-blue-600">BlogVerse</span>
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          Explore blogs on technology, programming, lifestyle, business, and
          more topics. Learn something new every day.
        </p>

        {/* Button */}
        <div className="mt-7">
          <button
            onClick={scrollToBlogs}
            className="inline-flex w-fit items-center justify-center bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2 px-5 rounded-lg transition duration-300"
          >
            Explore Blog
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;