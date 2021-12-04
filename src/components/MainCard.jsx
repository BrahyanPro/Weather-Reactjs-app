import React from 'react';
import { ctoF } from '../services/converters';
import './MainCard.css';

export const MainCard = ({
  city,
  country,
  description,
  iconName,
  unitSystem,
  weatherData,
}) => {
  return (
    <div className="wrapper_main">
      <h1 className="location">
        {city}, {country}
        <span className="mini-credit">Creado por Brahyan Pro</span>
      </h1>
      <p className="description">{description}</p>
      <img
        width="150px"
        height="150px"
        src={`./icons/${iconName}.svg`}
        alt="weatherIcon"
      />
      <h1 className="temperature">
        {unitSystem === 'metric'
          ? Math.round(weatherData.main.temp)
          : Math.round(ctoF(weatherData.main.temp))}
        °{unitSystem === 'metric' ? 'C' : 'F'}
      </h1>
      <p>
        Feels like{' '}
        {unitSystem === 'metric'
          ? Math.round(weatherData.main.feels_like)
          : Math.round(ctoF(weatherData.main.feels_like))}
        °{unitSystem === 'metric' ? 'C' : 'F'}
      </p>
    </div>
  );
};
