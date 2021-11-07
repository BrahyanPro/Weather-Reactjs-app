import React from "react";

import "./UnitSwitch.css";

export const UnitSwitch = ({ onClick, unitSystem }) => {
  return (
    <div className="wrapper_switch">
      <p
        className={`${"switch"} ${
          unitSystem === "metric" ? "active" : "inactive"
        }`}
        onClick={onClick}
      >
        Metric System
      </p>
      <p
        className={`${"switch"} ${
          unitSystem === "metric" ? "inactive" : "active"
        }`}
        onClick={onClick}
      >
        Imperial System
      </p>
    </div>
  );
};
