function Card({ title, body }) {
  return (
    <div className="h-full flex flex-col border border-gray-200 rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-5 sm:p-6">

      {/* Title */}
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 capitalize line-clamp-2">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 line-clamp-3">
        {body}
      </p>

      {/* Button */}
      <div className="mt-auto">
        <button className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg transition duration-300">
          Read More
        </button>
      </div>

    </div>
  );
}

export default Card;