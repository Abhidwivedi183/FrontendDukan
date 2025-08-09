
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import ShowMyWork from "./Components/ShowMyWork.jsx";
import Login from "./Components/Login.jsx";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState("day");
  const [color, setColor] = useState("#87CEFA");

  useEffect(() => {
    setColor(time === "day" ? "#87CEFA" : "#1a1a2e");
  }, [time]);

  return (
    <div className={`app-container ${time}-mode`} style={{ backgroundColor: color }}>
      <Navbar time={time} toggleTime={() => setTime(time === "day" ? "night" : "day")} />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<ShowMyWork />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;



