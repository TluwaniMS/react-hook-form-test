import React from "react";
import "./LoginForm.css";
import ResponseHandler from "../response-handler/ResponseHandler";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSignInAlt, faUndoAlt } from "@fortawesome/free-solid-svg-icons";

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

      <div className="login-form-container">
        <form className="form-input-container">
          <div className="input-container">
            <input placeholder="email" className="input"></input>
          </div>
          <div className="input-container">
            <input placeholder="password" type="password" className="input"></input>
          </div>
          <div className="login-button-container">
            <button type="submit">submit</button>
          </div>
          <div className="form-refresh-container">
            <FontAwesomeIcon icon={faUndoAlt} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
