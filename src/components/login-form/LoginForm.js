import React from "react";
import "./LoginForm.css";
import ResponseHandler from "../response-handler/ResponseHandler";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className="main-login-form-container">
      <div>
        <div className="back-button-container">
          <button
            className="home-navigation-button"
            onClick={() => {
              navigateHome();
            }}
          >
            <span className="back-icon-container">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            Home
          </button>
        </div>
      </div>

      <div className="login-view-icon">
        <FontAwesomeIcon icon={faSignInAlt} />
      </div>
    </div>
  );
};

export default LoginForm;
