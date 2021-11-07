import React from "react";
import { getWeekDay, getTime, getAMPM } from "../services/helpers";
import "./DateAndTime.css";

export const DateAndTime = ({ weatherData, unitSystem }) => {
  return (
    <div className="wrapper_date">
      <h2>
        {`${getWeekDay(weatherData)}, ${getTime(
          unitSystem,
          weatherData.dt,
          weatherData.timezone
        )} ${getAMPM(unitSystem, weatherData.dt, weatherData.timezone)}`}
      </h2>
    </div>
  );
};
