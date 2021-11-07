import React from "react";

import "./MetricsCard.css";

export const MetricsCard = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className="wrapper_Mcard">
      <p>{title}</p>
      <div className="content">
        <img width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
        <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};
