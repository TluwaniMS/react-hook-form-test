import React from "react";
import { Operations } from "../../display-support/operations-support";

const ErrorDisplay = ({ operation }) => {
  return (
    <div>
      {operation === Operations.Login && (
        <div>User authentication failed, please ensure you've entered the correct information!!!</div>
      )}
      {operation === Operations.DoctorCreation && <div>The doctor could not be created!!!</div>}
    </div>
  );
};

export default ErrorDisplay;
