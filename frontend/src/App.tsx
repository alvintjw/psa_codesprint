import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Upskilling from "./pages/Upskilling";
import Feedback from "./pages/Feedback";
import InterestGroups from "./pages/InterestGroups";

const App: React.FC = () => {
  return (
    <Router>
      {/* Navbar always stays on the left side */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/upskilling" element={<Upskilling />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/interest-groups" element={<InterestGroups />} />
      </Routes>
    </Router>
  );
};

export default App;
