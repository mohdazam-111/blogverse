import { createContext, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UserContext = createContext();

function Bonus() {
  const name = "Azam Xhaikh";

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="min-h-[70vh] flex items-center justify-center px-4 py-10">
        <UserContext.Provider value={name}>
          <Parent />
        </UserContext.Provider>
      </main>

      <Footer />
    </div>
  );
}

export default Bonus;

function Parent() {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 sm:p-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
        Parent
      </h2>

      <Child />
    </div>
  );
}

function Child() {
  return (
    <div className="border-t border-gray-200 pt-5">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4">
        Child
      </h2>

      <Greeting />
    </div>
  );
}

function Greeting() {
  const name = useContext(UserContext);

  return (
    <div className="bg-blue-50 rounded-lg p-4">
      <h2 className="text-lg sm:text-xl font-medium text-gray-800">
        Hello{" "}
        <span className="text-blue-600 font-bold">
          {name}
        </span>
      </h2>
    </div>
  );
}