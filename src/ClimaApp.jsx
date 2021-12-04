import React, { useState, useEffect } from 'react';

import { MainCard } from './components/MainCard';
import { ContentBox } from './components/ContentBox';
import { Header } from './components/Header';
import { DateAndTime } from './components/DateAndTime';
import { Search } from './components/Search';
import { MetricsBox } from './components/MetricsBox';
import { UnitSwitch } from './components/UnitSwitch';
import { LoadingScreen } from './components/LoadingScreen';
import { ErrorScreen } from './components/ErrorScreen';

import './styles/Home.css';
import axios from 'axios';

const ClimaApp = () => {
  const [cityInput, setCityInput] = useState('New York');
  const [triggerFetch, setTriggerFetch] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [unitSystem, setUnitSystem] = useState('metric');
  const [ciudad, setciudad] = useState(cityInput);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      const { data } = res;
      setWeatherData({ ...data });
      setCityInput('');
    };
    getData();
  }, [triggerFetch, url]);

  const changeSystem = () =>
    unitSystem === 'metric'
      ? setUnitSystem('imperial')
      : setUnitSystem('metric');

  return weatherData && !weatherData.message ? (
    <div className="wrapper_home">
      <MainCard
        city={weatherData.name}
        country={weatherData.sys.country}
        description={weatherData.weather[0].description}
        iconName={weatherData.weather[0].icon}
        unitSystem={unitSystem}
        weatherData={weatherData}
      />
      <ContentBox>
        <Header>
          <DateAndTime weatherData={weatherData} unitSystem={unitSystem} />
          <Search
            placeHolder="Busca una ciudad..."
            value={cityInput}
            onFocus={(e) => {
              e.target.value = '';
              e.target.placeholder = '';
            }}
            onChange={(e) => setCityInput(e.target.value)}
            onKeyDown={(e) => {
              e.keyCode === 13 && setTriggerFetch(!triggerFetch);
              e.keyCode === 13 && setciudad(cityInput);
              e.target.placeholder = 'Busca una ciudad...';
            }}
          />
        </Header>
        <MetricsBox weatherData={weatherData} unitSystem={unitSystem} />
        <UnitSwitch onClick={changeSystem} unitSystem={unitSystem} />
      </ContentBox>
      <p>Brahyan Pro&copy;</p>
    </div>
  ) : weatherData && weatherData.message ? (
    <ErrorScreen errorMessage="Ciudad no Encontrada...!">
      <Search
        onFocus={(e) => (e.target.value = '')}
        onChange={(e) => setCityInput(e.target.value)}
        onKeyDown={(e) => e.keyCode === 13 && setTriggerFetch(!triggerFetch)}
      />
    </ErrorScreen>
  ) : (
    <LoadingScreen loadingMessage="Loading data..." />
  );
};

export default ClimaApp;
