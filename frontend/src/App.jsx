import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Course from "./components/Course";
import SignUp from "./components/SignUp";
import Bonus from "./components/Bonus";
import Now from "./components/Now";
import Event from "./components/Event";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const user = true; // Replace with your authentication logic
  return (
    <Routes>
      {user && (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/bonus" element={<Bonus />} />
          <Route path="/now" element={<Now />} />
          <Route path="/event" element={<Event />} />
          <Route path="/form" element={<Form />} />
          <Route path="/list" element={<List />} />
        </>
      )}
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      
    </Routes>
  );
}

export default App;
