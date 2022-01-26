import React from "react";
import "./HomeView.css";
import { faAddressCard, faPlus, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeView = () => {
  return (
    <div className="main-content-cointainer">
      <div className="icon-container">
        <FontAwesomeIcon icon={faAddressCard} />
      </div>
      <div className="home-view-text">Form Validation Test Application</div>
      <div className="links-container">
        <Link to={`/login`} className="login-link">
          Login
          <span className="navigation-icon">
            <FontAwesomeIcon icon={faSignInAlt} />
          </span>
        </Link>
        <Link to={`/doctor-creation-form`} className="doctor-creation-link">
          Doctor
          <span className="navigation-icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeView;
