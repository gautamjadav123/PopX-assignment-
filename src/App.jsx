import { useState } from "react";
import { Route, Routes } from "react-router";
import Login from "./authentication/Login";
import Signup from "./authentication/Signup";
import LandingPage from "./page/LandingPage";
import Home from "./page/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
