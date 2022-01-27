import React from "react";
import "./DoctorCreationForm.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserMd, faArrowLeft, faUndoAlt } from "@fortawesome/free-solid-svg-icons";
import { specialties } from "../../display-support/specialties-support";
import { genders } from "../../display-support/gender-support";
import { Operations } from "../../display-support/operations-support";
import { CREATE_DOCTOR } from "../../mutations/doctor.mutation";
import ResponseHandler from "../response-handler/ResponseHandler";
import SpinnerDisplay from "../spinner-display/SpinnerDisplay";

const DoctorCreationForm = () => {
  const [createDoctor, { data, loading, error }] = useMutation(CREATE_DOCTOR);

  const schema = yup.object({
    name: yup.string().required("Name is required"),
    surname: yup.string().required("Surname is required"),
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    gender: yup.string().required("Gender is required"),
    specialty: yup.string().required("Specialty is required")
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const submitDoctorCreation = (data) => {
    createDoctor({
      variables: {
        name: data.name,
        surname: data.surname,
        email: data.email,
        gender: data.gender,
        specialty: data.specialty
      }
    });
    reset();
  };

  const resetFormFields = () => reset();

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  if (loading) {
    return <SpinnerDisplay />;
  }

  if (data) {
    return <ResponseHandler data={data.createDoctor} operation={Operations.DoctorCreation} />;
  }

  if (error) {
    return <div>There was an error creating the doctor..</div>;
  }

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
        <form onSubmit={handleSubmit(submitDoctorCreation)} className="form-input-container">
          <div className="input-container">
            <input placeholder="name" className="input" {...register("name")}></input>
            {errors.name?.message}
          </div>
          <div className="input-container">
            <input placeholder="surname" className="input" {...register("surname")}></input>
            {errors.surname?.message}
          </div>
          <div className="input-container">
            <input placeholder="email" className="input" {...register("email")}></input>
            {errors.email?.message}
          </div>
          <div className="input-container">
            <select {...register("specialty")}>
              <option value="" selected hidden>
                select specialty
              </option>
              {specialties.map((specialty) => (
                <option key={specialty.label} value={specialty.value}>
                  {specialty.label}
                </option>
              ))}
            </select>
            {errors.specialty?.message}
          </div>
          <div className="input-container">
            <select {...register("gender")}>
              <option value="" selected hidden>
                select gender
              </option>
              {genders.map((gender) => (
                <option key={gender.label} value={gender.value}>
                  {gender.label}
                </option>
              ))}
            </select>
            {errors.gender?.message}
          </div>
          <div className="doctors-creation-button-container">
            <button type="submit">submit</button>
          </div>
          <div className="form-refresh-container">
            <FontAwesomeIcon icon={faUndoAlt} onClick={() => resetFormFields()} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default DoctorCreationForm;
