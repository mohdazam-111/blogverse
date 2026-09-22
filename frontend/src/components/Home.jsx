import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Card from "./Card";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getPosts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();

      setPosts(data);
    } catch (error) {
      console.log("Error:", error);
      setError("Unable to load blogs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Hero />

      <section
        id="latest-blogs"
        className="py-12 sm:py-14 lg:py-16 bg-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section Heading */}
          <div className="text-center mb-9 sm:mb-10">

            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight">
                Latest{" "}
                <span className="text-blue-600">Blogs</span>
              </h2>

              <div className="h-1 w-12 bg-blue-600 rounded-full mx-auto mt-2"></div>
            </div>

            <p className="mt-3 text-sm sm:text-base text-gray-500">
              Explore our latest articles and insights
            </p>

          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center items-center py-16">
              <p className="text-gray-600 text-lg">
                Loading blogs...
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
                onClick={getPosts}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition duration-300 shadow-sm hover:shadow-md"
              >
                Try Again
              </button>
            </div>
          )}

          {/* Empty */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">
                No blogs available.
              </p>
            </div>
          )}

          {/* Blog Cards */}
          {!loading && !error && posts.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  body={post.body}
                />
              ))}
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;