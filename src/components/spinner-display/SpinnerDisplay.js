import React from "react";
import "./SpinnerDisplay.css";

const SpinnerDisplay = () => {
  return (
    <div className="main-spinner-view-container">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SpinnerDisplay;
