import React from "react";
import { Operations } from "../../display-support/operations-support";
import { AuthenticationCheck } from "../../display-support/authenticaion-support";
import ErrorDisplay from "../error-display/ErrorDisplay";
import SuccessDisplay from "../success-display/SuccessDisplay";

const ResponseHandler = ({ operation, data }) => {
  let AuthenticationSuccessful;

  if (operation === Operations.Login) {
    data === AuthenticationCheck.AuthenticationSuccessful
      ? (AuthenticationSuccessful = true)
      : (AuthenticationSuccessful = false);

    return (
      <div>
        {AuthenticationSuccessful && <SuccessDisplay operation={operation} />}
        {!AuthenticationSuccessful && <ErrorDisplay operation={operation} />}
      </div>
    );
  } else {
    return <SuccessDisplay operation={operation} data={data} />;
  }
};

export default ResponseHandler;
