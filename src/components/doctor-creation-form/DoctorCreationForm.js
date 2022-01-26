import React from "react";
import ResponseHandler from "../response-handler/ResponseHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faArrowLeft, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { specialties } from "../../display-support/specialties-support";
import { genders } from "../../display-support/gender-support";
import "./DoctorCreationForm.css";
import { useNavigate } from "react-router-dom";

const DoctorCreationForm = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="main-doctor-creation-form-container">
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
      <div className="doctors-view-icon">
        <FontAwesomeIcon icon={faUserMd} />
      </div>
      <div className="doctors-view-text">Add a doctor to the directrory</div>
      <div className="doctor-creation-form-container ">
        <form className="form-input-container">
          <div className="input-container">
            <input placeholder="name" className="input"></input>
          </div>
          <div className="input-container">
            <input placeholder="surname" className="input"></input>
          </div>
          <div className="input-container">
            <input placeholder="email" className="input"></input>
          </div>
          <div className="input-container">
            <select>
              {specialties.map((specialty) => (
                <option key={specialty.label} value={specialty.value}>
                  {specialty.label}
                </option>
              ))}
            </select>
          </div>
          <div className="input-container">
            <select>
              {genders.map((gender) => (
                <option key={gender.label} value={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>
          </div>
          <div className="doctors-creation-button-container">
            <button>submit</button>
          </div>
          <div className="form-refresh-container">
            <FontAwesomeIcon icon={faUndoAlt} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorCreationForm;
