// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Groceries from "./pages/Groceries";
import Product from "./pages/Product";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import EmployeeLogIn from "./pages/EmployeeLogIn";
import Cart from "./pages/Cart";

import "./App.css";
export default function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Groceries />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/Employee-log-in" element={<EmployeeLogIn />} />
        </Routes>
      </Router>
    </div>
  );
}
