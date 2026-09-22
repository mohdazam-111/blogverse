import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FreeCourse({ course }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-blue-600">
        Free Course
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {course.map((c) => (
          <div
            key={c.id}
            className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="inline-block w-fit bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full">
              FREE
            </span>

            <h3 className="text-lg sm:text-xl font-semibold mt-4 text-gray-800 line-clamp-2">
              {c.title}
            </h3>

            <p className="text-gray-500 mt-3 line-through">
              ₹399
            </p>

            {/* Free Button */}
            <button className="mt-5 bg-green-500 text-white py-2 px-5 rounded-lg hover:bg-green-600 transition duration-300">
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function PaidCourse({ course }) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-blue-600">
        Paid Course
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {course.map((c) => (
          <div
            key={c.id}
            className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="inline-block w-fit bg-blue-100 text-blue-600 text-xs font-bold px-3 py-1 rounded-full">
              PREMIUM
            </span>

            <h3 className="text-lg sm:text-xl font-semibold mt-4 text-gray-800 line-clamp-2">
              {c.title}
            </h3>

            <p className="text-gray-600 mt-3 font-semibold">
              ₹399
            </p>

            {/* Paid Button */}
            <button className="mt-5 bg-blue-500 text-white py-2 px-5 rounded-lg hover:bg-blue-700 transition duration-300">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Course() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getCourses = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch courses");
      }

      const data = await response.json();

      setCourse(data.slice(0, 20));
    } catch (error) {
      console.log("Error:", error);
      setError("Unable to load courses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  const freeCourses = course.filter(
    (course) => !course.completed
  );

  const paidCourses = course.filter(
    (course) => course.completed
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        {/* Page Heading */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Our Courses
          </h1>

          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Learn new skills with our free and premium courses
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              Loading courses...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="text-center py-16">
            <p className="text-red-600 font-medium">
              {error}
            </p>

            <button
              onClick={getCourses}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg transition duration-300"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Courses */}
        {!loading && !error && (
          <>
            <PaidCourse course={paidCourses} />
            <FreeCourse course={freeCourses} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default Course;