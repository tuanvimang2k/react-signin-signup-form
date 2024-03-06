import React from "react";
import "./App.css";
import { Login } from "./Login";
import { MyChart } from "./MyChart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chart from "chart.js/auto";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/my-chart" element={<MyChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
