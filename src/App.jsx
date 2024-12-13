// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import SignUp from "./pages/SignUp";

import "./App.css";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
      </Routes>
      </Router>
    </div>
  );
}
