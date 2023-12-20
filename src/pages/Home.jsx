import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
         Quickly use below link
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/landingpageone">LandingpageOne</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
