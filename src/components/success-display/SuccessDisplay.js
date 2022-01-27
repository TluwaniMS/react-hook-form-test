import React from "react";
import { Operations } from "../../display-support/operations-support";

const SuccessDisplay = ({ operation, data }) => {
  return (
    <div>
      {operation === Operations.Login && <div>User has been authenticated successfully!!!</div>}
      {operation === Operations.DoctorCreation && (
        <div>{`${data.name} ${data.surname}`} has been added to the doctors directory successfully!!</div>
      )}
    </div>
  );
};

export default SuccessDisplay;
