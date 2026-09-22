import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://blogverse-5up2.onrender.com/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Signup successful!");

      setUsername("");
      setEmail("");
      setPassword("");

      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Server se connect nahi ho pa raha");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-100">
      <div className="bg-white w-80 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-5">
          Signup
        </h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white rounded-md px-4 py-2 w-full hover:bg-blue-900 transition duration-300"
          >
            Signup
          </button>
        </form>

        <p className="mt-3 text-center">
          Already Account?{" "}
          <Link
            className="text-blue-600 hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;