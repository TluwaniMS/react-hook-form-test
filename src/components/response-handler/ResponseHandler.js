import React from "react";
import ErrorDisplay from "../error-display/ErrorDisplay";
import SuccessDisplay from "../success-display/SuccessDisplay";
import { AuthenticationCheck } from "../../display-support/authenticaion-support";
import { Operations } from "../../display-support/operations-support";

const ResponseHandler = ({ operation, data }) => {
  let AuthenticationSuccessful;

  if (operation === Operations.Login) {
    data === AuthenticationCheck.AuthenticationSuccessful
      ? (AuthenticationSuccessful = true)
      : (AuthenticationSuccessful = false);

    return (
      <div>
        {AuthenticationSuccessful && <SuccessDisplay />}
        {!AuthenticationSuccessful && <ErrorDisplay />}
      </div>
    );
  }
};

export default ResponseHandler;
