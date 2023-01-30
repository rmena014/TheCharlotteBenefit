import React from "react";
import "./App.css";
import Home from "./components/Home";
import SignupForm from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import LandingPageVideo from "./components/LandingPageVideo";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageVideo />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
