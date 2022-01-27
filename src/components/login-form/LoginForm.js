import React from "react";
import "./LoginForm.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ResponseHandler from "../response-handler/ResponseHandler";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSignInAlt, faUndoAlt } from "@fortawesome/free-solid-svg-icons";

import { LOGIN } from "../../mutations/login.mutation";
import { useMutation } from "@apollo/client";

const LoginForm = () => {
  const [authenticateUserWithPassword, { data, loading, error }] = useMutation(LOGIN);

  const schema = yup.object({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    password: yup.string().required("Password is required")
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const login = (data) => {
    authenticateUserWithPassword({ variables: { email: data.email, password: data.password } });
    reset();
  };

  const resetFormFields = () => reset();

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  if (data) {
    console.log(data.authenticateUserWithPassword.__typename);
    return <div>User authenticated successfully!!</div>;
  }

  if (error) {
    console.log(error);
    return <div>There was an error authenticating this user</div>;
  }

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
        <form onSubmit={handleSubmit(login)} className="form-input-container">
          <div className="input-container">
            <input placeholder="email" className="input" {...register("email")}></input>
            {errors.email?.message}
          </div>
          <div className="input-container">
            <input placeholder="password" type="password" className="input" {...register("password")}></input>
            {errors.password?.message}
          </div>
          <div className="login-button-container">
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

export default LoginForm;
