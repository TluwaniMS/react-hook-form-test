import React from "react";
import "./HomeView.css";
import { Link } from "react-router-dom";

const HomeView = () => {
  return (
    <div className="main-content-cointainer">
      <div className="links-container">
        <Link to={`/login`} className="login-link">
          Login
        </Link>
        <Link to={`/doctor-creation-form`} className="doctor-creation-link">
          Doctor
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
