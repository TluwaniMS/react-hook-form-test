import React from "react";
import ResponseHandler from "../response-handler/ResponseHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { specialties } from "../../display-support/specialties-support";
import { genders } from "../../display-support/gender-support";
import "./DoctorCreationForm.css";

const DoctorCreationForm = () => {
  return (
    <div className="main-doctor-creation-form-container">
      <div className="doctors-view-icon">
        <FontAwesomeIcon icon={faUserMd} />
      </div>
      <div className="doctors-view-text">Add a doctor to the directrory</div>
      <div className="doctor-creation-form-container"></div>
    </div>
  );
};

export default DoctorCreationForm;
