import "./App.css";
import Home from "./components/Home";
import SignupForm from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import LandingPageVideo from "./components/LandingPageVideo";
import Resources from "./pages/Resources";
import Opportunities from "./pages/Opportunities";
import Practice from "./pages/Practice";
import Courses from "./pages/Courses";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageVideo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/resources" element={<Resources />} />
        <Route path="/profile/opportunities" element={<Opportunities />} />
        <Route path="/profile/courses" element={<Courses />} />
        <Route path="/profile/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
};

export default App;
