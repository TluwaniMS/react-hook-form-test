import React from "react";
import { Operations } from "../../display-support/operations-support";

const SuccessDisplay = ({ operation }) => {
  return (
    <div>
      {operation === Operations.Login && <div>User has been authenticated successfully!!!</div>}
      {operation === Operations.DoctorCreation && <div>The doctor has been created successfully!!!</div>}
    </div>
  );
};

export default SuccessDisplay;
