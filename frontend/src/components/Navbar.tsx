import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to="/upskilling">Upskilling</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>
        <li>
          <Link to="/interest-groups">Interest Groups</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
