import React from "react";
import "./ErrorScreen.css";

export const ErrorScreen = ({ errorMessage, children }) => {
  return (
    <div className="wrapper_error">
      <h1 className="message">{errorMessage}</h1>
      {children}
    </div>
  );
};
