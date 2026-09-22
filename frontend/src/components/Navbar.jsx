import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:4001/user/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Logout successful!");
      setIsMenuOpen(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Logout failed");
    }
  };

  const goTo = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Navbar Main */}
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => goTo("/")}
            className="flex items-center shrink-0"
          >
            <img
              src={logo}
              alt="BlogVerse Logo"
              className="h-24 sm:h-28 md:h-32 w-auto object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">

            {/* Home */}
            <button
              onClick={() => goTo("/")}
              className="group relative px-5 py-2.5 rounded-lg text-gray-700 font-semibold hover:text-blue-600 transition-all duration-300"
            >
              <span className="relative z-10">
                Home
              </span>

              <span className="absolute inset-0 rounded-lg bg-blue-50 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>

              <span className="absolute left-1/2 bottom-1 h-0.5 w-0 bg-blue-600 rounded-full -translate-x-1/2 group-hover:w-8 transition-all duration-300"></span>
            </button>

            {/* Course */}
            <button
              onClick={() => goTo("/course")}
              className="group relative px-5 py-2.5 rounded-lg text-gray-700 font-semibold hover:text-blue-600 transition-all duration-300"
            >
              <span className="relative z-10">
                Course
              </span>

              <span className="absolute inset-0 rounded-lg bg-blue-50 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300"></span>

              <span className="absolute left-1/2 bottom-1 h-0.5 w-0 bg-blue-600 rounded-full -translate-x-1/2 group-hover:w-8 transition-all duration-300"></span>
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="ml-3 px-5 py-2.5 rounded-lg bg-red-500 text-white font-semibold shadow-sm hover:bg-red-600 hover:shadow-md active:bg-red-700 transition-all duration-300"
            >
              Logout
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 shadow-sm">

              {/* Home */}
              <button
                onClick={() => goTo("/")}
                className="w-full flex items-center px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-300"
              >
                Home
              </button>

              {/* Course */}
              <button
                onClick={() => goTo("/course")}
                className="w-full flex items-center px-4 py-3 rounded-lg text-gray-700 font-semibold hover:bg-white hover:text-blue-600 hover:shadow-sm transition-all duration-300"
              >
                Course
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-full mt-2 px-4 py-3 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 active:bg-red-700 transition-all duration-300"
              >
                Logout
              </button>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;