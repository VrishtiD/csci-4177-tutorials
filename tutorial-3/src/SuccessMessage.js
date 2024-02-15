import React from "react";
import './styles.css';          

const SuccessMessage = ({ firstName, lastName }) => {
  return (
    <div className="success-message">
      <h3>
        {" "}
        Your registration was successful! {firstName} {lastName}{" "}
      </h3>
      
    </div>
  );
};

export default SuccessMessage;